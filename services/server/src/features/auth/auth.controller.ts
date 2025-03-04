import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { AuthedRequest } from './authed-request.type';


class SignInDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The phone number of the user',
    example: '+972541234567',
  })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The code of the user',
    example: '1234',
  })
  code: string;
}

export class VerifyPhoneNumberDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The phone number of the user',
    example: '+972541234567',
  })
  phoneNumber: string;
}


@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  signIn(@Body() body: SignInDto) {
    return this.authService.signIn(body.phoneNumber, body.code);
  }

  @Post('verify-phone-number')
  verifyPhoneNumber(@Body() body: VerifyPhoneNumberDto) {
    return this.authService.verifyPhoneNumber(body.phoneNumber);
  }

  @UseGuards(AuthGuard)
  @Get('is-authenticated')
  isAuthenticated(@Req() req: AuthedRequest) {
    return !!req.user;
  }

} 