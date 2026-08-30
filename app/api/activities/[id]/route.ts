import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { transitionPausaActivity } from "@/lib/activity/service";

const transitionSchema = z.object({
  action: z.enum(["PAUSE", "RESUME", "FINISH", "CANCEL"]),
  occurredAt: z.coerce.date().optional(),
  perceivedEffortAfter: z.number().int().min(1).max(5).optional(),
  responseAfter: z.number().int().min(1).max(5).optional(),
  notes: z.string().max(1000).optional()
});

export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await context.params;
  const activity = await prisma.pausaActivity.findFirst({
    where: { id, userId: user.id },
    include: { points: { orderBy: { sequence: "asc" } }, metrics: true, route: true }
  });
  if (!activity) return NextResponse.json({ ok: false, error: "Atividade não encontrada." }, { status: 404 });
  const trim = activity.hideRouteEdges && activity.points.length >= 10 ? Math.max(1, Math.floor(activity.points.length * 0.08)) : 0;
  const points = trim
    ? activity.points.slice(trim, -trim)
    : activity.points;
  return NextResponse.json({ ok: true, activity: { ...activity, points } });
}

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await context.params;
  const parsed = transitionSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Transição inválida." }, { status: 400 });
  try {
    const activity = await transitionPausaActivity(user.id, id, parsed.data.action, parsed.data);
    return NextResponse.json({ ok: true, activity });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Falha ao atualizar atividade.";
    return NextResponse.json({ ok: false, error: message }, { status: message === "ACTIVITY_NOT_FOUND" ? 404 : 409 });
  }
}
