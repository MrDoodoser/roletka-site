import { NextRequest, NextResponse } from 'next/server';

function normalize(path: string) {
  const value = path || '/site-panel-2026';
  return value.startsWith('/') ? value : `/${value}`;
}

export function middleware(request: NextRequest) {
  const adminBase = normalize(process.env.ADMIN_PATH || '/site-panel-2026');
  const { pathname } = request.nextUrl;

  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    return NextResponse.rewrite(new URL('/not-found', request.url));
  }

  if (pathname === adminBase || pathname.startsWith(`${adminBase}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(adminBase, '/admin') || '/admin';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/site-panel-2026/:path*', '/:path*'],
};
