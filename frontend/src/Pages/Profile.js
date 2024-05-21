// Example usage in Profile component
import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../Services/api';

const Profile = () => {
    const [profile, setProfile] = useState({ name: '', email: '', role: '' });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                console.log('Fetching profile...');
                const response = await getUserProfile();
                console.log('Profile data:', response.data);
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(profile);
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
            <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={profile.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={profile.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label htmlFor="role" className="block text-gray-700">Role</label>
                <select
                    name="role"
                    id="role"
                    value={profile.role}
                    onChange={handleChange}
                    disabled
                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                >
                    <option value="admin">Admin</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Update Profile
            </button>
        </form>
    );
};

export default Profile;
