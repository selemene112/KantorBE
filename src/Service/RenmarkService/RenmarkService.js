const prisma = require("../../Config/Prisma");
const RenmarkRepository = require("../../Repository/RenmarkRepository/RenmarkRepository");

const getAllRenmarkOnSiteService = async (id) => {
  try {
    const renmark = await RenmarkRepository.getByIdRenmarkRepository(
      id,
      prisma
    );
    return renmark;
  } catch (error) {
    throw new Error(error);
  }
};

const registerRenmarkService = async (data, id) => {
  try {
    const renmark = await RenmarkRepository.registerRenmarkRepository(
      data,
      id,
      prisma
    );
    return renmark;
  } catch (error) {
    throw new Error(error);
  }
};

const editRenmarkByIdService = async (data, id) => {
  try {
    const renmark = await RenmarkRepository.editRenmarkByIdRepository(
      data,
      id,
      prisma
    );
    return renmark;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteRenmarkByIdService = async (id) => {
  try {
    const renmark = await RenmarkRepository.deleteRenmarkRepository(id, prisma);
    return renmark;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAllRenmarkOnSiteService = async (id) => {
  try {
    const renmark = await RenmarkRepository.deleteAllRenmarkSite(id, prisma);
    return renmark;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllRenmarkOnSiteService,
  registerRenmarkService,
  editRenmarkByIdService,
  deleteRenmarkByIdService,
  deleteAllRenmarkOnSiteService,
};
