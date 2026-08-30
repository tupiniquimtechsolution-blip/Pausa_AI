CREATE TABLE IF NOT EXISTS "User" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "role" TEXT NOT NULL DEFAULT 'USER',
  "level" INTEGER NOT NULL DEFAULT 1,
  "xp" INTEGER NOT NULL DEFAULT 0,
  "lastLevelUpAt" DATETIME,
  "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS "Profile" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "mainGoal" TEXT NOT NULL,
  "dailyTime" TEXT NOT NULL,
  "preferredTime" TEXT NOT NULL,
  "stressLevel" TEXT NOT NULL,
  "difficultyArea" TEXT NOT NULL,
  "workHours" INTEGER NOT NULL DEFAULT 8,
  "freeHours" INTEGER NOT NULL DEFAULT 2,
  "sleepHours" INTEGER NOT NULL DEFAULT 7,
  "sleepAlarm" TEXT,
  "wakeAlarm" TEXT,
  "alarmsEnabled" BOOLEAN NOT NULL DEFAULT false,
  "trainingIntensityPreference" TEXT NOT NULL DEFAULT 'manter',
  "movementPreferences" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "Checkin" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "moodScore" INTEGER NOT NULL,
  "stressScore" INTEGER NOT NULL,
  "energyScore" INTEGER NOT NULL,
  "sleepScore" INTEGER NOT NULL,
  "journalText" TEXT,
  "riskDetected" BOOLEAN NOT NULL DEFAULT false,
  "aiSummary" TEXT NOT NULL,
  "aiRecommendation" TEXT NOT NULL,
  "dailyMissionTitle" TEXT NOT NULL,
  "dailyMissionDescription" TEXT NOT NULL,
  "dailyMissionSteps" TEXT NOT NULL,
  "encouragement" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Checkin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "Mission" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "durationMinutes" INTEGER NOT NULL,
  "description" TEXT NOT NULL,
  "steps" TEXT NOT NULL,
  "unlockLevel" INTEGER NOT NULL DEFAULT 1,
  "complexity" TEXT NOT NULL DEFAULT 'Simples',
  "activityType" TEXT NOT NULL DEFAULT 'Autocuidado',
  "intensity" TEXT NOT NULL DEFAULT 'Leve',
  "safetyNote" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS "MissionCompletion" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "missionId" TEXT,
  "checkinId" TEXT,
  "xpAwarded" INTEGER NOT NULL DEFAULT 0,
  "levelAfter" INTEGER NOT NULL DEFAULT 1,
  "completedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "MissionCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "MissionCompletion_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "Mission" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "MissionCompletion_checkinId_fkey" FOREIGN KEY ("checkinId") REFERENCES "Checkin" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS "B2BLead" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "company" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "employeeCount" INTEGER NOT NULL,
  "interest" TEXT NOT NULL,
  "message" TEXT,
  "status" TEXT NOT NULL DEFAULT 'NOVO',
  "notes" TEXT,
  "nextContactAt" DATETIME,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS "Company" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "plan" TEXT NOT NULL,
  "employeeLimit" INTEGER NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS "CompanyMetricMock" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "companyId" TEXT NOT NULL,
  "date" DATETIME NOT NULL,
  "avgMood" REAL NOT NULL,
  "avgStress" REAL NOT NULL,
  "avgSleep" REAL NOT NULL,
  "avgEnergy" REAL NOT NULL,
  "engagementRate" REAL NOT NULL,
  CONSTRAINT "CompanyMetricMock_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX IF NOT EXISTS "Profile_userId_key" ON "Profile"("userId");
CREATE UNIQUE INDEX IF NOT EXISTS "Mission_title_key" ON "Mission"("title");

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
