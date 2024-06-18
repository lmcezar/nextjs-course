/*
  Warnings:

  - You are about to drop the column `platformat` on the `Games` table. All the data in the column will be lost.
  - Added the required column `platform` to the `Games` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Games" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Games" ("createdAt", "id", "image", "link", "slug", "title", "updatedAt", "year") SELECT "createdAt", "id", "image", "link", "slug", "title", "updatedAt", "year" FROM "Games";
DROP TABLE "Games";
ALTER TABLE "new_Games" RENAME TO "Games";
CREATE UNIQUE INDEX "Games_slug_key" ON "Games"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
