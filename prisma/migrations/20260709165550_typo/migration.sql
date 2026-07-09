/*
  Warnings:

  - You are about to drop the column `bufferBeforMinutes` on the `event_types` table. All the data in the column will be lost.
  - Added the required column `bufferBeforeMinutes` to the `event_types` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event_types" DROP COLUMN "bufferBeforMinutes",
ADD COLUMN     "bufferBeforeMinutes" INTEGER NOT NULL;
