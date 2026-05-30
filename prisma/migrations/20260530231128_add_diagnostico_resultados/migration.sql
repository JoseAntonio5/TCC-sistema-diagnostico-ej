/*
  Warnings:

  - You are about to drop the column `notaFinal` on the `diagnostico` table. All the data in the column will be lost.
  - Added the required column `nivelMaturidade` to the `Diagnostico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notaGeral` to the `Diagnostico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percentualMaturidade` to the `Diagnostico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `porDimensao` to the `Diagnostico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `porDiretoria` to the `Diagnostico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `diagnostico` DROP COLUMN `notaFinal`,
    ADD COLUMN `nivelMaturidade` VARCHAR(191) NOT NULL,
    ADD COLUMN `notaGeral` DOUBLE NOT NULL,
    ADD COLUMN `percentualMaturidade` DOUBLE NOT NULL,
    ADD COLUMN `porDimensao` JSON NOT NULL,
    ADD COLUMN `porDiretoria` JSON NOT NULL;

-- CreateTable
CREATE TABLE `Resposta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `diagnosticoId` INTEGER NOT NULL,
    `perguntaId` INTEGER NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,
    `diretoria` VARCHAR(191) NOT NULL,
    `dimensao` VARCHAR(191) NOT NULL,
    `texto` TEXT NOT NULL,
    `valor` INTEGER NOT NULL,

    INDEX `Resposta_diagnosticoId_idx`(`diagnosticoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Resposta` ADD CONSTRAINT `Resposta_diagnosticoId_fkey` FOREIGN KEY (`diagnosticoId`) REFERENCES `Diagnostico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `diagnostico` RENAME INDEX `Diagnostico_empresaId_fkey` TO `Diagnostico_empresaId_idx`;
