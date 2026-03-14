import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { routing, type Locale } from "./routing";

async function detectLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  if (cookieLocale && routing.locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language") ?? "";
  const browserLocale = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0].trim().substring(0, 2).toLowerCase())
    .find((lang) => routing.locales.includes(lang as Locale)) as Locale | undefined;

  return browserLocale ?? routing.defaultLocale;
}

export default getRequestConfig(async () => {
  const locale = await detectLocale();
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
