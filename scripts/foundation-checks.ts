import assert from "node:assert/strict";
import { PrismaClient } from "@prisma/client";
import {
  THEME_DEFINITIONS,
  THEME_IDS,
  THEME_PREFERENCES,
  isThemeId,
  resolveTheme
} from "../lib/design-system/themes";
import {
  LOCALES,
  LOCALE_DEFINITIONS,
  TRANSLATION_CATALOGS
} from "../lib/i18n/catalogs";
import {
  FEATURE_FLAG_DEFINITIONS,
  FEATURE_FLAG_KEYS
} from "../lib/feature-flags/registry";
import {
  APP_ROLES,
  PERMISSIONS,
  ROLE_PERMISSION_MATRIX,
  roleHasPermission
} from "../lib/rbac/roles";
import {
  CAPABILITY_STATES,
  PLATFORM_CAPABILITIES,
  PLATFORM_TYPES,
  capabilityFor,
  capabilityMatrix,
  detectPlatform
} from "../lib/platform/capabilities";

function checkPureFoundations() {
  assert.equal(THEME_DEFINITIONS.length, 9);
  assert.equal(new Set(THEME_IDS).size, 9);
  assert.equal(THEME_PREFERENCES.length, 10);
  assert.equal(isThemeId("system"), false);
  assert.equal(resolveTheme("system", true), "dark");
  assert.equal(resolveTheme("system", false), "light");

  assert.deepEqual(LOCALES, ["pt-BR", "en", "es", "de", "fr", "it", "ja"]);
  const canonicalKeys = Object.keys(TRANSLATION_CATALOGS["pt-BR"]).sort();
  for (const locale of LOCALES) {
    assert.deepEqual(Object.keys(TRANSLATION_CATALOGS[locale]).sort(), canonicalKeys);
    assert.ok(Object.values(TRANSLATION_CATALOGS[locale]).every((value) => value.trim().length > 0));
  }
  assert.deepEqual(
    LOCALES.filter((locale) => LOCALE_DEFINITIONS[locale].enabled),
    ["pt-BR"]
  );

  assert.deepEqual(APP_ROLES, ["MASTER", "ADMIN", "EDITOR", "REVIEWER", "SUPPORT", "USER"]);
  assert.equal(new Set(PERMISSIONS).size, PERMISSIONS.length);
  assert.deepEqual(ROLE_PERMISSION_MATRIX.MASTER, PERMISSIONS);
  assert.equal(roleHasPermission("USER", "roles.manage"), false);
  assert.equal(roleHasPermission("MASTER", "roles.manage"), true);

  const requiredFlags = [
    "NAV_V2",
    "RECOMMENDATION_ENGINE_V1",
    "SMART_NOTIFICATIONS",
    "PAUSA_ACTIVITY",
    "DEVICE_CONNECT",
    "MEDIA_LIBRARY",
    "VIDEO_LIBRARY",
    "EXTERNAL_MEDIA_PROVIDERS",
    "SOCIAL_PUBLISHING",
    "MONETIZATION_PREP"
  ];
  assert.ok(requiredFlags.every((key) => FEATURE_FLAG_KEYS.includes(key as never)));
  assert.ok(Object.values(FEATURE_FLAG_DEFINITIONS).every((definition) => definition.defaultValue === false));

  assert.equal(CAPABILITY_STATES.length, 6);
  for (const platform of PLATFORM_TYPES) {
    const matrix = capabilityMatrix(platform);
    assert.equal(Object.keys(matrix).length, PLATFORM_CAPABILITIES.length);
  }
  assert.equal(capabilityFor("desktop-web", "app_blocking").state, "UNSUPPORTED");
  assert.equal(capabilityFor("desktop-web", "open_app_settings").state, "MANUAL_CONFIGURATION");
  assert.equal(capabilityFor("android", "notifications").state, "REQUIRES_PERMISSION");
  assert.equal(detectPlatform({ userAgent: "Mozilla Android", hasNativeBridge: true }), "android");
}

async function checkDatabaseFoundations() {
  if (process.env.FOUNDATION_DB_CHECK !== "true") return;
  const prisma = new PrismaClient();
  try {
    const [roles, permissions, flags, master] = await Promise.all([
      prisma.role.findMany({ include: { permissions: true } }),
      prisma.permission.findMany(),
      prisma.featureFlag.findMany(),
      prisma.user.findUnique({
        where: { email: "rmedrado15@gmail.com" },
        include: { userRoles: { include: { role: true } } }
      })
    ]);
    assert.equal(roles.length, APP_ROLES.length);
    assert.equal(permissions.length, PERMISSIONS.length);
    assert.equal(flags.length, FEATURE_FLAG_KEYS.length);
    assert.ok(flags.every((flag) =>
      !flag.enabledLocal
      && !flag.enabledTest
      && !flag.enabledStaging
      && !flag.enabledProduction
    ));
    assert.ok(master);
    assert.ok(master.userRoles.some((assignment) => assignment.role.key === "MASTER"));
    assert.equal(await prisma.auditLog.count(), 0);
    assert.equal(await prisma.outboxEvent.count(), 0);
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  checkPureFoundations();
  await checkDatabaseFoundations();
  console.info("Foundation checks passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
