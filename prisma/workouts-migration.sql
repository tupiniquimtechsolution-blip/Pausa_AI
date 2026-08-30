CREATE TABLE IF NOT EXISTS "WorkoutRoutine" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "modality" TEXT NOT NULL,
  "minLevel" INTEGER NOT NULL DEFAULT 1,
  "description" TEXT NOT NULL,
  "intensity" TEXT NOT NULL,
  "paceMin" INTEGER,
  "paceMax" INTEGER,
  "rounds" INTEGER NOT NULL,
  "roundSeconds" INTEGER NOT NULL,
  "restSeconds" INTEGER NOT NULL,
  "warmupSteps" TEXT NOT NULL,
  "cooldownSteps" TEXT NOT NULL,
  "safetyNotes" TEXT NOT NULL,
  "alternative" TEXT,
  "xpReward" INTEGER NOT NULL DEFAULT 15,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS "WorkoutSession" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "routineId" TEXT NOT NULL,
  "roundsCompleted" INTEGER NOT NULL,
  "durationSeconds" INTEGER NOT NULL,
  "paceUsed" INTEGER,
  "xpAwarded" INTEGER NOT NULL DEFAULT 0,
  "completedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "WorkoutSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "WorkoutSession_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "WorkoutRoutine" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "WorkoutRoutine_title_key" ON "WorkoutRoutine"("title");
