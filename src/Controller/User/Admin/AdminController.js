const prisma = require("@prisma/client");

//========================================= Call Utility Function ==============================================
const {
  RegisterAdminValidate,
  LoginAdminValidate,
} = require("../../../Validation/User/AuthAdminValidate");
const SuccesUtility = require("../../../Utility/Response/Succes/SuccesUtility");
const FaildUtility = require("../../../Utility/Response/Faild/FaildUtility");
const { json, response } = require("express");

//========================================= Call Utility Function ==============================================
const validateFromAdmin = require("../../../Middleware/Validation/User/AuthAdminValidate");

//================================================== Admin Register Controller =================================================

const adminRegisterController = async (req, res) => {
  const dataBody = req.body;
  //++++++++++++++++++++++++++++++++++++++++++ Validate Input +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  let { error } = validateFromAdmin.skemaLoginAdminValidate.validate({
    name: dataBody.name,
    email: dataBody.email,
    password: dataBody.password,
  });
  // Respon if error
  if (error) {
    return FaildUtility.responeBadGateway(res, error.details[0].message, error);
  }

  //++++++++++++++++++++++++++++++++++++++++++ END Validate Input +++++++++++++++++++++++++++++++++++++++++++++++++++++++
};

module.exports = { adminRegisterController };
