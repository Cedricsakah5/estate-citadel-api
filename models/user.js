const Joi = require('joi');

const mongoose = require('mongoose');
const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 250
  },
  userType: {
    type: String,
    enum: ['owner', 'customer'],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    minlength: 9,
    maxlength: 11
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 250
  }
}));

function validateUser(user) {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).max(250).required(),
    userType: Joi.string().valid('owner', 'customer').required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }).required(),

    // check in joi documentation 

    phone: Joi.string().min(9).max(11).required(),
    password: Joi.string().min(6).max(250).required()
  });
  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;


 

