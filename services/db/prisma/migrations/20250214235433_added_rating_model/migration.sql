-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "created_by_id" TEXT NOT NULL,
    "rated_user_id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Rating_created_by_id_idx" ON "Rating"("created_by_id");

-- CreateIndex
CREATE INDEX "Rating_rated_user_id_idx" ON "Rating"("rated_user_id");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_rated_user_id_fkey" FOREIGN KEY ("rated_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
