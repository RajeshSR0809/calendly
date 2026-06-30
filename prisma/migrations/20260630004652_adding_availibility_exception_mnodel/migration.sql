-- CreateTable
CREATE TABLE "availability_exception" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "type" TEXT NOT NULL,
    "reason" TEXT,
    "creadtedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "availability_exception_pkey" PRIMARY KEY ("id")
);
