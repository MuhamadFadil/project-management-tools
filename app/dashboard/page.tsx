const stats = [
  { label: 'Active Projects', value: '12', change: '+2 this month' },
  { label: 'Open Tasks', value: '48', change: '-6 this week' },
  { label: 'In Progress', value: '9', change: '+3 today' },
  { label: 'Resolved', value: '24', change: '+8 this week' },
];

const projects = [
  { name: 'Website Redesign', owner: 'Product', progress: 72, status: 'On track' },
  { name: 'CRM Migration', owner: 'Operations', progress: 46, status: 'Review' },
  { name: 'Internal Tools', owner: 'IT', progress: 88, status: 'Ahead' },
];

const tasks = [
  { title: 'Prepare Q3 roadmap', due: 'Today', priority: 'High' },
  { title: 'Review VM requests', due: 'Tomorrow', priority: 'Medium' },
  { title: 'Update Microsoft Graph API starter', due: 'Friday', priority: 'Low' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-900">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex items-center justify-between rounded-2xl bg-slate-900 px-6 py-5 text-white shadow-lg">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Overview</p>
            <h1 className="mt-2 text-3xl font-bold">Personal Project Dashboard</h1>
          </div>
          <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
            + New Project
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <div className="mt-3 flex items-end justify-between">
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className="text-xs font-medium text-emerald-600">{stat.change}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Projects</h2>
              <button className="text-sm font-medium text-blue-600">View all</button>
            </div>

            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="rounded-xl border border-slate-200 p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{project.name}</h3>
                      <p className="text-sm text-slate-500">{project.owner}</p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                      {project.status}
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-sky-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  <div className="mt-2 text-right text-sm font-medium text-slate-600">
                    {project.progress}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Priority Tasks</h2>
            <ul className="mt-5 space-y-3">
              {tasks.map((task) => (
                <li key={task.title} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-slate-500">Due {task.due}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      task.priority === 'High'
                        ? 'bg-red-100 text-red-700'
                        : task.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {task.priority}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
