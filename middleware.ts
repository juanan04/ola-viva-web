import { NextRequest, NextResponse } from "next/server";
import { routing, type Locale } from "./src/i18n/routing";

const LOCALE_COOKIE = "NEXT_LOCALE";

export function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  // If valid locale cookie exists, nothing to do
  if (cookieLocale && routing.locales.includes(cookieLocale as Locale)) {
    return NextResponse.next();
  }

  // Detect from Accept-Language header and persist as cookie
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const browserLocale = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0].trim().substring(0, 2).toLowerCase())
    .find((lang) => routing.locales.includes(lang as Locale)) as Locale | undefined;

  const locale: Locale = browserLocale ?? routing.defaultLocale;

  const response = NextResponse.next();
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next|images|videos|svg|fonts|favicon\.ico|.*\..*).*)",
  ],
};
