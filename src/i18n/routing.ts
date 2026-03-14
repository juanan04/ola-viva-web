import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "never", // No locale prefix in URLs — locale stored in cookie
});

export type Locale = (typeof routing.locales)[number];
