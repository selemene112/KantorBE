const joi = require("joi");

const skemaMosDetail = joi.object({
  antenaType: joi.string().required().messages({
    "string.base": "Antena Type should be a string",
    "string.empty": "Antena Type cannot be empty",
    "any.required": "Antena Type is required",
  }),
  antenaSN: joi.string().required().messages({
    "string.base": "Antena SN should be a string",
    "string.empty": "Antena SN cannot be empty",
    "any.required": "Antena SN is required",
  }),
  transceiverType: joi.string().required().messages({
    "string.base": "Transceiver Type should be a string",
    "string.empty": "Transceiver Type cannot be empty",
    "any.required": "Transceiver Type is required",
  }),
  transceiverSN: joi.string().required().messages({
    "string.base": "Transceiver SN should be a string",
    "string.empty": "Transceiver SN cannot be empty",
    "any.required": "Transceiver SN is required",
  }),
  modemType: joi.string().required().messages({
    "string.base": "GPS Type should be a string",
    "string.empty": "GPS Type cannot be empty",
    "any.required": "GPS Type is required",
  }),
  modemSN: joi.string().required().messages({
    "string.base": "GPS SN should be a string",
    "string.empty": "GPS SN cannot be empty",
    "any.required": "GPS SN is required",
  }),
  routerType: joi.string().required().messages({
    "string.base": "Router Type should be a string",
    "string.empty": "Router Type cannot be empty",
    "any.required": "Router Type is required",
  }),
  routerSN: joi.string().required().messages({
    "string.base": "Router SN should be a string",
    "string.empty": "Router SN cannot be empty",
    "any.required": "Router SN is required",
  }),
  apType: joi.string().required().messages({
    "string.base": "AP Type should be a string",
    "string.empty": "AP Type cannot be empty",
    "any.required": "AP Type is required",
  }),
  apSnOne: joi.string().required().messages({
    "string.base": "AP SN One should be a string",
    "string.empty": "AP SN One cannot be empty",
    "any.required": "AP SN One is required",
  }),
  apSnTwo: joi.string().required().messages({
    "string.base": "AP SN Two should be a string",
    "string.empty": "AP SN Two cannot be empty",
    "any.required": "AP SN Two is required",
  }),
  stabilezerType: joi.string().required().messages({
    "string.base": "Stabilezer Type should be a string",
    "string.empty": "Stabilezer Type cannot be empty",
    "any.required": "Stabilezer Type is required",
  }),
  stabilezerSN: joi.string().required().messages({
    "string.base": "Stabilezer SN should be a string",
    "string.empty": "Stabilezer SN cannot be empty",
    "any.required": "Stabilezer SN is required",
  }),
});
module.exports = { skemaMosDetail };
