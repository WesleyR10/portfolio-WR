import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (request.nextUrl.pathname === '/about') {
    response.headers.set('x-page-type', 'about')
  }

  return response
}

export const config = {
  matcher: ['/about'],
}
