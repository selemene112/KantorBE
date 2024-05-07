const { Router } = require("express");
const routeSite = Router();
const upload = require("../Middleware/Multer/Multer");

const SiteCOntroller = require("../Controller/SIteController/RegisterSIteController");

routeSite.post("/siteregister", SiteCOntroller.registerSiteController);
routeSite.get("/allsite", SiteCOntroller.getAllSiteController);

//Get all site which status Closed

routeSite.get(
  "/allsiteclosed",
  SiteCOntroller.getAllSiteStatusClosedController
);

//Get all site which status Open

routeSite.get("/allsiteopen", SiteCOntroller.getAllSiteStatusOpenController);

//Get all site which status On Progress

routeSite.get(
  "/allsiteonprogress",
  SiteCOntroller.getAllSiteStatusOnProgressController
);

//Count all site status
routeSite.get("/countallsite", SiteCOntroller.CountAllSiteStatusController);

//Register File CSV
routeSite.post(
  "/registerfilecsv",
  upload.single("file"),
  SiteCOntroller.registerFileCSVController
);
module.exports = routeSite;
