import { prisma } from "@/lib/prisma";
import { computeStreak } from "@/lib/metrics";
import { activeDayStreak } from "@/lib/walking";

const exerciseTypeTargets = ["BREATHING", "WRITING", "RELAXATION", "ORGANIZATION", "YOGA", "MOBILITY", "STRETCHING", "WALKING", "HOME_FUNCTIONAL"];

export async function evaluateAchievements(userId: string) {
  const [user, achievements, checkins, missionCount, yogaCount, completedInstructions, walkingSessions] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId } }),
    prisma.achievement.findMany(),
    prisma.checkin.findMany({ where: { userId }, orderBy: { createdAt: "desc" } }),
    prisma.missionCompletion.count({ where: { userId } }),
    prisma.yogaPracticeSession.count({ where: { userId, completedAt: { not: null } } }),
    prisma.exerciseInstructionSession.findMany({
      where: { userId, completedAt: { not: null } },
      include: { instruction: true }
    }),
    prisma.walkingSession.findMany({ where: { userId, completed: true }, orderBy: { startedAt: "desc" } })
  ]);

  if (!user || achievements.length === 0) return [];

  const completedTypes = new Set(completedInstructions.map((session) => session.instruction.category));
  const last7Walking = walkingSessions.filter((session) => session.startedAt >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
  const last30Walking = walkingSessions.filter((session) => session.startedAt >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
  const walkingMinutes = walkingSessions.reduce((sum, session) => sum + session.durationSeconds, 0) / 60;
  const walkingKm = walkingSessions.reduce((sum, session) => sum + session.distanceMeters, 0) / 1000;
  const walkingMonthKm = last30Walking.reduce((sum, session) => sum + session.distanceMeters, 0) / 1000;
  const facts: Record<string, boolean> = {
    FIRST_CHECKIN: checkins.length >= 1,
    STREAK_DAYS_7: computeStreak(checkins) >= 7,
    STREAK_DAYS_30: computeStreak(checkins) >= 30,
    MISSION_COUNT_10: missionCount >= 10,
    YOGA_COUNT_5: yogaCount >= 5,
    LEVEL_REACHED_5: user.level >= 5,
    LEVEL_REACHED_10: user.level >= 10,
    ALL_EXERCISE_TYPES: exerciseTypeTargets.every((type) => completedTypes.has(type)),
    WALKING_COUNT: walkingSessions.length >= 1,
    WALKING_WEEK_COUNT: last7Walking.length >= 3,
    WALKING_STREAK_DAYS: activeDayStreak(walkingSessions) >= 7,
    WALKING_MINUTES: walkingMinutes >= 30,
    WALKING_DISTANCE_KM: walkingKm >= 1,
    WALKING_MONTH_DISTANCE_KM: walkingMonthKm >= 5,
    WALKING_MODE_STRESS_RELIEF: walkingSessions.some((session) => session.walkingMode === "stress_relief"),
    WALKING_COMEBACK: hasWalkingComeback(walkingSessions),
    WALKING_MOOD_IMPROVED: walkingSessions.some((session) => session.moodBefore && session.moodAfter && session.moodAfter > session.moodBefore),
    WALKING_MODE_CHAIR: walkingSessions.some((session) => session.walkingMode === "chair")
  };

  const newlyUnlocked = [];
  for (const achievement of achievements) {
    const key = achievement.triggerType === "STREAK_DAYS" || achievement.triggerType === "MISSION_COUNT" || achievement.triggerType === "YOGA_COUNT" || achievement.triggerType === "LEVEL_REACHED"
      ? `${achievement.triggerType}_${achievement.targetValue}`
      : achievement.triggerType;
    if (!facts[key]) continue;

    const existing = await prisma.userAchievement.findUnique({
      where: { userId_achievementId: { userId, achievementId: achievement.id } },
      include: { achievement: true }
    });
    if (existing) continue;

    const created = await prisma.userAchievement.create({
      data: { userId, achievementId: achievement.id },
      include: { achievement: true }
    });
    newlyUnlocked.push(created);
  }

  return newlyUnlocked;
}

function hasWalkingComeback(sessions: Array<{ startedAt: Date }>) {
  const ordered = [...sessions].sort((a, b) => a.startedAt.getTime() - b.startedAt.getTime());
  return ordered.some((session, index) => index > 0 && session.startedAt.getTime() - ordered[index - 1].startedAt.getTime() > 7 * 24 * 60 * 60 * 1000);
}
