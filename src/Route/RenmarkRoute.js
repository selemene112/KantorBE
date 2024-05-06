const { Router } = require("express");
const routeRenmark = Router();

const RenmarkController = require("../Controller/RenmarkController/RenmarkController");

routeRenmark.get(
  "/getallrenmarkOnSite/:id",
  RenmarkController.getAllRenmarkOnSiteController
);

routeRenmark.post(
  "/createrenmarkOnSite/:id",
  RenmarkController.createRenmarkController
);

routeRenmark.put(
  "/editRenmarkById/:id",
  RenmarkController.editRenmarkByIdCOntroller
);

routeRenmark.delete(
  "/deleteRenmarkById/:id",
  RenmarkController.deleteRenmarkByIdController
);

routeRenmark.delete(
  "/deleteAll/deleteAllRenmarkOnSite/:id",
  RenmarkController.deleteAllRenmarkOnSiteController
);

module.exports = routeRenmark;
