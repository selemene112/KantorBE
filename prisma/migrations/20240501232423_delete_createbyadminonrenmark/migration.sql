/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Renmark` table. All the data in the column will be lost.
  - You are about to drop the column `idAdmin` on the `Renmark` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Renmark" DROP CONSTRAINT "Renmark_idAdmin_fkey";

-- AlterTable
ALTER TABLE "Renmark" DROP COLUMN "createdBy",
DROP COLUMN "idAdmin";
