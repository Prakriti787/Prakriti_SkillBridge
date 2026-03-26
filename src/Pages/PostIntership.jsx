import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

const PostInternship = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    internship_type: "Full-time",
    category: "",
    deadline: ""
  });

  // --- ADD THIS FUNCTION ---
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Get existing data from localStorage
    const existingInternships = JSON.parse(localStorage.getItem("my_internships")) || [];

    // 2. Create the new internship object
    const newPost = {
      ...formData,
      id: Date.now(), // Unique ID
      applicants_count: 0,
      status: "Active",
      posted_at: new Date().toLocaleDateString()
    };

    // 3. Save it
    const updatedInternships = [newPost, ...existingInternships];
    localStorage.setItem("my_internships", JSON.stringify(updatedInternships));

    // Simulate a small delay for better UX
    setTimeout(() => {
      setLoading(false);
      alert("Internship Posted Successfully!");
      navigate("/internships"); // Redirects to Jobs/MyInternships page
    }, 500);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />
        
        <div className="p-8">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-blue-600 p-6">
              <h2 className="text-xl font-bold text-white">Post a New Internship</h2>
              <p className="text-blue-100 text-sm">Fill in the details to find your next intern.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Internship Title</label>
                <input 
                  type="text" name="title" required
                  placeholder="e.g. Frontend Developer Intern"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Industry / Category</label>
                  <input 
                    type="text" name="category" required
                    placeholder="e.g. Technology"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Internship Type</label>
                  <select 
                    name="internship_type"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    onChange={handleChange}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <input 
                    type="text" name="location" required
                    placeholder="e.g. New York or Remote"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Application Deadline</label>
                  <input 
                    type="date" name="deadline" required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Internship Description</label>
                <textarea 
                  name="description" required rows="5"
                  placeholder="Describe the role..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`px-8 py-3 rounded-lg font-bold text-white transition ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {loading ? "Posting..." : "Post Internship"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInternship;