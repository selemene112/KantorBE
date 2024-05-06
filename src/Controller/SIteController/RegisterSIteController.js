//========================================= Call Utility =================================
const SuccesUtility = require("../../Utility/Response/Succes/SuccesUtility");
const FaildUtility = require("../../Utility/Response/Faild/FaildUtility");

//========================================= ENd Call Utility =================================

//========================================= Call Service  =================================
const siteService = require("../../Service/SiteService/RegisterSiteService");
//========================================= ENd Call Service  =================================

// ======================================== Call Validate =================================
const skemaValidation = require("../../Middleware/Validation/GlobalValidasi");
// const {
//   skemaStatus,
// } = require("../../Middleware/Validation/Status/StatusValidation");
//========================================= ENd Call Validate =================================

const registerSiteController = async (req, res) => {
  const dataBody = req.body;
  console.log(dataBody);
  const { Site, PropertiSite, KontakPic, Renmark, MosDetail, Status } =
    dataBody;
  //+++++++++++++++++++++++++++++++++++++++++++++++++ Validasi Input +++++++++++++++++++++++++++++++++++++++++++++++++++++
  const validations = [
    { name: Site, schema: skemaValidation.skemaRegisterSiteValidate },
    { name: PropertiSite, schema: skemaValidation.skemaPropertiSite },
    { name: MosDetail, schema: skemaValidation.skemaMosDetail },
    { name: KontakPic, schema: skemaValidation.skemaKontak },
    { name: Status, schema: skemaValidation.skemaStatus },
    { name: Renmark, schema: skemaValidation.skemaRenmark },
  ];

  let combinedErrors = {
    messages: [],
  };

  validations.forEach(({ name, schema }) => {
    let { error } = schema.validate(eval(name));
    if (error) {
      combinedErrors.messages.push(error.details[0].message);
    }
  });

  //+++++++++++++++++++++++++++++++++++++++++++++++++ END Validasi Input +++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Respon If Input Error
  if (combinedErrors.messages.length > 0) {
    let error = new Error("Validation failed");
    error.details = combinedErrors.messages;
    console.log(combinedErrors.messages);
    return FaildUtility.responeUnauthorized(res, combinedErrors, error);
  }

  try {
    // Register Site
    const RegisterSiteData = await siteService.registerSiteService(
      Site,
      PropertiSite,
      MosDetail,
      Status,
      KontakPic,
      Renmark
    );

    console.log("ini dari controller", RegisterSiteData);

    return SuccesUtility.responSucccesCreated(
      res,
      RegisterSiteData,
      "Register Site Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

const getAllSiteController = async (req, res) => {
  try {
    const getAllSite = await siteService.getAllSiteService();
    return SuccesUtility.responeSuccesOk(
      res,
      getAllSite,
      "Get All Site Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

const getAllSiteStatusClosedController = async (req, res) => {
  try {
    const getAllSite = await siteService.getAllStatusCloseService();
    return SuccesUtility.responeSuccesOk(
      res,
      getAllSite,
      "Get All Site status closed Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

const getAllSiteStatusOpenController = async (req, res) => {
  try {
    const getAllSite = await siteService.getAllStatusOpenService();
    return SuccesUtility.responeSuccesOk(
      res,
      getAllSite,
      "Get All Site status open Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

const getAllSiteStatusOnProgressController = async (req, res) => {
  try {
    const getAllSite = await siteService.getAllStatusOnProgressService();
    return SuccesUtility.responeSuccesOk(
      res,
      getAllSite,
      "Get All Site status on progress Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

const CountAllSiteStatusController = async (req, res) => {
  try {
    const CountAllSite = await siteService.CountAllSiteStatusService();
    return SuccesUtility.responeSuccesOk(
      res,
      CountAllSite,
      "Count All Site Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

module.exports = {
  registerSiteController,
  getAllSiteController,
  getAllSiteStatusClosedController,
  getAllSiteStatusOpenController,
  getAllSiteStatusOnProgressController,
  CountAllSiteStatusController,
};
