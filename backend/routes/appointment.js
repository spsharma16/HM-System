// routes/appointment.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment'); // Ensure you have an Appointment model
const { protect } = require('../middleware/auth'); // Ensure you have authentication middleware

// POST /api/appointments
router.post('/appointments', protect, async (req, res) => {
    console.log('Appointment route hit');
   
    const { date, time, doctor, reason } = req.body;

    if (!date || !time || !doctor || !reason) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        const appointment = new Appointment({
            date,
            time,
            doctor,
            reason,
            user: req.user._id // Assuming you have user authentication
        });

        await appointment.save();
        res.status(201).json({ message: 'Appointment booked successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
