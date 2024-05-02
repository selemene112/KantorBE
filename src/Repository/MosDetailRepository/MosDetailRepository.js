const registerMosDetailRepository = async (data, id, prisma) => {
  try {
    const mostDetail = await prisma.mosDetail.create({
      data: {
        idSite: id,
        antenaType: data.antenaType,
        antenaSN: data.antenaSN,
        transceiverType: data.transceiverType,
        transceiverSN: data.transceiverSN,
        modemType: data.modemType,
        modemSN: data.modemSN,
        routerType: data.routerType,
        routerSN: data.routerSN,
        apType: data.apType,
        apSnOne: data.apSnOne,
        apSnTwo: data.apSnTwo,
        stabilezerType: data.stabilezerType,
        stabilezerSN: data.stabilezerSN,
      },
    });
    return mostDetail;
  } catch (error) {
    console.log("ini dari repo", error);
    throw new Error(error);
  }
};
const getAllMosDetailRepository = async () => {
  try {
    const mosDetail = await prisma.mosDetail.findMany();
    return mosDetail;
  } catch (error) {
    console.log("ini dari repo", error);

    throw new Error(error);
  }
};

const getByIdMosDetailRepository = async (id) => {
  try {
    const mosDetail = await prisma.mosDetail.findUnique({
      where: {
        id: id,
      },
    });
    return mosDetail;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteMosDetailRepository = async (id) => {
  try {
    const mosDetail = await prisma.mosDetail.delete({
      where: {
        id: id,
      },
    });
    return mosDetail;
  } catch (error) {
    throw new Error(error);
  }
};

const updateMosDetailRepository = async (id, data) => {
  try {
    const mosDetail = await prisma.mosDetail.update({
      where: {
        id: id,
      },
      data: {
        idSite: data.idSite,
        antenaType: data.antenaType,
        antenaSN: data.antenaSN,
        transceiverType: data.transceiverType,
        transceiverSN: data.transceiverSN,
        modemType: data.modemType,
        modemSN: data.modemSN,
        routerType: data.routerType,
        routerSN: data.routerSN,
        apType: data.apType,
        apSnOne: data.apSnOne,
        apSnTwo: data.apSnTwo,
        stablezerType: data.stablezerType,
        stablezerSN: data.stablezerSN,
      },
    });
    return mosDetail;
  } catch (error) {
    console.log("ini dari repo", error);

    throw new Error(error);
  }
};

module.exports = {
  registerMosDetailRepository,
  getAllMosDetailRepository,
  getByIdMosDetailRepository,
  deleteMosDetailRepository,
  updateMosDetailRepository,
};
