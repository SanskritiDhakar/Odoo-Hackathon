import { useState } from "react";

export default function ExpenseForm() {
  const [data, setData] = useState({});

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">

      <h2 className="text-xl font-semibold mb-4">Add Expense</h2>

      {/* Amount */}
      <input
        className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-green-500"
        placeholder="Amount"
        onChange={(e) => setData({ ...data, amount: e.target.value })}
      />

      {/* Currency */}
      <select
        className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-green-500"
        onChange={(e) => setData({ ...data, currency: e.target.value })}
      >
        <option>Select Currency</option>
        <option>INR</option>
        <option>USD</option>
        <option>EUR</option>
      </select>

      {/* Date */}
      <input
        type="date"
        className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-green-500"
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />

      {/* Category */}
      <select
        className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-green-500"
        onChange={(e) => setData({ ...data, category: e.target.value })}
      >
        <option>Select Category</option>
        <option>Travel</option>
        <option>Food</option>
        <option>Office</option>
      </select>

      {/* Description */}
      <textarea
        className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-green-500"
        placeholder="Description"
        rows="3"
        onChange={(e) =>
          setData({ ...data, description: e.target.value })
        }
      />

      {/* Submit */}
      <button
        className="w-full bg-green-700 text-white py-3 rounded-lg 
        hover:bg-green-800 transition shadow-md"
      >
        Submit Expense
      </button>

    </div>
  );
}