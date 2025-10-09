/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `categoryId` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
CREATE SEQUENCE product_order_seq;
ALTER TABLE "Product" DROP COLUMN "imageUrl",
ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "order" SET DEFAULT nextval('product_order_seq'),
ALTER COLUMN "categoryId" SET NOT NULL;
ALTER SEQUENCE product_order_seq OWNED BY "Product"."order";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
