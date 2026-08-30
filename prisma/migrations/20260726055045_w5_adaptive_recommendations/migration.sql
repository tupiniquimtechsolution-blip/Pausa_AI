-- CreateTable
CREATE TABLE "RecommendationDecision" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "checkinId" TEXT NOT NULL,
    "engineVersion" TEXT NOT NULL,
    "outcomeType" TEXT NOT NULL,
    "intensity" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "modality" TEXT NOT NULL,
    "circuitSlug" TEXT,
    "movementSourceKey" TEXT,
    "movementCount" INTEGER NOT NULL DEFAULT 1,
    "pauseSeconds" INTEGER NOT NULL DEFAULT 30,
    "alternativeSourceKey" TEXT,
    "avoidedContentJson" TEXT NOT NULL DEFAULT '[]',
    "factorsJson" TEXT NOT NULL,
    "justification" TEXT NOT NULL,
    "alternativeReason" TEXT NOT NULL,
    "canIgnore" BOOLEAN NOT NULL DEFAULT true,
    "safetyBlock" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RecommendationDecision_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "RecommendationDecision_checkinId_fkey" FOREIGN KEY ("checkinId") REFERENCES "Checkin" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SessionFeedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "sourceType" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "abandoned" BOOLEAN NOT NULL DEFAULT false,
    "responseScore" INTEGER,
    "perceivedEffort" INTEGER,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SessionFeedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NotificationPlan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "recommendationDecisionId" TEXT,
    "subject" TEXT NOT NULL,
    "scheduledFor" DATETIME NOT NULL,
    "frequency" TEXT NOT NULL,
    "endsAt" DATETIME,
    "privacy" TEXT NOT NULL DEFAULT 'HIDE_SENSITIVE',
    "deepLink" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PLANNED',
    "reason" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "NotificationPlan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "NotificationPlan_recommendationDecisionId_fkey" FOREIGN KEY ("recommendationDecisionId") REFERENCES "RecommendationDecision" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Checkin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "moodScore" INTEGER NOT NULL,
    "focusScore" INTEGER NOT NULL DEFAULT 3,
    "stressScore" INTEGER NOT NULL,
    "energyScore" INTEGER NOT NULL,
    "sleepScore" INTEGER NOT NULL,
    "dispositionScore" INTEGER NOT NULL DEFAULT 3,
    "tirednessScore" INTEGER NOT NULL DEFAULT 3,
    "anxietyScore" INTEGER NOT NULL DEFAULT 3,
    "painScore" INTEGER NOT NULL DEFAULT 1,
    "painRegion" TEXT,
    "availableMinutes" INTEGER NOT NULL DEFAULT 5,
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
INSERT INTO "new_Checkin" ("aiRecommendation", "aiSummary", "alternativeExerciseId", "createdAt", "dailyMissionDescription", "dailyMissionSteps", "dailyMissionTitle", "detectedTags", "encouragement", "energyScore", "focusScore", "id", "journalText", "manualTags", "moodScore", "primaryArea", "profileState", "recommendationReason", "recommendedExerciseId", "recommendedInstructionSlug", "riskDetected", "secondaryArea", "sleepScore", "stressScore", "userId") SELECT "aiRecommendation", "aiSummary", "alternativeExerciseId", "createdAt", "dailyMissionDescription", "dailyMissionSteps", "dailyMissionTitle", "detectedTags", "encouragement", "energyScore", "focusScore", "id", "journalText", "manualTags", "moodScore", "primaryArea", "profileState", "recommendationReason", "recommendedExerciseId", "recommendedInstructionSlug", "riskDetected", "secondaryArea", "sleepScore", "stressScore", "userId" FROM "Checkin";
DROP TABLE "Checkin";
ALTER TABLE "new_Checkin" RENAME TO "Checkin";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "RecommendationDecision_checkinId_key" ON "RecommendationDecision"("checkinId");

-- CreateIndex
CREATE INDEX "RecommendationDecision_userId_createdAt_idx" ON "RecommendationDecision"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "RecommendationDecision_engineVersion_outcomeType_idx" ON "RecommendationDecision"("engineVersion", "outcomeType");

-- CreateIndex
CREATE INDEX "SessionFeedback_userId_createdAt_idx" ON "SessionFeedback"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "SessionFeedback_sourceType_sourceId_idx" ON "SessionFeedback"("sourceType", "sourceId");

-- CreateIndex
CREATE INDEX "NotificationPlan_userId_status_scheduledFor_idx" ON "NotificationPlan"("userId", "status", "scheduledFor");

-- CreateIndex
CREATE INDEX "NotificationPlan_recommendationDecisionId_idx" ON "NotificationPlan"("recommendationDecisionId");
