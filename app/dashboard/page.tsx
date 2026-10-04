import { StatCard } from '@/components/dashboard/stat-card';
import { TaskChart } from '@/components/dashboard/task-chart';

const stats = [
  { title: 'Active Projects', value: '08', change: '+2 this month', tone: 'blue' as const },
  { title: 'Open Tasks', value: '42', change: '-5 today', tone: 'default' as const },
  { title: 'Completed', value: '76%', change: '+12%', tone: 'green' as const },
  { title: 'Late Tasks', value: '05', change: 'Needs review', tone: 'red' as const },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">Overview</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Dashboard</h1>
          </div>
          <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
            + New Task
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </section>

        <TaskChart />

        <section className="card p-5">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Notification Alert</h2>
          <div className="space-y-3">
            <div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800">Deadline hari ini: 3 task urgent.</div>
            <div className="rounded-xl bg-rose-50 p-3 text-sm text-rose-700">2 task tertinggal dari target minggu ini.</div>
            <div className="rounded-xl bg-sky-50 p-3 text-sm text-sky-700">Outlook: 1 email flagged untuk PR, 2 email request VM terdeteksi.</div>
          </div>
        </section>
      </div>
    </main>
  );
}
