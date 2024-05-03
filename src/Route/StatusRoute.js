const { Router } = require("express");
const routeStatus = Router();

const StatusController = require("../Controller/StatusController/StatusController");

routeStatus.put(
  "/editStatusService/:id",
  StatusController.updateStatusController
);
module.exports = routeStatus;
