/*
  Warnings:

  - Added the required column `eventTypeId` to the `slots` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "slots" ADD COLUMN     "eventTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "bookings" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "slotId" INTEGER NOT NULL,
    "eventTypeId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "inviteeEmail" TEXT NOT NULL,
    "inviteeName" TEXT NOT NULL,
    "inviteeeNotes" TEXT,
    "meetLink" TEXT,
    "calendarEventId" TEXT,
    "cancelledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);
