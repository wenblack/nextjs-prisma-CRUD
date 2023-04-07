/*
  Warnings:

  - You are about to drop the column `cpf` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "emai" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("avatarUrl", "createdAt", "emai", "id", "name") SELECT "avatarUrl", "createdAt", "emai", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
