export default function Sidebar() {
  return (
    <div className="w-64 bg-green-700 text-white min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-10">ReimbursePro</h1>

      <ul className="space-y-4">
        <li className="hover:bg-green-600 p-2 rounded cursor-pointer">
          Dashboard
        </li>
        <li className="hover:bg-green-600 p-2 rounded cursor-pointer">
          Expenses
        </li>
        <li className="hover:bg-green-600 p-2 rounded cursor-pointer">
          Approvals
        </li>
      </ul>

    </div>
  );
}