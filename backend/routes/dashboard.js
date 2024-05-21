const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const User  = require('../models/user');
const Appointment = require('../models/Appointment');
//Get patient dashboard data

router.get('/',protect , async(req,res)=>{
    try {
        const user = await User.findById(req.user._id).select('-password');
        if(!user){
            return res.status(404).json({message:'User not found'});
        }

        //Fetch user appointments
        const appointments = await Appointment.find({user : req.user._id});

        res.json({user,appointments});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;