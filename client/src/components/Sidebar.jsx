const menuItems = ['Dashboard', 'Workouts', 'Water Tracker', 'Sleep Tracker', 'Profile']

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 border-r border-gray-200 bg-gray-950 p-5 text-white md:block">
      <h2 className="mb-8 text-2xl font-bold text-emerald-400">Fitness Menu</h2>

      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item}>
            <button className="w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-200 hover:bg-gray-800 hover:text-emerald-300">
              {item}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
