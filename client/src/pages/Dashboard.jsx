// Import reusable dashboard card component
import DashboardCard from '../components/DashboardCard'

// Import layout components
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

// Import interactive tracker components
import WaterTracker from "../components/watertracker";
import WorkoutTracker from "../components/workouttracker";
import SleepTracker from "../components/sleeptracker";

// Dashboard statistics data
const stats = [

  {
    title: 'Workout Streak',
    value: '12 days',
    tone: 'emerald'
  },

  {
    title: 'Weekly Workouts',
    value: '5 / 6',
    tone: 'sky'
  },

  {
    title: 'Water Intake',
    value: '2.4 L',
    tone: 'amber'
  },

  {
    title: 'Sleep Average',
    value: '7.5 h',
    tone: 'rose'
  },

];

// Dashboard page component
function Dashboard() {

  return (

    // Main dashboard background
    <div className="min-h-screen bg-gray-100">

      {/* Flex layout for sidebar + main content */}
      <div className="flex">

        {/* Sidebar navigation */}
        <Sidebar />

        {/* Main content section */}
        <main className="min-w-0 flex-1">

          {/* Top navbar */}
          <Navbar />

          {/* Dashboard content container */}
          <section className="mx-auto max-w-6xl px-6 py-8">

            {/* Dashboard heading section */}
            <div className="mb-8">

              {/* Small subtitle */}
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Fitness overview
              </p>

              {/* Main heading */}
              <h2 className="mt-2 text-3xl font-bold text-gray-950">
                Today&apos;s Progress
              </h2>

            </div>

            {/* Dashboard statistics cards */}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

              {/* Loop through stats array and render cards */}
              {stats.map((stat) => (

                <DashboardCard
                  key={stat.title}
                  {...stat}
                />

              ))}

            </div>

            {/* Interactive trackers section */}
            <div className="mt-10 grid gap-5 md:grid-cols-3">

              {/* Workout tracker */}
              <WorkoutTracker />

              {/* Water tracker */}
              <WaterTracker />

              {/* Sleep tracker */}
              <SleepTracker />

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}

// Export dashboard component
export default Dashboard;
