import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await requireUser();
  const [health, activities, consents, devices, audit] = await Promise.all([
    prisma.healthProfileEntry.findMany({ where: { userId: user.id }, orderBy: { recordedAt: "desc" } }),
    prisma.pausaActivity.findMany({ where: { userId: user.id }, include: { points: true, metrics: true, route: true }, orderBy: { startedAt: "desc" } }),
    prisma.dataConsent.findMany({ where: { userId: user.id } }),
    prisma.connectedDevice.findMany({ where: { userId: user.id } }),
    prisma.dataVaultEvent.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } })
  ]);
  return NextResponse.json({
    ok: true,
    exportedAt: new Date().toISOString(),
    portabilityVersion: 1,
    sources: ["MANUAL", "PHONE_SENSOR", "PAUSA_SESSION", "BLUETOOTH_DEVICE", "IMPORTED_FILE", "EXTERNAL_CONNECTOR", "ESTIMATED"],
    health,
    activities,
    consents,
    devices,
    audit
  });
}

const correctionSchema = z.object({
  recordId: z.string().min(1),
  correctedValue: z.union([z.number(), z.string(), z.record(z.string(), z.unknown())]),
  notes: z.string().max(500).optional()
});

export async function PATCH(request: Request) {
  const user = await requireUser();
  const parsed = correctionSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Correção inválida." }, { status: 400 });
  const original = await prisma.healthProfileEntry.findFirst({ where: { id: parsed.data.recordId, userId: user.id } });
  if (!original) return NextResponse.json({ ok: false, error: "Registro não encontrado." }, { status: 404 });
  const corrected = await prisma.healthProfileEntry.create({
    data: {
      userId: user.id,
      metricType: original.metricType,
      valueJson: JSON.stringify(parsed.data.correctedValue),
      recordedAt: original.recordedAt,
      sourceKind: "MANUAL",
      quality: "CORRECTED",
      correctionOfId: original.id,
      notes: parsed.data.notes
    }
  });
  await prisma.dataVaultEvent.create({
    data: {
      userId: user.id,
      recordType: "HealthProfileEntry",
      recordId: corrected.id,
      action: "CORRECTED",
      sourceKind: "MANUAL",
      quality: "CORRECTED",
      metadataJson: JSON.stringify({ correctionOfId: original.id })
    }
  });
  return NextResponse.json({ ok: true, corrected });
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const recordId = new URL(request.url).searchParams.get("recordId");
  if (!recordId) return NextResponse.json({ ok: false, error: "recordId obrigatório." }, { status: 400 });
  const original = await prisma.healthProfileEntry.findFirst({ where: { id: recordId, userId: user.id } });
  if (!original) return NextResponse.json({ ok: false, error: "Registro não encontrado." }, { status: 404 });
  await prisma.$transaction([
    prisma.healthProfileEntry.delete({ where: { id: original.id } }),
    prisma.dataVaultEvent.create({
      data: {
        userId: user.id,
        recordType: "HealthProfileEntry",
        recordId: original.id,
        action: "DELETED",
        sourceKind: original.sourceKind,
        consentId: original.consentId,
        quality: original.quality
      }
    })
  ]);
  return NextResponse.json({ ok: true, deleted: recordId });
}
