import { AlertTriangle, Clock3, FileText, Search, Upload } from 'lucide-react';

const issues = [
  {
    name: 'VM Disk Full',
    status: 'In Progress',
    severity: 'High',
    desc: 'Database storage reached threshold after nightly backup.',
  },
  {
    name: 'PR sync failed',
    status: 'Solved',
    severity: 'Medium',
    desc: 'Outlook email flagged but not synced to task board.',
  },
  {
    name: 'SSL certificate expired',
    status: 'Open',
    severity: 'Critical',
    desc: 'Public API TLS certificate expired and needs immediate replacement.',
  },
];

const statusColors: Record<string, string> = {
  Open: 'bg-slate-200 text-slate-700',
  'In Progress': 'bg-amber-100 text-amber-700',
  Solved: 'bg-emerald-100 text-emerald-700',
};

const severityColors: Record<string, string> = {
  Critical: 'bg-rose-100 text-rose-700',
  High: 'bg-orange-100 text-orange-700',
  Medium: 'bg-yellow-100 text-yellow-700',
};

export function IssueList() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Issue & Report</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Troubleshooting Log</h1>
        </div>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
          + New Issue
        </button>
      </header>

      <div className="space-y-4">
        {issues.map((issue) => (
          <div key={issue.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <h2 className="text-lg font-semibold text-slate-900">{issue.name}</h2>
                </div>
                <p className="mt-2 text-sm text-slate-600">{issue.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[issue.status]}`}>
                  {issue.status}
                </span>
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${severityColors[issue.severity]}`}>
                  {issue.severity}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Clock3 className="h-4 w-4" /> Today</span>
              <span className="flex items-center gap-1"><FileText className="h-4 w-4" /> Solution notes</span>
              <span className="flex items-center gap-1"><Upload className="h-4 w-4" /> Attachment</span>
              <span className="flex items-center gap-1"><Search className="h-4 w-4" /> Investigation</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
