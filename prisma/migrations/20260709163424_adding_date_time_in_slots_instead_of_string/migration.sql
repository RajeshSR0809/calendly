/*
  Warnings:

  - Changed the type of `startAt` on the `slots` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endAt` on the `slots` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "slots" DROP COLUMN "startAt",
ADD COLUMN     "startAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "endAt",
ADD COLUMN     "endAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE INDEX "slots_eventTypeId_startAt_endAt_idx" ON "slots"("eventTypeId", "startAt", "endAt");

-- CreateIndex
CREATE INDEX "slots_eventTypeId_startAt_idx" ON "slots"("eventTypeId", "startAt");

-- CreateIndex
CREATE UNIQUE INDEX "slots_eventTypeId_startAt_endAt_key" ON "slots"("eventTypeId", "startAt", "endAt");
