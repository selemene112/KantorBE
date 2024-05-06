//========================================= Call Utility =================================
const SuccesUtility = require("../../Utility/Response/Succes/SuccesUtility");
const FaildUtility = require("../../Utility/Response/Faild/FaildUtility");

//========================================= ENd Call Utility =================================

// ======================================== Call Validate =================================
const skemaValidation = require("../../Middleware/Validation/GlobalValidasi");

//========================================= ENd Call Validate =================================

// ======================================== Call Service  =================================
const renmarkService = require("../../Service/RenmarkService/RenmarkService");

//========================================= ENd Call Service  =================================

const getAllRenmarkOnSiteController = async (req, res) => {
  const { id } = req.params;

  try {
    const renmark = await renmarkService.getAllRenmarkOnSiteService(id);

    return SuccesUtility.responeSuccesOk(
      res,
      renmark,
      "Success get all renmark on site"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

const createRenmarkController = async (req, res) => {
  const { id } = req.params;
  const bodyData = req.body;

  const { error } = skemaValidation.skemaRenmark.validate(bodyData);
  if (error)
    return FaildUtility.responeUnauthorized(
      res,
      error.details[0].message,
      error
    );

  try {
    const createRenmarkData = await renmarkService.registerRenmarkService(
      bodyData,
      id
    );

    return SuccesUtility.responSucccesCreated(
      res,
      createRenmarkData,
      "Create Renmark Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

const editRenmarkByIdCOntroller = async (req, res) => {
  const { id } = req.params;
  const bodyData = req.body;
  const { error } = skemaValidation.skemaRenmark.validate(bodyData);
  if (error)
    return FaildUtility.responeUnauthorized(
      res,
      error.details[0].message,
      error
    );
  try {
    const editRenmarkData = await renmarkService.editRenmarkByIdService(
      bodyData,
      id
    );
    return SuccesUtility.responeSuccesOk(
      res,
      editRenmarkData,
      "Edit Renmark Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

const deleteRenmarkByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRenmarkData = await renmarkService.deleteRenmarkByIdService(id);
    return SuccesUtility.responeSuccesOk(
      res,
      deleteRenmarkData,
      "Delete Renmark Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

const deleteAllRenmarkOnSiteController = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteRenmarkData =
      await renmarkService.deleteAllRenmarkOnSiteService(id);
    return SuccesUtility.responeSuccesOk(
      res,
      deleteRenmarkData,
      "Delete Renmark Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};

module.exports = {
  getAllRenmarkOnSiteController,
  createRenmarkController,
  editRenmarkByIdCOntroller,
  deleteRenmarkByIdController,
  deleteAllRenmarkOnSiteController,
};
