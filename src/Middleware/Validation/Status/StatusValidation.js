const Joi = require("joi");

const skemaStatus = Joi.object({
  status: Joi.string()
    .valid("Close", "Open", "On_Progress")
    .default("Close")
    .messages({
      "string.base": "Status should be a string",
      "any.only": "Status must be 'Close', 'Open' or 'On_Progress'",
    }),
  durasi: Joi.number().integer().default(0).messages({
    "number.base": "Durasi should be a number",
    "number.integer": "Durasi must be an integer",
  }),
});
module.exports = { skemaStatus };
