import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface NavLink {
  href: string;
  labelKey: string;
  anchor?: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/", labelKey: "home" },
  { href: "/", labelKey: "about", anchor: "sobre-nosotros" },
  { href: "/", labelKey: "destinations", anchor: "destinos" },
  { href: "/gallery", labelKey: "gallery" },
  { href: "/merch", labelKey: "shop" },
  { href: "/contact", labelKey: "contact" },
];

const LEGAL_LINKS = [
  { href: "/legal/privacy", key: "privacy" },
  { href: "/legal/terms", key: "terms" },
  { href: "/legal/cookies", key: "cookies" },
] as const;

const ORGANIZER_LINK = { href: "/organizer", key: "organizer" };

export default function Footer() {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 text-sand-200 min-h-screen flex flex-col">
      {/* Main content — grows to fill */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 pt-24 pb-16 flex flex-col">

        {/* Big tagline */}
        <div className="mb-20 md:mb-24">
          <p className="font-sans text-xs uppercase tracking-widest text-sage-500 mb-6">
            {tFooter("eyebrow")}
          </p>
          <h2 className="font-serif text-display text-blush-200 max-w-2xl leading-tight">
            {tFooter("tagline")}
          </h2>
        </div>

        {/* Grid: brand + nav + social + contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-auto">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-sage-400 flex items-center justify-center shrink-0">
                <span className="font-serif text-blush-200 text-xs italic font-light">OV</span>
              </div>
              <span className="font-serif text-2xl italic font-light text-blush-200">Ola Viva</span>
            </div>
            <p className="font-sans text-sm text-sage-400 leading-relaxed max-w-xs">
              {tFooter("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-sage-500 mb-5">
              {tFooter("links.title")}
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ href, labelKey, anchor }) => (
                <li key={labelKey}>
                  <Link
                    href={anchor ? `${href}#${anchor}` : href}
                    className="font-sans text-sm text-sage-300 hover:text-blush-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-400 rounded"
                  >
                    {tNav(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-sage-500 mb-5">
              {tFooter("social.title")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-sage-300 hover:text-blush-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-400 rounded inline-flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  {tFooter("social.instagram")}
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-sage-300 hover:text-blush-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-400 rounded inline-flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  {tFooter("social.facebook")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-sage-500 mb-5">
              {tFooter("contact.title")}
            </h3>
            <p className="font-sans text-sm text-sage-400 leading-relaxed mb-4">
              {tFooter("contact.body")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-blush-200 hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-400 rounded"
            >
              {tFooter("contact.cta")}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="transition-transform group-hover:translate-x-1" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar — always at the very bottom */}
      <div className="border-t border-sage-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-sage-600">
            {tFooter("copyright", { year })}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href={ORGANIZER_LINK.href}
              className="font-sans text-xs text-blush-400 hover:text-blush-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-400 rounded"
            >
              {tFooter("organizer")}
            </Link>
            {LEGAL_LINKS.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className="font-sans text-xs text-sage-500 hover:text-sage-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-400 rounded"
              >
                {tFooter(`legal.${key}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
