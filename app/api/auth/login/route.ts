import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/auth";
import { loginSchema } from "@/lib/validators";
import { clientAddress, consumeRateLimit, rateLimitHeaders } from "@/lib/security/rate-limit";
import { safeRelativeAppPath } from "@/lib/security/urls";

async function readLoginPayload(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return request.json().catch(() => null);
  }
  if (contentType.includes("application/x-www-form-urlencoded")) {
    const formText = await request.text().catch(() => "");
    const params = new URLSearchParams(formText);
    return {
      email: params.get("email"),
      password: params.get("password")
    };
  }
  const formData = await request.formData().catch(() => null) as unknown as { get: (name: string) => FormDataEntryValue | null } | null;
  if (!formData) return null;
  return {
    email: formData.get("email"),
    password: formData.get("password")
  };
}

function shouldRedirectAfterPost(request: Request) {
  const url = new URL(request.url);
  const contentType = request.headers.get("content-type") || "";
  return url.searchParams.get("redirect") === "1" || contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data");
}

function redirectWithinCurrentOrigin(path: string) {
  return new NextResponse(null, {
    status: 303,
    headers: { Location: safeRelativeAppPath(path) }
  });
}

function redirectToLogin() {
  return redirectWithinCurrentOrigin("/login?error=credentials");
}

export async function POST(request: Request) {
  const wantsRedirect = shouldRedirectAfterPost(request);
  const body = await readLoginPayload(request);
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    if (wantsRedirect) return redirectToLogin();
    return NextResponse.json({ error: "Verifique seu e-mail e senha." }, { status: 400 });
  }

  const rateLimit = await consumeRateLimit({
    scope: "auth.login",
    key: `${clientAddress(request)}:${parsed.data.email.toLowerCase()}`,
    limit: 10,
    windowMs: 15 * 60 * 1000
  });
  if (!rateLimit.allowed) {
    if (wantsRedirect) return redirectWithinCurrentOrigin("/login?error=rate-limit");
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde antes de tentar novamente." },
      { status: 429, headers: rateLimitHeaders(rateLimit) }
    );
  }

  const user = await prisma.user.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
  if (!user) {
    if (wantsRedirect) return redirectToLogin();
    return NextResponse.json({ error: "Verifique seu e-mail e senha." }, { status: 401 });
  }
  const valid = await bcrypt.compare(parsed.data.password, user.passwordHash);
  if (!valid) {
    if (wantsRedirect) return redirectToLogin();
    return NextResponse.json({ error: "Verifique seu e-mail e senha." }, { status: 401 });
  }

  await createSession(user.id);
  const redirectTo = user.onboardingCompleted ? "/app" : "/app/onboarding";
  if (wantsRedirect) return redirectWithinCurrentOrigin(redirectTo);
  return NextResponse.json({ ok: true, redirectTo });
}
