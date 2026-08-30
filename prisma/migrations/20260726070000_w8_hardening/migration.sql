-- AlterTable
ALTER TABLE "User" ADD COLUMN "sessionVersion" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "RateLimitBucket" (
    "keyHash" TEXT NOT NULL PRIMARY KEY,
    "scope" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "windowEnd" DATETIME NOT NULL,
    "lastSeenAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "RateLimitBucket_scope_windowEnd_idx" ON "RateLimitBucket"("scope", "windowEnd");

-- CreateIndex
CREATE INDEX "RateLimitBucket_lastSeenAt_idx" ON "RateLimitBucket"("lastSeenAt");
