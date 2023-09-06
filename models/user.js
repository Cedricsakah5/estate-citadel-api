const mongoose = require('mongoose');
const User =  mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 250

    },
    userType:{
        enum: ['owner', 'customer'],
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    phone: {
        type: Number,
        required: true,
        minlength:9,
        maxlength:11
    }
}));
 
