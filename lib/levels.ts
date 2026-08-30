import { prisma } from "@/lib/prisma";

export const LEVEL_THRESHOLDS = [
  { level: 1, xp: 0 },
  { level: 2, xp: 80 },
  { level: 3, xp: 180 },
  { level: 4, xp: 320 },
  { level: 5, xp: 520 },
  { level: 6, xp: 780 },
  { level: 7, xp: 1100 },
  { level: 8, xp: 1500 },
  { level: 9, xp: 2000 },
  { level: 10, xp: 2600 }
];

export const XP_REWARDS = {
  CHECKIN: 10,
  MISSION_COMPLETED: 20,
  STREAK_3: 15,
  STREAK_7: 40
};

export function getLevelForXp(xp: number) {
  return LEVEL_THRESHOLDS.reduce((current, threshold) => (xp >= threshold.xp ? threshold.level : current), 1);
}

export function getLevelProgress(xp: number) {
  const level = getLevelForXp(xp);
  const current = LEVEL_THRESHOLDS.find((item) => item.level === level) || LEVEL_THRESHOLDS[0];
  const next = LEVEL_THRESHOLDS.find((item) => item.level === level + 1);
  const total = next ? next.xp - current.xp : 1;
  const earned = Math.max(0, xp - current.xp);
  return {
    level,
    currentXp: current.xp,
    nextXp: next?.xp,
    xpToNext: next ? Math.max(0, next.xp - xp) : 0,
    progressPercent: next ? Math.min(100, Math.round((earned / total) * 100)) : 100
  };
}

export function getMissionCategoryForCheckin(input: {
  moodScore: number;
  stressScore: number;
  energyScore: number;
  sleepScore: number;
}) {
  if (input.stressScore >= 4) return "Estresse";
  if (input.sleepScore <= 2) return "Sono";
  if (input.energyScore <= 2) return "Energia";
  if (input.moodScore <= 2) return "Humor";
  return "Rotina";
}

export async function selectDailyMission(input: {
  userLevel: number;
  moodScore: number;
  stressScore: number;
  energyScore: number;
  sleepScore: number;
}) {
  const category = getMissionCategoryForCheckin(input);
  const minLevel = Math.max(1, input.userLevel - 1);
  const levelFilter = { gte: minLevel, lte: input.userLevel };

  const mission =
    (await prisma.mission.findFirst({
      where: { category, unlockLevel: levelFilter },
      orderBy: [{ unlockLevel: "desc" }, { durationMinutes: "asc" }]
    })) ||
    (await prisma.mission.findFirst({
      where: { unlockLevel: levelFilter },
      orderBy: [{ unlockLevel: "desc" }, { durationMinutes: "asc" }]
    })) ||
    (await prisma.mission.findFirst({
      where: { unlockLevel: { lte: input.userLevel } },
      orderBy: [{ unlockLevel: "desc" }, { durationMinutes: "asc" }]
    }));

  return mission;
}
