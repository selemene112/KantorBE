const registerPropertiSiteRepository = async (data, id, prisma) => {
  try {
    const PropertiSiteData = await prisma.PropertiSite.create({
      data: {
        idSite: id,
        finalBeam: data.finalBeam,
        ipModem: data.ipModem,
        ipMikrotik: data.ipMikrotik,
        ipApOne: data.ipApOne,
        ipApTwo: data.ipApTwo,
        expSqf: data.expSqf,
        expRtnModCod: data.expRtnModCod,
        expFwdModCod: data.expFwdModCod,
        polar: data.polar,
      },
    });

    return PropertiSiteData;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const getALlPropertiSiteRepository = async () => {
  try {
    const PropertiSiteData = await prisma.PropertiSite.findMany();
    return PropertiSiteData;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const getByIdPropertiSiteRepository = async (id) => {
  try {
    const PropertiSiteData = await prisma.PropertiSite.findUnique({
      where: {
        idSite: id,
      },
    });
    return PropertiSiteData;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const updatePropertiSiteRepository = async (data, id) => {
  try {
    const PropertiSiteData = await prisma.PropertiSite.update({
      where: {
        idSite: id,
      },
      data: {
        finalBeam: data.finalBeam,
        ipModem: data.ipModem,
        ipMikrotik: data.ipMikrotik,
        ipApOne: data.ipApOne,
        ipApTwo: data.ipApTwo,
        expSqf: data.expSqf,
        expRtnModCod: data.expRtnModCod,
        expFwdModCod: data.expFwdModCod,
        polar: data.polar,
      },
    });
    return PropertiSiteData;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};

const deletePropertiSiteRepository = async (id) => {
  try {
    const PropertiSiteData = await prisma.PropertiSite.delete({
      where: {
        idSite: id,
      },
    });
    return PropertiSiteData;
  } catch (error) {
    console.log("ini error dari repo", error);
    throw new Error(error);
  }
};
module.exports = {
  registerPropertiSiteRepository,
  getALlPropertiSiteRepository,
  getByIdPropertiSiteRepository,
  updatePropertiSiteRepository,
  deletePropertiSiteRepository,
};
