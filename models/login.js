function validate(req) {
    const schema = Joi.object().keys({
      name: Joi.string().min(3).max(250).required(),
       password: Joi.string().min(6).max(250).required()
    });
    return schema.validate(req);
  }

  exports.validate = validate;