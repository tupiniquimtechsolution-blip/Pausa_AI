import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  mainGoal: z.string().min(1),
  weeklyEnergy: z.string().min(1),
  preferredTime: z.string().min(1)
});

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preferencias invalidas." }, { status: 400 });

  const profile = await prisma.profile.update({
    where: { userId: user.id },
    data: {
      mainGoal: parsed.data.mainGoal,
      difficultyArea: parsed.data.mainGoal,
      stressLevel: parsed.data.weeklyEnergy === "Baixa" ? "Alto" : "Medio",
      preferredTime: parsed.data.preferredTime,
      lastPreferenceUpdate: new Date()
    }
  });

  return NextResponse.json({ ok: true, profile });
}
