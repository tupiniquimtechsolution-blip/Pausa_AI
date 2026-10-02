import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";

const databaseUrl = process.env.DATABASE_URL || "";
const email = (process.env.STAGING_ADMIN_EMAIL || process.env.ADMIN_EMAIL || "").trim().toLowerCase();
const password = process.env.STAGING_ADMIN_PASSWORD || "";

async function main() {
  if (!/^postgres(?:ql)?:\/\//i.test(databaseUrl)) {
    throw new Error("Staging admin seed requires a PostgreSQL DATABASE_URL.");
  }
  if (!email) {
    throw new Error("Set STAGING_ADMIN_EMAIL or ADMIN_EMAIL before seeding staging.");
  }
  if (password.length < 16) {
    throw new Error("STAGING_ADMIN_PASSWORD must contain at least 16 characters.");
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const admin = await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      role: "ADMIN",
      onboardingCompleted: true,
    },
    create: {
      name: "Admin Pausa AI Staging",
      email,
      passwordHash,
      role: "ADMIN",
      onboardingCompleted: true,
    },
  });

  const adminRole = await prisma.role.findUnique({ where: { key: "ADMIN" } });
  if (!adminRole) {
    throw new Error("ADMIN role is missing. Run the foundation seed before creating the staging admin.");
  }

  await prisma.userRole.upsert({
    where: {
      userId_roleId: {
        userId: admin.id,
        roleId: adminRole.id,
      },
    },
    update: {
      reason: "CONTROLLED_STAGING_ADMIN_SEED",
      expiresAt: null,
    },
    create: {
      userId: admin.id,
      roleId: adminRole.id,
      reason: "CONTROLLED_STAGING_ADMIN_SEED",
    },
  });

  console.info(JSON.stringify({
    event: "staging_admin_seeded",
    email: admin.email,
    userId: admin.id,
    passwordStoredInLogs: false,
  }));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
