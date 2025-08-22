import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as any;

export const prisma: PrismaClient =
  globalForPrisma.prisma ?? new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
