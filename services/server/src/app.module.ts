import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './features/auth/auth.module';
import { SmsService } from './services/sms.service';
import { GeographyModule } from './features/geography/geography.module';

@Module({
  imports: [AuthModule, GeographyModule],
  controllers: [AppController],
  providers: [SmsService],
})
export class AppModule {}
