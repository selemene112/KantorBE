const Joi = require("joi");
const skemaRegisterAdminValidate = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.base": "Name should be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name should have a minimum length of {#limit}",
    "string.max": "Name should have a maximum length of {#limit}",
    "any.required": "Name is required",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.base": "Email should be a string",
      "string.email": "Email should have a valid format",
      "any.required": "Email is required",
    }),
  password: Joi.string()
    .required()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .min(8)
    .messages({
      "string.base": "Password should be a string",
      "string.empty": "Password cannot be empty",
      "string.min": "Password should have a minimum length of {#limit}",
      "string.pattern.base":
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 digit",
      "any.required": "Password is required",
    }),
});

const skemaLoginAdminValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .required()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .messages({
      "string.base": "Password should be a string",
      "string.empty": "Password cannot be empty",
      "string.min": "Password should have a minimum length of {#limit}",
      "string.pattern.base":
        "Password must contain at least 1 lowercase letter, 1 uppercase letter, and 1 digit",
      "any.required": "Password is required",
    })
    .min(8),
});

module.exports = { skemaLoginAdminValidate, skemaRegisterAdminValidate };
