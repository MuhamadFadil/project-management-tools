import { NextResponse } from 'next/server';
import { AuthService } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
    }

    const { user, token } = await AuthService.login(email, password);

    return NextResponse.json({
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : 'Login failed';
    return NextResponse.json({ error: message }, { status: 401 });
  }
}
