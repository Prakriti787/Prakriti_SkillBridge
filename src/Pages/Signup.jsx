import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [role, setRole] = useState("student");
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSignup = (e) => {

    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
      role: role
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    setSuccess(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000);

  };


  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="w-[540px] bg-white rounded-xl shadow-xl overflow-hidden">

        <div className="bg-gradient-to-r from-blue-400 to-blue-300 text-white p-8 text-center">

          <h1 className="text-2xl font-bold">
            Create Account
          </h1>

          <p className="text-sm opacity-80">
            Start your Journey with SkillBridge today
          </p>

        </div>


        <div className="p-6">

          {error && (
            <div className="mb-4 p-3 rounded bg-red-100 text-red-700 border border-red-300">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 rounded bg-green-100 text-green-700 border border-green-300">
              Signup successful! Redirecting to login...
            </div>
          )}


          <div className="flex gap-2 mb-4">

            <button
              type="button"
              onClick={() => setRole("student")}
              className={`flex-1 p-2 border rounded-lg ${
                role === "student"
                  ? "bg-blue-500 text-white"
                  : "border-gray-300"
              }`}
            >
              Student
            </button>

            <button
              type="button"
              onClick={() => setRole("company")}
              className={`flex-1 p-2 border rounded-lg ${
                role === "company"
                  ? "bg-blue-500 text-white"
                  : "border-gray-300"
              }`}
            >
              Company
            </button>

            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`flex-1 p-2 border rounded-lg ${
                role === "admin"
                  ? "bg-blue-500 text-white"
                  : "border-gray-300"
              }`}
            >
              Admin
            </button>

          </div>


          <form onSubmit={handleSignup} className="space-y-3">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg"
            />

            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">

              Sign Up

            </button>

          </form>

          <p className="text-center mt-4 text-sm">

            Already have account?{" "}

            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>

          </p>

        </div>

      </div>

    </div>

  );
};

export default Signup;