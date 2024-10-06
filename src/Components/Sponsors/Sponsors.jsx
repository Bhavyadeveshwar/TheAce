import React from 'react';

function SponsorPage() {
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center font-Bruno">
      <div className="container mx-auto p-4 border-white border-r-4 ">
      <h1 className="text-5xl font-Bruno text-white font-bold mb-8 mt-80 text-center tracking-wider">Our Sponsors</h1>
        <div className="flex flex-wrap justify-center mb-12">
          <div className="w-1/3 p-4 md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div className="hover:bg-blue-800 hover:scale-105 hover:shadow-blue-500  bg-gradient-to-r from-sky-200 to-blue-400 rounded-md p-8 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h2 className="text-3xl text-blue-500 text-center font-bold font-Bruno">Title Sponsor</h2>
              <p className="text-blue-500 text-xl text-center font-Bruno">Company Name</p>
              <div className="flex justify-center">
                <div className="bg-gray-200 border-2 border-gray-300 rounded-full p-4">
                     <img src="" alt="" className="w-40 h-40 object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-4 md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div className="bg-gradient-to-r from-rose-300 to-pink-900 rounded-md p-8 hover:scale-105 hover:shadow-pink-400 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h2 className="text-3xl text-pink-950 font-bold text-center font-Bruno">Power Sponsor</h2>
              <p className="text-pink-950 text-xl text-center">Company Name</p>
              <div className="flex justify-center items-center">
                <div className="bg-gray-200  p-2 rounded-full">
                  <img src="" alt="" className="w-40 h-40 object-cover rounded-full " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/3 p-4 md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div className="bg-gradient-to-r from-slate-200 to-slate-500 rounded-md p-8 hover:scale-105 hover:shadow-gray-300  shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h2 className="text-2xl text-center text-gray-700 font-bold">Plantinum Sponsor</h2>
              <p className="text-gray-700 text-center text-xl">Company Name</p>
              <div className="flex justify-center">
                <div className="bg-white border-2 border-gray-300 rounded-full p-2">
                  <img src="" alt="" className="w-40 h-40 object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-4 md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div className="bg-gradient-to-r from-amber-200 to-amber-700 rounded-md p-8 hover:scale-105 hover:shadow-yellow-400  shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h2 className="text-2xl text-center text-yellow-800 font-bold">Gold Sponsor</h2>
              <p className="text-yellow-800 text-xl text-center">Company Name</p>
              <div className="flex justify-center">
                <div className="bg-white border-2 border-gray-300 rounded-full p-2">
                  <img src="company-logo.png" alt="" className="w-40 h-40 object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 p-4 md:w-1/3 lg:w-1/3 xl:w-1/3">
            <div className="bg-gradient-to-r from-gray-300 to-gray-700 rounded-md p-8 shadow-md hover:shadow-lg hover:scale-105 hover:shadow-gray-400 transition duration-300 ease-in-out">
              <h2 className="text-2xl text-center text-gray-700 font-bold">Silver Sponsor</h2>
              <p className="text-gray-700 text-center text-xl">Company Name</p>
              <div className="flex justify-center">
                <div className="bg-white border-2 border-gray-300 rounded-full p-2">
                  <img src="company-logo.png" alt="" className="w-40 h-40 rounded-full object-cover" />
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorPage;