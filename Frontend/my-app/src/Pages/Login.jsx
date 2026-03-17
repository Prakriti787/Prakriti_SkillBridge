import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../Components/SuccessAlert";

export default function Login() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // AHILE BACKEND READY CHAINA -> Fake success
    setSuccess(true);

    // 1.5 seconds pachi student landing page ma lagne
    setTimeout(() => {
      navigate("/student");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg space-y-3">

        {/* SUCCESS ALERT */}
        {success && <SuccessAlert message="Login Successful!" />}

        <h2 className="text-2xl font-semibold text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
