import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateWeeklyPlan, isoWeekKey } from "@/lib/weekly-plan";

export async function POST() {
  const user = await requireUser();
  const [profile, recentCheckins, completed, available] = await Promise.all([
    prisma.profile.findUnique({ where: { userId: user.id } }),
    prisma.checkin.findMany({
      where: { userId: user.id, riskDetected: false },
      orderBy: { createdAt: "desc" },
      take: 7,
      select: {
        createdAt: true,
        focusScore: true,
        moodScore: true,
        stressScore: true,
        energyScore: true,
        sleepScore: true,
        primaryArea: true
      }
    }),
    prisma.exerciseInstructionSession.findMany({
      where: { userId: user.id, completedAt: { not: null } },
      include: { instruction: true },
      take: 20,
      orderBy: { completedAt: "desc" }
    }),
    prisma.exerciseInstruction.findMany({
      where: { categoryGroup: "MENTAL", unlockLevel: { lte: user.level } },
      orderBy: [{ unlockLevel: "asc" }, { title: "asc" }],
      take: 30
    })
  ]);

  const generated = await generateWeeklyPlan({
    preferredTime: profile?.preferredTime,
    recentCheckins,
    completedTitles: completed.map((item) => item.instruction.title),
    availableSlugs: available.map((item) => item.slug)
  });
  const weekIso = isoWeekKey();
  const plan = await prisma.weeklyPlan.upsert({
    where: { userId_weekIso: { userId: user.id, weekIso } },
    update: { itemsJson: JSON.stringify(generated.items), source: generated.source },
    create: { userId: user.id, weekIso, itemsJson: JSON.stringify(generated.items), source: generated.source }
  });

  return NextResponse.json({ ok: true, plan: { ...plan, items: generated.items } });
}
