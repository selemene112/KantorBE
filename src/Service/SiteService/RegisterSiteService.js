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

const getAllSiteService = async () => {
  try {
    const data = await SiteRepository.getAllSiteRepository(prisma);
    return data;
  } catch (error) {
    console.log("ini dari service", error);
    throw new Error(error);
  }
};

const getAllStatusCloseService = async () => {
  try {
    const data = await StatusRepository.getAllStatusClosedRepository(prisma);
    return data;
  } catch (error) {
    console.log("ini dari service", error);
    throw new Error(error);
  }
};

const getAllStatusOpenService = async () => {
  try {
    const data = await StatusRepository.getAllStatusOpenRepository(prisma);
    return data;
  } catch (error) {
    console.log("ini dari service", error);
    throw new Error(error);
  }
};

const getAllStatusOnProgressService = async () => {
  try {
    const data = await StatusRepository.getAllStatusOnProgressRepository(
      prisma
    );
    return data;
  } catch (error) {
    console.log("ini dari service", error);
    throw new Error(error);
  }
};

const CountAllSiteStatusService = async () => {
  try {
    const ClosedData = await StatusRepository.countStatusClosedRepository(
      prisma
    );
    const OpenData = await StatusRepository.countStatusOpenRepository(prisma);
    const OnProgressData =
      await StatusRepository.countStatusOnProgressRepository(prisma);

    const data = {
      ClosedData: ClosedData,
      OpenData: OpenData,
      OnProgressData: OnProgressData,
    };
    return data;
  } catch (error) {
    console.log("ini dari service", error);
    throw new Error(error);
  }
};

const registerFileCSVService = async (datarepo) => {
  // const data = await SiteRepository.registerDataFromCSVRepository(datarepo);

  try {
    let errorArray = [];
    const results = await Promise.all(
      datarepo.map(async (item) => {
        try {
          const registerTransaction = await prisma.$transaction(
            async (prisma) => {
              const siteData = await SiteRepository.registerSiteRepository(
                item.Site,
                prisma
              );
              const PropertiSiteData =
                await PropertiSite.registerPropertiSiteRepository(
                  item.PropertiSite,
                  siteData.id,
                  prisma
                );
              const MosDetailData =
                await MosDetailRepository.registerMosDetailRepository(
                  item.MosDetail,
                  siteData.id,
                  prisma
                );
              const statusData =
                await StatusRepository.registerStatusRepository(
                  item.Status,
                  siteData.id,
                  prisma
                );
              const kontakPicData =
                await KontakPicRepository.registerKontakPicRepository(
                  item.KontakPic,
                  siteData.id,
                  prisma
                );
              const remarkData =
                await RenmarkRepository.registerRenmarkRepository(
                  item.Remark,
                  siteData.id,
                  prisma
                );

              return {
                message: "success",
                siteId: siteData.nameLokasi,
              };
            }
          );

          return registerTransaction;
        } catch (error) {
          errorArray.push(error.message);
          console.log(error);
          return (error = {
            message: "failed",
            siteId: item.Site.nameLokasi,
            error: error.message,
          });
        }
      })
    );

    console.log("Error dari array ++++++++++++++++++++++++++", errorArray);

    console.log("Error dari array ++++++++++++++++++++++++++", datarepo.length);

    if (errorArray.length >= datarepo.length) {
      throw (error = {
        error: errorArray,
      });
    }

    return results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  registerSiteService,
  getAllSiteService,
  getAllStatusCloseService,
  getAllStatusOpenService,
  getAllStatusOnProgressService,
  CountAllSiteStatusService,
  registerFileCSVService,
};
