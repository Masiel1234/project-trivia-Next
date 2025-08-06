import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const PUBLIC_ROUTES = ['/', '/login', '/register'];

export async function middleware(req: NextRequest) {
  const res = intlMiddleware(req);
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session }
  } = await supabase.auth.getSession();
  const { pathname } = req.nextUrl;
  const pathWithoutLocale = pathname.replace(/^\/(es|en|fr|jp|zh)(\/)?/, '/') || '/';
  const isRootLocaleOnly = /^\/(es|en|fr|jp|zh)$/.test(pathname);

  if (PUBLIC_ROUTES.includes(pathWithoutLocale) || isRootLocaleOnly) {
    return res;
  }
  if (!session) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = `/${req.nextUrl.locale || 'en'}/login`;
    return NextResponse.redirect(loginUrl);
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
