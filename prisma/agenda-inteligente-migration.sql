CREATE TABLE IF NOT EXISTS "AgendaEvent" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "startDateTime" DATETIME NOT NULL,
  "endDateTime" DATETIME NOT NULL,
  "allDay" BOOLEAN NOT NULL DEFAULT false,
  "timezone" TEXT NOT NULL DEFAULT 'America/Sao_Paulo',
  "category" TEXT NOT NULL DEFAULT 'ROTINA',
  "priority" TEXT NOT NULL DEFAULT 'MEDIUM',
  "energyLevel" TEXT NOT NULL DEFAULT 'MODERATE',
  "source" TEXT NOT NULL DEFAULT 'LOCAL',
  "externalCalendarId" TEXT,
  "externalEventId" TEXT,
  "recurrenceRule" TEXT,
  "reminderMinutes" TEXT NOT NULL DEFAULT '[30]',
  "status" TEXT NOT NULL DEFAULT 'CONFIRMED',
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "deletedAt" DATETIME,
  CONSTRAINT "AgendaEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "AgendaTask" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "dueDate" DATETIME,
  "estimatedDuration" INTEGER,
  "category" TEXT NOT NULL DEFAULT 'TAREFA',
  "priority" TEXT NOT NULL DEFAULT 'MEDIUM',
  "energyLevel" TEXT NOT NULL DEFAULT 'MODERATE',
  "status" TEXT NOT NULL DEFAULT 'PENDING',
  "scheduledEventId" TEXT,
  "reminders" TEXT NOT NULL DEFAULT '[]',
  "tags" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "AgendaTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "AgendaTask_scheduledEventId_fkey" FOREIGN KEY ("scheduledEventId") REFERENCES "AgendaEvent" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "AgendaReminder" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "message" TEXT,
  "dateTime" DATETIME NOT NULL,
  "recurrenceRule" TEXT,
  "priority" TEXT NOT NULL DEFAULT 'MEDIUM',
  "notificationId" TEXT,
  "linkedEventId" TEXT,
  "linkedTaskId" TEXT,
  "status" TEXT NOT NULL DEFAULT 'ACTIVE',
  "escalationLevel" INTEGER NOT NULL DEFAULT 0,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "AgendaReminder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "AgendaReminder_linkedEventId_fkey" FOREIGN KEY ("linkedEventId") REFERENCES "AgendaEvent" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "AgendaReminder_linkedTaskId_fkey" FOREIGN KEY ("linkedTaskId") REFERENCES "AgendaTask" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "AgendaHabit" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "category" TEXT NOT NULL DEFAULT 'HABITO',
  "recurrenceRule" TEXT NOT NULL,
  "target" TEXT,
  "reminderTimes" TEXT NOT NULL DEFAULT '[]',
  "streak" INTEGER NOT NULL DEFAULT 0,
  "status" TEXT NOT NULL DEFAULT 'ACTIVE',
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "AgendaHabit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "CalendarConnection" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "provider" TEXT NOT NULL,
  "externalAccountId" TEXT,
  "accessTokenEncrypted" TEXT,
  "refreshTokenEncrypted" TEXT,
  "selectedCalendarIds" TEXT NOT NULL DEFAULT '[]',
  "syncEnabled" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "CalendarConnection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "SyncQueue" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "action" TEXT NOT NULL,
  "entityType" TEXT NOT NULL,
  "entityId" TEXT NOT NULL,
  "provider" TEXT NOT NULL DEFAULT 'LOCAL',
  "status" TEXT NOT NULL DEFAULT 'PENDING',
  "retryCount" INTEGER NOT NULL DEFAULT 0,
  "lastError" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "SyncQueue_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "InboxItem" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "rawText" TEXT,
  "rawImage" TEXT,
  "rawAudio" TEXT,
  "extractedText" TEXT,
  "suggestedType" TEXT,
  "status" TEXT NOT NULL DEFAULT 'OPEN',
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "InboxItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX IF NOT EXISTS "AgendaEvent_userId_startDateTime_idx" ON "AgendaEvent"("userId", "startDateTime");
CREATE INDEX IF NOT EXISTS "AgendaEvent_userId_status_idx" ON "AgendaEvent"("userId", "status");
CREATE INDEX IF NOT EXISTS "AgendaEvent_externalCalendarId_externalEventId_idx" ON "AgendaEvent"("externalCalendarId", "externalEventId");
CREATE INDEX IF NOT EXISTS "AgendaTask_userId_status_idx" ON "AgendaTask"("userId", "status");
CREATE INDEX IF NOT EXISTS "AgendaTask_userId_dueDate_idx" ON "AgendaTask"("userId", "dueDate");
CREATE INDEX IF NOT EXISTS "AgendaReminder_userId_dateTime_idx" ON "AgendaReminder"("userId", "dateTime");
CREATE INDEX IF NOT EXISTS "AgendaReminder_userId_status_idx" ON "AgendaReminder"("userId", "status");
CREATE INDEX IF NOT EXISTS "AgendaHabit_userId_status_idx" ON "AgendaHabit"("userId", "status");
CREATE INDEX IF NOT EXISTS "CalendarConnection_userId_provider_idx" ON "CalendarConnection"("userId", "provider");
CREATE INDEX IF NOT EXISTS "SyncQueue_userId_status_idx" ON "SyncQueue"("userId", "status");
CREATE INDEX IF NOT EXISTS "SyncQueue_entityType_entityId_idx" ON "SyncQueue"("entityType", "entityId");
CREATE INDEX IF NOT EXISTS "InboxItem_userId_status_idx" ON "InboxItem"("userId", "status");
CREATE INDEX IF NOT EXISTS "InboxItem_userId_createdAt_idx" ON "InboxItem"("userId", "createdAt");
