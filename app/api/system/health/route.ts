import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const startedAt = performance.now();
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({
      ok: true,
      service: "pausa-ai-web",
      database: "reachable",
      release: process.env.RELEASE_VERSION || "development",
      responseTimeMs: Math.round(performance.now() - startedAt)
    }, {
      headers: { "Cache-Control": "no-store" }
    });
  } catch {
    return NextResponse.json({
      ok: false,
      service: "pausa-ai-web",
      database: "unreachable"
    }, {
      status: 503,
      headers: { "Cache-Control": "no-store" }
    });
  }
}
