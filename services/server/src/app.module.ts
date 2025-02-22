import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './features/auth/auth.module';
import { SmsService } from './services/sms.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [SmsService],
})
export class AppModule {}
