CREATE TABLE IF NOT EXISTS "ExerciseInstruction" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "slug" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "area" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "level" INTEGER NOT NULL,
  "instructionType" TEXT NOT NULL,
  "shortDescription" TEXT NOT NULL,
  "objective" TEXT NOT NULL,
  "durationSeconds" INTEGER,
  "sets" INTEGER,
  "reps" TEXT,
  "restSeconds" INTEGER,
  "intensity" TEXT NOT NULL,
  "equipment" TEXT NOT NULL,
  "imageKey" TEXT NOT NULL,
  "animationPromptKey" TEXT NOT NULL,
  "recommendedWhen" TEXT NOT NULL,
  "avoidWhen" TEXT NOT NULL,
  "contraindications" TEXT NOT NULL,
  "howToSteps" TEXT NOT NULL,
  "postureTips" TEXT NOT NULL,
  "breathingTips" TEXT NOT NULL,
  "commonMistakes" TEXT NOT NULL,
  "safetyNotes" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS "ExerciseInstruction_slug_key" ON "ExerciseInstruction"("slug");

CREATE TABLE IF NOT EXISTS "ExerciseInstructionSession" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "instructionId" TEXT NOT NULL,
  "checkinId" TEXT,
  "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "completedAt" DATETIME,
  "xpAwarded" INTEGER NOT NULL DEFAULT 10,
  CONSTRAINT "ExerciseInstructionSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "ExerciseInstructionSession_instructionId_fkey" FOREIGN KEY ("instructionId") REFERENCES "ExerciseInstruction" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
