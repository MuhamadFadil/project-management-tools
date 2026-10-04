'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Bell, LogOut, Search } from 'lucide-react';

export function Topbar() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="border-b border-slate-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <Search className="h-4 w-4 text-slate-500" />
          <input
            className="w-full border-0 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
            placeholder="Search projects, tasks, issues..."
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="relative rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              3
            </span>
          </button>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-sm font-semibold text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">{user?.name}</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100"
            title="Logout"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
