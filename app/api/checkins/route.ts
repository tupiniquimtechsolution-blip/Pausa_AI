import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { checkinSchema } from "@/lib/validators";
import { detectRiskText } from "@/lib/risk";
import { generateWellnessAdvice } from "@/lib/advice";
import { XP_REWARDS } from "@/lib/levels";
import { computeStreak } from "@/lib/metrics";
import { detectObservationTags, refineCheckin } from "@/lib/checkin-refinement";
import { evaluateAchievements } from "@/lib/achievements";
import { detectPhysicalAlertTerms } from "@/lib/physical-alerts";
import { completeActivity } from "@/lib/activity-completions";
import { createRecommendationForCheckin } from "@/lib/recommendations/service";

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = checkinSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os campos obrigatorios." }, { status: 400 });

  const [profile, recentCheckins, recentInstructionSessions] = await Promise.all([
    prisma.profile.findUnique({ where: { userId: user.id } }),
    prisma.checkin.findMany({
      where: { userId: user.id, riskDetected: false },
      orderBy: { createdAt: "desc" },
      take: 3,
      select: {
        primaryArea: true,
        focusScore: true,
        moodScore: true,
        stressScore: true,
        energyScore: true,
        sleepScore: true
      }
    }),
    prisma.exerciseInstructionSession.findMany({
      where: { userId: user.id, completedAt: { not: null } },
      orderBy: { completedAt: "desc" },
      take: 10,
      select: { instruction: { select: { slug: true } } }
    })
  ]);
  const riskDetected = detectRiskText(parsed.data.journalText);
  const physicalAlertDetected = detectPhysicalAlertTerms(parsed.data.journalText, parsed.data.manualTags).length > 0;
  const advice = await generateWellnessAdvice({ ...parsed.data, recentCheckins, riskDetected, profile });
  const refined = riskDetected || physicalAlertDetected ? null : refineCheckin({
    ...parsed.data,
    recentCheckins,
    recentInstructionSlugs: recentInstructionSessions.map((session) => session.instruction.slug),
    userLevel: user.level
  });
  const detectedTags = refined?.detectedTags || detectObservationTags(parsed.data.journalText);
  const { manualTags, completionToken, ...checkinData } = parsed.data;

  const result = await completeActivity({
    userId: user.id,
    activityType: "CHECKIN",
    source: "/api/checkins",
    targetId: "daily-checkin",
    completionToken,
    domainRecordType: "Checkin",
    xpAwarded: async (tx) => {
      if (riskDetected) return 0;
      const checkins = await tx.checkin.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } });
      const streak = computeStreak(checkins);
      return XP_REWARDS.CHECKIN + (streak === 3 ? XP_REWARDS.STREAK_3 : streak === 7 ? XP_REWARDS.STREAK_7 : 0);
    },
    createDomain: (tx) => tx.checkin.create({
      data: {
        userId: user.id,
        ...checkinData,
        riskDetected,
        aiSummary: advice.summary,
        aiRecommendation: advice.recommendation,
        dailyMissionTitle: refined?.missionTitle || advice.mission.title,
        dailyMissionDescription: refined?.missionDescription || advice.mission.description,
        dailyMissionSteps: JSON.stringify(refined?.missionSteps || advice.mission.steps),
        encouragement: advice.encouragement,
        primaryArea: refined?.primaryArea,
        secondaryArea: refined?.secondaryArea,
        manualTags: JSON.stringify(refined?.manualTags || manualTags || []),
        detectedTags: JSON.stringify(detectedTags),
        recommendationReason: refined?.recommendationReason,
        recommendedInstructionSlug: refined?.recommendedInstructionSlug
      }
    })
  });

  const checkin = result.domain || (result.sessionId ? await prisma.checkin.findUnique({ where: { id: result.sessionId } }) : null);
  if (!checkin) throw new Error("Check-in nao encontrado depois da conclusao.");
  const decision = await createRecommendationForCheckin(user.id, checkin.id);
  const newlyUnlocked = !result.alreadyCompleted && result.xpAwarded > 0 ? await evaluateAchievements(user.id) : [];

  return NextResponse.json({
    ok: true,
    alreadyCompleted: result.alreadyCompleted,
    sessionId: result.sessionId,
    xpAwarded: result.xpAwarded,
    originalXpAwarded: result.originalXpAwarded,
    level: result.level,
    redirectTo: `/app/checkin/resultado/${checkin.id}`,
    recommendationDecisionId: decision.id,
    recommendationEngineVersion: decision.engineVersion,
    newlyUnlocked
  });
}
