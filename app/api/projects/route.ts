import { NextResponse } from 'next/server';

export async function GET() {
  const projects = [
    {
      id: 'p1',
      name: 'IT Infrastructure Refresh',
      status: 'On Progress',
      progress: 72,
      dueDate: '2026-11-15',
    },
    {
      id: 'p2',
      name: 'CRM Portal Maintenance',
      status: 'Not Yet',
      progress: 32,
      dueDate: '2026-10-25',
    },
  ];

  return NextResponse.json(projects);
}
