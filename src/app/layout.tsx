import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { NextIntlClientProvider } from "next-intl";
import { cormorant, montserrat } from "@/lib/fonts";
import "@/app/globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import ScrollResetter from "@/components/layout/ScrollResetter";
import { OrganizationJsonLd, TravelAgencyJsonLd } from "@/components/seo/JsonLd";
import { routing, type Locale } from "@/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://olaviva.com";

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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await detectLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default as Record<string, Record<string, string>>;
  const meta = messages["metadata"] ?? {};

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: meta["title"] ?? "OLA VIVA",
      template: "%s | OLA VIVA",
    },
    description: meta["description"],
    openGraph: {
      title: meta["ogTitle"],
      description: meta["ogDescription"],
      locale,
      type: "website",
      siteName: "OLA VIVA",
      url: BASE_URL,
    },
    alternates: {
      canonical: BASE_URL,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await detectLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-sand-50 text-sage-900">
        <OrganizationJsonLd />
        <TravelAgencyJsonLd />
        <a href="#main-content" className="skip-to-content">
          {locale === "es" ? "Saltar al contenido" : "Skip to content"}
        </a>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ScrollResetter />
          <ConditionalLayout>{children}</ConditionalLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
