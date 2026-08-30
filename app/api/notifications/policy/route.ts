import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { correlationIdFrom, writeAuditLog } from "@/lib/observability";

const schema = z.object({
  maxPerDay: z.coerce.number().int().min(1).max(12),
  minimumIntervalMinutes: z.coerce.number().int().min(15).max(1440),
  quietHoursStart: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  quietHoursEnd: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  ignoredReductionAfter: z.coerce.number().int().min(1).max(20),
  lockScreenPrivacy: z.enum(["SHOW_ALL", "HIDE_SENSITIVE", "HIDE_CONTENT"])
});

export async function GET() {
  const user = await requireUser();
  const policy = await prisma.notificationPolicy.upsert({
    where: { userId: user.id },
    update: {},
    create: { userId: user.id }
  });
  return NextResponse.json({ ok: true, policy });
}

export async function PATCH(request: Request) {
  const user = await requireUser();
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Política de notificações inválida." }, { status: 400 });
  const correlationId = correlationIdFrom(request);
  const previous = await prisma.notificationPolicy.findUnique({ where: { userId: user.id } });
  const policy = await prisma.notificationPolicy.upsert({
    where: { userId: user.id },
    update: parsed.data,
    create: { userId: user.id, ...parsed.data }
  });
  await writeAuditLog({
    actorId: user.id,
    action: "NOTIFICATION_POLICY_CHANGED",
    targetType: "NotificationPolicy",
    targetId: policy.id,
    correlationId,
    before: previous,
    after: policy,
    metadata: { lockScreenPrivacy: policy.lockScreenPrivacy }
  });
  return NextResponse.json({ ok: true, policy, correlationId });
}
