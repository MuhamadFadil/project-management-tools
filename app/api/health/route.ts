import { NextResponse } from 'next/server';

export async function GET() {
  // Health check endpoint for Vercel deployment
  return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() });
}
