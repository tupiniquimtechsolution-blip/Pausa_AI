import { PrismaClient as SqlitePrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient as PostgresPrismaClient } from "@/generated/prisma-pg";

type AppPrismaClient = SqlitePrismaClient;

const globalForPrisma = globalThis as unknown as { prisma?: AppPrismaClient };

function createPrismaClient(): AppPrismaClient {
  const databaseUrl = process.env.DATABASE_URL || "";
  const log = process.env.NODE_ENV === "development"
    ? (["error", "warn"] as const)
    : (["error"] as const);

  if (/^postgres(?:ql)?:\/\//i.test(databaseUrl)) {
    const adapter = new PrismaPg({ connectionString: databaseUrl });
    return new PostgresPrismaClient({
      adapter,
      log: [...log],
    }) as unknown as AppPrismaClient;
  }

  return new SqlitePrismaClient({ log: [...log] });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
