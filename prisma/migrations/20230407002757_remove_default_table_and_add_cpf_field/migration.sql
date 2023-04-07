/*
  Warnings:

  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cpf` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Note";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "emai" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "avatarUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("avatarUrl", "createdAt", "emai", "id", "name") SELECT "avatarUrl", "createdAt", "emai", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
