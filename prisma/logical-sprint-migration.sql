-- Sprint logico: catalogo versionado e conclusoes idempotentes.
-- Aplicar em bancos existentes; bancos novos podem usar `prisma db push`.

ALTER TABLE "CatalogVisualAsset" ADD COLUMN "requiredPhysicalFiles" TEXT NOT NULL DEFAULT '[]';
ALTER TABLE "CatalogVisualAsset" ADD COLUMN "requiresCompleteAssetSet" BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE "CatalogVisualAsset" ADD COLUMN "approvalRequirement" TEXT NOT NULL DEFAULT 'NONE';
ALTER TABLE "CatalogVisualAsset" ADD COLUMN "approvalStatus" TEXT NOT NULL DEFAULT 'APPROVED';
ALTER TABLE "CatalogVisualAsset" ADD COLUMN "dependencyMovementIds" TEXT NOT NULL DEFAULT '[]';
ALTER TABLE "CatalogVisualAsset" ADD COLUMN "releasePolicy" TEXT NOT NULL DEFAULT 'COMPLETE';
ALTER TABLE "CatalogVisualAsset" ADD COLUMN "decisionDate" DATETIME;
ALTER TABLE "CatalogVisualAsset" ADD COLUMN "approvalDate" DATETIME;
ALTER TABLE "CatalogVisualAsset" ADD COLUMN "approvalNote" TEXT;
ALTER TABLE "CatalogVisualAsset" ADD COLUMN "blockReasonCode" TEXT;

ALTER TABLE "CatalogReconciliation" ADD COLUMN "candidateImagePaths" TEXT NOT NULL DEFAULT '[]';
ALTER TABLE "CatalogReconciliation" ADD COLUMN "blockReasonCode" TEXT;

CREATE TABLE "ActivityCompletion" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "dedupeKey" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "activityType" TEXT NOT NULL,
  "source" TEXT NOT NULL,
  "targetId" TEXT NOT NULL,
  "checkinId" TEXT,
  "completionToken" TEXT NOT NULL,
  "domainRecordType" TEXT NOT NULL,
  "domainRecordId" TEXT,
  "xpAwarded" INTEGER NOT NULL DEFAULT 0,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "ActivityCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ActivityCompletion_checkinId_fkey" FOREIGN KEY ("checkinId") REFERENCES "Checkin" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "ActivityCompletion_dedupeKey_key" ON "ActivityCompletion"("dedupeKey");
CREATE INDEX "ActivityCompletion_userId_activityType_targetId_idx" ON "ActivityCompletion"("userId", "activityType", "targetId");
CREATE INDEX "ActivityCompletion_checkinId_idx" ON "ActivityCompletion"("checkinId");
CREATE INDEX "ActivityCompletion_completionToken_idx" ON "ActivityCompletion"("completionToken");

-- WORK_BREAK cobre pausas mentais sem dependencia visual; apenas itens BODY_MOVEMENT exigem catalogo fisico.
UPDATE "ExerciseInstruction"
SET "categoryGroup" = 'MENTAL'
WHERE "category" = 'WORK_BREAK' AND "area" <> 'BODY_MOVEMENT';
