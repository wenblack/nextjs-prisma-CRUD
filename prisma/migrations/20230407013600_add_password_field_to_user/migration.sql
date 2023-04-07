/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "emai" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("avatarUrl", "createdAt", "emai", "id", "name") SELECT "avatarUrl", "createdAt", "emai", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_emai_key" ON "User"("emai");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
