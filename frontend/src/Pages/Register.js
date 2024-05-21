import React ,{useState} from 'react';
// import { registerUser } from '../Services/api';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Register =()=>{
    const [formData, setFormData] = useState({name:'',email:'',password:'',role:'patient'});
    const history = useHistory();
    const {register} = useAuth();
    
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});

    };
    const handleSubmit = async (e) =>{
        e.preventDefault();

        console.log('Submitting form data:', formData); 
         try {
           await register(formData.name,formData.email,formData.password,formData.role);
           history.push('/login');

           

         } catch (err) {
            console.error('Error during registration:', err);  // Debug log
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if (err.request) {
                // The request was made but no response was received
                console.log(err.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', err.message);
            }
            alert('Error registering user');
        }
   

    };

    return(
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-6 rounded shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>Register</h2>
              
       
        <form onSubmit={handleSubmit} className='space-y-4'>
            <input type="text" name="name" value = {formData.name} onChange={handleChange} placeholder='Name' className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400' required/>
            <input type="email" name="email" value= {formData.email} onChange={handleChange} placeholder='Email' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
            <select type="role" value = {formData.role} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>

            </select>
            <button type="submit"
             className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
             >
            Register
            </button>
        </form>
        <p className='text-center text-gray-700 mt-4'>
            Already have an account? <a href="/login" className='text-blue-500 hover:underline'>Login</a>

        </p>
            </div>
        </div>
    );

};
export default Register;