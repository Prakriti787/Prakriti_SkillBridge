import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../src/Pages/Signup";
import Login from "../src/Pages/Login";
import StudentLanding from "./Pages/StudentLanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
         <Route path="/student" element={<StudentLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
