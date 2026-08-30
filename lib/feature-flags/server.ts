import { prisma } from "@/lib/prisma";
import { FEATURE_FLAG_DEFINITIONS, FEATURE_FLAG_KEYS, type FeatureFlagKey } from "@/lib/feature-flags/registry";
import type { AppRole } from "@/lib/rbac/roles";

type FlagEnvironment = "local" | "test" | "staging" | "production";

function currentEnvironment(): FlagEnvironment {
  const value = (process.env.APP_ENV || process.env.NODE_ENV || "local").toLowerCase();
  if (value === "production" || value === "staging" || value === "test") return value;
  return "local";
}

function parseList(value: string) {
  try {
    const parsed = JSON.parse(value) as unknown;
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

function environmentValue(
  flag: {
    enabledLocal: boolean;
    enabledTest: boolean;
    enabledStaging: boolean;
    enabledProduction: boolean;
  },
  environment: FlagEnvironment
) {
  if (environment === "production") return flag.enabledProduction;
  if (environment === "staging") return flag.enabledStaging;
  if (environment === "test") return flag.enabledTest;
  return flag.enabledLocal;
}

function envOverride(key: FeatureFlagKey) {
  const value = process.env[`FEATURE_FLAG_${key}`];
  if (value === "true") return true;
  if (value === "false") return false;
  return null;
}

export async function getFeatureFlagSnapshot(input: {
  roles?: readonly AppRole[];
  platform?: string;
} = {}): Promise<Record<FeatureFlagKey, boolean>> {
  const rows = await prisma.featureFlag.findMany({ where: { key: { in: FEATURE_FLAG_KEYS } } });
  const byKey = new Map(rows.map((row) => [row.key, row]));
  const environment = currentEnvironment();

  return Object.fromEntries(FEATURE_FLAG_KEYS.map((key) => {
    const override = envOverride(key);
    if (override !== null) return [key, override];
    const row = byKey.get(key);
    if (!row) return [key, FEATURE_FLAG_DEFINITIONS[key].defaultValue];
    const allowedPlatforms = parseList(row.platformsJson);
    const allowedRoles = parseList(row.rolesJson);
    if (allowedPlatforms.length && (!input.platform || !allowedPlatforms.includes(input.platform))) return [key, false];
    if (allowedRoles.length && !input.roles?.some((role) => allowedRoles.includes(role))) return [key, false];
    return [key, environmentValue(row, environment)];
  })) as Record<FeatureFlagKey, boolean>;
}

export async function isFeatureEnabled(key: FeatureFlagKey, input: {
  roles?: readonly AppRole[];
  platform?: string;
} = {}) {
  return (await getFeatureFlagSnapshot(input))[key];
}
