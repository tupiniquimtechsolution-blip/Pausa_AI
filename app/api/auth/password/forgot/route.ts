import { createHash, randomBytes } from "crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendPasswordResetEmail } from "@/lib/email";
import { clientAddress, consumeRateLimit, rateLimitHeaders } from "@/lib/security/rate-limit";
import { localRequestOrigin, publicAppUrl } from "@/lib/security/urls";

const schema = z.object({
  email: z.string().email()
});

const RESET_WINDOW_MS = 15 * 60 * 1000;
const RESET_MAX_ATTEMPTS = 5;

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Informe um e-mail valido." }, { status: 400 });

  const emailAddress = parsed.data.email.toLowerCase();
  const message = "Se o e-mail existir, geraremos instrucoes para redefinir sua senha.";
  const rateLimit = await consumeRateLimit({
    scope: "auth.password.forgot",
    key: `${clientAddress(request)}:${emailAddress}`,
    limit: RESET_MAX_ATTEMPTS,
    windowMs: RESET_WINDOW_MS
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { ok: true, message },
      { status: 429, headers: rateLimitHeaders(rateLimit) }
    );
  }

  const user = await prisma.user.findUnique({ where: { email: emailAddress } });
  if (!user) return NextResponse.json({ ok: true, message });

  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 30);
  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      tokenHash: hashToken(token),
      expiresAt
    }
  });

  const isLocalRequest = Boolean(localRequestOrigin(request));
  const resetUrl = publicAppUrl(request, `/redefinir-senha/${token}`, {
    preferRequestOriginForLocal: true
  }).toString();
  const email = await sendPasswordResetEmail({ to: user.email, resetUrl, name: user.name });
  return NextResponse.json({
    ok: true,
    message,
    emailSent: email.sent,
    emailReason: email.sent ? undefined : email.reason,
    resetUrl: isLocalRequest ? resetUrl : undefined
  });
}
