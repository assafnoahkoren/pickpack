import prisma from '@db/prisma-client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GeographyService {
  constructor() {}

  async getCities() {
    const cities = await prisma.city.findMany();

    return {
      cities: cities,
    };
  }
} 