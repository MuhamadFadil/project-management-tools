import { NextResponse } from 'next/server';

export async function GET() {
  const issues = [
    { id: 'i1', name: 'VM Disk Full', status: 'Open', severity: 'High' },
    { id: 'i2', name: 'TLS Certificate Expired', status: 'In Progress', severity: 'Critical' },
  ];

  return NextResponse.json(issues);
}
