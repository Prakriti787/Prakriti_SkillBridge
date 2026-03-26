import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [agree, setAgree] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!first || !last) return setMsg("Please enter your full name.");
    if (!email.includes("@")) return setMsg("Enter a valid email.");
    if (pw.length < 6) return setMsg("Password must be 6+ characters.");
    if (!agree) return setMsg("You must agree to Terms & Conditions.");

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((u) => u.email === email)) {
      return setMsg("Account already exists. Try logging in.");
    }

    users.push({ first, last, email, pw });
    localStorage.setItem("users", JSON.stringify(users));

    setMsg("Account created successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2f2b3a] p-8">
      <div className="w-full max-w-xl bg-[#1f1b29] rounded-2xl p-8 text-white shadow-xl">
        <h1 className="text-3xl font-semibold">Create Account</h1>

        <p className="text-sm mt-2 text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="underline text-purple-400">
            Log in
          </Link>
        </p>

        {msg && <p className="mt-4 bg-white/10 p-2 rounded">{msg}</p>}

        <form className="mt-6 space-y-4" onSubmit={handleSignup}>
          <div className="flex gap-3">
            <input
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              placeholder="First name"
              className="w-1/2 p-3 rounded-lg bg-[#2a2536]"
            />
            <input
              value={last}
              onChange={(e) => setLast(e.target.value)}
              placeholder="Last name"
              className="w-1/2 p-3 rounded-lg bg-[#2a2536]"
            />
          </div>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#2a2536]"
          />

          <input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Password"
            type="password"
            className="w-full p-3 rounded-lg bg-[#2a2536]"
          />

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            I agree to the Terms & Conditions.
          </label>

          <button
            type="submit"
            className="w-full p-3 bg-purple-500 rounded-lg hover:bg-purple-600"
          >
            Create account
          </button>

          <div className="flex items-center gap-3 mt-4 opacity-70">
            <span className="flex-1 h-px bg-gray-500"></span>
            <p className="text-sm">Or register with</p>
            <span className="flex-1 h-px bg-gray-500"></span>
          </div>

          <button className="w-full bg-[#2a2536] p-3 rounded-lg flex justify-center gap-3">
            ✉️ Continue with Gmail
          </button>
        </form>
      </div>
    </div>
  );
}
