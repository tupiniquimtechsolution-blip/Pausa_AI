import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { onboardingSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = onboardingSchema.extend({ name: onboardingSchema.shape.mainGoal.min(2) }).safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os campos obrigatórios." }, { status: 400 });
  const { name, ...profile } = parsed.data;
  await prisma.user.update({ where: { id: user.id }, data: { name } });
  await prisma.profile.upsert({
    where: { userId: user.id },
    update: { ...profile, lastPreferenceUpdate: new Date() },
    create: { userId: user.id, ...profile, lastPreferenceUpdate: new Date() }
  });
  return NextResponse.json({ ok: true });
}
