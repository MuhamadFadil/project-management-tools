import Link from 'next/link';
import { Bell, LayoutDashboard, MessageSquareWarning, Settings, Wrench } from 'lucide-react';

const items = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/projects', label: 'Projects', icon: Wrench },
  { href: '/routine-tasks', label: 'Routine Tasks', icon: Bell },
  { href: '/issues', label: 'Issues', icon: MessageSquareWarning },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-slate-950 text-slate-100 lg:block">
      <div className="flex items-center gap-3 border-b border-slate-800 px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-sm font-bold text-blue-300">
          PM
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">System</p>
          <h2 className="text-lg font-semibold">Project Manager</h2>
        </div>
      </div>

      <nav className="space-y-2 p-4">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
