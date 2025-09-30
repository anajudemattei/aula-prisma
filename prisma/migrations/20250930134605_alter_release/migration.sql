/*
  Warnings:

  - You are about to drop the column `relaseYear` on the `movies` table. All the data in the column will be lost.
  - Added the required column `releaseYear` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."movies" DROP COLUMN "relaseYear",
ADD COLUMN     "releaseYear" INTEGER NOT NULL;
