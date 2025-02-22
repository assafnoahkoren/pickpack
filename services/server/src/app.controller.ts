import { Controller, Get } from '@nestjs/common';
import { time } from '@shared/time';

@Controller({
  path: 'api/v1/app',
})
export class AppController {
  constructor() {}

  @Get()
  async healthCheck() {
    return {
      version: '1.0.0',
      status: 'ok',
      timestamp: time.now(),
    };
  }
}
