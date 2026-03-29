import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!data.email || !data.password) {
      alert("Please enter email and password");
      return;
    }

    // demo login success
    navigate("/dashboard");
  };

  return (
    <AuthLayout>

      {/* Title */}
      <h2 className="text-3xl font-bold mb-2 text-gray-800">Sign in</h2>
      <p className="text-gray-500 mb-8 text-sm">
        Welcome back! Please enter your details.
      </p>

      {/* Email */}
      <input
        className="w-full border border-gray-300 p-3 rounded-xl mb-4 
        focus:outline-none focus:ring-2 focus:ring-green-600 
        transition shadow-sm"
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      {/* Password */}
      <input
        className="w-full border border-gray-300 p-3 rounded-xl mb-6 
        focus:outline-none focus:ring-2 focus:ring-green-600 
        transition shadow-sm"
        placeholder="Password"
        type="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      {/* Button */}
      <button
        onClick={handleLogin}
        className="w-full bg-green-700 text-white py-3 rounded-xl 
        hover:bg-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Sign in
      </button>

      {/* Divider */}
      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Signup Link */}
      <p className="text-sm text-center">
        Don’t have an account?{" "}
        <Link
          className="text-green-700 font-semibold hover:underline"
          to="/signup"
        >
          Create now
        </Link>
      </p>

    </AuthLayout>
  );
}