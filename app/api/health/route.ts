import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const requiredRuntimeConfig = [
  "DATABASE_URL",
  "JWT_SECRET",
  "RATE_LIMIT_PEPPER",
  "APP_BASE_URL",
] as const;

export async function GET() {
  const missing = requiredRuntimeConfig.filter((key) => !process.env[key]);

  if (missing.length) {
    return NextResponse.json(
      { ok: false, database: "unknown", missingConfig: missing },
      { status: 503 },
    );
  }

  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({
      ok: true,
      database: "ready",
      release: process.env.RELEASE_VERSION || "unknown",
    });
  } catch {
    return NextResponse.json(
      { ok: false, database: "unavailable", missingConfig: [] },
      { status: 503 },
    );
  }
}
