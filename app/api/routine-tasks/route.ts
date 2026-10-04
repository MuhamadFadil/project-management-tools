import { NextResponse } from 'next/server';

export async function GET() {
  const routine = [
    { id: 'r1', type: 'PR', name: 'Purchase request for software license', status: 'Open' },
    { id: 'r2', type: 'VM', name: 'VM request for QA environment', status: 'Created' },
  ];

  return NextResponse.json(routine);
}
