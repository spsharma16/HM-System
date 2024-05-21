import React, { useState } from 'react';
import { bookAppointment } from '../../Services/api';

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        doctor: '',
        reason: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await bookAppointment(formData);
            alert('Appointment booked successfully');
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('Error booking appointment');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
            <div>
                <label htmlFor="date" className="block text-gray-700">Date</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label htmlFor="time" className="block text-gray-700">Time</label>
                <input
                    type="time"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label htmlFor="doctorId" className="block text-gray-700">Doctor</label>
                <select
                    name="doctor"
                    id="doctor"
                    value={formData.doctorId}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                >
                    <option value="">Select Doctor</option>
                    {/* Populate with actual doctor data */}
                    <option value="doctor1">Doctor 1</option>
                    <option value="doctor2">Doctor 2</option>
                </select>
            </div>
            <div>
                <label htmlFor="reason" className="block text-gray-700">Reason</label>
                <textarea
                    name="reason"
                    id="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Book Appointment
            </button>
        </form>
    );
};

export default BookAppointment;
