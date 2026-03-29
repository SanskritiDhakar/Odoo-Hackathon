export default function ExpenseTable() {
  const expenses = [
    {
      amount: 500,
      currency: "INR",
      category: "Food",
      date: "2026-03-28",
      status: "Approved",
    },
    {
      amount: 1200,
      currency: "USD",
      category: "Travel",
      date: "2026-03-27",
      status: "Pending",
    },
    {
      amount: 300,
      currency: "INR",
      category: "Office",
      date: "2026-03-26",
      status: "Rejected",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-xl font-semibold mb-4">All Expenses</h2>

      <table className="w-full text-sm">

        <thead>
          <tr className="text-left border-b text-gray-600">
            <th className="p-2">Amount</th>
            <th className="p-2">Currency</th>
            <th className="p-2">Category</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status & Approval</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((exp, i) => (
            <tr key={i} className="border-b hover:bg-gray-50 transition">

              <td className="p-2 font-medium">
                ₹{exp.amount}
              </td>

              <td className="p-2">
                {exp.currency}
              </td>

              <td className="p-2">
                {exp.category}
              </td>

              <td className="p-2">
                {exp.date}
              </td>

              {/* 🔥 UPDATED STATUS + APPROVAL FLOW */}
              <td className="p-2">
                <div className="flex flex-col gap-2">

                  {/* Status Badge */}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${
                      exp.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : exp.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {exp.status}
                  </span>

                  {/* Approval Flow */}
                  <div className="flex gap-2 text-[10px]">

                    <span
                      className={`px-2 py-1 rounded ${
                        exp.status === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      Manager
                    </span>

                    <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded">
                      Finance
                    </span>

                    <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded">
                      Director
                    </span>

                  </div>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}