const Joi = require('joi')

exports.project = function (obj) {
  const schema = Joi.object().keys({
    name: Joi.string().min(5).required(),
    description: Joi.string(),
    access: Joi.string(),
    oid: Joi.string().required(),
    pid: Joi.string()
  })

  return Joi.validate(obj, schema)
}

exports.delete = function (obj) {
  const schema = Joi.object().keys({
    pid: Joi.string().required()
  })

  return Joi.validate(obj, schema)
}

exports.deposit = function (obj) {
  const schema = Joi.object().keys({
    amount: Joi.number().required(),
    oid: Joi.string().required(),
    pid: Joi.string().required()
  })

  return Joi.validate(obj, schema)
}