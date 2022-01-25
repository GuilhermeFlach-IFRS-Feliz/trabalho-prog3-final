/*
  Warnings:

  - The primary key for the `vote` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `vote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,ideaId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Vote` DROP PRIMARY KEY,
    DROP COLUMN `id`;

-- CreateIndex
CREATE UNIQUE INDEX `Vote_userId_ideaId_key` ON `Vote`(`userId`, `ideaId`);
