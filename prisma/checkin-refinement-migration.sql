ALTER TABLE "Checkin" ADD COLUMN "primaryArea" TEXT;
ALTER TABLE "Checkin" ADD COLUMN "secondaryArea" TEXT;
ALTER TABLE "Checkin" ADD COLUMN "manualTags" TEXT;
ALTER TABLE "Checkin" ADD COLUMN "detectedTags" TEXT;
ALTER TABLE "Checkin" ADD COLUMN "recommendationReason" TEXT;
ALTER TABLE "Checkin" ADD COLUMN "recommendedInstructionSlug" TEXT;
