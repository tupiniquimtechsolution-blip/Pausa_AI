import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/auth";
import { registerSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os campos obrigatórios." }, { status: 400 });

  const exists = await prisma.user.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
  if (exists) return NextResponse.json({ error: "Este e-mail já está cadastrado." }, { status: 409 });

  const passwordHash = await bcrypt.hash(parsed.data.password, 12);
  const user = await prisma.$transaction(async (tx) => {
    const created = await tx.user.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email.toLowerCase(),
        passwordHash,
        role: "USER"
      }
    });
    const userRole = await tx.role.findUnique({ where: { key: "USER" } });
    if (userRole) {
      await tx.userRole.create({
        data: { userId: created.id, roleId: userRole.id, reason: "SELF_REGISTRATION" }
      });
    }
    return created;
  });
  await createSession(user.id);
  return NextResponse.json({ ok: true, redirectTo: "/app/onboarding" });
}
