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
