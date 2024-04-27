-- CreateTable
CREATE TABLE "FoodItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "imageLink" TEXT,
    "description" TEXT,
    "star" INTEGER,
    "price" DOUBLE PRECISION NOT NULL,
    "isVeg" BOOLEAN NOT NULL,

    CONSTRAINT "FoodItem_pkey" PRIMARY KEY ("id")
);
