/*
  Warnings:

  - You are about to drop the column `type` on the `vote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ideaId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `voteType` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Vote` DROP COLUMN `type`,
    ADD COLUMN `voteType` BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Vote_userId_key` ON `Vote`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `Vote_ideaId_key` ON `Vote`(`ideaId`);
