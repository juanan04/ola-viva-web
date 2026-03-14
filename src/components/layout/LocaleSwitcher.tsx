"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_COOKIE = "NEXT_LOCALE";
const LOCALE_STORAGE_KEY = "preferred_locale";

function persistLocale(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Private mode or SSR — ignore
  }
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();

  const handleSwitch = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    persistLocale(nextLocale);
    router.refresh();
  };

  return (
    <div
      className="flex items-center gap-1 text-sm font-sans"
      role="group"
      aria-label="Language selector"
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && (
            <span className="text-sage-300 select-none" aria-hidden>
              /
            </span>
          )}
          <button
            onClick={() => handleSwitch(loc as Locale)}
            disabled={loc === locale}
            aria-pressed={loc === locale}
            className={cn(
              "px-1 py-0.5 uppercase font-medium transition-colors rounded",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400",
              loc === locale
                ? "text-sage-700 cursor-default"
                : "text-sage-400 hover:text-sage-600"
            )}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
