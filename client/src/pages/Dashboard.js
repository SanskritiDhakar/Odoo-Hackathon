import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const role = "Employee"; // Change for demo

  const [expense, setExpense] = useState({});
  const [list, setList] = useState([]);

  // ✅ SUBMIT EXPENSE
  const submitExpense = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/expenses",
        {
          ...expense,
          date: expense.date || new Date(),
          currency: "INR",
          status: "Pending",
          user_id: 1
        }
      );

      alert("Expense submitted ✅");
      fetchExpenses();
    } catch (err) {
      console.log(err);
      alert("Error submitting expense ❌");
    }
  };

  // ✅ FETCH EXPENSES
  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/expenses");
      setList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // STATS
  const total = list.reduce((acc, e) => acc + Number(e.amount || 0), 0);
  const approved = list.filter((e) => e.status === "Approved").length;
  const pending = list.filter((e) => e.status === "Pending").length;

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <div className="w-64 bg-green-800 text-white min-h-screen p-6">
        <h1 className="text-2xl font-bold mb-10">ReimbursePro</h1>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">

        <h1 className="text-3xl font-bold mb-2">Dashboard 👋</h1>
        <p className="text-gray-500 mb-6">
          Role: <span className="text-green-700 font-semibold">{role}</span>
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            ₹{total} Total
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-green-600">
            {approved} Approved
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-yellow-600">
            {pending} Pending
          </div>
        </div>

        {/* FORM */}
        {role === "Employee" && (
          <div className="bg-white p-6 rounded-xl shadow mb-6">
            <h2 className="mb-4 font-semibold">Add Expense</h2>

            <input placeholder="Amount" className="w-full border p-2 mb-2"
              onChange={(e) => setExpense({ ...expense, amount: e.target.value })} />

            <input placeholder="Category" className="w-full border p-2 mb-2"
              onChange={(e) => setExpense({ ...expense, category: e.target.value })} />

            <input type="date" className="w-full border p-2 mb-2"
              onChange={(e) => setExpense({ ...expense, date: e.target.value })} />

            <input placeholder="Description" className="w-full border p-2 mb-2"
              onChange={(e) => setExpense({ ...expense, description: e.target.value })} />

            <button onClick={submitExpense}
              className="bg-green-700 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        )}

        {/* TABLE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="mb-4 font-semibold">Expenses</h2>

          <table className="w-full">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {list.map((e) => (
                <tr key={e._id}>
                  <td>₹{e.amount}</td>
                  <td>{e.category}</td>
                  <td>{e.date?.substring(0, 10)}</td>
                  <td>{e.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}