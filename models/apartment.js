const Joi = require('joi');
const mongoose = require('mongoose');
const Apartment =  mongoose.model('Apartment', new mongoose.Schema({
    propertyId:{
        type: mongoose.Types.ObjectId,
        ref: 'Property',
        required:true

    },
    
     apartmentNumber: {
        type:Number,
        require: true,
        minlength:1,
        maxlength:500

     },
     available: {
        type: Boolean,
        required: true
     }
}));

function validateApartment(apartment) {
   const schema = Joi.object().keys({
      propertyId: Joi.string().min(24).max(26).required(),
      apartmentNumber: Joi.number().min(1).max(500).required(),
      available: Joi.boolean().required(),

   });
   return schema.validate(apartment);
 }
 
 exports.Apartment = Apartment; 
 exports.validate = validateApartment;

