// Navbar component
function Navbar() {

  return (

    // Main navbar container
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">

      {/* Logo / App Name */}
      <h1 className="text-2xl font-bold text-green-400">
        FitRoutine
      </h1>

      {/* Navigation Links */}
      <div className="flex gap-5">

        <button className="hover:text-green-400">
          Dashboard
        </button>

        <button className="hover:text-green-400">
          Profile
        </button>

      </div>

    </nav>
  );
}

// Export component
export default Navbar;