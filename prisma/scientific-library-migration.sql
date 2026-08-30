ALTER TABLE "Profile" ADD COLUMN "theme" TEXT NOT NULL DEFAULT 'system';
ALTER TABLE "Profile" ADD COLUMN "language" TEXT NOT NULL DEFAULT 'pt-BR';
ALTER TABLE "Checkin" ADD COLUMN "focusScore" INTEGER NOT NULL DEFAULT 3;
ALTER TABLE "Checkin" ADD COLUMN "profileState" TEXT;
ALTER TABLE "Checkin" ADD COLUMN "recommendedExerciseId" TEXT;
ALTER TABLE "Checkin" ADD COLUMN "alternativeExerciseId" TEXT;

CREATE TABLE IF NOT EXISTS "Exercise" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "area" TEXT NOT NULL,
  "level" INTEGER NOT NULL,
  "title" TEXT NOT NULL,
  "shortDescription" TEXT NOT NULL,
  "durationMinutes" INTEGER NOT NULL,
  "difficultyLabel" TEXT NOT NULL,
  "objective" TEXT NOT NULL,
  "steps" TEXT NOT NULL,
  "contraindications" TEXT NOT NULL,
  "recommendedWhen" TEXT NOT NULL,
  "avoidWhen" TEXT NOT NULL,
  "xpReward" INTEGER NOT NULL DEFAULT 15,
  "imageKey" TEXT NOT NULL,
  "animationPromptKey" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS "Exercise_title_key" ON "Exercise"("title");

CREATE TABLE IF NOT EXISTS "ExerciseProgress" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "area" TEXT NOT NULL,
  "completedCount" INTEGER NOT NULL DEFAULT 0,
  "currentAreaLevel" INTEGER NOT NULL DEFAULT 1,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "ExerciseProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "ExerciseProgress_userId_area_key" ON "ExerciseProgress"("userId", "area");

CREATE TABLE IF NOT EXISTS "ExerciseSession" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "exerciseId" TEXT NOT NULL,
  "checkinId" TEXT,
  "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "completedAt" DATETIME,
  "xpAwarded" INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "ExerciseSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ExerciseSession_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ExerciseSession_checkinId_fkey" FOREIGN KEY ("checkinId") REFERENCES "Checkin" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "Partner" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "benefitProvider" TEXT NOT NULL,
  "websiteUrl" TEXT,
  "instagramUrl" TEXT,
  "bookingUrl" TEXT,
  "status" TEXT NOT NULL DEFAULT 'COMING_SOON',
  "description" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS "PartnerInterest" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "partnerId" TEXT NOT NULL,
  "interestType" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "PartnerInterest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "PartnerInterest_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
