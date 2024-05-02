const Joi = require("joi");

const skemaKontak = Joi.object({
  namaPic: Joi.string().required().messages({
    "string.base": "Name should be a string",
    "string.empty": "Name cannot be empty",
    "any.required": "Name is required",
  }),
  noTelpon: Joi.string().messages({
    "string.base": "No Telpon should be a string",
    "string.empty": "No Telpon cannot be empty",
  }),
});
module.exports = { skemaKontak };
