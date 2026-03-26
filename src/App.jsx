import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from "./Pages/Dashboard";
import NavBar from "./Components/NavBar";
import CompanyDashboard from "./Pages/CompanyDashboard";
import Applicants from "./Pages/Applicants";

// These match your screenshot exactly now:
import PostInternship from "./Pages/PostIntership"; // Matching your typo 'Intership'
import MyInternships from "./Pages/Jobs"; // Using 'Jobs.jsx' for the internships route

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/navbar" element={<NavBar/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
        {/* Company Routes */}
        <Route path="/company" element={<CompanyDashboard/>}/>
        <Route path="/post" element={<PostInternship />} />
        <Route path="/internships" element={<MyInternships />} />
        <Route path="/applicants" element={<Applicants />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;