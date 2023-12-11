/*
  Warnings:

  - You are about to drop the column `pthotoURL` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "pthotoURL",
ADD COLUMN     "photoURL" TEXT;
