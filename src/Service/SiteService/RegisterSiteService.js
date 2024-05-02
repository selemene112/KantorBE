const prisma = require("../../Config/Prisma");

// =========================== Import From Repository ==============================

const SiteRepository = require("../../Repository/SiteRepository/SiteRepository");
const KontakPicRepository = require("../../Repository/KontakPicRepository/KontakPicRepository");
const MosDetailRepository = require("../../Repository/MosDetailRepository/MosDetailRepository");
const RenmarkRepository = require("../../Repository/RenmarkRepository/RenmarkRepository");
const StatusRepository = require("../../Repository/StatusRepository/StatusRepository");
const PropertiSite = require("../../Repository/PropertiSIteRepository/PropertiSIteRepository");
//============================ End Import From Respository ===========================

const registerSiteService = async (
  dataSite,
  dataPropertiSite,
  dataMosDetail,
  dataStatus,
  dataKontakPic,
  dataRenmark
) => {
  try {
    const data = await prisma.$transaction(async (prisma) => {
      const sitedata = await SiteRepository.registerSiteRepository(
        dataSite,
        prisma
      );
      const PropertiSiteData =
        await PropertiSite.registerPropertiSiteRepository(
          dataPropertiSite,
          sitedata.id,
          prisma
        );
      const mosDetailData =
        await MosDetailRepository.registerMosDetailRepository(
          dataMosDetail,
          sitedata.id,
          prisma
        );
      const statusData = await StatusRepository.registerStatusRepository(
        dataStatus,
        sitedata.id,
        prisma
      );
      const kontakPicData =
        await KontakPicRepository.registerKontakPicRepository(
          dataKontakPic,
          sitedata.id,
          prisma
        );
      const renmarkData = await RenmarkRepository.registerRenmarkRepository(
        dataRenmark,
        sitedata.id,
        prisma
      );

      let data = {
        sitedata: sitedata,
        PropertiSiteData: PropertiSiteData,
        mosDetailData: mosDetailData,
        statusData: statusData,
        kontakPicData: kontakPicData,
        renmarkData: renmarkData,
      };

      return data;
    });

    return data;
  } catch (error) {
    console.log("ini dari service", error);
    throw new Error(error);
  }
};

module.exports = { registerSiteService };
