import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { onboardingSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = onboardingSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os campos obrigatórios." }, { status: 400 });

  await prisma.profile.upsert({
    where: { userId: user.id },
    update: parsed.data,
    create: { userId: user.id, ...parsed.data }
  });
  await prisma.user.update({ where: { id: user.id }, data: { onboardingCompleted: true } });
  return NextResponse.json({ ok: true, redirectTo: "/app/checkin?primeiro=1" });
}
