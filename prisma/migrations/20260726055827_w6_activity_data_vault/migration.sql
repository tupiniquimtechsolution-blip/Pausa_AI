-- CreateTable
CREATE TABLE "PausaActivity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "clientActivityId" TEXT,
    "activityType" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pausedAt" DATETIME,
    "resumedAt" DATETIME,
    "endedAt" DATETIME,
    "totalTimeSeconds" INTEGER NOT NULL DEFAULT 0,
    "movingTimeSeconds" INTEGER NOT NULL DEFAULT 0,
    "pausedTimeSeconds" INTEGER NOT NULL DEFAULT 0,
    "distanceMeters" REAL NOT NULL DEFAULT 0,
    "averagePaceSecondsKm" REAL,
    "averageSpeedKmh" REAL NOT NULL DEFAULT 0,
    "pauseCount" INTEGER NOT NULL DEFAULT 0,
    "elevationGainMeters" REAL NOT NULL DEFAULT 0,
    "perceivedEffortBefore" INTEGER,
    "perceivedEffortAfter" INTEGER,
    "responseBefore" INTEGER,
    "responseAfter" INTEGER,
    "privacy" TEXT NOT NULL DEFAULT 'PRIVATE',
    "hideRouteEdges" BOOLEAN NOT NULL DEFAULT true,
    "syncStatus" TEXT NOT NULL DEFAULT 'SYNCED',
    "metricsVersion" TEXT NOT NULL DEFAULT 'pausa-metrics-2026.07.25-v1',
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PausaActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ActivityPoint" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "activityId" TEXT NOT NULL,
    "capturedAt" DATETIME NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "accuracyMeters" REAL,
    "altitudeMeters" REAL,
    "sequence" INTEGER NOT NULL,
    "accepted" BOOLEAN NOT NULL DEFAULT true,
    "rejectionReason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ActivityPoint_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "PausaActivity" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ActivityMetric" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "activityId" TEXT NOT NULL,
    "metricType" TEXT NOT NULL,
    "numericValue" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    "sourceKind" TEXT NOT NULL,
    "engineVersion" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ActivityMetric_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "PausaActivity" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ActivityRoute" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "sourceActivityId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "photoPath" TEXT,
    "privacy" TEXT NOT NULL DEFAULT 'PRIVATE',
    "hideRouteEdges" BOOLEAN NOT NULL DEFAULT true,
    "trimStartPoints" INTEGER NOT NULL DEFAULT 0,
    "trimEndPoints" INTEGER NOT NULL DEFAULT 0,
    "shareAllowed" BOOLEAN NOT NULL DEFAULT false,
    "routePointsJson" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ActivityRoute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ActivityRoute_sourceActivityId_fkey" FOREIGN KEY ("sourceActivityId") REFERENCES "PausaActivity" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HealthProfileEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "metricType" TEXT NOT NULL,
    "valueJson" TEXT NOT NULL,
    "recordedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sourceKind" TEXT NOT NULL,
    "consentId" TEXT,
    "deviceId" TEXT,
    "quality" TEXT NOT NULL DEFAULT 'REPORTED',
    "correctionOfId" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "HealthProfileEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DataConsent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "sourceKind" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'GRANTED',
    "grantedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" DATETIME,
    "retentionDays" INTEGER NOT NULL DEFAULT 365,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DataConsent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ConnectedDevice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "deviceType" TEXT NOT NULL,
    "appName" TEXT,
    "connectionType" TEXT NOT NULL,
    "capabilitiesJson" TEXT NOT NULL DEFAULT '[]',
    "status" TEXT NOT NULL DEFAULT 'DECLARED',
    "lastTestedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ConnectedDevice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DataVaultEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "recordType" TEXT NOT NULL,
    "recordId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "sourceKind" TEXT NOT NULL,
    "consentId" TEXT,
    "quality" TEXT NOT NULL,
    "metadataJson" TEXT NOT NULL DEFAULT '{}',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DataVaultEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "PausaActivity_userId_startedAt_idx" ON "PausaActivity"("userId", "startedAt");

-- CreateIndex
CREATE INDEX "PausaActivity_userId_status_idx" ON "PausaActivity"("userId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "PausaActivity_userId_clientActivityId_key" ON "PausaActivity"("userId", "clientActivityId");

-- CreateIndex
CREATE INDEX "ActivityPoint_activityId_capturedAt_idx" ON "ActivityPoint"("activityId", "capturedAt");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityPoint_activityId_sequence_key" ON "ActivityPoint"("activityId", "sequence");

-- CreateIndex
CREATE INDEX "ActivityMetric_sourceKind_engineVersion_idx" ON "ActivityMetric"("sourceKind", "engineVersion");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityMetric_activityId_metricType_key" ON "ActivityMetric"("activityId", "metricType");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityRoute_sourceActivityId_key" ON "ActivityRoute"("sourceActivityId");

-- CreateIndex
CREATE INDEX "ActivityRoute_userId_updatedAt_idx" ON "ActivityRoute"("userId", "updatedAt");

-- CreateIndex
CREATE INDEX "HealthProfileEntry_userId_metricType_recordedAt_idx" ON "HealthProfileEntry"("userId", "metricType", "recordedAt");

-- CreateIndex
CREATE INDEX "HealthProfileEntry_sourceKind_idx" ON "HealthProfileEntry"("sourceKind");

-- CreateIndex
CREATE INDEX "DataConsent_userId_status_idx" ON "DataConsent"("userId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "DataConsent_userId_scope_sourceKind_key" ON "DataConsent"("userId", "scope", "sourceKind");

-- CreateIndex
CREATE INDEX "ConnectedDevice_userId_status_idx" ON "ConnectedDevice"("userId", "status");

-- CreateIndex
CREATE INDEX "DataVaultEvent_userId_createdAt_idx" ON "DataVaultEvent"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "DataVaultEvent_recordType_recordId_idx" ON "DataVaultEvent"("recordType", "recordId");
