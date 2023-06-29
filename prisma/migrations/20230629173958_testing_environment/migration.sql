/*
  Warnings:

  - A unique constraint covering the columns `[beerId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Review_beerId_key" ON "Review"("beerId");
