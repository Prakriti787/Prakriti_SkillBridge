import React from 'react';
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate import

const NavBar = () => {
  const navigate = useNavigate();
  
  // Get user and CV status from localStorage (Only define 'user' ONCE)
  const user = JSON.parse(localStorage.getItem("user"));
  const hasCV = localStorage.getItem("student_cv_name");

  const handleLogout = () => {
    // This removes the user session so they have to log in again
    localStorage.removeItem("user"); 
    localStorage.removeItem("isLoggedIn");
    navigate("/Login");
  };

  return (
    <nav className='bg-blue-950 shadow-md sticky top-0 z-50'>
      <div className='max-w-8xl mx-auto px-7'>
        <div className='flex justify-between items-center h-16'>
          <Link to="/" className='text-xl font-bold text-pink-400'>
            SkillBridge
          </Link>

          <div className='flex items-center gap-6'>
            <Link to="/" className='text-gray-100 hover:text-blue-600 font-medium'>
              Home
            </Link>

            <Link to="/Internship" className='text-gray-100 hover:text-blue-600 font-medium'>
              Internships
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <Link 
                  to="/profile" 
                  className='text-gray-100 bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2'
                >
                  My Profile
                  {hasCV && <span className="w-2 h-2 bg-green-400 rounded-full" title="CV Uploaded"></span>}
                </Link>
                
                <img
                  src={user.photo || "https://i.pravatar.cc/40"}
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-pink-400"
                />

                {/* Added Logout button for convenience */}
                <button 
                  onClick={handleLogout}
                  className="text-gray-300 hover:text-red-400 text-sm font-medium ml-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link to="/Login" className='text-gray-100 hover:text-blue-600 font-medium'>
                  Login
                </Link>
                <Link to="/Signup" className='bg-pink-400 text-blue-950 px-4 py-2 rounded font-bold hover:bg-pink-300'>
                  Join Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;