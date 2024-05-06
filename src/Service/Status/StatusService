const prisma = require("../../Config/Prisma");
const StatusRepository = require("../../Repository/StatusRepository/StatusRepository");

const editStatusService = async (id, data) => {
  try {
    const status = await StatusRepository.updateStatusRepository(
      id,
      data,
      prisma
    );

    return status;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { editStatusService };
