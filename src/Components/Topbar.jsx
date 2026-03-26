// src/Components/Topbar.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth tokens/user data
    localStorage.removeItem("user_token"); 
    localStorage.removeItem("user_role");
    
    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h2 className="font-semibold text-lg text-gray-700">
        Platform Performance
      </h2>

      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
          
        </div>

        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-100 transition"
        >
          <span>Logout</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Topbar;