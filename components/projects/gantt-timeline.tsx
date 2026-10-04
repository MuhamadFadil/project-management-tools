type TimelineItem = {
  name: string;
  start: string;
  end: string;
  status: 'Complete' | 'On Progress' | 'Not Yet';
};

const items: TimelineItem[] = [
  { name: 'Planning', start: '2026-10-01', end: '2026-10-05', status: 'Complete' },
  { name: 'VM Setup', start: '2026-10-06', end: '2026-10-15', status: 'On Progress' },
  { name: 'Security Review', start: '2026-10-16', end: '2026-10-22', status: 'Not Yet' },
  { name: 'Deployment', start: '2026-10-23', end: '2026-10-30', status: 'Not Yet' },
];

const statusColors = {
  Complete: 'bg-emerald-100 text-emerald-700',
  'On Progress': 'bg-sky-100 text-sky-700',
  'Not Yet': 'bg-slate-200 text-slate-700',
};

export function GanttTimeline() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">Gantt Timeline</h3>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="grid grid-cols-[160px_1fr_120px] items-center gap-3">
            <div className="text-sm font-medium text-slate-700">{item.name}</div>

            <div className="h-10 overflow-hidden rounded-full bg-slate-200">
              <div
                className="flex h-full items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-3 text-xs font-medium text-white"
                style={{ width: '78%' }}
              >
                {item.start} - {item.end}
              </div>
            </div>

            <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[item.status]}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
