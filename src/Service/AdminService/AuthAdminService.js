const repoAuthAdmin = require("../../Repository/AdminRepository/AuthAdminRepository");
const BycrptMiddleware = require("../../Middleware/Bycrpt/BycrptMiddleware");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config();

const registerAdminService = async (data) => {
  try {
    const hashedPassword = await BycrptMiddleware.hashPassword(data.password);
    data.password = hashedPassword;
    const admin = await repoAuthAdmin.registerAdminRepository(data);
    return admin;
  } catch (error) {
    throw new Error(error);
  }
};

const loginAdminService = async (data) => {
  try {
    const admin = await repoAuthAdmin.loginAdminRepository(data);

    const hashedPassword = await BycrptMiddleware.comparePassword(
      data.password,
      admin.password
    );

    if (!admin || !hashedPassword) {
      throw new Error("Invalid email or password");
    }

    const dataToken = {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      photo: admin.photo,
    };

    const TokenForKogin = jwt.sign(dataToken, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return TokenForKogin;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  registerAdminService,
  loginAdminService,
};
