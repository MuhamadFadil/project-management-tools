import Link from 'next/link';
import { ArrowRight, CalendarDays, FolderKanban, Layers3 } from 'lucide-react';

const projects = [
  {
    id: 'p1',
    name: 'IT Infrastructure Refresh',
    status: 'On Progress',
    progress: 72,
    dueDate: '2026-11-15',
    tasks: 14,
    type: 'Infrastructure',
  },
  {
    id: 'p2',
    name: 'CRM Portal Maintenance',
    status: 'Not Yet',
    progress: 32,
    dueDate: '2026-10-25',
    tasks: 9,
    type: 'Application',
  },
  {
    id: 'p3',
    name: 'Security Hardening',
    status: 'Complete',
    progress: 100,
    dueDate: '2026-10-03',
    tasks: 6,
    type: 'Security',
  },
];

export function ProjectList() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Portfolio</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Projects</h1>
        </div>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
          + New Project
        </button>
      </header>

      <div className="grid gap-5 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  <FolderKanban className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium text-slate-500">{project.type}</span>
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                {project.status}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-slate-900">{project.name}</h2>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>Progress</span>
                <span className="font-semibold text-slate-900">{project.progress}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-blue-600" style={{ width: `${project.progress}%` }} />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
              <span className="flex items-center gap-1"><Layers3 className="h-4 w-4" /> {project.tasks} tasks</span>
              <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {project.dueDate}</span>
            </div>

            <div className="mt-5 flex items-center justify-end text-sm font-medium text-blue-600">
              Open detail <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
