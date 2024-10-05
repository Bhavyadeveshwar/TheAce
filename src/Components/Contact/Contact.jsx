import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12  bg-black text-white ">
      <h1 className="text-3xl font-bold  mb-4 mt-56">Contact Us</h1>
      <form className="max-w-md">
        <label className="block mb-2" htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="w-full p-2 pl-10 text-sm text-gray-700"
          placeholder="Enter your name"
        />
        <label className="block mb-2" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="w-full p-2 pl-10 text-sm text-gray-700 "
          placeholder="Enter your email"  
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold mt-4 py-2 px-4 rounded"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default Contact;