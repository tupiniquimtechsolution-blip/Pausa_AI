import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  date: z.string().optional(),
  steps: z.coerce.number().int().min(0).max(200000).optional(),
  sleepMinutes: z.coerce.number().int().min(0).max(24 * 60).optional(),
  heartRateAvg: z.coerce.number().int().min(20).max(240).optional(),
  source: z.string().max(40).optional().default("MOBILE")
});

export async function GET() {
  const user = await requireUser();
  const snapshots = await prisma.healthMetricSnapshot.findMany({
    where: { userId: user.id },
    orderBy: { date: "desc" },
    take: 14
  });
  return NextResponse.json({ snapshots });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Dados de saude invalidos." }, { status: 400 });
  const snapshot = await prisma.healthMetricSnapshot.create({
    data: {
      userId: user.id,
      date: parsed.data.date ? new Date(parsed.data.date) : new Date(),
      steps: parsed.data.steps,
      sleepMinutes: parsed.data.sleepMinutes,
      heartRateAvg: parsed.data.heartRateAvg,
      source: parsed.data.source
    }
  });
  return NextResponse.json({ ok: true, snapshot });
}
