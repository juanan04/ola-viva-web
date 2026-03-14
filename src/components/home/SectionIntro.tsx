import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Section revealed by the WaveReveal scroll animation.
 * Shows the brand intro + three brand value pillars.
 *
 * Rendered inside WaveReveal — must match bg-sand-50 to blend with the
 * sticky container background.
 */
export default function SectionIntro() {
  const tHome = useTranslations("home.intro");
  const tAbout = useTranslations("about.values");

  const values = [
    {
      key: "nature",
      icon: (
        // Leaf / nature icon
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M14 24c0-8 7-14 7-14S11 6 5 12c-2 2-3 5-2 8" />
          <path d="M14 24V14" />
        </svg>
      ),
    },
    {
      key: "community",
      icon: (
        // People / circle icon
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="10" cy="10" r="3.5" />
          <circle cx="18" cy="10" r="3.5" />
          <path d="M4 22c0-4 2.7-6 6-6h8c3.3 0 6 2 6 6" />
        </svg>
      ),
    },
    {
      key: "transformation",
      icon: (
        // Lily / bloom icon
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M14 22V12" />
          <path d="M14 12c0-4-3-7-3-7s0 5 3 7" />
          <path d="M14 12c0-4 3-7 3-7s0 5-3 7" />
          <path d="M14 16c-4 0-7-3-7-3s5 0 7 3" />
          <path d="M14 16c4 0 7-3 7-3s-5 0-7 3" />
        </svg>
      ),
    },
  ] as const;

  return (
    <section
      className="h-screen flex flex-col justify-center bg-sand-50"
      aria-label="Intro"
    >
      <Container className="py-section">
        {/* Heading */}
        <SectionHeading
          title={tHome("title")}
          subtitle="OLA VIVA"
          level="h2"
          align="center"
          withLine
          className="mb-16"
        />

        {/* Body */}
        <p className="font-sans text-base md:text-lg text-sage-600 leading-relaxed text-center max-w-2xl mx-auto mb-16">
          {tHome("body")}
        </p>

        {/* Value pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {values.map(({ key, icon }) => (
            <div
              key={key}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full bg-sage-100 flex items-center justify-center text-sage-500">
                {icon}
              </div>

              <h3 className="font-serif text-heading text-sage-800">
                {tAbout(`${key}.title`)}
              </h3>
              <p className="font-sans text-sm text-sage-500 leading-relaxed max-w-xs">
                {tAbout(`${key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
