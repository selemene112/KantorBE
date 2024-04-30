const Joi = require("joi");
const ResponeJsonFaild = require("../../../Utility/Response/Faild/FaildUtility");

const skemaRegisterAdminValidate = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .min(8),
});

const skemaLoginAdminValidate = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .min(8),
});

module.exports = { skemaLoginAdminValidate, skemaRegisterAdminValidate };
