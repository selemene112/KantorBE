const { Router } = require("express");
const routeSite = Router();

const SiteCOntroller = require("../Controller/SIteController/RegisterSIteController");

routeSite.post("/siteregister", SiteCOntroller.registerSiteController);

module.exports = routeSite;
