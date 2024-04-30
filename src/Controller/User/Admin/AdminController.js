const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

//========================================= Call Utility Function ==============================================

const SuccesUtility = require("../../../Utility/Response/Succes/SuccesUtility");
const FaildUtility = require("../../../Utility/Response/Faild/FaildUtility");
const { json, response } = require("express");

//========================================= Call Utility Function ==============================================
const validateFromAdmin = require("../../../Middleware/Validation/User/AuthAdminValidate");
const AuthAdminService = require("../../../Service/AdminService/AuthAdminService");
//================================================== Admin Register Controller =================================================
const adminRegisterController = async (req, res) => {
  const dataBody = req.body;
  console.log(dataBody);
  //++++++++++++++++++++++++++++++++++++++++++ Validate Input +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  let { error } = validateFromAdmin.skemaRegisterAdminValidate.validate({
    name: dataBody.name,
    email: dataBody.email,
    password: dataBody.password,
  });
  console.log(error);
  // Respon if error
  if (error) {
    return FaildUtility.responeUnauthorized(
      res,
      error.details[0].message,
      error
    );
  }
  //++++++++++++++++++++++++++++++++++++++++++ END Validate Input +++++++++++++++++++++++++++++++++++++++++++++++++++++++

  try {
    // Register Admin
    const RegisterAdmin = await AuthAdminService.registerAdminService(dataBody);

    // Respon Success
    return SuccesUtility.responSucccesCreated(
      res,
      RegisterAdmin,
      "Register Admin Success"
    );
  } catch (error) {
    // Respon Email ALready Exists
    if (error.message.includes("Error: Email already exists")) {
      return FaildUtility.responeConflict(res, error.message, error);
    }
    // Respon Bad Gateway
    return FaildUtility.responeBadGateway(res, error.message, error);
  }
};
//=================================================== END Admin Register Controller =================================================

//====================================== Admin Login Controller ============================================
const adminLoginController = async (req, res) => {
  const dataBody = req.body;

  const { error } = validateFromAdmin.skemaLoginAdminValidate.validate({
    email: dataBody.email,
    password: dataBody.password,
  });
  if (error) {
    return FaildUtility.responeUnauthorized(
      res,
      error.details[0].message,
      error
    );
  }

  try {
    // Login Admin
    const LoginAdmin = await AuthAdminService.loginAdminService(dataBody);
    // Respon Success
    return SuccesUtility.responeSuccesOk(
      res,
      LoginAdmin,
      "Login Admin Success"
    );
  } catch (error) {
    if (error.message.includes("Error: Invalid email or password")) {
      return FaildUtility.responeUnauthorized(res, error.message, error);
    }
  }
  return FaildUtility.responeServerError(res, error.message, error);
};

//====================================== END Admin Login Controller ============================================

module.exports = { adminRegisterController, adminLoginController };
