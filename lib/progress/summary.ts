import { subDays } from "date-fns";
import { prisma } from "@/lib/prisma";
import { getLevelProgress } from "@/lib/levels";
import { average, computeStreak } from "@/lib/metrics";

export async function getProgressSummary(userId: string, xp: number) {
  const since = subDays(new Date(), 30);
  const [checkins, instructionSessions, yogaSessions, walkingSessions, achievements, categories] = await Promise.all([
    prisma.checkin.findMany({ where: { userId, createdAt: { gte: since } }, orderBy: { createdAt: "asc" } }),
    prisma.exerciseInstructionSession.findMany({ where: { userId, completedAt: { not: null }, startedAt: { gte: since } }, include: { instruction: true } }),
    prisma.yogaPracticeSession.findMany({ where: { userId, completedAt: { not: null }, startedAt: { gte: since } }, include: { practice: true } }),
    prisma.walkingSession.findMany({ where: { userId, completed: true, startedAt: { gte: since } } }),
    prisma.userAchievement.findMany({ where: { userId }, include: { achievement: true }, orderBy: { unlockedAt: "desc" } }),
    prisma.contentCategory.findMany({ where: { status: "APPROVED" }, select: { slug: true, title: true, pillar: true } })
  ]);
  const minutes = instructionSessions.reduce((sum, item) => sum + (item.instruction.durationSeconds || 0), 0) / 60
    + yogaSessions.reduce((sum, item) => sum + item.practice.durationSeconds, 0) / 60
    + walkingSessions.reduce((sum, item) => sum + item.durationSeconds, 0) / 60;
  return {
    periodDays: 30,
    level: getLevelProgress(xp),
    streak: computeStreak(checkins),
    minutes: Math.round(minutes),
    sessions: instructionSessions.length + yogaSessions.length + walkingSessions.length,
    checkins: checkins.length,
    trends: {
      mood: average(checkins.map((item) => item.moodScore)),
      energy: average(checkins.map((item) => item.energyScore)),
      stress: average(checkins.map((item) => item.stressScore)),
      sleep: average(checkins.map((item) => item.sleepScore))
    },
    achievements: achievements.map((item) => ({ slug: item.achievement.slug, title: item.achievement.title, unlockedAt: item.unlockedAt })),
    unlocks: categories,
    monetizationEnabled: false,
    punitiveMechanics: false
  };
}
