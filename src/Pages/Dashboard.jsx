import React, { useState, useEffect } from "react";

import NavBar from '../Components/NavBar'
import ProfileCard from '../Components/ProfileCard';

const Dashboard = () => {

  const [search,setSearch] = useState("");
  const [location,setLocation] = useState("");
  const [industry,setIndustry] = useState("");

  const [user,setUser] = useState(null);
  const [appliedJobs,setAppliedJobs] = useState([]);

  useEffect(()=>{

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(storedUser){
      setUser(storedUser);
    }

    const storedApplied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(storedApplied);

  },[]);


  // temporary jobs (later replace with backend API)
  const jobs = [
    {
      id:1,
      title:"Software Engineering Intern",
      company:"TechCorp",
      location:"Remote",
      type:"Full Time",
      tag:"Engineering"
    },
    {
      id:2,
      title:"UI/UX Design Intern",
      company:"DesignHub",
      location:"New York",
      type:"Part Time",
      tag:"Design"
    },
    {
      id:3,
      title:"Growth Marketing Intern",
      company:"StartupX",
      location:"San Francisco",
      type:"Full Time",
      tag:"Marketing"
    }
  ]



  // APPLY INTERNSHIP FUNCTION
  const applyJob = (job)=>{

    const alreadyApplied = appliedJobs.find(j => j.id === job.id);

    if(alreadyApplied){
      alert("You already applied for this internship");
      return;
    }

    const updated = [...appliedJobs, job];

    setAppliedJobs(updated);

    localStorage.setItem("appliedJobs", JSON.stringify(updated));

    alert("Application submitted!");

  }



  // SEARCH FILTER
  const filteredJobs = jobs.filter((job)=>{

    return(
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      (industry === "" || industry === "Industry" || job.tag === industry)
    )

  })



  return (
   <>
   <NavBar/>

    <div className='min-h-screen w-full bg-gray-200 flex items-center justify-center '>

 

        <div className='w-full bg-white'>

            {/* Header*/}
         <div className='bg-blue-950 text-white pt-24 pb-30 text-center '>

           <h1 className=' text-2xl font-bold'>Lunch your</h1>

           <h2 className='text-2xl font-bold text-blue-600 font-serif'>Carrer</h2>

           <p className='mt-4 text-lg text-gray-300'>
           Discover internship opportunities that match your skills and interests. 
           Build real-world experience and take the first step toward your dream career.
           </p>
               

<div className="bg-white mt-8 p-4 rounded-lg shadow-lg inline-flex gap-3">

<input
type="text"
placeholder="Job title "
className="border border-gray-300 p-2 rounded text-black"
onChange={(e)=>setSearch(e.target.value)}
/>

<input
type="text"
placeholder="Location"
className="border border-gray-300 p-2 rounded text-black"
onChange={(e)=>setLocation(e.target.value)}
/>

<select
className="border border-gray-300 p-2 rounded text-black"
onChange={(e)=>setIndustry(e.target.value)}
>

<option>Industry</option>
<option>Engineering</option>
<option>Design</option>
<option>Marketing</option>

</select>

<button className="bg-pink-400 px-5 rounded font-semibold">
Search
</button>

</div> 
 </div>



{/* Feature Internship*/}

<div className="max-w-6xl mx-auto p-8">

<h2 className="text-2xl font-semibold mb-6">
Featured Internships
</h2>

<div className="grid md:grid-cols-3 gap-6">


{filteredJobs.map((job)=>(

<div
key={job.id}
className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
>

<h3 className="font-semibold text-lg">
{job.title}
</h3>

<p className="text-gray-600">
{job.company}
</p>

<div className="flex gap-2 mt-2 text-sm">

<span className="bg-gray-100 px-2 py-1 rounded">
{job.location}
</span>

<span className="bg-gray-100 px-2 py-1 rounded">
{job.type}
</span>

<span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
{job.tag}
</span>

</div>

<button
onClick={()=>applyJob(job)}
className="bg-blue-500 text-white w-full py-2 rounded mt-4 hover:bg-blue-600"
>
Apply Now
</button>

</div>

))}

</div>

</div>


{/* Why intern lunch*/}

<div className="bg-gray-100 py-14">

<h2 className="text-center text-2xl font-semibold mb-10">
Why Choose InternLaunch
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-lg shadow text-center">

<div className="text-3xl mb-2">🎯</div>

<h3 className="font-semibold">
Quality Internships
</h3>

<p className="text-sm text-gray-500 mt-2">
Access curated internship opportunities from top companies
</p>

</div>

<div className="bg-white p-6 rounded-lg shadow text-center">

<div className="text-3xl mb-2">⚡</div>

<h3 className="font-semibold">
Easy Application
</h3>

<p className="text-sm text-gray-500 mt-2">
Apply to multiple internships with just one click
</p>

</div>

<div className="bg-white p-6 rounded-lg shadow text-center">

<div className="text-3xl mb-2">📈</div>

<h3 className="font-semibold">
Career Growth
</h3>

<p className="text-sm text-gray-500 mt-2">
Gain real-world experience and build your professional network
</p>

</div>

</div>

</div>



<footer className="bg-gray-900 text-gray-300 py-10">

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

<div>
<h3 className="font-semibold text-white mb-2">
InternLaunch
</h3>
<p className="text-sm">
Connecting students with amazing internship opportunities.
</p>
</div>

<div>
<h4 className="text-white mb-2">For Students</h4>
<p className="text-sm">Browse Internships</p>
<p className="text-sm">Career Resources</p>
<p className="text-sm">Resume Builder</p>
</div>

<div>
<h4 className="text-white mb-2">For Companies</h4>
<p className="text-sm">Post Internships</p>
<p className="text-sm">Browse Candidates</p>
<p className="text-sm">Pricing</p>
</div>

<div>
<h4 className="text-white mb-2">Support</h4>
<p className="text-sm">Help Center</p>
<p className="text-sm">Contact Us</p>
<p className="text-sm">Privacy Policy</p>
</div>

</div>

<p className="text-center text-sm mt-8 opacity-70">
© 2025 InternLaunch. All rights reserved.
</p>

</footer>

          </div>
        </div>
    </>
  )
}

export default Dashboard