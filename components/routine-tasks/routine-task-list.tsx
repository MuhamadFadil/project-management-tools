import { CalendarCheck2, CircleDashed, ListTodo, Send } from 'lucide-react';

const routineItems = [
  { type: 'PR', name: 'Purchase Request for software license', status: 'Open', dueDate: '2026-10-05', icon: Send },
  { type: 'VM', name: 'VM request for QA environment', status: 'Created', dueDate: '2026-10-06', icon: CircleDashed },
  { type: 'Ad-hoc', name: 'Analytics dashboard adjustment', status: 'In Progress', dueDate: '2026-10-08', icon: ListTodo },
];

export function RoutineTaskList() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Routine Tasks</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Outlook & Daily Automation</h1>
        </div>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
          + Add Task
        </button>
      </header>

      <div className="space-y-4">
        {routineItems.map((task) => {
          const Icon = task.icon;
          return (
            <div key={task.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-slate-100 p-2 text-slate-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-700">{task.type}</span>
                      <span className="text-sm text-slate-500">{task.status}</span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-slate-900">{task.name}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CalendarCheck2 className="h-4 w-4" />
                  {task.dueDate}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
