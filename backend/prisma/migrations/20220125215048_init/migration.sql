-- DropForeignKey
ALTER TABLE `idea` DROP FOREIGN KEY `Idea_userId_fkey`;

-- DropForeignKey
ALTER TABLE `vote` DROP FOREIGN KEY `Vote_ideaId_fkey`;

-- DropForeignKey
ALTER TABLE `vote` DROP FOREIGN KEY `Vote_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Idea` ADD CONSTRAINT `Idea_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_ideaId_fkey` FOREIGN KEY (`ideaId`) REFERENCES `Idea`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
