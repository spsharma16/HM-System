import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, userData);
        console.log('Login response data:', response.data); // Log the response data
        localStorage.setItem('token', response.data.token); // Store the token
        return response;
    } catch (error) {
        console.error('Error during login: ', error);
        throw error;
    }
};

// Ensure the token is attached to all Axios requests
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export const getUserProfile = async () => {
    const token = localStorage.getItem('token');
    return await axios.get(`${API_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const updateUserProfile = async (profileData) => {
    const token = localStorage.getItem('token');
    return await axios.put(`${API_URL}/auth/profile`, profileData, {
        headers: { Authorization: `Bearer ${token}` }
    });
};



export const registerUser = (userData)=> axios.post(`${API_URL}/auth/register`, userData);

export const getUsers = () => axios.get(`${API_URL}/auth/users`);
export const deleteUser = (id) => axios.delete(`${API_URL}/auth/users/${id}`);
export const bookAppointment = (appointmentData) => axios.post(`${API_URL}/appointments`, appointmentData);
export const getDashboardData = () =>axios.get(`${API_URL}/dashboard`);

// export const updateUserProfile = (profileData) => axios.put(`${API_URL}/profile`, profileData); 
 