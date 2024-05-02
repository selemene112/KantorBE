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

const getAllSiteRepository = async () => {
  try {
    const site = await prisma.site.findMany();
    return site;
  } catch (error) {
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

module.exports = {
  registerSiteRepository,
  getAllSiteRepository,
  getByIdSiteRepository,
  updateSiteRepository,
  deleteSiteRepository,
};
