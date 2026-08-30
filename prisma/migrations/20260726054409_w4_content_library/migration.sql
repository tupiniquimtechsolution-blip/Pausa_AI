-- DropIndex
DROP INDEX "FocusSession_userId_idx";

-- CreateTable
CREATE TABLE "ContentCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "pillar" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'pt-BR',
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "approvedAt" DATETIME,
    "version" INTEGER NOT NULL DEFAULT 1,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ContentCircuit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "durationSeconds" INTEGER,
    "locale" TEXT NOT NULL DEFAULT 'pt-BR',
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "approvedAt" DATETIME,
    "version" INTEGER NOT NULL DEFAULT 1,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ContentCircuit_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ContentCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContentMovement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "circuitId" TEXT NOT NULL,
    "sourceType" TEXT NOT NULL,
    "sourceKey" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "durationSeconds" INTEGER,
    "difficulty" TEXT NOT NULL,
    "progression" TEXT NOT NULL,
    "thumbnailKey" TEXT NOT NULL,
    "relatedAssetsJson" TEXT NOT NULL DEFAULT '[]',
    "contraindications" TEXT NOT NULL DEFAULT '[]',
    "locale" TEXT NOT NULL DEFAULT 'pt-BR',
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "approvedAt" DATETIME,
    "version" INTEGER NOT NULL DEFAULT 1,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ContentMovement_circuitId_fkey" FOREIGN KEY ("circuitId") REFERENCES "ContentCircuit" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EditorialCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "sourceName" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "equivalentText" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "locale" TEXT NOT NULL DEFAULT 'pt-BR',
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "approvedAt" DATETIME,
    "version" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ContentCategory_slug_key" ON "ContentCategory"("slug");

-- CreateIndex
CREATE INDEX "ContentCategory_pillar_status_sortOrder_idx" ON "ContentCategory"("pillar", "status", "sortOrder");

-- CreateIndex
CREATE INDEX "ContentCategory_modality_status_idx" ON "ContentCategory"("modality", "status");

-- CreateIndex
CREATE UNIQUE INDEX "ContentCircuit_slug_key" ON "ContentCircuit"("slug");

-- CreateIndex
CREATE INDEX "ContentCircuit_categoryId_status_sortOrder_idx" ON "ContentCircuit"("categoryId", "status", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "ContentMovement_slug_key" ON "ContentMovement"("slug");

-- CreateIndex
CREATE INDEX "ContentMovement_circuitId_status_sortOrder_idx" ON "ContentMovement"("circuitId", "status", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "ContentMovement_sourceType_sourceKey_key" ON "ContentMovement"("sourceType", "sourceKey");

-- CreateIndex
CREATE UNIQUE INDEX "EditorialCard_slug_key" ON "EditorialCard"("slug");

-- CreateIndex
CREATE INDEX "EditorialCard_category_status_idx" ON "EditorialCard"("category", "status");
