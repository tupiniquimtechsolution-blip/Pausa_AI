import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { workoutSessionSchema } from "@/lib/validators";
import { completeActivity } from "@/lib/activity-completions";

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = workoutSessionSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Dados do treino inválidos." }, { status: 400 });

  const routine = await prisma.workoutRoutine.findUnique({ where: { id: parsed.data.routineId } });
  if (!routine) return NextResponse.json({ error: "Rotina não encontrada." }, { status: 404 });
  if (routine.minLevel > user.level) return NextResponse.json({ error: "Rotina bloqueada para seu nível atual." }, { status: 403 });

  const xpAwarded = routine.xpReward;
  const result = await completeActivity({
    userId: user.id,
    activityType: "WORKOUT",
    source: "/api/workouts/session",
    targetId: routine.id,
    completionToken: parsed.data.completionToken,
    domainRecordType: "WorkoutSession",
    xpAwarded,
    createDomain: (tx) => tx.workoutSession.create({
      data: {
        userId: user.id,
        routineId: routine.id,
        roundsCompleted: parsed.data.roundsCompleted,
        durationSeconds: parsed.data.durationSeconds,
        paceUsed: parsed.data.paceUsed,
        xpAwarded
      }
    })
  });

  return NextResponse.json({
    ok: true,
    alreadyCompleted: result.alreadyCompleted,
    sessionId: result.sessionId,
    xpAwarded: result.xpAwarded,
    originalXpAwarded: result.originalXpAwarded,
    leveledUp: result.leveledUp,
    level: result.level
  });
}
