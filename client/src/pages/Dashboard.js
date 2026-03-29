import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {

  // ✅ ROLE (CHANGE FOR DEMO)
  const role = "Employee"; // Employee / Manager / Finance / Director

  const [expense, setExpense] = useState({});
  const [list, setList] = useState([]);

  const submitExpense = async () => {
    const res = await axios.post("http://localhost:5000/api/expense", {
      ...expense,
      user_id: 1,
    });

    alert("Expense " + res.data.status);
    fetchExpenses();
  };

  const fetchExpenses = async () => {
    const res = await axios.get("http://localhost:5000/api/expenses");
    setList(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // 🔥 CALCULATIONS
  const total = list.reduce((acc, e) => acc + Number(e.amount || 0), 0);
  const approved = list.filter((e) => e.status === "Approved").length;
  const pending = list.filter((e) => e.status === "Pending").length;

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <div className="w-64 bg-gradient-to-b from-green-700 to-green-900 text-white min-h-screen p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-10">ReimbursePro</h1>

        <ul className="space-y-4">
          <li className="hover:bg-green-600 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-green-600 p-2 rounded cursor-pointer">Expenses</li>
          <li className="hover:bg-green-600 p-2 rounded cursor-pointer">Approvals</li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-2">Dashboard 👋</h1>

        {/* ✅ ROLE DISPLAY */}
        <p className="text-gray-500 mb-6">
          Role: <span className="font-semibold text-green-700">{role}</span>
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-500">Total Expenses</h3>
            <p className="text-2xl font-bold">₹{total}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-500">Approved</h3>
            <p className="text-2xl font-bold text-green-600">{approved}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-2xl font-bold text-yellow-600">{pending}</p>
          </div>

        </div>

        {/* ✅ ONLY EMPLOYEE CAN SUBMIT */}
        {role === "Employee" && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Add Expense</h2>

            <input
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Amount"
              onChange={(e) =>
                setExpense({ ...expense, amount: e.target.value })
              }
            />

            <input
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Category"
              onChange={(e) =>
                setExpense({ ...expense, category: e.target.value })
              }
            />

            <input
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Description"
              onChange={(e) =>
                setExpense({ ...expense, description: e.target.value })
              }
            />

            <button
              onClick={submitExpense}
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
            >
              Submit
            </button>
          </div>
        )}

        {/* TABLE */}
        <div className="bg-white p-6 rounded-xl shadow-md">

          <h2 className="text-xl font-semibold mb-4">All Expenses</h2>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b text-gray-600">
                <th className="p-2">Amount</th>
                <th className="p-2">Category</th>
                <th className="p-2">Status</th>
                {role !== "Employee" && <th className="p-2">Action</th>}
              </tr>
            </thead>

            <tbody>
              {list.map((e) => (
                <tr key={e.id} className="border-b hover:bg-gray-50">

                  <td className="p-2 font-medium">₹{e.amount}</td>
                  <td className="p-2">{e.category}</td>

                  <td className="p-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        e.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : e.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {e.status}
                    </span>
                  </td>

                  {/* ✅ APPROVAL BUTTONS */}
                  {role !== "Employee" && (
                    <td className="p-2">
                      {e.status === "Pending" && (
                        <div className="flex gap-2">
                          <button className="bg-green-500 text-white px-2 py-1 rounded">
                            Approve
                          </button>
                          <button className="bg-red-500 text-white px-2 py-1 rounded">
                            Reject
                          </button>
                        </div>
                      )}
                    </td>
                  )}

                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}