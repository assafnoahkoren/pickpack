import { Controller, Get } from '@nestjs/common';
import prisma from '@db/prisma-client';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  async getHello() {
    const cities = await prisma.city.findMany();
    return cities.map((city) => city.name).join(', ');
  }
}
