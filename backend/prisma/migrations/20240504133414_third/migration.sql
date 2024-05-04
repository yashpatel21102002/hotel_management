/*
  Warnings:

  - You are about to drop the column `imageLink` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `FoodItem` table. All the data in the column will be lost.
  - You are about to drop the column `star` on the `FoodItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FoodItem" DROP COLUMN "imageLink",
DROP COLUMN "name",
DROP COLUMN "star",
ADD COLUMN     "alt" TEXT,
ADD COLUMN     "btn" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "rating" INTEGER,
ADD COLUMN     "title" TEXT,
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "price" SET DATA TYPE TEXT,
ALTER COLUMN "isVeg" DROP NOT NULL;
