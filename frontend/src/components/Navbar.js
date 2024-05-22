import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useAuth} from '../hooks/useAuth';

const Navbar = () => {
    const history = useHistory();
    const {user,logout} = useAuth();
    
    //tailwind css
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const handleLogout = ()=>{
        logout();
        history.push('/login');
    };
   //tailwind css
    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen);
    };
     
    console.log('Navbar user:',user);//debug :Check user data in navbar
    
  return (
    <nav className='bg-blue-600 p-4'>
    <div className='container mx-auto flex justify-between items-center'>
     <div className='text-white text-lg font-bold'>

        <Link to="/">CARE-Center</Link>
     </div>
     <div className='hidden md:flex space-x-4'>
        {!user && <Link to="/login" className="text-white">Login</Link>}
        {!user && <Link to="/register"className="text-white" >Register</Link>}

        {user && user.role ==='admin' && <Link to="/admin/dashboard" className="text-white">Admin Dashboard</Link>}
        {user && user.role === 'admin' && <Link to="/admin/users" className="text-white">Manage Users</Link>}
            {user && user.role === 'doctor' && <Link to="/doctor/dashboard" className="text-white">Doctor Dashboard</Link>}
            {user && user.role === 'patient' && <Link to="/patient/dashboard" className="text-white">Patient Dashboard</Link>}
            {user && user.role === 'patient' && <Link to="/patient/book-appointment" className="text-white">Book Appointment</Link>}
            {user && <Link to="/profile" className="text-white">{user.name || 'Profile'}</Link>}
            {user && <button onClick={handleLogout} className="text-white">Logout</button>}
            </div>

            {/* for tailwind css */}

            <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-blue-600 p-4 space-y-4">
                    {!user && <Link to="/login" className="block text-white">Login</Link>}
                    {!user && <Link to="/register" className="block text-white">Register</Link>}
                    {user && user.role === 'admin' && <Link to="/admin/dashboard" className="block text-white">Admin Dashboard</Link>}
                    {user && user.role === 'admin' && <Link to="/admin/users" className="block text-white">Manage Users</Link>}
                    {user && user.role === 'doctor' && <Link to="/doctor/dashboard" className="block text-white">Doctor Dashboard</Link>}
                    {user && user.role === 'patient' && <Link to="/patient/dashboard" className="block text-white">Patient Dashboard</Link>}
                    {user && user.role === 'patient' && <Link to="/patient/book-appointment" className="block text-white">Book Appointment</Link>}
                    {user && <Link to="/profile" className="block text-white">{user.name || 'Profile'}</Link>}
                    {user && <button onClick={handleLogout} className="block text-white">Logout</button>}
                </div>
            )}
    </nav>
  );
};

export default Navbar;