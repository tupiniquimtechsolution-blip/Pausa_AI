import { randomUUID } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";
import { APP_ROLES, normalizeLegacyRole, type AppRole } from "@/lib/rbac/roles";

const SESSION_COOKIE = "pausa_session";
const secureCookie = process.env.COOKIE_SECURE === "true" || process.env.VERCEL === "1";
const weakJwtSecrets = new Set(["", "change-this-secret", "dev-secret-change-me"]);

function jwtSecret() {
  const value = process.env.JWT_SECRET || "";
  const isProductionRuntime = process.env.NODE_ENV === "production" || process.env.VERCEL === "1";
  if (isProductionRuntime && (weakJwtSecrets.has(value) || value.length < 32)) {
    throw new Error("JWT_SECRET must be a strong per-environment secret in production.");
  }
  return new TextEncoder().encode(value || "dev-secret-change-me");
}

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: AppRole;
  roles: AppRole[];
  companyId: string | null;
  companyRole: string | null;
  level: number;
  xp: number;
  onboardingCompleted: boolean;
};

export async function createSession(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { sessionVersion: true }
  });
  if (!user) throw new Error("Cannot create a session for an unknown user.");

  const token = await new SignJWT({ userId, sessionVersion: user.sessionVersion })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer("pausa-ai")
    .setAudience("pausa-ai-web")
    .setJti(randomUUID())
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(jwtSecret());

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: secureCookie,
    maxAge: 60 * 60 * 24 * 7,
    path: "/"
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, jwtSecret(), {
      issuer: "pausa-ai",
      audience: "pausa-ai-web"
    });
    const userId = String(payload.userId || "");
    const sessionVersion = Number(payload.sessionVersion);
    if (!userId || !Number.isInteger(sessionVersion)) return null;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        userRoles: {
          where: { OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }] },
          select: { role: { select: { key: true } } }
        }
      }
    });
    if (!user || user.sessionVersion !== sessionVersion) return null;
    const persistedRoles = user.userRoles
      .map((assignment) => assignment.role.key)
      .filter((role): role is AppRole => APP_ROLES.includes(role as AppRole));
    const roles = persistedRoles.length ? Array.from(new Set(persistedRoles)) : [normalizeLegacyRole(user.role)];
    const role = APP_ROLES.find((candidate) => roles.includes(candidate)) || "USER";
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role,
      roles,
      companyId: user.companyId,
      companyRole: user.companyRole,
      level: user.level,
      xp: user.xp,
      onboardingCompleted: user.onboardingCompleted
    };
  } catch {
    return null;
  }
}

export async function requireUser() {
  const cookieStore = await cookies();
  const hadSessionCookie = Boolean(cookieStore.get(SESSION_COOKIE)?.value);
  const user = await getSessionUser();
  if (!user) redirect(hadSessionCookie ? "/login?session=expired" : "/login");
  return user;
}

export async function requireAdmin() {
  const user = await requireUser();
  if (!user.roles.some((role) => role === "MASTER" || role === "ADMIN")) redirect("/app");
  return user;
}
