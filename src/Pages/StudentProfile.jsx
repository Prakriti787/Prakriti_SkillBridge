import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";

const StudentProfile = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [cvName, setCvName] = useState(localStorage.getItem("student_cv_name") || "");

  // Load existing data
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    setUser(storedUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Save updated credentials back to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile and Credentials updated! Use your new email/password to login next time.");
  };

  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      localStorage.setItem("student_cv_name", file.name);
      setCvName(file.name);
      alert("CV Updated!");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <div className="max-w-4xl mx-auto pt-28 p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 border-b pb-4">Update Profile & Credentials</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Form Section */}
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600">Full Name</label>
                <input 
                  type="text" name="name" value={user.name} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-1" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600">Email Address (Login ID)</label>
                <input 
                  type="email" name="email" value={user.email} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-1" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600">New Password</label>
                <input 
                  type="password" name="password" value={user.password} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-1" 
                  placeholder="Leave as is to keep old password"
                />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700">
                Save Changes
              </button>
            </form>

            {/* CV Section */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="font-bold mb-2">Resume Management</h3>
              <p className="text-sm text-gray-600 mb-4">Your CV is visible to companies when you apply.</p>
              <input type="file" id="cv-up" className="hidden" onChange={handleCVUpload} />
              <label htmlFor="cv-up" className="bg-pink-400 text-blue-950 px-4 py-2 rounded cursor-pointer font-bold inline-block">
                {cvName ? "Replace CV" : "Upload CV"}
              </label>
              {cvName && <p className="mt-2 text-sm text-green-700 font-medium">📄 {cvName}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;