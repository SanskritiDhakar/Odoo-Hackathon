import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

export default function Signup() {
  const [data, setData] = useState({});

  return (
    <AuthLayout>

      <h2 className="text-3xl font-bold mb-6">Create Account</h2>

      {/* Name */}
      <input
        className="w-full border p-3 rounded-lg mb-4"
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      {/* Email */}
      <input
        className="w-full border p-3 rounded-lg mb-4"
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      {/* Password */}
      <input
        className="w-full border p-3 rounded-lg mb-4"
        placeholder="Password"
        type="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      {/* Role */}
      <select
        className="w-full border p-3 rounded-lg mb-4"
        onChange={(e) => setData({ ...data, role: e.target.value })}
      >
        <option>Select Role</option>
        <option>Employee</option>
        <option>Manager</option>
        <option>Finance</option>
        <option>Director</option> {/* ✅ ADDED */}
      </select>

      {/* Button */}
      <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800">
        Signup
      </button>

      <p className="text-sm mt-4">
        Already have an account?{" "}
        <Link className="text-green-700 font-semibold" to="/">
          Login
        </Link>
      </p>

    </AuthLayout>
  );
}