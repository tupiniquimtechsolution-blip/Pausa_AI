import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { walkingGoalSchema } from "@/lib/validators";

export async function GET() {
  const user = await requireUser();
  const goals = await prisma.walkingGoal.findMany({
    where: { userId: user.id },
    orderBy: [{ active: "desc" }, { period: "asc" }]
  });
  return NextResponse.json({ goals });
}

export async function PATCH(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = walkingGoalSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Meta invalida." }, { status: 400 });

  const goal = await prisma.walkingGoal.upsert({
    where: { userId_period: { userId: user.id, period: parsed.data.period } },
    update: {
      targetDistanceMeters: parsed.data.targetDistanceMeters,
      targetDurationSeconds: parsed.data.targetDurationSeconds,
      targetSessions: parsed.data.targetSessions,
      active: parsed.data.active
    },
    create: {
      userId: user.id,
      period: parsed.data.period,
      targetDistanceMeters: parsed.data.targetDistanceMeters,
      targetDurationSeconds: parsed.data.targetDurationSeconds,
      targetSessions: parsed.data.targetSessions,
      active: parsed.data.active
    }
  });

  return NextResponse.json({ ok: true, goal, message: "Meta salva. Vamos evoluir no seu ritmo." });
}
