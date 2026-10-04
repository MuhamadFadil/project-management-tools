import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/lib/auth';

export async function authMiddleware(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const payload = await AuthService.verifyToken(token);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', payload.userId);
    requestHeaders.set('x-user-email', payload.email);

    return requestHeaders;
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}

export function getUserFromRequest(request: NextRequest): { userId: string; email: string } | null {
  const userId = request.headers.get('x-user-id');
  const email = request.headers.get('x-user-email');

  if (!userId || !email) return null;
  return { userId, email };
}
