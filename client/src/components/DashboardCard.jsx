function DashboardCard({ title, value, tone = 'emerald' }) {
  const toneClasses = {
    emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    sky: 'bg-sky-50 text-sky-700 ring-sky-100',
    amber: 'bg-amber-50 text-amber-700 ring-amber-100',
    rose: 'bg-rose-50 text-rose-700 ring-rose-100',
  }

  return (
    <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-200">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className={`mt-4 inline-flex rounded-md px-3 py-2 text-2xl font-bold ring-1 ${toneClasses[tone]}`}>
        {value}
      </p>
    </article>
  )
}

export default DashboardCard
