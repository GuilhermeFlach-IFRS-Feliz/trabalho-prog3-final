/*
  Warnings:

  - Added the required column `type` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vote` ADD COLUMN `type` BOOLEAN NOT NULL;
