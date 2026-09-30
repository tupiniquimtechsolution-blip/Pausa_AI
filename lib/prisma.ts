import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

type PrismaLogLevel = "query" | "info" | "warn" | "error";
type PrismaConstructor = new (options?: {
  adapter?: unknown;
  log?: PrismaLogLevel[];
}) => PrismaClient;

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const databaseUrl = process.env.DATABASE_URL ?? "";
const postgresRuntime =
  databaseUrl.startsWith("postgresql://") || databaseUrl.startsWith("postgres://");
const log: PrismaLogLevel[] =
  process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"];

function createPrismaClient() {
  const Client = PrismaClient as unknown as PrismaConstructor;

  if (postgresRuntime) {
    const adapter = new PrismaPg({ connectionString: databaseUrl });
    return new Client({ adapter, log });
  }

  return new Client({ log });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
