import { type NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/lib/auth';

// List of protected routes
const protectedRoutes = ['/dashboard', '/projects', '/routine-tasks', '/issues', '/settings'];
const authRoutes = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Check if route is protected
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));
  const isAuth = authRoutes.some((route) => pathname.startsWith(route));

  // If trying to access protected route without token, redirect to login
  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If trying to access auth route with token, redirect to dashboard
  if (isAuth && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
