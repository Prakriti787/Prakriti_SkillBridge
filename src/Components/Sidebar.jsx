// src/Components/Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "bg-blue-50 text-blue-600 font-semibold" : "hover:bg-gray-100 text-gray-600";

  return (
    <div className="w-64 bg-white shadow-md min-h-screen p-5 sticky top-0">
      <h1 className="text-xl font-bold text-blue-600 mb-8">InternLaunch</h1>
      <nav className="flex flex-col gap-2">
        <Link to="/company-dashboard" className={`p-3 rounded-lg transition ${isActive('/company-dashboard')}`}>
           Dashboard
        </Link>
        <Link to="/post" className={`p-3 rounded-lg transition ${isActive('/post-internship')}`}>
           Post Internship
        </Link>
        <Link to="internships" className={`p-3 rounded-lg transition ${isActive('/my-internships')}`}>
           My Internships
        </Link>
        <Link to="/applicants" className={`p-3 rounded-lg transition ${isActive('/applicants')}`}>
           All Applicants
        </Link>
        <Link to="/profile" className={`p-3 rounded-lg transition ${isActive('/profile')}`}>
            Company Profile
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;