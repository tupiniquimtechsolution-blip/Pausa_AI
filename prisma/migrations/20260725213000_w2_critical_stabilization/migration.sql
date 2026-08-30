-- W2 is an additive migration. Existing agenda, focus, routine and notification data is preserved.
CREATE TABLE "ScheduleMutex" (
    "userId" TEXT NOT NULL,
    "bucketKey" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    PRIMARY KEY ("userId", "bucketKey"),
    CONSTRAINT "ScheduleMutex_userId_fkey"
      FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "ScheduleReservation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startDateTime" DATETIME NOT NULL,
    "endDateTime" DATETIME NOT NULL,
    "timezone" TEXT NOT NULL DEFAULT 'America/Sao_Paulo',
    "recurrenceRule" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "version" INTEGER NOT NULL DEFAULT 1,
    "dedupeKey" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ScheduleReservation_userId_fkey"
      FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "ScheduleReservation_dedupeKey_key" ON "ScheduleReservation"("dedupeKey");
CREATE UNIQUE INDEX "ScheduleReservation_entityType_entityId_key"
  ON "ScheduleReservation"("entityType", "entityId");
CREATE INDEX "ScheduleReservation_userId_startDateTime_endDateTime_idx"
  ON "ScheduleReservation"("userId", "startDateTime", "endDateTime");
CREATE INDEX "ScheduleReservation_userId_status_idx"
  ON "ScheduleReservation"("userId", "status");

CREATE TABLE "NotificationPolicy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "maxPerDay" INTEGER NOT NULL DEFAULT 4,
    "minimumIntervalMinutes" INTEGER NOT NULL DEFAULT 120,
    "quietHoursStart" TEXT NOT NULL DEFAULT '22:00',
    "quietHoursEnd" TEXT NOT NULL DEFAULT '07:00',
    "ignoredReductionAfter" INTEGER NOT NULL DEFAULT 3,
    "lockScreenPrivacy" TEXT NOT NULL DEFAULT 'HIDE_SENSITIVE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "NotificationPolicy_userId_fkey"
      FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "NotificationPolicy_userId_key" ON "NotificationPolicy"("userId");

ALTER TABLE "SocialDowntime" ADD COLUMN "objective" TEXT NOT NULL DEFAULT 'PROTECT_FOCUS';
ALTER TABLE "SocialDowntime" ADD COLUMN "categoriesJson" TEXT NOT NULL DEFAULT '[]';
ALTER TABLE "SocialDowntime" ADD COLUMN "exceptionsJson" TEXT NOT NULL DEFAULT '[]';
ALTER TABLE "SocialDowntime" ADD COLUMN "platformState" TEXT NOT NULL DEFAULT 'MANUAL_CONFIGURATION';
ALTER TABLE "SocialDowntime" ADD COLUMN "lastReportJson" TEXT NOT NULL DEFAULT '{}';

ALTER TABLE "FocusSession" ADD COLUMN "completionToken" TEXT;
ALTER TABLE "FocusSession" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'RUNNING';
ALTER TABLE "FocusSession" ADD COLUMN "pausedAt" DATETIME;
ALTER TABLE "FocusSession" ADD COLUMN "cancelledAt" DATETIME;
ALTER TABLE "FocusSession" ADD COLUMN "updatedAt" DATETIME;

CREATE UNIQUE INDEX "FocusSession_completionToken_key" ON "FocusSession"("completionToken");
CREATE INDEX "FocusSession_userId_status_idx" ON "FocusSession"("userId", "status");
