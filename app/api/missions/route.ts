import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { getLevelForXp, XP_REWARDS } from "@/lib/levels";
import { evaluateAchievements } from "@/lib/achievements";
import { completeActivity } from "@/lib/activity-completions";
import { completionTokenSchema } from "@/lib/validators";
import { z } from "zod";

const completionSchema = z.object({
  missionId: z.string().min(1).optional(),
  checkinId: z.string().min(1).optional(),
  completionToken: completionTokenSchema
});

export async function GET() {
  await requireUser();
  const missions = await prisma.exerciseInstruction.findMany({
    where: { categoryGroup: "MENTAL" },
    orderBy: [{ unlockLevel: "asc" }, { category: "asc" }, { title: "asc" }]
  });
  return NextResponse.json({ missions });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => ({}));
  const parsed = completionSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Conclusao de missao invalida." }, { status: 400 });
  const { missionId, checkinId, completionToken } = parsed.data;
  if (missionId) {
    const mission = await prisma.mission.findUnique({ where: { id: missionId } });
    if (!mission) return NextResponse.json({ error: "Missao nao encontrada." }, { status: 404 });
  }
  if (checkinId) {
    const checkin = await prisma.checkin.findFirst({ where: { id: checkinId, userId: user.id } });
    if (!checkin) return NextResponse.json({ error: "Check-in nao encontrado para esta conta." }, { status: 404 });
  }
  const result = await completeActivity({
    userId: user.id,
    activityType: "MISSION",
    source: "/api/missions",
    targetId: missionId || "daily-mission",
    checkinId,
    completionToken,
    domainRecordType: "MissionCompletion",
    xpAwarded: XP_REWARDS.MISSION_COMPLETED,
    createDomain: async (tx) => {
      const currentUser = await tx.user.findUniqueOrThrow({ where: { id: user.id } });
      return tx.missionCompletion.create({
        data: {
          userId: user.id,
          missionId,
          checkinId,
          xpAwarded: XP_REWARDS.MISSION_COMPLETED,
          levelAfter: getLevelForXp(currentUser.xp + XP_REWARDS.MISSION_COMPLETED)
        }
      });
    }
  });
  const newlyUnlocked = !result.alreadyCompleted && result.xpAwarded > 0 ? await evaluateAchievements(user.id) : [];
  return NextResponse.json({
    ok: true,
    alreadyCompleted: result.alreadyCompleted,
    sessionId: result.sessionId,
    xpAwarded: result.xpAwarded,
    originalXpAwarded: result.originalXpAwarded,
    leveledUp: result.leveledUp,
    level: result.level,
    newlyUnlocked
  });
}
