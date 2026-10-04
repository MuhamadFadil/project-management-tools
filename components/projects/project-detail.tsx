const project = {
  name: 'IT Infrastructure Refresh',
  progress: 72,
  timeline: [
    { name: 'Planning', start: '2026-10-01', end: '2026-10-05', status: 'Complete' },
    { name: 'VM Setup', start: '2026-10-06', end: '2026-10-15', status: 'On Progress' },
    { name: 'Security Review', start: '2026-10-16', end: '2026-10-22', status: 'Not Yet' },
    { name: 'Deployment', start: '2026-10-23', end: '2026-10-30', status: 'Not Yet' },
  ],
  tasks: [
    { name: 'Server inventory', pic: 'Rafi', status: 'Complete', progress: 100 },
    { name: 'VM provisioning', pic: 'Nadia', status: 'On Progress', progress: 75 },
    { name: 'Backup validation', pic: 'Dimas', status: 'Not Yet', progress: 0 },
  ],
};

const statusColors: Record<string, string> = {
  Complete: 'bg-emerald-100 text-emerald-700',
  'On Progress': 'bg-sky-100 text-sky-700',
  'Not Yet': 'bg-slate-200 text-slate-700',
};

export function ProjectDetail() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="card p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Project</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">{project.name}</h1>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700">{project.progress}% complete</span>
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-blue-600" style={{ width: `${project.progress}%` }} />
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="card p-5">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">Gantt Timeline</h2>
            <div className="space-y-4">
              {project.timeline.map((item) => (
                <div key={item.name} className="grid grid-cols-[160px_1fr_120px] items-center gap-3">
                  <div className="text-sm font-medium text-slate-700">{item.name}</div>
                  <div className="h-10 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="flex h-full items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-3 text-xs font-medium text-white"
                      style={{ width: `${Math.max(18, 80)}%` }}
                    >
                      {item.start} - {item.end}
                    </div>
                  </div>
                  <span className={`badge ${statusColors[item.status]}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-5">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">Task List</h2>
            <div className="space-y-3">
              {project.tasks.map((task) => (
                <div key={task.name} className="rounded-xl border border-slate-200 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-slate-800">{task.name}</p>
                      <p className="text-sm text-slate-500">PIC: {task.pic}</p>
                    </div>
                    <span className={`badge ${statusColors[task.status]}`}>{task.status}</span>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: `${task.progress}%` }} />
                  </div>
                  <div className="mt-1 text-right text-xs text-slate-500">{task.progress}%</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
