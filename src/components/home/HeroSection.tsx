"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Full-viewport hero section — redesigned for maximum impact.
 *
 * Layout:
 *   - Full-bleed dark gradient background (deep sage → near-black)
 *   - Brand name "OLA VIVA" as a massive display headline (top-left anchor)
 *   - Tagline and subtitle centred vertically in the lower-left quadrant
 *   - Two CTAs bottom-left, scroll hint bottom-right (asymmetric composition)
 *   - Subtle grain texture overlay for organic depth
 *
 * When real hero photography is available, replace the gradient div
 * with <BlurImage src="..." fill priority sizes="100vw" alt="..." />
 * and remove it — the overlays remain.
 */
export default function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section
      aria-label="Hero"
      className="relative h-screen flex flex-col overflow-hidden"
    >
      {/* ── Background gradient ── */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, #4A5240 0%, #30362A 30%, #1E2219 60%, #0F1209 100%)",
        }}
      />

      {/* Grain texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Radial vignette — draws focus to the centre */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 40%, rgba(10,12,8,0.55) 100%)",
        }}
      />

      {/* ── Brand name — massive display, top-left ── */}
      <div className="relative z-10 px-8 md:px-14 pt-10 md:pt-14">
        {/* "OLA VIVA" split into two visually distinct words */}
        <div className="flex items-baseline gap-4 md:gap-5 select-none">
          <span
            className="font-serif font-light leading-none tracking-[-0.03em]"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 11rem)",
              color: "#F0D9D4",
            }}
          >
            OLA
          </span>
          <span
            className="font-serif font-light leading-none tracking-[-0.03em]"
            style={{
              fontSize: "clamp(4.5rem, 13vw, 11rem)",
              color: "#9BA78B",
            }}
          >
            VIVA
          </span>
        </div>
      </div>

      {/* ── Main content — lower portion of the screen ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-20 md:pb-24 px-8 md:px-14">

        {/* Thin rule above tagline */}
        <div
          className="mb-6 w-10 h-px"
          style={{ background: "rgba(240,217,212,0.4)" }}
          aria-hidden
        />

        {/* Tagline */}
        <h1
          className="font-serif font-light leading-[1.12] tracking-[-0.01em] mb-5 max-w-xl"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            color: "#F0D9D4",
          }}
        >
          {t("tagline")}
        </h1>

        {/* Subtitle */}
        <p
          className="font-sans font-light leading-relaxed mb-10 max-w-sm"
          style={{
            fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)",
            color: "rgba(228,208,212,0.65)",
            letterSpacing: "0.04em",
          }}
        >
          {t("subtitle")}
        </p>

        {/* CTAs — bottom row */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
          <Link
            href="/#destinations"
            className={cn(
              "inline-flex items-center gap-2.5",
              "px-7 py-3.5 rounded-full font-sans text-sm font-medium",
              "bg-sage-400 text-white",
              "hover:bg-sage-300 active:bg-sage-500 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-900"
            )}
          >
            {t("cta")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/gallery"
            className={cn(
              "inline-flex items-center gap-2",
              "px-7 py-3.5 rounded-full font-sans text-sm font-medium",
              "border transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-300 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-900"
            )}
            style={{
              borderColor: "rgba(228,208,212,0.35)",
              color: "rgba(253,248,247,0.80)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgba(228,208,212,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(228,208,212,0.55)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(228,208,212,0.35)";
            }}
          >
            {t("ctaSecondary")}
          </Link>
        </div>
      </div>

      {/* ── Scroll indicator — bottom-right ── */}
      <div
        aria-hidden
        className="absolute bottom-8 right-8 md:right-14 flex flex-col items-center gap-2.5"
        style={{ color: "rgba(155,167,139,0.55)" }}
      >
        {/* Animated scroll line */}
        <div
          className="w-px overflow-hidden"
          style={{ height: "48px", background: "rgba(155,167,139,0.2)" }}
        >
          <div
            style={{
              width: "100%",
              height: "50%",
              background: "rgba(155,167,139,0.7)",
              animation: "scrollLine 1.8s ease-in-out infinite",
            }}
          />
        </div>
        <span
          className="font-sans uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.2em" }}
        >
          scroll
        </span>
      </div>

      {/* scrollLine keyframe via inline style tag */}
      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
