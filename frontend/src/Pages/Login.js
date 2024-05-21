import { useState } from "react";
import React from 'react';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';

// import { loginUser } from "../Services/api";

const Login = () => {
      const [formData,setFormData] = useState({email:'',password:''});
      const history = useHistory();
      const {login} = useAuth();

      const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
      };

      const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
           await login(formData.email,formData.password);
           history.push('/');
           alert('User logged in successfully'); 
        } catch (error) {
            console.error('Error during login:',error);
            alert('Error logging In');
        }
      };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
    
     <form onSubmit={handleSubmit} className="space-y-4">
         <input type="email" name="email" value = {formData.email} onChange={handleChange} placeholder="Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required/>

        <input type="password" name="password" value = {formData.password} onChange={handleChange} placeholder="Password" 
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required/>

         <button type="submit" 
         className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
         >
         Login
         </button>
     </form>
     <p className="text-center text-gray-700 mt-4">
         Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
      </p>
      </div>
    </div>
  );
};

export default Login;