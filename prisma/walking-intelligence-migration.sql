-- Pausa AI - Caminhada Inteligente

CREATE TABLE IF NOT EXISTS "WalkingSession" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "activityType" TEXT NOT NULL DEFAULT 'walking',
  "walkingMode" TEXT NOT NULL,
  "goal" TEXT NOT NULL DEFAULT 'free',
  "startedAt" DATETIME NOT NULL,
  "endedAt" DATETIME NOT NULL,
  "durationSeconds" INTEGER NOT NULL,
  "movingTimeSeconds" INTEGER NOT NULL,
  "distanceMeters" REAL NOT NULL DEFAULT 0,
  "averagePace" TEXT NOT NULL DEFAULT '--',
  "averageSpeedKmh" REAL NOT NULL DEFAULT 0,
  "caloriesEstimated" REAL NOT NULL DEFAULT 0,
  "gpsEnabled" BOOLEAN NOT NULL DEFAULT false,
  "timerOnly" BOOLEAN NOT NULL DEFAULT true,
  "routePoints" TEXT NOT NULL DEFAULT '[]',
  "privacy" TEXT NOT NULL DEFAULT 'private',
  "hideRouteEdges" BOOLEAN NOT NULL DEFAULT false,
  "moodBefore" INTEGER,
  "moodAfter" INTEGER,
  "stressBefore" INTEGER,
  "stressAfter" INTEGER,
  "anxietyBefore" INTEGER,
  "anxietyAfter" INTEGER,
  "notes" TEXT,
  "completed" BOOLEAN NOT NULL DEFAULT true,
  "xpAwarded" INTEGER NOT NULL DEFAULT 15,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "WalkingSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "WalkingSession_userId_startedAt_idx" ON "WalkingSession"("userId", "startedAt");
CREATE INDEX IF NOT EXISTS "WalkingSession_userId_walkingMode_idx" ON "WalkingSession"("userId", "walkingMode");

CREATE TABLE IF NOT EXISTS "WalkingGoal" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "period" TEXT NOT NULL,
  "targetDistanceMeters" REAL NOT NULL DEFAULT 0,
  "targetDurationSeconds" INTEGER NOT NULL DEFAULT 0,
  "targetSessions" INTEGER NOT NULL DEFAULT 0,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "WalkingGoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "WalkingGoal_userId_period_key" ON "WalkingGoal"("userId", "period");
CREATE INDEX IF NOT EXISTS "WalkingGoal_userId_active_idx" ON "WalkingGoal"("userId", "active");

CREATE TABLE IF NOT EXISTS "WalkingFavoriteRoute" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "walkingMode" TEXT NOT NULL,
  "distanceMeters" REAL NOT NULL DEFAULT 0,
  "routePoints" TEXT NOT NULL DEFAULT '[]',
  "privacy" TEXT NOT NULL DEFAULT 'private',
  "hideRouteEdges" BOOLEAN NOT NULL DEFAULT true,
  "lastUsedAt" DATETIME,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "WalkingFavoriteRoute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "WalkingFavoriteRoute_userId_lastUsedAt_idx" ON "WalkingFavoriteRoute"("userId", "lastUsedAt");
