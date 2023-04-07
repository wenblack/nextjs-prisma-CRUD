/*
  Warnings:

  - A unique constraint covering the columns `[emai]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "User_emai_key" ON "User"("emai");
