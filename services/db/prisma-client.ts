import { PrismaClient } from '@prisma/client'
export * as DB from '@prisma/client'

const prisma = new PrismaClient()

export default prisma
