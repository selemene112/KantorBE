const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

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
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new Error("Email already exists");
      }
    }
    throw new Error(error);
  }
};

const loginAdminRepository = async (data) => {
  console.log("ini dari repo", data);
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
