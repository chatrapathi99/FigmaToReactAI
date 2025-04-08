import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Get Started Now</h2>
        <p className="text-center text-gray-600 mb-6">Enter your Credentials to access your account</p>
        
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Enter your name"/>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Enter your email"/>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded" placeholder="Enter your password"/>
          </div>
          
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">I agree to the terms & policy</span>
          </div>
          
          <button type="submit" className="w-full bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700">
            Signup
          </button>
        </form>
        
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-600">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        
        <button className="w-full border border-gray-300 rounded-lg py-2 flex justify-center items-center mb-2">
          <span className="mr-2 text-sm">Sign in with Google</span>
          <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10c5.5 0 10-4.5 10-10s-4.5-10-10-10zm-1 17.6c-.4 0-.8-.1-1.2-.2l-1.2.6c.4.2.8.4 1.2.4 1.6 0 3-1.3 3-3 0-.5-.2-1.1-.5-1.5s-1-.6-1.4-.8zm-1.3-4.8l-1.2-1.2c0 .1-.5.6-.6.7l1.2 1.2c.3.3.5.1.6 0zm.7-.6c-.4 0-.8.1-1.1.3l-.9-.5c.3-.2.7-.3 1.1-.3s1.1.1 1.6.4c1 .6.7 2.1-.8 2.1-.4 0-.8-.1-1.1-.3l-.9.5c.5.4 1 1 1.9 1zm0 1.2c.4 0 .8 0 1.2-.1-.1-.2-.4-.4-.7-.6l-.9.4c.3.2.6.3 1 .3z"/></svg>
        </button>
        
        <button className="w-full border border-gray-300 rounded-lg py-2 flex justify-center items-center">
          <span className="mr-2 text-sm">Sign in with Apple</span>
          <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.5 0-11.75 5.25-11.75 11.75 0 6.5 5.25 11.75 11.75 11.75s11.75-5.25 11.75-11.75c0-6.5-5.25-11.75-11.75-11.75zm0 21c-5.2 0-9.5-4.3-9.5-9.5 0-5.2 4.3-9.5 9.5-9.5 5.2 0 9.5 4.3 9.5 9.5 0 5.2-4.3 9.5-9.5 9.5zm0-17c-1.5 0-3.35 1.6-3.35 3.6 0 1.61 1.1 2.3 2.08 2.3h1.12c1.18 0 2.08-1 2.08-2.3 0-2-1.65-3.6-3.93-3.6zm-1.03 9.35c-.24.46-.67.89-1.16 1.15.4.33.6.7.6 1.19 0 .72-.44 1.25-1.4 1.25s-1.4-.53-1.4-1.25 0-.93.52-1.19c.25-.23.57-.52.72-.89h2.3z"/></svg>
        </button>
        
        <p className="mt-4 text-center text-sm text-gray-600">
          Have an account? 
          <a href="/login" className="text-indigo-600 font-semibold"> Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
