import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill in the data");
      return;
    }

    try {
      const res = await axios.post("http://localhost:6001/user/login", formData);
      alert("Login successful...");
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/All-task");
    } catch (error) {
      console.log("Error submitting data:", error);
      alert(error.response?.data?.message || "An error occurred");
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-500 p-4">
      <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/30 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>

          <div className="flex justify-between text-sm text-white pt-2">
            <NavLink to="/forget-pass" className="hover:underline">Forget Password</NavLink>
            <NavLink to="/reset-pass" className="hover:underline">Reset Password</NavLink>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <NavLink to="/signup">
          <button className="w-full mt-4 py-2 text-white border border-white/30 rounded-lg hover:bg-white/20 transition duration-300">
            Don’t have an account? Sign Up
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;