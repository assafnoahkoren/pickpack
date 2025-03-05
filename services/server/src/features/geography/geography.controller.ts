import { Controller, Get, Param } from '@nestjs/common';
import { GeographyService } from './geography.service';

@Controller({
  path: 'api/v1/geo',
})
export class GeographyController {
  constructor(private readonly geographyService: GeographyService) {}

  @Get('cities')
  async getCities() {
    return this.geographyService.getCities();
  }

} 