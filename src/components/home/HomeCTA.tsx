import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Full-width call-to-action section below the wave reveal.
 * Blush-50 background creates a warm contrast to the sand-50 above.
 */
export default function HomeCTA() {
  const tDest = useTranslations("destinations");
  const tCommon = useTranslations("common");

  return (
    <section
      aria-labelledby="cta-heading"
      className="py-section overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F7EBE8 0%, #F4F6F2 100%)" }}
    >
      <Container narrow>
        <div className="flex flex-col items-center text-center gap-8">
          {/* Decorative lily SVG */}
          <div aria-hidden className="text-sage-300 opacity-60">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Lily line-art matching the brand logo */}
              <path d="M32 56V32" />
              <path d="M32 32c0-10-7-18-7-18s1 12 7 18" />
              <path d="M32 32c0-10 7-18 7-18s-1 12-7 18" />
              <path d="M32 32c-10 0-18-7-18-7s12 1 18 7" />
              <path d="M32 32c10 0 18-7 18-7s-12 1-18 7" />
              <path d="M32 44c-6 0-12-4-12-4s8 0 12 4" />
              <path d="M32 44c6 0 12-4 12-4s-8 0-12 4" />
              <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.4" />
            </svg>
          </div>

          <SectionHeading
            title={tDest("title")}
            subtitle={tDest("subtitle")}
            level="h2"
            align="center"
            withLine
          />

          <p className="font-sans text-base text-sage-600 leading-relaxed max-w-lg">
            Montaña, nieve, playas e islas paradisíacas. Cada entorno
            seleccionado para despertar una dimensión distinta de ti mismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/destinations"
              className="px-8 py-3.5 rounded-full font-sans text-sm font-medium bg-sage-400 text-white hover:bg-sage-500 active:bg-sage-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
            >
              {tCommon("learnMore")}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full font-sans text-sm font-medium border border-sage-300 text-sage-700 hover:bg-sage-50 active:bg-sage-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
            >
              {tCommon("bookNow")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
