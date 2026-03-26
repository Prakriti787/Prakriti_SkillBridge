import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import StatCard from "../Components/StatCard";

const CompanyDashboard = () => {
  const [stats, setStats] = useState({
    jobs: 0,
    applicants: 0,
    shortlisted: 0,
    reviews: 0
  });

  useEffect(() => {
    // 1. Pull the internships you saved from localStorage
    const savedJobs = JSON.parse(localStorage.getItem("my_internships")) || [];
    
    // 2. Count them and update the stats state
    setStats({
      jobs: savedJobs.length, // This now reflects your actual posts!
      applicants: 15,         // Static for now until you build Applicant logic
      shortlisted: 5,         // Static for now
      reviews: 3              // Static for now
    });
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="p-6">
          {/* STAT CARDS */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <StatCard
              title="Total Job Posts"
              value={stats.jobs}
              icon="💼"
              color="text-orange-500"
            />
            <StatCard
              title="Total Applicants"
              value={stats.applicants}
              icon="👥"
              color="text-blue-500"
            />
            <StatCard
              title="Shortlisted"
              value={stats.shortlisted}
              icon="✅"
              color="text-green-500"
            />
            <StatCard
              title="Pending CV Reviews"
              value={stats.reviews}
              icon="📝"
              color="text-yellow-500"
            />
          </div>

          {/* CHART AREA */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Application Trends</h3>
            <div className="flex items-end gap-4 h-40">
              <div className="bg-orange-200 w-12 h-16 rounded"></div>
              <div className="bg-orange-200 w-12 h-24 rounded"></div>
              <div className="bg-orange-200 w-12 h-14 rounded"></div>
              <div className="bg-orange-500 w-12 h-32 rounded"></div>
              <div className="bg-orange-200 w-12 h-20 rounded"></div>
              <div className="bg-orange-200 w-12 h-18 rounded"></div>
            </div>
          </div>
          
          {/* Helpful Quick Action */}
          <div className="mt-6">
             <button 
              onClick={() => window.location.href='/post'}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
             >
               + Post New Internship
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;