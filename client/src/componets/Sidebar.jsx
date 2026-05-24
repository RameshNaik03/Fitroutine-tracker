// Sidebar component
function Sidebar() {

  // Sidebar UI
  return (

    // Main sidebar container
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">

      {/* Sidebar title */}
      <h2 className="text-2xl font-bold text-green-400 mb-8">
        Fitness Menu
      </h2>

      {/* Navigation menu */}
      <ul className="space-y-5">

        <li className="hover:text-green-400 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          Workouts
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          Water Tracker
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          Sleep Tracker
        </li>

        <li className="hover:text-green-400 cursor-pointer">
          Profile
        </li>

      </ul>

    </div>
  );
}

// Export sidebar component
export default Sidebar;