CREATE TABLE IF NOT EXISTS "CatalogVisualAsset" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "identityKey" TEXT NOT NULL,
  "catalogSection" TEXT NOT NULL,
  "catalogArea" TEXT NOT NULL,
  "catalogIdOrSlug" TEXT NOT NULL,
  "catalogTitle" TEXT NOT NULL,
  "matchType" TEXT NOT NULL,
  "matchedReferenceMovement" TEXT NOT NULL,
  "imageAction" TEXT NOT NULL,
  "visualAssetMode" TEXT NOT NULL,
  "pullFromReferenceMovement" TEXT NOT NULL,
  "reusedFromReferenceId" TEXT,
  "reusedFromReferenceIds" TEXT NOT NULL DEFAULT '[]',
  "reusedFromMovementId" TEXT,
  "reusedFromMovementIds" TEXT NOT NULL DEFAULT '[]',
  "reusedFromAssetPattern" TEXT NOT NULL,
  "reusedFromAssetPatterns" TEXT NOT NULL DEFAULT '[]',
  "canonicalPoseId" TEXT,
  "imageSourcePath" TEXT,
  "resolvedImagePaths" TEXT NOT NULL DEFAULT '[]',
  "physicalFilesFound" TEXT NOT NULL DEFAULT '[]',
  "physicalFilesMissing" TEXT NOT NULL DEFAULT '[]',
  "assetStatus" TEXT NOT NULL DEFAULT 'PLANNED',
  "videoStatus" TEXT NOT NULL DEFAULT 'PLANNED',
  "needsReview" BOOLEAN NOT NULL DEFAULT false,
  "notes" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS "CatalogVisualAsset_identityKey_key" ON "CatalogVisualAsset"("identityKey");
CREATE INDEX IF NOT EXISTS "CatalogVisualAsset_catalogArea_idx" ON "CatalogVisualAsset"("catalogArea");
CREATE INDEX IF NOT EXISTS "CatalogVisualAsset_catalogSection_catalogIdOrSlug_idx" ON "CatalogVisualAsset"("catalogSection", "catalogIdOrSlug");
CREATE INDEX IF NOT EXISTS "CatalogVisualAsset_assetStatus_idx" ON "CatalogVisualAsset"("assetStatus");
CREATE INDEX IF NOT EXISTS "CatalogVisualAsset_visualAssetMode_idx" ON "CatalogVisualAsset"("visualAssetMode");
