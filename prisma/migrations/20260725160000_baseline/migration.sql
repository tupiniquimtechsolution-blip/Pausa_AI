-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "plan" TEXT NOT NULL DEFAULT 'FREE',
    "companyId" TEXT,
    "department" TEXT,
    "companyRole" TEXT,
    "level" INTEGER NOT NULL DEFAULT 1,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "lastLevelUpAt" DATETIME,
    "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Profile" (
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
    "sleepAlarmEnabled" BOOLEAN NOT NULL DEFAULT false,
    "wakeAlarmEnabled" BOOLEAN NOT NULL DEFAULT false,
    "nativeSleepAlarmId" TEXT,
    "nativeWakeAlarmId" TEXT,
    "trainingIntensityPreference" TEXT NOT NULL DEFAULT 'manter',
    "movementPreferences" TEXT,
    "theme" TEXT NOT NULL DEFAULT 'system',
    "language" TEXT NOT NULL DEFAULT 'pt-BR',
    "lastPreferenceUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emailRecommendationsEnabled" BOOLEAN NOT NULL DEFAULT false,
    "pushNotificationsEnabled" BOOLEAN NOT NULL DEFAULT false,
    "dailyRecommendationTime" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Checkin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "moodScore" INTEGER NOT NULL,
    "focusScore" INTEGER NOT NULL DEFAULT 3,
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
    "profileState" TEXT,
    "primaryArea" TEXT,
    "secondaryArea" TEXT,
    "manualTags" TEXT,
    "detectedTags" TEXT,
    "recommendationReason" TEXT,
    "recommendedInstructionSlug" TEXT,
    "recommendedExerciseId" TEXT,
    "alternativeExerciseId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Checkin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Checkin_recommendedExerciseId_fkey" FOREIGN KEY ("recommendedExerciseId") REFERENCES "Exercise" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Checkin_alternativeExerciseId_fkey" FOREIGN KEY ("alternativeExerciseId") REFERENCES "Exercise" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "steps" TEXT NOT NULL,
    "unlockLevel" INTEGER NOT NULL DEFAULT 1,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "complexity" TEXT NOT NULL DEFAULT 'Simples',
    "activityType" TEXT NOT NULL DEFAULT 'Autocuidado',
    "intensity" TEXT NOT NULL DEFAULT 'Leve',
    "safetyNote" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MissionCompletion" (
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

-- CreateTable
CREATE TABLE "WorkoutRoutine" (
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

-- CreateTable
CREATE TABLE "WorkoutSession" (
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

-- CreateTable
CREATE TABLE "Exercise" (
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

-- CreateTable
CREATE TABLE "ExerciseProgress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "completedCount" INTEGER NOT NULL DEFAULT 0,
    "currentAreaLevel" INTEGER NOT NULL DEFAULT 1,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ExerciseProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ExerciseSession" (
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

-- CreateTable
CREATE TABLE "ExerciseInstruction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "categoryGroup" TEXT NOT NULL DEFAULT 'PHYSICAL',
    "level" INTEGER NOT NULL,
    "unlockLevel" INTEGER NOT NULL DEFAULT 1,
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

-- CreateTable
CREATE TABLE "ExerciseInstructionSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "instructionId" TEXT NOT NULL,
    "checkinId" TEXT,
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    "xpAwarded" INTEGER NOT NULL DEFAULT 10,
    "closingMessage" TEXT,
    "nextSuggestion" TEXT,
    CONSTRAINT "ExerciseInstructionSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ExerciseInstructionSession_instructionId_fkey" FOREIGN KEY ("instructionId") REFERENCES "ExerciseInstruction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ExerciseInstructionSession_checkinId_fkey" FOREIGN KEY ("checkinId") REFERENCES "Checkin" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InstructionalVideo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "targetType" TEXT NOT NULL,
    "targetSlug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "durationSeconds" INTEGER NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "intensity" TEXT NOT NULL,
    "equipment" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "benefitPrimary" TEXT NOT NULL,
    "narrationScript" TEXT NOT NULL,
    "batchWave" INTEGER NOT NULL,
    "formatPrimary" TEXT NOT NULL DEFAULT '9:16',
    "formatSecondary" TEXT NOT NULL DEFAULT '1:1',
    "status" TEXT NOT NULL DEFAULT 'PLANNED',
    "approvalChecklist" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CatalogVisualAsset" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "identityKey" TEXT NOT NULL,
    "catalogSection" TEXT NOT NULL,
    "catalogArea" TEXT NOT NULL,
    "catalogIdOrSlug" TEXT NOT NULL,
    "catalogTitle" TEXT NOT NULL,
    "matchType" TEXT NOT NULL,
    "matchedReferenceMovement" TEXT NOT NULL,
    "imageAction" TEXT NOT NULL,
    "visualAssetMode" TEXT NOT NULL,
    "pullFromReferenceMovement" TEXT NOT NULL,
    "reusedFromReferenceId" TEXT,
    "reusedFromReferenceIds" TEXT NOT NULL DEFAULT '[]',
    "reusedFromMovementId" TEXT,
    "reusedFromMovementIds" TEXT NOT NULL DEFAULT '[]',
    "reusedFromAssetPattern" TEXT NOT NULL,
    "reusedFromAssetPatterns" TEXT NOT NULL DEFAULT '[]',
    "canonicalPoseId" TEXT,
    "imageSourcePath" TEXT,
    "resolvedImagePaths" TEXT NOT NULL DEFAULT '[]',
    "physicalFilesFound" TEXT NOT NULL DEFAULT '[]',
    "physicalFilesMissing" TEXT NOT NULL DEFAULT '[]',
    "requiredPhysicalFiles" TEXT NOT NULL DEFAULT '[]',
    "requiresCompleteAssetSet" BOOLEAN NOT NULL DEFAULT true,
    "approvalRequirement" TEXT NOT NULL DEFAULT 'NONE',
    "approvalStatus" TEXT NOT NULL DEFAULT 'APPROVED',
    "dependencyMovementIds" TEXT NOT NULL DEFAULT '[]',
    "releasePolicy" TEXT NOT NULL DEFAULT 'COMPLETE',
    "decisionDate" DATETIME,
    "approvalDate" DATETIME,
    "approvalNote" TEXT,
    "blockReasonCode" TEXT,
    "assetStatus" TEXT NOT NULL DEFAULT 'PLANNED',
    "videoStatus" TEXT NOT NULL DEFAULT 'PLANNED',
    "needsReview" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CatalogReconciliation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "identityKey" TEXT NOT NULL,
    "catalogArea" TEXT NOT NULL,
    "catalogIdOrSlug" TEXT NOT NULL,
    "catalogTitle" TEXT NOT NULL,
    "sourceCatalog" TEXT NOT NULL,
    "reconciliationStatus" TEXT NOT NULL,
    "imageStatus" TEXT NOT NULL,
    "archiveReason" TEXT,
    "mappingCount" INTEGER NOT NULL DEFAULT 0,
    "matchedReferenceMovementIds" TEXT NOT NULL DEFAULT '[]',
    "resolvedImagePaths" TEXT NOT NULL DEFAULT '[]',
    "candidateImagePaths" TEXT NOT NULL DEFAULT '[]',
    "blockReasonCode" TEXT,
    "needsReview" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ActivityCompletion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dedupeKey" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "activityType" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "checkinId" TEXT,
    "completionToken" TEXT NOT NULL,
    "domainRecordType" TEXT NOT NULL,
    "domainRecordId" TEXT,
    "xpAwarded" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ActivityCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ActivityCompletion_checkinId_fkey" FOREIGN KEY ("checkinId") REFERENCES "Checkin" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PasswordResetToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "usedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PasswordResetToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RoutineReminder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "days" TEXT NOT NULL DEFAULT '1,2,3,4,5,6,0',
    "note" TEXT,
    "reminderType" TEXT NOT NULL DEFAULT 'PAUSE',
    "scheduledAt" DATETIME,
    "repeatRule" TEXT NOT NULL DEFAULT 'DAILY',
    "snoozeEnabled" BOOLEAN NOT NULL DEFAULT false,
    "snoozeMinutesOptions" TEXT NOT NULL DEFAULT '[5,10,15]',
    "lastSnoozedAt" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "nativeNotificationId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RoutineReminder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RoutineTask" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL DEFAULT 'ROTINA',
    "notes" TEXT,
    "dueDate" DATETIME,
    "dueTime" TEXT,
    "dueAt" DATETIME,
    "calendarEventId" TEXT,
    "notificationId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "priority" TEXT NOT NULL DEFAULT 'MEDIUM',
    "completedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RoutineTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SocialDowntime" (
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

-- CreateTable
CREATE TABLE "AgendaEvent" (
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

-- CreateTable
CREATE TABLE "AgendaTask" (
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

-- CreateTable
CREATE TABLE "AgendaReminder" (
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

-- CreateTable
CREATE TABLE "AgendaHabit" (
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

-- CreateTable
CREATE TABLE "CalendarConnection" (
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

-- CreateTable
CREATE TABLE "SyncQueue" (
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

-- CreateTable
CREATE TABLE "InboxItem" (
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

-- CreateTable
CREATE TABLE "YogaPractice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "yogaType" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "unlockLevel" INTEGER NOT NULL DEFAULT 1,
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
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "YogaSequence" (
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
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "YogaPracticeSession" (
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

-- CreateTable
CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "triggerType" TEXT NOT NULL,
    "targetValue" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "UserAchievement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "achievementId" TEXT NOT NULL,
    "unlockedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserAchievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserAchievement_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "Achievement" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FocusSession" (
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

-- CreateTable
CREATE TABLE "WeeklyPlan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "weekIso" TEXT NOT NULL,
    "itemsJson" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'LOCAL',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WeeklyPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HealthMetricSnapshot" (
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

-- CreateTable
CREATE TABLE "WalkingSession" (
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

-- CreateTable
CREATE TABLE "WalkingGoal" (
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

-- CreateTable
CREATE TABLE "WalkingFavoriteRoute" (
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

-- CreateTable
CREATE TABLE "B2BLead" (
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

-- CreateTable
CREATE TABLE "Partner" (
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

-- CreateTable
CREATE TABLE "PartnerInterest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "interestType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PartnerInterest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PartnerInterest_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "employeeLimit" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CompanyMetricMock" (
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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_companyId_idx" ON "User"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Mission_title_key" ON "Mission"("title");

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutRoutine_title_key" ON "WorkoutRoutine"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_title_key" ON "Exercise"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseProgress_userId_area_key" ON "ExerciseProgress"("userId", "area");

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseInstruction_slug_key" ON "ExerciseInstruction"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "InstructionalVideo_slug_key" ON "InstructionalVideo"("slug");

-- CreateIndex
CREATE INDEX "InstructionalVideo_targetType_targetSlug_idx" ON "InstructionalVideo"("targetType", "targetSlug");

-- CreateIndex
CREATE INDEX "InstructionalVideo_batchWave_idx" ON "InstructionalVideo"("batchWave");

-- CreateIndex
CREATE INDEX "InstructionalVideo_status_idx" ON "InstructionalVideo"("status");

-- CreateIndex
CREATE UNIQUE INDEX "CatalogVisualAsset_identityKey_key" ON "CatalogVisualAsset"("identityKey");

-- CreateIndex
CREATE INDEX "CatalogVisualAsset_catalogArea_idx" ON "CatalogVisualAsset"("catalogArea");

-- CreateIndex
CREATE INDEX "CatalogVisualAsset_catalogSection_catalogIdOrSlug_idx" ON "CatalogVisualAsset"("catalogSection", "catalogIdOrSlug");

-- CreateIndex
CREATE INDEX "CatalogVisualAsset_assetStatus_idx" ON "CatalogVisualAsset"("assetStatus");

-- CreateIndex
CREATE INDEX "CatalogVisualAsset_visualAssetMode_idx" ON "CatalogVisualAsset"("visualAssetMode");

-- CreateIndex
CREATE UNIQUE INDEX "CatalogReconciliation_identityKey_key" ON "CatalogReconciliation"("identityKey");

-- CreateIndex
CREATE INDEX "CatalogReconciliation_catalogArea_catalogIdOrSlug_idx" ON "CatalogReconciliation"("catalogArea", "catalogIdOrSlug");

-- CreateIndex
CREATE INDEX "CatalogReconciliation_reconciliationStatus_idx" ON "CatalogReconciliation"("reconciliationStatus");

-- CreateIndex
CREATE INDEX "CatalogReconciliation_sourceCatalog_idx" ON "CatalogReconciliation"("sourceCatalog");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityCompletion_dedupeKey_key" ON "ActivityCompletion"("dedupeKey");

-- CreateIndex
CREATE INDEX "ActivityCompletion_userId_activityType_targetId_idx" ON "ActivityCompletion"("userId", "activityType", "targetId");

-- CreateIndex
CREATE INDEX "ActivityCompletion_checkinId_idx" ON "ActivityCompletion"("checkinId");

-- CreateIndex
CREATE INDEX "ActivityCompletion_completionToken_idx" ON "ActivityCompletion"("completionToken");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_tokenHash_key" ON "PasswordResetToken"("tokenHash");

-- CreateIndex
CREATE INDEX "PasswordResetToken_userId_idx" ON "PasswordResetToken"("userId");

-- CreateIndex
CREATE INDEX "RoutineReminder_userId_idx" ON "RoutineReminder"("userId");

-- CreateIndex
CREATE INDEX "RoutineTask_userId_idx" ON "RoutineTask"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SocialDowntime_userId_key" ON "SocialDowntime"("userId");

-- CreateIndex
CREATE INDEX "AgendaEvent_userId_startDateTime_idx" ON "AgendaEvent"("userId", "startDateTime");

-- CreateIndex
CREATE INDEX "AgendaEvent_userId_status_idx" ON "AgendaEvent"("userId", "status");

-- CreateIndex
CREATE INDEX "AgendaEvent_externalCalendarId_externalEventId_idx" ON "AgendaEvent"("externalCalendarId", "externalEventId");

-- CreateIndex
CREATE INDEX "AgendaTask_userId_status_idx" ON "AgendaTask"("userId", "status");

-- CreateIndex
CREATE INDEX "AgendaTask_userId_dueDate_idx" ON "AgendaTask"("userId", "dueDate");

-- CreateIndex
CREATE INDEX "AgendaReminder_userId_dateTime_idx" ON "AgendaReminder"("userId", "dateTime");

-- CreateIndex
CREATE INDEX "AgendaReminder_userId_status_idx" ON "AgendaReminder"("userId", "status");

-- CreateIndex
CREATE INDEX "AgendaHabit_userId_status_idx" ON "AgendaHabit"("userId", "status");

-- CreateIndex
CREATE INDEX "CalendarConnection_userId_provider_idx" ON "CalendarConnection"("userId", "provider");

-- CreateIndex
CREATE INDEX "SyncQueue_userId_status_idx" ON "SyncQueue"("userId", "status");

-- CreateIndex
CREATE INDEX "SyncQueue_entityType_entityId_idx" ON "SyncQueue"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "InboxItem_userId_status_idx" ON "InboxItem"("userId", "status");

-- CreateIndex
CREATE INDEX "InboxItem_userId_createdAt_idx" ON "InboxItem"("userId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "YogaPractice_slug_key" ON "YogaPractice"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "YogaSequence_slug_key" ON "YogaSequence"("slug");

-- CreateIndex
CREATE INDEX "YogaPracticeSession_userId_idx" ON "YogaPracticeSession"("userId");

-- CreateIndex
CREATE INDEX "YogaPracticeSession_practiceId_idx" ON "YogaPracticeSession"("practiceId");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_slug_key" ON "Achievement"("slug");

-- CreateIndex
CREATE INDEX "UserAchievement_userId_idx" ON "UserAchievement"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAchievement_userId_achievementId_key" ON "UserAchievement"("userId", "achievementId");

-- CreateIndex
CREATE INDEX "FocusSession_userId_idx" ON "FocusSession"("userId");

-- CreateIndex
CREATE INDEX "WeeklyPlan_userId_idx" ON "WeeklyPlan"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "WeeklyPlan_userId_weekIso_key" ON "WeeklyPlan"("userId", "weekIso");

-- CreateIndex
CREATE INDEX "HealthMetricSnapshot_userId_date_idx" ON "HealthMetricSnapshot"("userId", "date");

-- CreateIndex
CREATE INDEX "WalkingSession_userId_startedAt_idx" ON "WalkingSession"("userId", "startedAt");

-- CreateIndex
CREATE INDEX "WalkingSession_userId_walkingMode_idx" ON "WalkingSession"("userId", "walkingMode");

-- CreateIndex
CREATE INDEX "WalkingGoal_userId_active_idx" ON "WalkingGoal"("userId", "active");

-- CreateIndex
CREATE UNIQUE INDEX "WalkingGoal_userId_period_key" ON "WalkingGoal"("userId", "period");

-- CreateIndex
CREATE INDEX "WalkingFavoriteRoute_userId_lastUsedAt_idx" ON "WalkingFavoriteRoute"("userId", "lastUsedAt");

