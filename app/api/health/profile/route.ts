import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DATA_SOURCE_KINDS } from "@/lib/activity/metrics";

const healthMetricTypes = [
  "SLEEP", "ENERGY", "MOOD", "STRESS", "ANXIETY", "PAIN", "HYDRATION",
  "STEPS", "WEIGHT", "HEART_RATE", "RECOVERY", "PERCEIVED_EFFORT"
] as const;

const schema = z.object({
  metricType: z.enum(healthMetricTypes),
  value: z.union([z.number(), z.string(), z.record(z.string(), z.unknown())]),
  recordedAt: z.coerce.date().optional(),
  sourceKind: z.enum(DATA_SOURCE_KINDS).default("MANUAL"),
  consentId: z.string().optional(),
  deviceId: z.string().optional(),
  notes: z.string().max(500).optional()
});

export async function GET(request: Request) {
  const user = await requireUser();
  const metricType = new URL(request.url).searchParams.get("metricType") || undefined;
  const entries = await prisma.healthProfileEntry.findMany({
    where: { userId: user.id, ...(metricType ? { metricType } : {}) },
    orderBy: { recordedAt: "desc" },
    take: 200
  });
  return NextResponse.json({ ok: true, entries, diagnosticUse: false });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Métrica de saúde inválida." }, { status: 400 });
  if (parsed.data.sourceKind !== "MANUAL" && parsed.data.sourceKind !== "PAUSA_SESSION") {
    if (!parsed.data.consentId) return NextResponse.json({ ok: false, error: "Consentimento obrigatório para esta fonte." }, { status: 400 });
    const consent = await prisma.dataConsent.findFirst({
      where: { id: parsed.data.consentId, userId: user.id, sourceKind: parsed.data.sourceKind, status: "GRANTED" }
    });
    if (!consent) return NextResponse.json({ ok: false, error: "Consentimento ausente ou revogado." }, { status: 403 });
  }
  const entry = await prisma.healthProfileEntry.create({
    data: {
      userId: user.id,
      metricType: parsed.data.metricType,
      valueJson: JSON.stringify(parsed.data.value),
      recordedAt: parsed.data.recordedAt,
      sourceKind: parsed.data.sourceKind,
      consentId: parsed.data.consentId,
      deviceId: parsed.data.deviceId,
      quality: parsed.data.sourceKind === "MANUAL" ? "REPORTED" : parsed.data.sourceKind === "ESTIMATED" ? "ESTIMATED" : "MEASURED",
      notes: parsed.data.notes
    }
  });
  await prisma.dataVaultEvent.create({
    data: {
      userId: user.id,
      recordType: "HealthProfileEntry",
      recordId: entry.id,
      action: "CREATED",
      sourceKind: entry.sourceKind,
      consentId: entry.consentId,
      quality: entry.quality
    }
  });
  return NextResponse.json({ ok: true, entry, diagnosticUse: false }, { status: 201 });
}
