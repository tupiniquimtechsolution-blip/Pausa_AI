import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { completeExerciseSession } from "@/lib/astral";
import { exerciseSessionSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = exerciseSessionSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Exercicio invalido." }, { status: 400 });

  const result = await completeExerciseSession({
    userId: user.id,
    exerciseId: parsed.data.exerciseId,
    checkinId: parsed.data.checkinId,
    completionToken: parsed.data.completionToken
  });
  return NextResponse.json({
    ok: true,
    alreadyCompleted: result.alreadyCompleted,
    sessionId: result.sessionId,
    xpAwarded: result.xpAwarded,
    originalXpAwarded: result.originalXpAwarded,
    areaLevel: result.areaLevel,
    completedCount: result.completedCount,
    leveledUp: result.leveledUp,
    level: result.level
  });
}
