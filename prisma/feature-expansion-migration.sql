-- Pausa AI - feature expansion migration
-- Adds explicit content groups/unlock levels, achievements, focus sessions,
-- weekly plans, B2B user links and health snapshots.

ALTER TABLE "User" ADD COLUMN "companyId" TEXT;
ALTER TABLE "User" ADD COLUMN "department" TEXT;
ALTER TABLE "User" ADD COLUMN "companyRole" TEXT;

ALTER TABLE "Profile" ADD COLUMN "lastPreferenceUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Profile" ADD COLUMN "emailRecommendationsEnabled" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Profile" ADD COLUMN "pushNotificationsEnabled" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Profile" ADD COLUMN "dailyRecommendationTime" TEXT;

ALTER TABLE "ExerciseInstruction" ADD COLUMN "categoryGroup" TEXT NOT NULL DEFAULT 'PHYSICAL';
ALTER TABLE "ExerciseInstruction" ADD COLUMN "unlockLevel" INTEGER NOT NULL DEFAULT 1;

UPDATE "ExerciseInstruction"
SET "categoryGroup" = CASE
  WHEN "area" = 'BODY_MOVEMENT' OR "category" IN ('HOME_FUNCTIONAL','JUMP_ROPE','LOW_IMPACT_CARDIO','MOBILITY','SHADOW_BOXING','STRETCHING','WALKING','WORK_BREAK','YOGA')
    THEN 'PHYSICAL'
  ELSE 'MENTAL'
END,
"unlockLevel" = COALESCE("level", 1);

ALTER TABLE "YogaPractice" ADD COLUMN "unlockLevel" INTEGER NOT NULL DEFAULT 1;
UPDATE "YogaPractice" SET "unlockLevel" = COALESCE("level", 1);

CREATE TABLE IF NOT EXISTS "Achievement" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "slug" TEXT NOT NULL UNIQUE,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "icon" TEXT NOT NULL,
  "triggerType" TEXT NOT NULL,
  "targetValue" INTEGER NOT NULL DEFAULT 1,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "UserAchievement" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "achievementId" TEXT NOT NULL,
  "unlockedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "UserAchievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "UserAchievement_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "Achievement" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "UserAchievement_userId_achievementId_key" ON "UserAchievement"("userId", "achievementId");
CREATE INDEX IF NOT EXISTS "UserAchievement_userId_idx" ON "UserAchievement"("userId");

CREATE TABLE IF NOT EXISTS "FocusSession" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "durationMinutes" INTEGER NOT NULL,
  "completedSeconds" INTEGER NOT NULL DEFAULT 0,
  "suggestedExerciseSlug" TEXT,
  "source" TEXT NOT NULL DEFAULT 'ROUTINE',
  "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "completedAt" DATETIME,
  CONSTRAINT "FocusSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "FocusSession_userId_idx" ON "FocusSession"("userId");

CREATE TABLE IF NOT EXISTS "WeeklyPlan" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "weekIso" TEXT NOT NULL,
  "itemsJson" TEXT NOT NULL,
  "source" TEXT NOT NULL DEFAULT 'LOCAL',
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "WeeklyPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "WeeklyPlan_userId_weekIso_key" ON "WeeklyPlan"("userId", "weekIso");
CREATE INDEX IF NOT EXISTS "WeeklyPlan_userId_idx" ON "WeeklyPlan"("userId");

CREATE TABLE IF NOT EXISTS "HealthMetricSnapshot" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "steps" INTEGER,
  "sleepMinutes" INTEGER,
  "heartRateAvg" INTEGER,
  "source" TEXT NOT NULL DEFAULT 'MANUAL',
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "HealthMetricSnapshot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "HealthMetricSnapshot_userId_date_idx" ON "HealthMetricSnapshot"("userId", "date");
CREATE INDEX IF NOT EXISTS "User_companyId_idx" ON "User"("companyId");
