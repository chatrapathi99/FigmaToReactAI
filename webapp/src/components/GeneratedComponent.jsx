
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-black text-2xl mb-6">user name</h1>
        
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="username"
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
        </div>

        <div className="relative mb-4">
          <input
            type="password"
            placeholder="password"
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
        </div>

        <button className="bg-gray-300 text-black py-3 rounded-lg w-full hover:bg-gray-400">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
    
