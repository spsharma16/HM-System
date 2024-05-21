import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/Hero.png)`,
            backgroundSize: 'contain', 
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgb(34 143 133 / 44%)'
          }}
        ></div>
        <div className="relative z-10 p-8 bg-white bg-opacity-75 md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4 text-center md:text-left">
            Welcome to the Hospital Management System
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-8 text-center md:text-left">
            Your health, our priority.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center md:justify-start">
            <a href="/register" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 text-center">
              Register
            </a>
            <a href="/login" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 text-center">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
