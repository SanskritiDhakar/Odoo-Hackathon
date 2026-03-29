export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-[380px]">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-green-700 mb-10">
            ReimbursePro
          </h1>

          {children}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 relative bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 text-white flex flex-col justify-center items-center p-16 overflow-hidden">

        {/* Soft Glow */}
        <div className="absolute w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-3xl top-[-50px] right-[-50px]"></div>
        <div className="absolute w-[300px] h-[300px] bg-white opacity-10 rounded-full blur-3xl bottom-[-50px] left-[-50px]"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-lg">

          <h2 className="text-4xl font-semibold leading-tight mb-4">
            Manage expenses <br /> the smart way
          </h2>

          <p className="text-lg opacity-90">
            Automate reimbursements, approvals, and tracking — all in one platform.
          </p>

        </div>

      </div>

    </div>
  );
}