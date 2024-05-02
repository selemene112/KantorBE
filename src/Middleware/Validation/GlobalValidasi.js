const { skemaKontak } = require("./Kontak/KontakValidation");
const { skemaRegisterSiteValidate } = require("./Site/SiteValidation");
const { skemaMosDetail } = require("./MosDetail/MosDetail");
const { skemaPropertiSite } = require("./PropertiSite/PropertiSiteValidation");
const { skemaStatus } = require("./Status/StatusValidation");
const { skemaRenmark } = require("./Renmark/RenmarkValidation");

const skemaValidation = {
  skemaKontak,
  skemaRegisterSiteValidate,
  skemaMosDetail,
  skemaPropertiSite,
  skemaStatus,
  skemaRenmark,
};

module.exports = skemaValidation;
