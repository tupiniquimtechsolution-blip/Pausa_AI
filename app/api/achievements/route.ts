import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { evaluateAchievements } from "@/lib/achievements";

export async function GET() {
  const user = await requireUser();
  const newlyUnlocked = await evaluateAchievements(user.id);
  const achievements = await prisma.achievement.findMany({
    orderBy: { targetValue: "asc" },
    include: {
      userAchievements: {
        where: { userId: user.id },
        take: 1
      }
    }
  });

  return NextResponse.json({
    achievements: achievements.map((achievement) => ({
      id: achievement.id,
      slug: achievement.slug,
      title: achievement.title,
      description: achievement.description,
      icon: achievement.icon,
      unlocked: achievement.userAchievements.length > 0,
      unlockedAt: achievement.userAchievements[0]?.unlockedAt || null
    })),
    newlyUnlocked
  });
}
