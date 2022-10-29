-- CreateTable
CREATE TABLE "xps_users" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "xps_users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "xps_categories" (
    "category_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "xps_categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "xps_transactions" (
    "transaction_id" SERIAL NOT NULL,
    "note" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "transaction_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "xps_transactions_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "xps_users_email_key" ON "xps_users"("email");

-- AddForeignKey
ALTER TABLE "xps_categories" ADD CONSTRAINT "xps_categories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "xps_users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "xps_transactions" ADD CONSTRAINT "xps_transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "xps_users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "xps_transactions" ADD CONSTRAINT "xps_transactions_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "xps_categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;
