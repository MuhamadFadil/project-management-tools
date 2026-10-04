import { NextResponse, NextRequest } from 'next/server';
import { AuthService } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await AuthService.verifyToken(token);
    const user = await AuthService.getUserById(payload.userId);

    return NextResponse.json({ user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
