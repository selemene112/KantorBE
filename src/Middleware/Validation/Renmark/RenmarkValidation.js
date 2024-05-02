const Joi = require("joi");

const skemaRenmark = Joi.object({
  message: Joi.string().required().messages({
    "string.base": "Message should be a string",
    "string.empty": "Message cannot be empty",
    "any.required": "Message is required",
  }),
});

module.exports = { skemaRenmark };
