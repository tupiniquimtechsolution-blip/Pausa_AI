CREATE TABLE IF NOT EXISTS "RoutineReminder" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "time" TEXT NOT NULL,
  "enabled" BOOLEAN NOT NULL DEFAULT true,
  "days" TEXT NOT NULL DEFAULT '1,2,3,4,5,6,0',
  "note" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "RoutineReminder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "RoutineReminder_userId_idx" ON "RoutineReminder"("userId");

CREATE TABLE IF NOT EXISTS "RoutineTask" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "category" TEXT NOT NULL DEFAULT 'ROTINA',
  "notes" TEXT,
  "dueDate" DATETIME,
  "dueTime" TEXT,
  "completedAt" DATETIME,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "RoutineTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "RoutineTask_userId_idx" ON "RoutineTask"("userId");

CREATE TABLE IF NOT EXISTS "SocialDowntime" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "enabled" BOOLEAN NOT NULL DEFAULT false,
  "startTime" TEXT NOT NULL DEFAULT '21:30',
  "endTime" TEXT NOT NULL DEFAULT '07:00',
  "apps" TEXT NOT NULL DEFAULT 'Instagram,TikTok,YouTube,X',
  "days" TEXT NOT NULL DEFAULT '1,2,3,4,5,6,0',
  "note" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "SocialDowntime_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "SocialDowntime_userId_key" ON "SocialDowntime"("userId");
