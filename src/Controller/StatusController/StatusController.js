//========================================= Call Utility =================================
const SuccesUtility = require("../../Utility/Response/Succes/SuccesUtility");
const FaildUtility = require("../../Utility/Response/Faild/FaildUtility");

//========================================= ENd Call Utility =================================

// ======================================== Call Validate =================================
const skemaValidation = require("../../Middleware/Validation/GlobalValidasi");

//========================================= ENd Call Validate =================================

// ======================================== Call Service  =================================
const statusService = require("../../Service/Status/StatusService");
//========================================= ENd Call Service  =================================

const updateStatusController = async (req, res) => {
  const { id } = req.params;
  const bodyData = req.body;

  const { error } = skemaValidation.skemaStatus.validate(bodyData);
  if (error)
    return FaildUtility.responeUnauthorized(
      res,
      error.details[0].message,
      error
    );

  try {
    const updateStatus = await statusService.editStatusService(id, bodyData);

    return SuccesUtility.responeSuccesOk(
      res,
      updateStatus,
      "Update Status Success"
    );
  } catch (error) {
    return FaildUtility.responeServerError(res, error.message, error);
  }
};
module.exports = { updateStatusController };
