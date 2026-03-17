// src/Pages/Applicants.js
import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

const Applicants = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/applicants/")
      .then(res => res.json())
      .then(data => setApplicants(data));
  }, []);

  const updateStatus = async (id, newStatus) => {
    const response = await fetch(`http://127.0.0.1:8000/api/applications/${id}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });

    if (response.ok) {
      setApplicants(applicants.map(app => app.id === id ? { ...app, status: newStatus } : app));
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />
        <div className="p-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 font-semibold text-gray-600">Student Name</th>
                  <th className="p-4 font-semibold text-gray-600">Applied For</th>
                  <th className="p-4 font-semibold text-gray-600">Status</th>
                  <th className="p-4 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applicants.map((app) => (
                  <tr key={app.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-medium">{app.student_name}</div>
                      <div className="text-xs text-blue-500 underline cursor-pointer">View Resume</div>
                    </td>
                    <td className="p-4 text-gray-600">{app.job_title}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        app.status === 'shortlisted' ? 'bg-green-100 text-green-700' : 
                        app.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {app.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4 flex gap-2">
                      <button onClick={() => updateStatus(app.id, 'shortlisted')} className="px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600">Shortlist</button>
                      <button onClick={() => updateStatus(app.id, 'rejected')} className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicants;