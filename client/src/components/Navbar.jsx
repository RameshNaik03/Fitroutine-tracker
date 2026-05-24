function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <h1 className="text-xl font-bold text-emerald-600">FitRoutine</h1>

      <div className="flex gap-3">
        <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
          Dashboard
        </button>
        <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
          Profile
        </button>
      </div>
    </nav>
  )
}

export default Navbar
