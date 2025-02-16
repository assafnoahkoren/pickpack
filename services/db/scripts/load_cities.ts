import { parse } from 'csv-parse/sync';
import { readFileSync } from 'fs';
import { join } from 'path';
import prisma from '../prisma-client';

async function loadCities() {
  const csvPath = join(__dirname, 'cities.csv');
  const csvContent = readFileSync(csvPath, 'utf-8');
  
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true
  });

  console.log(`Loading ${records.length} cities...`);

  for (const [index, record] of records.entries()) {
    await prisma.$executeRaw`
      INSERT INTO "City" (id, name, country, coords, created_at, updated_at)
      VALUES (
        ${index + 1},
        ${record.City},
        'israel',
        ST_SetSRID(ST_MakePoint(${parseFloat(record.Longitude)}, ${parseFloat(record.Latitude)}), 4326),
        NOW(),
        NOW()
      )
    `;
  }

  console.log('Cities loaded successfully!');
}

async function checkCitiesExist() {
  const count = await prisma.city.count();
  return count > 0;
}

async function main() {
  const citiesExist = await checkCitiesExist();
  if (citiesExist) {
    console.log('Cities already loaded, skipping...');
    process.exit(0);
  }

  await loadCities();
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
