const registerStatusRepository = async (data, id, prisma) => {
  try {
    const StatusData = await prisma.status.create({
      data: {
        idSite: id,
        status: data.status,
        durasi: data.durasi,
      },
    });
    return StatusData;
  } catch (error) {
    console.log("ini dari repo", error);
    throw new Error(error);
  }
};

const getAllStatusRepository = async () => {
  try {
    const status = await prisma.status.findMany();
    return status;
  } catch (error) {
    throw new Error(error);
  }
};

const getByIdStatusRepository = async (id) => {
  try {
    const status = await prisma.status.findUnique({
      where: {
        idSite: id,
      },
    });
    return status;
  } catch (error) {
    console.log("ini dari repo", error);
    throw new Error(error);
  }
};

const updateStatusRepository = async (id, data) => {
  try {
    const status = await prisma.status.update({
      where: {
        idSite: id,
      },
      data: {
        status: data.status,
        durasi: data.durasi,
      },
    });
    return status;
  } catch (error) {
    console.log("ini dari repo", error);
    throw new Error(error);
  }
};

const deleteStatusRepository = async (id) => {
  try {
    const status = await prisma.status.delete({
      where: {
        idSite: id,
      },
    });
    return status;
  } catch (error) {
    console.log("ini dari repo", error);
    throw new Error(error);
  }
};

module.exports = {
  registerStatusRepository,
  getAllStatusRepository,
  getByIdStatusRepository,
  updateStatusRepository,
  deleteStatusRepository,
};
