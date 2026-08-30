import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { FEATURE_FLAG_DEFINITIONS, isFeatureFlagKey } from "@/lib/feature-flags/registry";
import { getFeatureFlagSnapshot } from "@/lib/feature-flags/server";
import { correlationIdFrom, writeAuditLog } from "@/lib/observability";
import { rolesHavePermission } from "@/lib/rbac/server";

const updateSchema = z.object({
  key: z.string().refine(isFeatureFlagKey),
  environment: z.enum(["local", "test", "staging", "production"]),
  enabled: z.boolean(),
  reason: z.string().min(5).max(500)
});

const environmentField = {
  local: "enabledLocal",
  test: "enabledTest",
  staging: "enabledStaging",
  production: "enabledProduction"
} as const;

export async function GET() {
  const user = await requireUser();
  if (!rolesHavePermission(user.roles, "feature_flags.manage")) {
    return NextResponse.json({ error: "Acesso negado." }, { status: 403 });
  }
  const [rows, resolved] = await Promise.all([
    prisma.featureFlag.findMany({ orderBy: { key: "asc" } }),
    getFeatureFlagSnapshot({ roles: user.roles })
  ]);
  return NextResponse.json({ flags: rows, resolved });
}

export async function POST(request: Request) {
  const user = await requireUser();
  if (!rolesHavePermission(user.roles, "feature_flags.manage")) {
    return NextResponse.json({ error: "Acesso negado." }, { status: 403 });
  }
  const parsed = updateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Alteração de flag inválida." }, { status: 400 });
  const { key, environment, enabled, reason } = parsed.data;
  const definition = FEATURE_FLAG_DEFINITIONS[key];
  const field = environmentField[environment];
  const correlationId = correlationIdFrom(request);

  const result = await prisma.$transaction(async (tx) => {
    const current = await tx.featureFlag.upsert({
      where: { key },
      update: {},
      create: {
        key,
        description: definition.description,
        owner: definition.owner,
        defaultValue: definition.defaultValue
      }
    });
    const previousValue = current[field];
    const updated = await tx.featureFlag.update({ where: { key }, data: { [field]: enabled } });
    await tx.featureFlagAudit.create({
      data: {
        featureFlagKey: key,
        actorId: user.id,
        environment,
        previousValue,
        nextValue: enabled,
        correlationId,
        reason
      }
    });
    return { updated, previousValue };
  });

  await writeAuditLog({
    actorId: user.id,
    action: "FEATURE_FLAG_CHANGED",
    targetType: "FeatureFlag",
    targetId: key,
    correlationId,
    metadata: { environment, reason },
    before: { enabled: result.previousValue },
    after: { enabled },
    userAgent: request.headers.get("user-agent")
  });
  return NextResponse.json({ flag: result.updated, correlationId });
}
