import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';
import { ApiBody } from '@nestjs/swagger';


export class SignInDto {
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}

export class VerifyPhoneNumberDto {
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}


@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @ApiBody({ 
    type: SignInDto,
    description: 'Sign in to the application',
    examples: {
      'Sign in': {
      value: {
          phoneNumber: '+972541234567',
          code: '1256',
        },
      }
    }
  })
  @Post('sign-in')
  signIn(@Body() body: SignInDto) {
    return this.authService.signIn(body.phoneNumber, body.code);
  }

  @ApiBody({ 
    type: VerifyPhoneNumberDto,
    description: 'Verify phone number',
    examples: {
      'Verify phone number': {
        value: {
          phoneNumber: '+972541234567',
        },
      }
    }
  })
  @Post('verify-phone-number')
  verifyPhoneNumber(@Body() body: VerifyPhoneNumberDto) {
    return this.authService.verifyPhoneNumber(body.phoneNumber);
  }

} 