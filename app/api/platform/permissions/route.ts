import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { PLATFORM_CAPABILITIES, PLATFORM_TYPES } from "@/lib/platform/capabilities";
import { correlationIdFrom, writeAuditLog } from "@/lib/observability";

const schema = z.object({
  permissionKey: z.enum(PLATFORM_CAPABILITIES),
  platform: z.enum(PLATFORM_TYPES),
  status: z.enum(["granted", "denied", "prompt", "unsupported", "unknown"]),
  source: z.enum(["CLIENT_REPORTED", "NATIVE_BRIDGE", "SERVER_INFERRED"]).default("CLIENT_REPORTED"),
  details: z.record(z.unknown()).optional()
});

export async function POST(request: Request) {
  const user = await requireUser();
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Estado de permissão inválido." }, { status: 400 });
  const correlationId = correlationIdFrom(request);
  const record = await prisma.platformPermissionRecord.upsert({
    where: {
      userId_permissionKey_platform: {
        userId: user.id,
        permissionKey: parsed.data.permissionKey,
        platform: parsed.data.platform
      }
    },
    update: {
      status: parsed.data.status,
      source: parsed.data.source,
      detailsJson: JSON.stringify(parsed.data.details || {}),
      lastCheckedAt: new Date()
    },
    create: {
      userId: user.id,
      permissionKey: parsed.data.permissionKey,
      platform: parsed.data.platform,
      status: parsed.data.status,
      source: parsed.data.source,
      detailsJson: JSON.stringify(parsed.data.details || {})
    }
  });
  await writeAuditLog({
    actorId: user.id,
    action: "PLATFORM_PERMISSION_REVALIDATED",
    targetType: "PlatformPermissionRecord",
    targetId: record.id,
    correlationId,
    metadata: {
      permissionKey: parsed.data.permissionKey,
      platform: parsed.data.platform,
      status: parsed.data.status
    }
  });
  return NextResponse.json({ ok: true, record, correlationId });
}
