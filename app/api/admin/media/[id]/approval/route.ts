import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { REQUIRED_MEDIA_APPROVAL_STAGES } from "@/lib/media/governance";

const schema = z.object({
  stage: z.enum(["TECHNICAL_REVIEW", "EDITORIAL_REVIEW", "HEALTH_REVIEW", "RIGHTS_REVIEW", "LOCALIZATION_REVIEW"]),
  decision: z.enum(["APPROVED", "REJECTED"]),
  notes: z.string().max(1000).optional()
});

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin();
  const { id } = await context.params;
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Revisão inválida." }, { status: 400 });
  const asset = await prisma.mediaAsset.findUnique({ where: { id }, include: { outgoingRelations: true } });
  if (!asset) return NextResponse.json({ ok: false, error: "Ativo não encontrado." }, { status: 404 });
  const approval = await prisma.mediaApproval.upsert({
    where: { assetId_stage: { assetId: id, stage: parsed.data.stage } },
    update: { decision: parsed.data.decision, reviewerId: admin.id, notes: parsed.data.notes, decidedAt: new Date() },
    create: { assetId: id, stage: parsed.data.stage, decision: parsed.data.decision, reviewerId: admin.id, notes: parsed.data.notes, decidedAt: new Date() }
  });
  if (parsed.data.stage === "LOCALIZATION_REVIEW") {
    await prisma.mediaLocalization.updateMany({
      where: { assetId: id, language: asset.language },
      data: { status: parsed.data.decision }
    });
  }
  const approvals = await prisma.mediaApproval.findMany({ where: { assetId: id, decision: "APPROVED" } });
  const approvedStages = new Set(approvals.map((item) => item.stage));
  const needsHealth = asset.outgoingRelations.some((item) => ["HEALTH", "NUTRITION"].includes(item.targetType));
  const complete = REQUIRED_MEDIA_APPROVAL_STAGES.every((stage) => approvedStages.has(stage)) && (!needsHealth || approvedStages.has("HEALTH_REVIEW"));
  const status = parsed.data.decision === "REJECTED"
    ? "REJECTED"
    : complete
      ? "APPROVED"
      : parsed.data.stage;
  await prisma.mediaAsset.update({ where: { id }, data: { status } });
  return NextResponse.json({ ok: true, approval, assetStatus: status, approvalsComplete: complete });
}
