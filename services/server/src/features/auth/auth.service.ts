import { Injectable, UnauthorizedException } from '@nestjs/common';
import prisma from '@db/prisma-client';
import parsePhoneNumber from 'libphonenumber-js'
import { SmsService } from 'src/services/sms.service';
import { JwtService } from '@nestjs/jwt';
import { logger } from '@shared/logger';
import { time } from '@shared/time';


@Injectable()
export class AuthService {
  constructor(
    private readonly smsService: SmsService,
    private readonly jwtService: JwtService
  ) { }

  async verifyPhoneNumber(phoneNumber: string) {
    const parsedPhoneNumber = this.parsePhoneNumber(phoneNumber);

    this.smsService.sendVerificationCode(parsedPhoneNumber.number);
  }

  async signIn(phoneNumber: string, code: string) {
    const parsedPhoneNumber = this.parsePhoneNumber(phoneNumber);
    const isValid = await this.smsService.isVerificationCodeValid(phoneNumber, code);
    if (!isValid) {
      throw new UnauthorizedException('Invalid verification code');
    }

    const { user, isNewUser } = await this.findOrCreate(parsedPhoneNumber.number);
    logger.log(`User ${user.phone_number} signed in (${isNewUser ? 'new' : 'existing'})`);
    return {
      isNewUser: isNewUser,
      accessToken: await this.jwtService.signAsync({
        sub: user.id,
        phoneNumber: user.phone_number,
        createdAt: time.now(),
      })
    }

  }

  private parsePhoneNumber(phoneNumber: string) {
    const parsedPhoneNumber = parsePhoneNumber(phoneNumber, 'IL');

    if (!parsedPhoneNumber || !parsedPhoneNumber.isValid()) {
      throw new UnauthorizedException('Invalid phone number');
    }

    return parsedPhoneNumber;
  }

  private async findOrCreate(phoneNumber: string) {
    let isNewUser = false;
    let user = await prisma.user.findUnique({
      where: { phone_number: phoneNumber },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { phone_number: phoneNumber },
      });
      isNewUser = true;
    }

    return { user, isNewUser };
  }
}
