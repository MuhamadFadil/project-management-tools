import { NextResponse } from 'next/server';

export async function POST() {
  try {
    return NextResponse.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}
