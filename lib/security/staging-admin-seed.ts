import bcrypt from "bcryptjs";
import type { PrismaClient } from "@prisma/client";

export function stagingAdminInput(env: Record<string, string | undefined>) {
  if (env.APP_ENV !== "staging" || env.STAGING_ADMIN_SEED_CONFIRM !== "staging-only") {
    throw new Error("STAGING_SEED_CONFIRMATION_REQUIRED");
  }
  if (!/^postgres(?:ql)?:\/\//i.test(env.DATABASE_URL || "")) {
    throw new Error("STAGING_SEED_REQUIRES_POSTGRESQL");
  }
  const email = (env.STAGING_ADMIN_EMAIL || "").trim().toLowerCase();
  const password = env.STAGING_ADMIN_PASSWORD || "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 16) {
    throw new Error("STAGING_SEED_INPUT_INVALID");
  }
  return { email, password };
}

export async function seedStagingAdmin(db: PrismaClient, input: { email: string; password: string }) {
  const passwordHash = await bcrypt.hash(input.password, 12);
  await db.$transaction(async (tx) => {
    const adminRole = await tx.role.findUnique({ where: { key: "ADMIN" } });
    if (!adminRole) throw new Error("STAGING_SEED_ADMIN_ROLE_MISSING");
    const admin = await tx.user.upsert({
      where: { email: input.email },
      update: { passwordHash, role: "ADMIN", onboardingCompleted: true },
      create: {
        name: "Admin Pausa AI Staging", email: input.email, passwordHash,
        role: "ADMIN", onboardingCompleted: true
      }
    });
    await tx.userRole.upsert({
      where: { userId_roleId: { userId: admin.id, roleId: adminRole.id } },
      update: { reason: "CONTROLLED_STAGING_ADMIN_SEED", expiresAt: null },
      create: { userId: admin.id, roleId: adminRole.id, reason: "CONTROLLED_STAGING_ADMIN_SEED" }
    });
  });
}
