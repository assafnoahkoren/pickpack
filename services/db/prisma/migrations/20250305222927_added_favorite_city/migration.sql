/*
  Warnings:

  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `full_name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ALTER COLUMN "full_name" SET NOT NULL;

-- CreateTable
CREATE TABLE "FavoriteCity" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "city_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "FavoriteCity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FavoriteCity_user_id_idx" ON "FavoriteCity"("user_id");

-- CreateIndex
CREATE INDEX "FavoriteCity_city_id_idx" ON "FavoriteCity"("city_id");

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteCity_user_id_city_id_key" ON "FavoriteCity"("user_id", "city_id");

-- AddForeignKey
ALTER TABLE "FavoriteCity" ADD CONSTRAINT "FavoriteCity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteCity" ADD CONSTRAINT "FavoriteCity_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
