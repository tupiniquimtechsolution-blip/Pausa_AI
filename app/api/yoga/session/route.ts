import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { completeActivity } from "@/lib/activity-completions";
import { evaluateAchievements } from "@/lib/achievements";
import { isCatalogEntryActive } from "@/lib/catalog-reconciliation";

const schema = z.object({
  practiceId: z.string().min(1),
  checkinId: z.string().optional().nullable(),
  completed: z.coerce.boolean().optional().default(true),
  completionToken: z.string().uuid()
});

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Pratica invalida." }, { status: 400 });
  const practice = await prisma.yogaPractice.findUnique({ where: { id: parsed.data.practiceId } });
  if (!practice || !isCatalogEntryActive("YOGA_PRACTICE", practice.slug)) {
    return NextResponse.json({ error: "Pratica de yoga nao encontrada." }, { status: 404 });
  }
  if (parsed.data.checkinId) {
    const checkin = await prisma.checkin.findFirst({ where: { id: parsed.data.checkinId, userId: user.id } });
    if (!checkin) return NextResponse.json({ error: "Check-in nao encontrado." }, { status: 404 });
  }
  const xpAwarded = parsed.data.completed ? 12 + practice.level * 2 : 0;
  const result = await completeActivity({
    userId: user.id,
    activityType: "YOGA",
    source: "/api/yoga/session",
    targetId: practice.id,
    checkinId: parsed.data.checkinId,
    completionToken: parsed.data.completionToken,
    domainRecordType: "YogaPracticeSession",
    xpAwarded,
    createDomain: (tx) => tx.yogaPracticeSession.create({
      data: {
        userId: user.id,
        practiceId: practice.id,
        checkinId: parsed.data.checkinId || null,
        completedAt: parsed.data.completed ? new Date() : null,
        xpAwarded
      }
    })
  });
  const session = result.domain || (result.sessionId
    ? await prisma.yogaPracticeSession.findUnique({ where: { id: result.sessionId } })
    : null);
  const newlyUnlocked = !result.alreadyCompleted && result.xpAwarded > 0 ? await evaluateAchievements(user.id) : [];
  return NextResponse.json({
    ok: true,
    alreadyCompleted: result.alreadyCompleted,
    sessionId: result.sessionId,
    session,
    xpAwarded: result.xpAwarded,
    originalXpAwarded: result.originalXpAwarded,
    level: result.level,
    message: result.alreadyCompleted ? "Pratica ja registrada; nenhum XP adicional foi concedido." : "Pratica concluida. Uma pausa feita com cuidado ja conta.",
    newlyUnlocked
  });
}
