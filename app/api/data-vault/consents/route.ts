import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DATA_SOURCE_KINDS } from "@/lib/activity/metrics";

const schema = z.object({
  scope: z.string().min(1).max(120),
  sourceKind: z.enum(DATA_SOURCE_KINDS),
  retentionDays: z.number().int().min(1).max(3650).default(365),
  action: z.enum(["GRANT", "REVOKE"]).default("GRANT")
});

export async function GET() {
  const user = await requireUser();
  return NextResponse.json({ ok: true, consents: await prisma.dataConsent.findMany({ where: { userId: user.id }, orderBy: { updatedAt: "desc" } }) });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Consentimento inválido." }, { status: 400 });
  const granted = parsed.data.action === "GRANT";
  const consent = await prisma.dataConsent.upsert({
    where: { userId_scope_sourceKind: { userId: user.id, scope: parsed.data.scope, sourceKind: parsed.data.sourceKind } },
    update: {
      status: granted ? "GRANTED" : "REVOKED",
      retentionDays: parsed.data.retentionDays,
      grantedAt: granted ? new Date() : undefined,
      revokedAt: granted ? null : new Date()
    },
    create: {
      userId: user.id,
      scope: parsed.data.scope,
      sourceKind: parsed.data.sourceKind,
      retentionDays: parsed.data.retentionDays,
      status: granted ? "GRANTED" : "REVOKED",
      revokedAt: granted ? null : new Date()
    }
  });
  return NextResponse.json({ ok: true, consent });
}
