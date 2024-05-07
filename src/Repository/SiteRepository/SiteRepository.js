const { propertiSite } = require("../../Config/Prisma");
const fs = require("fs");
const csv = require("csv-parser");
const { json } = require("express");

const registerSiteRepository = async (data, prisma) => {
  try {
    const site = await prisma.site.create({
      data: {
        siteId: data.siteId,
        nameLokasi: data.nameLokasi,
        kabupaten: data.kabupaten,
        kecamatan: data.kecamatan,
        desa: data.desa,
        lotitude: data.lotitude,
        longitude: data.longitude,
        penyedia: data.penyedia,
        sumberDayaListrik: data.sumberDayaListrik,
        jamDayaAktif: data.jamDayaAktif,
      },
    });
    return site;
  } catch (error) {
    console.log("ini dari repo", error);
    throw new Error(error);
  }
};

const getAllSiteRepository = async (prisma) => {
  try {
    const sitedata = await prisma.Site.findMany({
      include: {
        propertisite: true,
        mosdetail: true,
        status: true,
        kontak: true,
        renmark: true,
      },
    });
    return sitedata;
  } catch (error) {
    console.log("ini dari repo", error);
    throw new Error(error);
  }
};

const getByIdSiteRepository = async (id) => {
  try {
    const site = await prisma.site.findUnique({
      where: {
        id: id,
      },
    });
    return site;
  } catch (error) {
    throw new Error(error);
  }
};

const updateSiteRepository = async (id, data) => {
  try {
    const site = await prisma.site.update({
      where: {
        id: id,
      },
      data: {
        siteId: data.siteId,
        nameLokasi: data.nameLokasi,
        kabupaten: data.kabupaten,
        kecamatan: data.kecamatan,
        desa: data.desa,
        lotitude: data.lotitude,
        longitude: data.longitude,
        penyedia: data.penyedia,
        sumberDayaListrik: data.sumberDayaListrik,
        jamDayaAktif: data.jamDayaAktif,
      },
    });
    return site;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteSiteRepository = async (id) => {
  try {
    const site = await prisma.site.delete({
      where: {
        id: id,
      },
    });
    return site;
  } catch (error) {
    throw new Error(error);
  }
};

const registerDataFromCSVRepository = async (dataCSV) => {
  try {
    const results = await new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(dataCSV)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => resolve(results))
        .on("error", reject);
    });

    const newData = results.map((item) => ({
      Site: {
        siteId: item.siteId,
        nameLokasi: item.nameLokasi,
        kabupaten: item.kabupaten,
        kecamatan: item.kecamatan,
        desa: item.desa,
        lotitude: item.lotitude,
        longitude: item.longitude,
        penyedia: item.penyedia,
        sumberDayaListrik: item.sumberDayaListrik,
        jamDayaAktif: item.jamDayaAktif,
      },
      PropertiSite: {
        finalBeam: item.finalBeam,
        ipModem: item.ipModem,
        ipMikrotik: item.ipMikrotik,
        ipApOne: item.ipApOne,
        ipApTwo: item.ipApTwo,
        expSqf: item.expSqf,
        expRtnModCod: item.expRtnModCod,
        expFwdModCod: item.expFwdModCod,
        polar: item.polar,
      },
      MosDetail: {
        antenaType: item.antenaType,
        antenaSN: item.antenaSN,
        transceiverType: item.transceiverType,
        transceiverSN: item.transceiverSN,
        modemType: item.modemType,
        modemSN: item.modemSN,
        routerType: item.routerType,
        routerSN: item.routerSN,
        apType: item.apType,
        apSnOne: item.apSnOne,
        apSnTwo: item.apSnTwo,
        stabilezerType: item.stabilezerType,
        stabilezerSN: item.stabilezerSN,
      },
      KontakPic: {
        namaPic: item.namaPic,
        noTelpon: item.noTelpon,
      },
      Status: {
        status: item.status,
        durasi: +item.durasi,
      },
      Remark: {
        message: item.message,
      },
    }));

    return newData;
  } catch (error) {
    console.log("Dari repo", error);
    throw new Error(error);
  }
};

const pagnationSiteRepository = async (
  pageNumber,
  pageSize,
  searchCriteria,
  prisma
) => {
  let page = parseInt(pageSize) || 1;
  try {
    const skip = (pageNumber - 1) * pageSize;
    let where = {}; // Save Object for save momery filter

    if (searchCriteria) {
      where = {
        OR: [{ nameLokasi: { contains: searchCriteria } }],
      };
    }

    const ResultSitePagnation = await prisma.Site.findMany({
      skip,
      take: page,
      orderBy: {
        createdAt: "desc",
      },
      where,
      include: {
        propertisite: true,
        mosdetail: true,
        status: true,
        kontak: true,
        renmark: true,
      },
    });

    const totalSite = await prisma.Site.count({
      where,
    });

    return {
      data: ResultSitePagnation,
      total: totalSite,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  registerSiteRepository,
  getAllSiteRepository,
  getByIdSiteRepository,
  updateSiteRepository,
  deleteSiteRepository,
  registerDataFromCSVRepository,

  pagnationSiteRepository,
};
