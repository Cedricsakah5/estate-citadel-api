const mongoose = require('mongoose');
const Rental =  mongoose.model('Rental', new mongoose.Schema({
    
  userId:{
        type: mongoose.Types.ObjectId, 
        ref: 'User'

    },

    appartmentId:{
        type: mongoose.Types.ObjectId, 
        ref: 'Rental'

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
