import DashboardCard from '../components/DashboardCard'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const stats = [
  { title: 'Workout Streak', value: '12 days', tone: 'emerald' },
  { title: 'Weekly Workouts', value: '5 / 6', tone: 'sky' },
  { title: 'Water Intake', value: '2.4 L', tone: 'amber' },
  { title: 'Sleep Average', value: '7.5 h', tone: 'rose' },
]

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Navbar />

          <section className="mx-auto max-w-6xl px-6 py-8">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                Fitness overview
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-950">Today&apos;s progress</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <DashboardCard key={stat.title} {...stat} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
