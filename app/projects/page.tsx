import Link from 'next/link';

const projects = [
  {
    id: 'project-1',
    name: 'IT Infrastructure Refresh',
    status: 'On Progress',
    progress: 72,
    dueDate: '2026-11-15',
    tasks: 14,
  },
  {
    id: 'project-2',
    name: 'HRM Portal Maintenance',
    status: 'Not Yet',
    progress: 32,
    dueDate: '2026-10-25',
    tasks: 9,
  },
  {
    id: 'project-3',
    name: 'Security Review & Hardening',
    status: 'Complete',
    progress: 100,
    dueDate: '2026-10-03',
    tasks: 6,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">Projects</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Project Portfolio</h1>
          </div>
          <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            + New Project
          </button>
        </header>

        <section className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="card block p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">{project.name}</h2>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  {project.status}
                </span>
              </div>

              <div className="mb-3 h-2.5 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-blue-600" style={{ width: `${project.progress}%` }} />
              </div>

              <div className="mb-3 flex items-center justify-between text-sm text-slate-600">
                <span>Progress</span>
                <span className="font-semibold text-slate-900">{project.progress}%</span>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{project.tasks} tasks</span>
                <span>Due {project.dueDate}</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
