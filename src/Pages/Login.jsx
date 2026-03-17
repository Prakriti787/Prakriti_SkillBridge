import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Get the latest user data from localStorage
    const rawData = localStorage.getItem("user");
    const storedUser = rawData ? JSON.parse(rawData) : null;

    // 2. Check if the account even exists
    if (!storedUser) {
      alert("No account found. Please signup first.");
      navigate("/signup");
      return;
    }

    // 3. Verify BOTH email and password (this ensures profile updates work)
    if (storedUser.email === email && storedUser.password === password) {
      alert("Login Successful");
      
      // We set a flag so the ProtectedRoute knows we are logged in
      localStorage.setItem("isLoggedIn", "true");
      
      // Redirect to the Dashboard/Home
      navigate("/"); 
    } else if (storedUser.email !== email) {
      alert("Invalid email address.");
    } else {
      alert("Invalid password. If you updated it in your profile, please use the new one.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-pink-400 text-3xl md:text-4xl font-bold mb-2">
            SkillBridge
          </h1>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-sm">
            <span>10,000+ STUDENTS PLACED</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-blue-600 px-8 py-6 text-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Find Your Next Big Opportunity
            </h2>
          </div>

          <div className="p-8">
            <div className="flex border-b border-gray-200 mb-8">
              <button className="flex-1 py-3 font-medium text-blue-600 border-b-2 border-blue-600">
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="flex-1 py-3 font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your Email here"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-11 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="text-gray-500" />
                    ) : (
                      <Eye size={18} className="text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-medium hover:bg-blue-700 transition-all active:scale-95"
              >
                Login to Account
              </button>
            </form>

            <p className="text-center mt-8 text-gray-600">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-600 font-medium hover:underline cursor-pointer"
              >
                Create one
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}