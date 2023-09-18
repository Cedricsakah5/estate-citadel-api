const mongoose = require('mongoose');
const Joi = require('joi')
const Rental =  mongoose.model('Rental', new mongoose.Schema({

  userId:{
        type: mongoose.Types.ObjectId, 
        ref: 'User'

    },

    appartmentId:{
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

function validateRental(rental){
   

}