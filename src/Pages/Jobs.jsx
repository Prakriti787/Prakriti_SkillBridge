import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

const Jobs = () => {
  const [internships, setInternships] = useState([]);

  // Load data from localStorage on page load
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("my_internships")) || [];
    setInternships(savedData);
  }, []);

  // Function to delete a post
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this internship post?")) {
      const updatedList = internships.filter((job) => job.id !== id);
      setInternships(updatedList);
      localStorage.setItem("my_internships", JSON.stringify(updatedList));
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />
        
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">My Internship Posts</h2>
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
              {internships.length} Total Posts
            </span>
          </div>

          {internships.length > 0 ? (
            <div className="grid gap-4">
              {internships.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center hover:shadow-md transition"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                    <div className="flex gap-4 mt-1 text-sm text-gray-500">
                      <span>📍 {job.location}</span>
                      <span>💼 {job.internship_type}</span>
                      <span>📅 Deadline: {job.deadline}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right mr-4">
                      <p className="text-xs text-gray-400 uppercase font-bold">Applicants</p>
                      <p className="text-lg font-bold text-blue-600">{job.applicants_count || 0}</p>
                    </div>
                    <button 
                      onClick={() => handleDelete(job.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                      title="Delete Post"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-20 text-center rounded-xl shadow-sm border border-dashed border-gray-300">
              <div className="text-4xl mb-4">📂</div>
              <h3 className="text-xl font-semibold text-gray-700">No Internships Posted Yet</h3>
              <p className="text-gray-500 mt-2">When you post an internship, it will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;