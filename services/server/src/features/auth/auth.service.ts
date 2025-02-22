import { Injectable, UnauthorizedException } from '@nestjs/common';
import prisma from '@db/prisma-client';
import parsePhoneNumber from 'libphonenumber-js'
import { SmsService } from 'src/services/sms.service';


@Injectable()
export class AuthService {
  constructor(private readonly smsService: SmsService) {}

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
  
    const user = await this.findOrCreate(parsedPhoneNumber.number);

  }

  private parsePhoneNumber(phoneNumber: string) {
    const parsedPhoneNumber = parsePhoneNumber(phoneNumber, 'IL');

    if (!parsedPhoneNumber || !parsedPhoneNumber.isValid()) {
      throw new UnauthorizedException('Invalid phone number');
    }

    return parsedPhoneNumber;
  }

  private async findOrCreate(phoneNumber: string) {
    let user = await prisma.user.findUnique({
      where: { phone_number: phoneNumber },
    });

    if (!user) {
      user = await prisma.user.create({
        data: { phone_number: phoneNumber },
      });
    }

    return user;
  }
}
