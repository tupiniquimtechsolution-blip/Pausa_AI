CREATE TABLE IF NOT EXISTS "CatalogReconciliation" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "identityKey" TEXT NOT NULL,
  "catalogArea" TEXT NOT NULL,
  "catalogIdOrSlug" TEXT NOT NULL,
  "catalogTitle" TEXT NOT NULL,
  "sourceCatalog" TEXT NOT NULL,
  "reconciliationStatus" TEXT NOT NULL,
  "imageStatus" TEXT NOT NULL,
  "archiveReason" TEXT,
  "mappingCount" INTEGER NOT NULL DEFAULT 0,
  "matchedReferenceMovementIds" TEXT NOT NULL DEFAULT '[]',
  "resolvedImagePaths" TEXT NOT NULL DEFAULT '[]',
  "needsReview" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS "CatalogReconciliation_identityKey_key"
  ON "CatalogReconciliation"("identityKey");
CREATE INDEX IF NOT EXISTS "CatalogReconciliation_catalogArea_catalogIdOrSlug_idx"
  ON "CatalogReconciliation"("catalogArea", "catalogIdOrSlug");
CREATE INDEX IF NOT EXISTS "CatalogReconciliation_reconciliationStatus_idx"
  ON "CatalogReconciliation"("reconciliationStatus");
CREATE INDEX IF NOT EXISTS "CatalogReconciliation_sourceCatalog_idx"
  ON "CatalogReconciliation"("sourceCatalog");
