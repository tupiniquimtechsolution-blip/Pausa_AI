import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { randomUUID } from "node:crypto";
import { FEATURE_FLAG_DEFINITIONS, FEATURE_FLAG_KEYS } from "../lib/feature-flags/registry";
import {
  APP_ROLES,
  PERMISSIONS,
  ROLE_DEFINITIONS,
  ROLE_PERMISSION_MATRIX,
  normalizeLegacyRole,
  type AppRole
} from "../lib/rbac/roles";

const prisma = new PrismaClient();

async function ensureUserRole(userId: string, roleKey: AppRole, reason: string) {
  const role = await prisma.role.findUniqueOrThrow({ where: { key: roleKey } });
  await prisma.userRole.upsert({
    where: { userId_roleId: { userId, roleId: role.id } },
    update: { reason, expiresAt: null },
    create: { userId, roleId: role.id, reason }
  });
}

async function seedRegistry() {
  for (const key of APP_ROLES) {
    const definition = ROLE_DEFINITIONS[key];
    await prisma.role.upsert({
      where: { key },
      update: { name: definition.name, description: definition.description, isSystem: true },
      create: { key, name: definition.name, description: definition.description, isSystem: true }
    });
  }

  for (const key of PERMISSIONS) {
    await prisma.permission.upsert({
      where: { key },
      update: { name: key, description: `Permissão controlada: ${key}` },
      create: { key, name: key, description: `Permissão controlada: ${key}` }
    });
  }

  const [roles, permissions] = await Promise.all([
    prisma.role.findMany({ where: { key: { in: [...APP_ROLES] } } }),
    prisma.permission.findMany({ where: { key: { in: [...PERMISSIONS] } } })
  ]);
  const rolesByKey = new Map(roles.map((role) => [role.key, role]));
  const permissionsByKey = new Map(permissions.map((permission) => [permission.key, permission]));

  for (const roleKey of APP_ROLES) {
    const role = rolesByKey.get(roleKey);
    if (!role) throw new Error(`Role ausente após seed: ${roleKey}`);
    for (const permissionKey of ROLE_PERMISSION_MATRIX[roleKey]) {
      const permission = permissionsByKey.get(permissionKey);
      if (!permission) throw new Error(`Permissão ausente após seed: ${permissionKey}`);
      await prisma.rolePermission.upsert({
        where: { roleId_permissionId: { roleId: role.id, permissionId: permission.id } },
        update: { granted: true },
        create: { roleId: role.id, permissionId: permission.id, granted: true }
      });
    }
  }

  for (const key of FEATURE_FLAG_KEYS) {
    const definition = FEATURE_FLAG_DEFINITIONS[key];
    await prisma.featureFlag.upsert({
      where: { key },
      update: {
        description: definition.description,
        owner: definition.owner,
        defaultValue: definition.defaultValue
      },
      create: {
        key,
        description: definition.description,
        owner: definition.owner,
        defaultValue: definition.defaultValue
      }
    });
  }
}

async function seedMaster() {
  const email = "rmedrado15@gmail.com";
  const password = process.env.MASTER_SEED_PASSWORD || randomUUID();
  const passwordHash = await bcrypt.hash(password, 12);
  const resetSeedPassword = process.env.RESET_MASTER_SEED_PASSWORD === "true";
  const master = await prisma.user.upsert({
    where: { email },
    update: {
      role: "MASTER",
      ...(resetSeedPassword ? { passwordHash } : {})
    },
    create: {
      name: "Master Pausa AI",
      email,
      passwordHash,
      role: "MASTER",
      onboardingCompleted: true,
      profile: {
        create: {
          mainGoal: "Criar rotina saudável",
          dailyTime: "5 minutos",
          preferredTime: "Manhã",
          stressLevel: "Médio",
          difficultyArea: "Trabalho",
          workHours: 8,
          freeHours: 2,
          sleepHours: 7,
          trainingIntensityPreference: "manter"
        }
      }
    }
  });
  await ensureUserRole(master.id, "MASTER", "CONTROLLED_MASTER_SEED");
}

async function migrateLegacyAssignments() {
  const roles = await prisma.role.findMany({ where: { key: { in: [...APP_ROLES] } } });
  const rolesByKey = new Map(roles.map((role) => [role.key, role]));
  const users = await prisma.user.findMany({ select: { id: true, role: true } });
  for (const user of users) {
    const roleKey = normalizeLegacyRole(user.role);
    const role = rolesByKey.get(roleKey);
    if (!role) continue;
    await prisma.userRole.upsert({
      where: { userId_roleId: { userId: user.id, roleId: role.id } },
      update: { reason: "LEGACY_ROLE_MIGRATION" },
      create: { userId: user.id, roleId: role.id, reason: "LEGACY_ROLE_MIGRATION" }
    });
  }
}

async function main() {
  await seedRegistry();
  await seedMaster();
  await migrateLegacyAssignments();
  console.info(JSON.stringify({
    event: "foundation_seed_complete",
    roles: APP_ROLES.length,
    permissions: PERMISSIONS.length,
    flags: FEATURE_FLAG_KEYS.length,
    master: "rmedrado15@gmail.com"
  }));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
