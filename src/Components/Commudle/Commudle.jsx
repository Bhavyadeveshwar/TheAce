import React from 'react';
import Icon from '../../assets/logo.svg'

const Commudle = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div
        className="p-20 rounded-lg shadow-lg bg-gray-800  hover:scale-105 hover:shadow-white transition duration-300 ease-in-out">
        <h1 className="text-8xl font-bold mb-4">REGISTRATION</h1>
        <p className="text-4xl text-center ">
          Register for <span className="text-blue-500 font-bold">THE ACE'24</span> on
        </p>
        <div className="relative flex items-center justify-center">
          <img
            src={Icon}
            alt="commudle"
            className="w-96 h-auto animate-pulse py-3"
          />
          <div>
            <span className="text-5xl font-bold text-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Commudle;