const prisma = require("@prisma/client");

const registerAdminRepository = async (data) => {
  try {
    const admin = await prisma.admin.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        photo: data.photo,
      },
    });
    return admin;
  } catch (error) {
    throw new Error(error);
  }
};

const loginAdminRepository = async (data) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        email: data.email,
      },
    });
    return admin;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { registerAdminRepository, loginAdminRepository };
