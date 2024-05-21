import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="/images/Hospital.jpg"
            alt="Hospital"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">About Us</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Welcome to our hospital management system. Our mission is to provide exceptional healthcare services to our community. We are committed to offering quality care with compassion and respect for all our patients.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Our hospital is equipped with state-of-the-art facilities and a team of dedicated professionals who are here to ensure your health and well-being. Thank you for choosing us as your healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
