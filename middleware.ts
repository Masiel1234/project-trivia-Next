import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, languages } from './i18n/settings';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ya tiene un locale
  if (languages.some((lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`)) {
    return;
  }

  // Redirecciona a defaultLocale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
  ],
};
