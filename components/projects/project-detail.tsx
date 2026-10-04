import { GanttTimeline } from '@/components/projects/gantt-timeline';

const project = {
  name: 'IT Infrastructure Refresh',
  progress: 72,
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
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Project</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">{project.name}</h1>
          </div>
          <span className="rounded-full bg-blue-100 px-3 py-2 text-sm font-medium text-blue-700">
            {project.progress}% complete
          </span>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-blue-600" style={{ width: `${project.progress}%` }} />
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.45fr_0.75fr]">
        <GanttTimeline />

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-slate-900">Task List</h3>

          <div className="space-y-3">
            {project.tasks.map((task) => (
              <div key={task.name} className="rounded-xl border border-slate-200 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-slate-800">{task.name}</p>
                    <p className="text-sm text-slate-500">PIC: {task.pic}</p>
                  </div>
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[task.status]}`}>
                    {task.status}
                  </span>
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
  );
}
