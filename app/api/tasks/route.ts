import { NextResponse } from 'next/server';

export async function GET() {
  const tasks = [
    { id: 't1', name: 'Server inventory', status: 'Complete', progress: 100 },
    { id: 't2', name: 'VM provisioning', status: 'On Progress', progress: 75 },
    { id: 't3', name: 'Backup validation', status: 'Not Yet', progress: 0 },
  ];

  return NextResponse.json(tasks);
}
