const Joi = require("joi");

const skemaPropertiSite = Joi.object({
  finalBeam: Joi.string().required().messages({
    "string.base": "Final Beam should be a string",
    "string.empty": "Final Beam cannot be empty",
    "any.required": "Final Beam is required",
  }),
  ipModem: Joi.string().required().messages({
    "string.base": "IP Modem should be a string",
    "string.empty": "IP Modem cannot be empty",
    "any.required": "IP Modem is required",
  }),
  ipMikrotik: Joi.string().required().messages({
    "string.base": "IP Mikrotik  should be a string",
    "string.empty": "IP Mikrotik cannot be empty",
    "any.required": "IP Mikrotik is required",
  }),
  ipApOne: Joi.string().required().messages({
    "string.base": "IP AP One should be a string",
    "string.empty": "IP AP One cannot be empty",
    "any.required": "IP AP One is required",
  }),
  ipApTwo: Joi.string().required().messages({
    "string.base": "IP AP Two should be a string",
    "string.empty": "IP AP Two cannot be empty",
    "any.required": "IP AP Two is required",
  }),
  expSqf: Joi.string().required().messages({
    "string.base": "Exp Sqf should be a string",
    "string.empty": "Exp Sqf cannot be empty",
    "any.required": "Exp Sqf is required",
  }),
  expRtnModCod: Joi.string().required().messages({
    "string.base": "Exp Rtn Mod Code should be a string",
    "string.empty": "Exp Rtn Mod Code cannot be empty",
    "any.required": "Exp Rtn Mod Code is required",
  }),
  expFwdModCod: Joi.string().required().messages({
    "string.base": "Exp Fwd Mod Name should be a string",
    "string.empty": "Exp Fwd Mod Name cannot be empty",
    "any.required": "Exp Fwd Mod Name is required",
  }),
  polar: Joi.string().required().messages({
    "string.base": "Polar should be a string",
    "string.empty": "Polar cannot be empty",
    "any.required": "Polar is required",
  }),
});

module.exports = { skemaPropertiSite };
