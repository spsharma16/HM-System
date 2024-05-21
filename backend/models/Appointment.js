const mongoose = require('mongoose');

const appointementSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true

    },
    time:{
        type:String,
        required:true

    },
    doctor:{
        type:String,
        required:true

    },
    reason:{
        type:String,
        required:true

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
});

const Appointment = mongoose.model('Appointment',appointementSchema);

module.exports = Appointment;