const Joi = require("joi");

const skemaRegisterSiteValidate = Joi.object({
  siteId: Joi.string().required().messages({
    "string.base": "Site Id should be a string",
    "string.empty": "Site Id cannot be empty",
    "string.min": "Site Id should have a minimum length of {#limit}",
    "string.max": "Site Id should have a maximum length of {#limit}",
    "any.required": "Site Id is required",
  }),
  nameLokasi: Joi.string().required().messages({
    "string.base": "Name Lokasi should be a string",
    "string.empty": "Name Lokasi cannot be empty",
    "string.min": "Name Lokasi should have a minimum length of {#limit}",
    "string.max": "Name Lokasi should have a maximum length of {#limit}",
    "any.required": "Name Lokasi is required",
  }),
  kabupaten: Joi.string().required().messages({
    "string.base": "Kabupaten should be a string",
    "string.empty": "Kabupaten cannot be empty",
    "string.min": "Kabupaten should have a minimum length of {#limit}",
    "string.max": "Kabupaten should have a maximum length of {#limit}",
    "any.required": "Kabupaten is required",
  }),
  kecamatan: Joi.string().required().messages({
    "string.base": "Kecamatan should be a string",
    "string.empty": "Kecamatan cannot be empty",
    "string.min": "Kecamatan should have a minimum length of {#limit}",
    "string.max": "Kecamatan should have a maximum length of {#limit}",
    "any.required": "Kecamatan is required",
  }),
  desa: Joi.string().required().messages({
    "string.base": "Desa should be a string",
    "string.empty": "Desa cannot be empty",
    "string.min": "Desa should have a minimum length of {#limit}",
    "string.max": "Desa should have a maximum length of {#limit}",
    "any.required": "Desa is required",
  }),
  lotitude: Joi.string().required().min(5).messages({
    "string.base": "Lotitude should be a string",
    "string.empty": "Lotitude cannot be empty",
    "string.min": "Lotitude should have a minimum length of {#limit}",
    "any.required": "Lotitude is required",
  }),
  longitude: Joi.string().required().min(5).messages({
    "string.base": "Longitude should be a string",
    "string.empty": "Longitude cannot be empty",
    "string.min": "Longitude should have a minimum length of {#limit}",
    "any.required": "Longitude is required",
  }),
  penyedia: Joi.string().required().messages({
    "string.base": "Penyedia should be a string",
    "string.empty": "Penyedia cannot be empty",
    "any.required": "Penyedia is required",
  }),
  sumberDayaListrik: Joi.string().required().messages({
    "string.base": "Sumber Daya Listrik should be a string",
    "string.empty": "Sumber Daya Listrik cannot be empty",
    "any.required": "Sumber Daya Listrik is required",
  }),
  jamDayaAktif: Joi.string().required().messages({
    "string.base": "Jam Daya Aktif should be a string",
    "string.empty": "Jam Daya Aktif cannot be empty",
    "any.required": "Jam Daya Aktif is required",
  }),
});

const skemaPagnationSiteValidate = Joi.object({
  pageNumber: Joi.number().required().messages({
    "number.base": "Page Number should be a number",
    "number.empty": "Page Number cannot be empty",
    "any.required": "Page Number is required",
  }),
  pageSize: Joi.number().required().messages({
    "number.base": "Page Size should be a number",
    "number.empty": "Page Size cannot be empty",
    "any.required": "Page Size is required",
  }),
  searchCriteria: Joi.string().messages({
    "string.base": "Search Criteria should be a string",
    "string.empty": "Search Criteria cannot be empty",
    "any.required": "Search Criteria is required",
  }),
});

module.exports = { skemaRegisterSiteValidate, skemaPagnationSiteValidate };
