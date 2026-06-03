import { PrismaClient } from "../src/prisma";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("Missing DATABASE_URL environment variable for Prisma client.");
}

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    adapter: new PrismaMariaDb(databaseUrl),
    log: process.env.NODE_ENV === "development" ? ["query", "warn", "error"] : undefined,
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
