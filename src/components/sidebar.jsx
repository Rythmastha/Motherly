import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Image from "../assets/Mom.png";

function Sidebar() {
  return (
    <div className="w-1/4 h-screen bg-[#FFF4F4] flex flex-col justify-between items-center font-bold">
      <div className="flex-1 flex flex-col py-8 items-center text-black">
        <div className="text-xl mb-4">My Profile</div>
        <div className="py-4 flex justify-center">
          <img
            className="w-1/2 rounded-full shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            src={Image}
            alt="Profile"
          />
        </div>
        <div
          className="py-4 text-2xl profile-text hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:animate-pulse"
          style={{
            display: 'inline-block', // Required for scaling effect
          }}
        >
          Veena Rathi
        </div>
        <div className="text-xl">62 days left</div>
      </div>
      <div className="flex flex-col pb-8 text-black">
        <div className="py-2">
          {/* Use Link to navigate without refreshing the page */}
          <Link
            to="/user"  // Update the correct path to profile
            className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-[#F38FB1] hover:text-white"
          >
            Home
          </Link>
        </div>
        <div className="py-2">
          <Link
            to="/user"
            className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-[#F38FB1] hover:text-white"
          >
            Settings
          </Link>
        </div>
        <div className="py-2">
          <Link
            to="/contacts"  // Update the correct path to contacts
            className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-[#F38FB1] hover:text-white"
          >
            Contacts
          </Link>
        </div>
        <div className="py-2">
          <Link
            to="/"
            className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-[#F38FB1] hover:text-white"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
