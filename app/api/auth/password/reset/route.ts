import { createHash } from "crypto";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z
  .object({
    token: z.string().min(20),
    password: z.string().min(8),
    confirmPassword: z.string().min(8)
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas nao conferem."
  });

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Verifique o link e a nova senha." }, { status: 400 });

  const reset = await prisma.passwordResetToken.findUnique({ where: { tokenHash: hashToken(parsed.data.token) } });
  if (!reset || reset.usedAt || reset.expiresAt < new Date()) {
    return NextResponse.json({ error: "Link invalido ou expirado. Solicite uma nova redefinicao." }, { status: 400 });
  }

  await prisma.$transaction([
    prisma.user.update({
      where: { id: reset.userId },
      data: {
        passwordHash: await bcrypt.hash(parsed.data.password, 12),
        sessionVersion: { increment: 1 }
      }
    }),
    prisma.passwordResetToken.update({
      where: { id: reset.id },
      data: { usedAt: new Date() }
    })
  ]);

  return NextResponse.json({ ok: true, message: "Senha redefinida. Voce ja pode fazer login." });
}
