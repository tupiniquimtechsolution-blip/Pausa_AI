ALTER TABLE "Profile" ADD COLUMN "sleepAlarmEnabled" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Profile" ADD COLUMN "wakeAlarmEnabled" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Profile" ADD COLUMN "nativeSleepAlarmId" TEXT;
ALTER TABLE "Profile" ADD COLUMN "nativeWakeAlarmId" TEXT;

ALTER TABLE "RoutineReminder" ADD COLUMN "description" TEXT;
ALTER TABLE "RoutineReminder" ADD COLUMN "reminderType" TEXT NOT NULL DEFAULT 'PAUSE';
ALTER TABLE "RoutineReminder" ADD COLUMN "scheduledAt" DATETIME;
ALTER TABLE "RoutineReminder" ADD COLUMN "repeatRule" TEXT NOT NULL DEFAULT 'DAILY';
ALTER TABLE "RoutineReminder" ADD COLUMN "snoozeEnabled" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "RoutineReminder" ADD COLUMN "snoozeMinutesOptions" TEXT NOT NULL DEFAULT '[5,10,15]';
ALTER TABLE "RoutineReminder" ADD COLUMN "lastSnoozedAt" DATETIME;
ALTER TABLE "RoutineReminder" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'ACTIVE';
ALTER TABLE "RoutineReminder" ADD COLUMN "nativeNotificationId" TEXT;

ALTER TABLE "RoutineTask" ADD COLUMN "description" TEXT;
ALTER TABLE "RoutineTask" ADD COLUMN "dueAt" DATETIME;
ALTER TABLE "RoutineTask" ADD COLUMN "calendarEventId" TEXT;
ALTER TABLE "RoutineTask" ADD COLUMN "notificationId" TEXT;
ALTER TABLE "RoutineTask" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'PENDING';
ALTER TABLE "RoutineTask" ADD COLUMN "priority" TEXT NOT NULL DEFAULT 'MEDIUM';

CREATE TABLE IF NOT EXISTS "YogaPractice" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "slug" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "yogaType" TEXT NOT NULL,
  "area" TEXT NOT NULL,
  "level" INTEGER NOT NULL,
  "context" TEXT NOT NULL,
  "shortDescription" TEXT NOT NULL,
  "objective" TEXT NOT NULL,
  "durationSeconds" INTEGER NOT NULL,
  "intensity" TEXT NOT NULL,
  "imageKey" TEXT NOT NULL,
  "imageSequenceKeys" TEXT NOT NULL,
  "animationPromptKey" TEXT NOT NULL,
  "imagePrompt" TEXT NOT NULL,
  "imageSequencePrompt" TEXT NOT NULL,
  "imageFrameDescriptions" TEXT NOT NULL,
  "recommendedWhen" TEXT NOT NULL,
  "avoidWhen" TEXT NOT NULL,
  "contraindications" TEXT NOT NULL,
  "howToSteps" TEXT NOT NULL,
  "postureTips" TEXT NOT NULL,
  "breathingTips" TEXT NOT NULL,
  "commonMistakes" TEXT NOT NULL,
  "safetyNotes" TEXT NOT NULL,
  "progressionTips" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS "YogaPractice_slug_key" ON "YogaPractice"("slug");

CREATE TABLE IF NOT EXISTS "YogaSequence" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "slug" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "level" INTEGER NOT NULL,
  "context" TEXT NOT NULL,
  "durationSeconds" INTEGER NOT NULL,
  "goals" TEXT NOT NULL,
  "practiceSlugs" TEXT NOT NULL,
  "imageKey" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX IF NOT EXISTS "YogaSequence_slug_key" ON "YogaSequence"("slug");

CREATE TABLE IF NOT EXISTS "YogaPracticeSession" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "practiceId" TEXT NOT NULL,
  "checkinId" TEXT,
  "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "completedAt" DATETIME,
  "xpAwarded" INTEGER NOT NULL DEFAULT 10,
  CONSTRAINT "YogaPracticeSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "YogaPracticeSession_practiceId_fkey" FOREIGN KEY ("practiceId") REFERENCES "YogaPractice" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "YogaPracticeSession_userId_idx" ON "YogaPracticeSession"("userId");
CREATE INDEX IF NOT EXISTS "YogaPracticeSession_practiceId_idx" ON "YogaPracticeSession"("practiceId");
