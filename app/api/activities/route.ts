import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { startPausaActivity } from "@/lib/activity/service";

const startSchema = z.object({
  activityType: z.enum(["WALK", "RUN", "FREE_EXERCISE", "PAUSA_SESSION"]),
  clientActivityId: z.string().min(8).max(160).optional(),
  perceivedEffortBefore: z.number().int().min(1).max(5).optional(),
  responseBefore: z.number().int().min(1).max(5).optional(),
  privacy: z.enum(["PRIVATE", "FRIENDS", "PUBLIC"]).default("PRIVATE"),
  hideRouteEdges: z.boolean().default(true),
  startedAt: z.coerce.date().optional(),
  syncStatus: z.enum(["SYNCED", "PENDING"]).optional()
});

export async function GET(request: Request) {
  const user = await requireUser();
  const status = new URL(request.url).searchParams.get("status") || undefined;
  const activities = await prisma.pausaActivity.findMany({
    where: { userId: user.id, ...(status ? { status } : {}) },
    include: { metrics: true, route: true },
    orderBy: { startedAt: "desc" },
    take: 100
  });
  return NextResponse.json({ ok: true, activities, coreWorksWithoutConnector: true });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const parsed = startSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Dados de atividade inválidos." }, { status: 400 });
  const activity = await startPausaActivity(user.id, parsed.data);
  return NextResponse.json({ ok: true, activity }, { status: 201 });
}
