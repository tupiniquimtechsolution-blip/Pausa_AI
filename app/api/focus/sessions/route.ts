import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  completionToken: z.string().uuid(),
  durationMinutes: z.coerce.number().int().min(1).max(120),
  completedSeconds: z.coerce.number().int().min(0).max(60 * 60 * 3),
  suggestedExerciseSlug: z.string().max(120).optional().nullable(),
  source: z.string().max(40).optional().default("ROUTINE"),
  action: z.enum(["START", "PAUSE", "RESUME", "RESTART", "CANCEL", "COMPLETE"])
});

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Sessao de foco invalida." }, { status: 400 });

  const existingToken = await prisma.focusSession.findUnique({
    where: { completionToken: parsed.data.completionToken },
    select: { userId: true }
  });
  if (existingToken && existingToken.userId !== user.id) {
    return NextResponse.json({ error: "Sessão inválida." }, { status: 403 });
  }

  if (parsed.data.action === "START") {
    const active = await prisma.focusSession.findFirst({
      where: {
        userId: user.id,
        completionToken: { not: parsed.data.completionToken },
        status: { in: ["RUNNING", "PAUSED"] }
      },
      orderBy: { updatedAt: "desc" }
    });
    if (active) {
      return NextResponse.json({
        error: "Já existe uma sessão de foco ativa. Retome ou cancele a sessão anterior.",
        code: "ACTIVE_FOCUS_SESSION",
        activeSessionId: active.id
      }, { status: 409 });
    }
  }

  const now = new Date();
  const status = parsed.data.action === "COMPLETE"
    ? "COMPLETED"
    : parsed.data.action === "CANCEL"
      ? "CANCELLED"
      : parsed.data.action === "PAUSE"
        ? "PAUSED"
        : "RUNNING";

  const session = await prisma.focusSession.upsert({
    where: { completionToken: parsed.data.completionToken },
    update: {
      durationMinutes: parsed.data.durationMinutes,
      completedSeconds: parsed.data.completedSeconds,
      suggestedExerciseSlug: parsed.data.suggestedExerciseSlug || null,
      source: parsed.data.source,
      status,
      pausedAt: status === "PAUSED" ? now : null,
      cancelledAt: status === "CANCELLED" ? now : null,
      completedAt: status === "COMPLETED" ? now : null
    },
    create: {
      userId: user.id,
      completionToken: parsed.data.completionToken,
      durationMinutes: parsed.data.durationMinutes,
      completedSeconds: parsed.data.completedSeconds,
      suggestedExerciseSlug: parsed.data.suggestedExerciseSlug || null,
      source: parsed.data.source,
      status,
      pausedAt: status === "PAUSED" ? now : null,
      cancelledAt: status === "CANCELLED" ? now : null,
      completedAt: status === "COMPLETED" ? now : null
    }
  });
  return NextResponse.json({ ok: true, session });
}
