-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Close', 'On_Progress', 'Open');

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Site" (
    "id" TEXT NOT NULL,
    "siteId" TEXT NOT NULL,
    "nameLokasi" TEXT NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "desa" TEXT NOT NULL,
    "lotitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "penyedia" TEXT NOT NULL,
    "sumberDayaListrik" TEXT NOT NULL,
    "jamDayaAktif" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MosDetail" (
    "id" TEXT NOT NULL,
    "idSite" TEXT NOT NULL,
    "antenaType" TEXT NOT NULL,
    "antenaSN" TEXT NOT NULL,
    "transceiverType" TEXT NOT NULL,
    "transceiverSN" TEXT NOT NULL,
    "modemType" TEXT NOT NULL,
    "modemSN" TEXT NOT NULL,
    "routerType" TEXT NOT NULL,
    "routerSN" TEXT NOT NULL,
    "apType" TEXT NOT NULL,
    "apSnOne" TEXT NOT NULL,
    "apSnTwo" TEXT NOT NULL,
    "stabilezerType" TEXT NOT NULL,
    "stabilezerSN" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MosDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertiSite" (
    "id" TEXT NOT NULL,
    "idSite" TEXT NOT NULL,
    "finalBeam" TEXT NOT NULL,
    "ipModem" TEXT NOT NULL,
    "ipMikrotik" TEXT NOT NULL,
    "ipApOne" TEXT NOT NULL,
    "ipApTwo" TEXT NOT NULL,
    "expSqf" TEXT NOT NULL,
    "expRtnModCod" TEXT NOT NULL,
    "expFwdModCod" TEXT NOT NULL,
    "polar" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PropertiSite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" TEXT NOT NULL,
    "idSite" TEXT NOT NULL,
    "status" "Role" NOT NULL DEFAULT 'Close',
    "durasi" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Renmark" (
    "id" TEXT NOT NULL,
    "idSite" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "idAdmin" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Renmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kontak" (
    "id" TEXT NOT NULL,
    "idSite" TEXT NOT NULL,
    "namaPic" TEXT NOT NULL,
    "noTelpon" TEXT NOT NULL DEFAULT '081-000-000-000',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kontak_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Site_siteId_key" ON "Site"("siteId");

-- CreateIndex
CREATE UNIQUE INDEX "MosDetail_idSite_key" ON "MosDetail"("idSite");

-- CreateIndex
CREATE UNIQUE INDEX "PropertiSite_idSite_key" ON "PropertiSite"("idSite");

-- CreateIndex
CREATE UNIQUE INDEX "Status_idSite_key" ON "Status"("idSite");

-- CreateIndex
CREATE UNIQUE INDEX "Kontak_idSite_key" ON "Kontak"("idSite");

-- AddForeignKey
ALTER TABLE "MosDetail" ADD CONSTRAINT "MosDetail_idSite_fkey" FOREIGN KEY ("idSite") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertiSite" ADD CONSTRAINT "PropertiSite_idSite_fkey" FOREIGN KEY ("idSite") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Status" ADD CONSTRAINT "Status_idSite_fkey" FOREIGN KEY ("idSite") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Renmark" ADD CONSTRAINT "Renmark_idSite_fkey" FOREIGN KEY ("idSite") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Renmark" ADD CONSTRAINT "Renmark_idAdmin_fkey" FOREIGN KEY ("idAdmin") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kontak" ADD CONSTRAINT "Kontak_idSite_fkey" FOREIGN KEY ("idSite") REFERENCES "Site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
