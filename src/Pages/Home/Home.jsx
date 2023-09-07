/* eslint-disable react/self-closing-comp */
import React from 'react';
import TitleBar from '../../Components/UnAuthComp/TitleBar';

function Home() {
  return (
    <>
      <TitleBar />
      <div className="flex min-h-screen bg-gray-800 flex-col items-center justify-center py-2">
        <div className=" w-full flex items-center justify-center px-16">
          <div className="relative w-full flex justify-center">
            <div className="absolute -bottom-5 right-96 w-72 h-72 bg-purple-400 rounded-full opacity-70 animate-blob"></div>
            <div className="absolute -bottom-5 top-0 left-96  w-72 h-72 bg-yellow-400 rounded-full opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-0  w-72 h-72 bg-pink-400 rounded-full opacity-70 animate-blob animation-delay-4000"></div>
            <div className="sticky bg-gray-800 bg-opacity-60 w-1/2 rounded-xl shadow-lg backdrop-blur-sm shadow-indigo-400">
              <div className="text-white text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-7">
                Welcome To IEMSIS
              </div>
              <div className="flex flex-col px-16 py-10 space-y-4">
                <div className="h-1/3 w-full rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 text-white font-semibold">
                  <select
                    name=""
                    id=""
                    className="w-full px-5 py-5 rounded-2xl bg-gray-800 shadow-xl focus:outline-none focus:ring-2 hover:ring-2 hover:ring-purple-600 focus:ring-purple-600"
                  >
                    <option value="null" disabled selected>
                      Select User Type
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="HOD">HOD</option>
                    <option value="Student">Student</option>
                  </select>
                </div>
                <div className="h-1/3 w-full rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 text-white font-semibold">
                  <select
                    name=""
                    id=""
                    className="w-full px-5 py-5 rounded-2xl bg-gray-800 shadow-xl focus:outline-none focus:ring-2 hover:ring-2 hover:ring-purple-600 focus:ring-purple-600"
                  >
                    <option value="null" disabled selected>
                      Select User Action
                    </option>
                    <option value="1">Login</option>
                    <option value="2">Forgot Password</option>
                  </select>
                </div>
                <div className="flex justify-center">
                  <button
                    className="w-1/2 px-5 py-5 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 text-white font-semibold"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
