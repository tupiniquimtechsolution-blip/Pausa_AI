-- CreateTable
CREATE TABLE "MediaAsset" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "assetType" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "sourcePath" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "durationSeconds" REAL,
    "codec" TEXT,
    "language" TEXT NOT NULL DEFAULT 'pt-BR',
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "rightsHolder" TEXT NOT NULL,
    "proofPath" TEXT,
    "commercialUseAllowed" BOOLEAN NOT NULL DEFAULT false,
    "transformationsAllowed" BOOLEAN NOT NULL DEFAULT false,
    "territoriesJson" TEXT NOT NULL DEFAULT '[]',
    "channelsJson" TEXT NOT NULL DEFAULT '[]',
    "requiredCredit" TEXT,
    "licenseExpiresAt" DATETIME,
    "withdrawnAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MediaVersion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assetId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "hash" TEXT NOT NULL,
    "sourcePath" TEXT NOT NULL,
    "changeSummary" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MediaVersion_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MediaAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MediaLocalization" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assetId" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "localizedTitle" TEXT NOT NULL,
    "alternateText" TEXT NOT NULL,
    "transcription" TEXT,
    "captionsPath" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MediaLocalization_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MediaAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MediaLicense" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assetId" TEXT NOT NULL,
    "rightsHolder" TEXT NOT NULL,
    "proofPath" TEXT NOT NULL,
    "commercialUseAllowed" BOOLEAN NOT NULL,
    "transformationsAllowed" BOOLEAN NOT NULL,
    "territoriesJson" TEXT NOT NULL,
    "channelsJson" TEXT NOT NULL,
    "requiredCredit" TEXT,
    "validFrom" DATETIME NOT NULL,
    "expiresAt" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MediaLicense_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MediaAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MediaRelation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sourceAssetId" TEXT NOT NULL,
    "targetType" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "relationType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MediaRelation_sourceAssetId_fkey" FOREIGN KEY ("sourceAssetId") REFERENCES "MediaAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MediaApproval" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assetId" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "decision" TEXT NOT NULL DEFAULT 'PENDING',
    "reviewerId" TEXT,
    "notes" TEXT,
    "decidedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MediaApproval_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MediaAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MediaPublication" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assetId" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'APPROVED',
    "publishedAt" DATETIME,
    "suspendedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MediaPublication_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MediaAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MediaMetric" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assetId" TEXT NOT NULL,
    "publicationId" TEXT,
    "metricType" TEXT NOT NULL,
    "numericValue" REAL NOT NULL,
    "recordedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" TEXT NOT NULL,
    CONSTRAINT "MediaMetric_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MediaAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MediaMetric_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "MediaPublication" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VoiceScript" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'pt-BR',
    "templateKey" TEXT NOT NULL,
    "scriptText" TEXT NOT NULL,
    "variablesJson" TEXT NOT NULL DEFAULT '{}',
    "version" INTEGER NOT NULL DEFAULT 1,
    "voiceLicenseNote" TEXT NOT NULL,
    "generatedAssetId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "transcription" TEXT NOT NULL,
    "captionsText" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "VoiceScript_generatedAssetId_fkey" FOREIGN KEY ("generatedAssetId") REFERENCES "MediaAsset" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VideoProduction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "sourceAssetId" TEXT NOT NULL,
    "ownershipConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "dubbingAuthorized" BOOLEAN NOT NULL DEFAULT false,
    "biomechanicsApproved" BOOLEAN NOT NULL DEFAULT false,
    "legalApproved" BOOLEAN NOT NULL DEFAULT false,
    "editorialApproved" BOOLEAN NOT NULL DEFAULT false,
    "accessibilityApproved" BOOLEAN NOT NULL DEFAULT false,
    "pipelineStatus" TEXT NOT NULL DEFAULT 'PLANNED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "VideoProduction_sourceAssetId_fkey" FOREIGN KEY ("sourceAssetId") REFERENCES "MediaAsset" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MarketingCampaign" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "audience" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "callToAction" TEXT NOT NULL,
    "deepLink" TEXT NOT NULL,
    "scheduledFor" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "approvedAt" DATETIME,
    "metricsJson" TEXT NOT NULL DEFAULT '{}',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MarketingContent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "campaignId" TEXT NOT NULL,
    "pillar" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "assetId" TEXT,
    "copyText" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MarketingContent_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "MarketingCampaign" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ShareCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "sourceType" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "previewPath" TEXT,
    "fullNameVisible" BOOLEAN NOT NULL DEFAULT false,
    "exactLocationVisible" BOOLEAN NOT NULL DEFAULT false,
    "sensitiveDataVisible" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ShareCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AudioProviderCapability" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "providerKey" TEXT NOT NULL,
    "capability" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "credentialsPresent" BOOLEAN NOT NULL DEFAULT false,
    "testStatus" TEXT NOT NULL DEFAULT 'NOT_TESTED',
    "lastTestedAt" DATETIME,
    "configJson" TEXT NOT NULL DEFAULT '{}',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MediaAsset_slug_key" ON "MediaAsset"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "MediaAsset_hash_key" ON "MediaAsset"("hash");

-- CreateIndex
CREATE INDEX "MediaAsset_assetType_status_idx" ON "MediaAsset"("assetType", "status");

-- CreateIndex
CREATE INDEX "MediaAsset_licenseExpiresAt_idx" ON "MediaAsset"("licenseExpiresAt");

-- CreateIndex
CREATE INDEX "MediaVersion_hash_idx" ON "MediaVersion"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "MediaVersion_assetId_version_key" ON "MediaVersion"("assetId", "version");

-- CreateIndex
CREATE INDEX "MediaLocalization_language_status_idx" ON "MediaLocalization"("language", "status");

-- CreateIndex
CREATE UNIQUE INDEX "MediaLocalization_assetId_language_key" ON "MediaLocalization"("assetId", "language");

-- CreateIndex
CREATE INDEX "MediaLicense_assetId_status_expiresAt_idx" ON "MediaLicense"("assetId", "status", "expiresAt");

-- CreateIndex
CREATE INDEX "MediaRelation_targetType_targetId_idx" ON "MediaRelation"("targetType", "targetId");

-- CreateIndex
CREATE UNIQUE INDEX "MediaRelation_sourceAssetId_targetType_targetId_relationType_key" ON "MediaRelation"("sourceAssetId", "targetType", "targetId", "relationType");

-- CreateIndex
CREATE INDEX "MediaApproval_decision_stage_idx" ON "MediaApproval"("decision", "stage");

-- CreateIndex
CREATE UNIQUE INDEX "MediaApproval_assetId_stage_key" ON "MediaApproval"("assetId", "stage");

-- CreateIndex
CREATE INDEX "MediaPublication_channel_status_idx" ON "MediaPublication"("channel", "status");

-- CreateIndex
CREATE UNIQUE INDEX "MediaPublication_assetId_channel_key" ON "MediaPublication"("assetId", "channel");

-- CreateIndex
CREATE INDEX "MediaMetric_assetId_metricType_recordedAt_idx" ON "MediaMetric"("assetId", "metricType", "recordedAt");

-- CreateIndex
CREATE INDEX "MediaMetric_publicationId_idx" ON "MediaMetric"("publicationId");

-- CreateIndex
CREATE UNIQUE INDEX "VoiceScript_slug_key" ON "VoiceScript"("slug");

-- CreateIndex
CREATE INDEX "VoiceScript_language_status_idx" ON "VoiceScript"("language", "status");

-- CreateIndex
CREATE UNIQUE INDEX "VideoProduction_slug_key" ON "VideoProduction"("slug");

-- CreateIndex
CREATE INDEX "VideoProduction_pipelineStatus_idx" ON "VideoProduction"("pipelineStatus");

-- CreateIndex
CREATE UNIQUE INDEX "MarketingCampaign_slug_key" ON "MarketingCampaign"("slug");

-- CreateIndex
CREATE INDEX "MarketingCampaign_channel_status_scheduledFor_idx" ON "MarketingCampaign"("channel", "status", "scheduledFor");

-- CreateIndex
CREATE INDEX "MarketingContent_campaignId_sortOrder_idx" ON "MarketingContent"("campaignId", "sortOrder");

-- CreateIndex
CREATE INDEX "ShareCard_userId_createdAt_idx" ON "ShareCard"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "ShareCard_sourceType_sourceId_idx" ON "ShareCard"("sourceType", "sourceId");

-- CreateIndex
CREATE INDEX "AudioProviderCapability_enabled_testStatus_idx" ON "AudioProviderCapability"("enabled", "testStatus");

-- CreateIndex
CREATE UNIQUE INDEX "AudioProviderCapability_providerKey_capability_key" ON "AudioProviderCapability"("providerKey", "capability");
