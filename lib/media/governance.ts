import { existsSync } from "node:fs";
import { join } from "node:path";
import type { MediaLifecycleStatus, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const MEDIA_LIFECYCLE_STATUSES: MediaLifecycleStatus[] = [
  "DRAFT",
  "TECHNICAL_REVIEW",
  "EDITORIAL_REVIEW",
  "HEALTH_REVIEW",
  "RIGHTS_REVIEW",
  "LOCALIZATION_REVIEW",
  "APPROVED",
  "PUBLISHED",
  "SUSPENDED",
  "ARCHIVED",
  "EXPIRED",
  "REJECTED"
];

export const REQUIRED_MEDIA_APPROVAL_STAGES = [
  "TECHNICAL_REVIEW",
  "EDITORIAL_REVIEW",
  "RIGHTS_REVIEW",
  "LOCALIZATION_REVIEW"
] as const;

function publicFileExists(sourcePath: string) {
  if (!sourcePath.startsWith("/")) return false;
  return existsSync(join(process.cwd(), "public", sourcePath.replace(/^\/+/, "")));
}

export async function mediaPublicationReadiness(assetId: string, channel: string) {
  const asset = await prisma.mediaAsset.findUnique({
    where: { id: assetId },
    include: { licenses: true, approvals: true, localizations: true, outgoingRelations: true }
  });
  if (!asset) return { ready: false as const, reasons: ["ASSET_NOT_FOUND"], asset: null };
  const now = new Date();
  const reasons: string[] = [];
  if (asset.status !== "APPROVED" && asset.status !== "PUBLISHED") reasons.push("ASSET_NOT_APPROVED");
  if (asset.withdrawnAt) reasons.push("ASSET_WITHDRAWN");
  if (!publicFileExists(asset.sourcePath)) reasons.push("SOURCE_FILE_MISSING");
  const license = asset.licenses.find((item) =>
    item.status === "ACTIVE" &&
    item.validFrom <= now &&
    (!item.expiresAt || item.expiresAt > now) &&
    JSON.parse(item.channelsJson || "[]").includes(channel)
  );
  if (!license) reasons.push("ACTIVE_LICENSE_MISSING");
  const approvedStages = new Set(asset.approvals.filter((item) => item.decision === "APPROVED").map((item) => item.stage));
  for (const stage of REQUIRED_MEDIA_APPROVAL_STAGES) {
    if (!approvedStages.has(stage)) reasons.push(`APPROVAL_MISSING:${stage}`);
  }
  const needsHealthReview = asset.outgoingRelations.some((item) => ["HEALTH", "NUTRITION"].includes(item.targetType));
  if (needsHealthReview && !approvedStages.has("HEALTH_REVIEW")) reasons.push("APPROVAL_MISSING:HEALTH_REVIEW");
  const localized = asset.localizations.some((item) => item.language === asset.language && item.status === "APPROVED" && item.alternateText);
  if (!localized) reasons.push("APPROVED_LOCALIZATION_MISSING");
  return { ready: reasons.length === 0, reasons, asset };
}

export async function publishMediaAsset(assetId: string, channel: string) {
  const readiness = await mediaPublicationReadiness(assetId, channel);
  if (!readiness.ready || !readiness.asset) throw new Error(`MEDIA_NOT_READY:${readiness.reasons.join(",")}`);
  return prisma.$transaction(async (tx) => {
    const publication = await tx.mediaPublication.upsert({
      where: { assetId_channel: { assetId, channel } },
      update: { status: "PUBLISHED", publishedAt: new Date(), suspendedAt: null },
      create: { assetId, channel, status: "PUBLISHED", publishedAt: new Date() }
    });
    await tx.mediaAsset.update({ where: { id: assetId }, data: { status: "PUBLISHED" } });
    return publication;
  });
}

export async function withdrawMediaAsset(assetId: string, reason: string) {
  const asset = await prisma.mediaAsset.findUnique({
    where: { id: assetId },
    include: { outgoingRelations: true, publications: true }
  });
  if (!asset) throw new Error("ASSET_NOT_FOUND");
  await prisma.$transaction([
    prisma.mediaAsset.update({ where: { id: assetId }, data: { status: "SUSPENDED", withdrawnAt: new Date() } }),
    prisma.mediaPublication.updateMany({
      where: { assetId, status: "PUBLISHED" },
      data: { status: "SUSPENDED", suspendedAt: new Date() }
    }),
    prisma.mediaVersion.create({
      data: {
        assetId,
        version: (await prisma.mediaVersion.count({ where: { assetId } })) + 1,
        hash: asset.hash,
        sourcePath: asset.sourcePath,
        changeSummary: `Retirada: ${reason}`
      }
    })
  ]);
  return {
    assetId,
    reason,
    usageLocations: asset.outgoingRelations.map((item) => ({ targetType: item.targetType, targetId: item.targetId, relationType: item.relationType })),
    suspendedChannels: asset.publications.map((item) => item.channel)
  };
}

export type CreateMediaAssetData = Omit<Prisma.MediaAssetCreateInput,
  "versions" | "localizations" | "licenses" | "outgoingRelations" | "approvals" | "publications" | "metrics" | "videoProductions" | "voiceScripts"
>;
