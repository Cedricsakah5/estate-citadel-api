const Joi = require('joi');
const mongoose = require('mongoose');

const Property =  mongoose.model('Property', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 250

    },
    description:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 500

    },
    location: {
        type: String,
        required: true
    },
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    }
}));


function validatePeroperty(property) {
    const schema = Joi.object().keys({
      name: Joi.string().min(3).max(250).required(),
      description: Joi.string().min(5).max(500).required(),
      ownerId: Joi.string().required(),
      location: Joi.string().required()

    });
    return schema.validate(property);
  }
  
  exports.Property = Property; 
  exports.validate = validatePeroperty;
