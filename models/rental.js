const mongoose = require('mongoose');
const Joi = require('joi')
const Rental =  mongoose.model('Rental', new mongoose.Schema({

  userId:{
        type: mongoose.Types.ObjectId, 
        ref: 'User'

    },

    apartmentId:{
        type: mongoose.Types.ObjectId, 
        ref: 'Apartment'

    },
  
    startDate: {
       type:Date,
       required:true
    },
    endDate: {
        type:Date,
        required:true
     }, 
     fee: {
        type:Number,
        require: true
     }
}));

function validateRental(rental) {
   const schema = Joi.object().keys({
      userId: Joi.string().required(),
      apartmentId: Joi.string().required(),
     startDate: Joi.date().required(),
     endDate: Joi.date().required(),
   fee:Joi.number().required()

   });
   return schema.validate(rental);
 }

 exports.Rental = Rental; 
  exports.validate = validateRental;