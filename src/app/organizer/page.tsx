import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("organizer");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function OrganizerPage() {
  const t = useTranslations("organizer");

  const values = ["creativity", "openness", "nature"] as const;

  return (
    <main id="main-content" className="min-h-screen bg-sand-50 overflow-hidden">

      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-sage-900 overflow-hidden">

        {/* Background organic blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-[--radius-organic] bg-sage-800/60 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-[--radius-organic] bg-blush-900/30 blur-2xl"
        />

        <Container className="relative z-10 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text side */}
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.25em] text-sage-400 mb-4">
                  {t("eyebrow")}
                </p>
                <h1 className="font-serif text-display-xl text-blush-200 leading-none mb-4">
                  {t("name")}
                </h1>
                <p className="font-serif text-xl italic text-sage-400 font-light">
                  {t("fullName")} · {t("age")}
                </p>
              </div>

              <div className="w-16 h-px bg-blush-600" />

              <p className="font-sans text-lg text-sage-300 leading-relaxed max-w-xl">
                {t("intro")}
              </p>

              {/* Pull quote */}
              <blockquote className="relative pl-6 border-l-2 border-blush-500">
                <p className="font-serif text-2xl italic text-blush-200 leading-snug">
                  &ldquo;{t("quote")}&rdquo;
                </p>
              </blockquote>

              <p className="font-sans text-base text-sage-400 leading-relaxed max-w-xl">
                {t("purpose")}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/#destinos"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blush-200 text-sage-900 font-sans text-sm font-semibold rounded-full hover:bg-blush-100 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-300 group"
                >
                  {t("ctaButton")}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-sage-600 text-sage-300 font-sans text-sm font-medium rounded-full hover:border-blush-400 hover:text-blush-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
                >
                  {t("ctaContact")}
                </Link>
              </div>
            </div>

            {/* Photo side */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative ring */}
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[--radius-organic] border border-sage-700/50"
                />
                {/* Second decorative ring */}
                <div
                  aria-hidden
                  className="absolute -inset-8 rounded-[--radius-organic] border border-blush-800/30"
                />

                {/* Photo container with organic shape */}
                <div
                  className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] overflow-hidden"
                  style={{ borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%" }}
                >
                  <Image
                    src="/images/about/organizadora.jpeg"
                    alt={t("imgAlt")}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                  />
                  {/* Subtle overlay for mood */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 via-transparent to-transparent" />
                </div>

                {/* Floating tag */}
                <div className="absolute -bottom-6 -left-6 bg-blush-200 text-sage-900 rounded-2xl px-5 py-3 shadow-xl shadow-sage-950/40">
                  <p className="font-sans text-xs uppercase tracking-widest text-sage-700 mb-0.5">OLA VIVA</p>
                  <p className="font-serif text-sm italic font-medium text-sage-800">{t("tagline")}</p>
                </div>
              </div>
            </div>

          </div>
        </Container>

        {/* Scroll indicator */}
        <div
          aria-hidden
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sage-600"
        >
          <span className="font-sans text-xs uppercase tracking-widest">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-sage-600 to-transparent" />
        </div>
      </section>

      {/* ── Values Section ───────────────────────────────── */}
      <section className="py-24 md:py-32 bg-sand-100">
        <Container>
          <div className="text-center mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-sage-500 mb-4">
              {t("fullName")}
            </p>
            <h2 className="font-serif text-heading text-sage-900">
              {t("valuesTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div
                key={v}
                className="group relative bg-white rounded-3xl p-8 shadow-sm shadow-sage-200/30 border border-sage-100 hover:border-blush-200 hover:shadow-md transition-all duration-300 text-center overflow-hidden"
              >
                {/* Hover blob */}
                <div
                  aria-hidden
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blush-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                />

                {/* Number */}
                <span className="font-serif text-6xl font-light text-sage-100 absolute top-4 right-6 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-sage-50 border border-sage-200 flex items-center justify-center mx-auto">
                    <span className="text-xl text-sage-500">✽</span>
                  </div>
                  <h3 className="font-serif text-2xl text-sage-800">
                    {t(`values.${v}.title`)}
                  </h3>
                  <p className="font-sans text-sage-600 text-sm leading-relaxed">
                    {t(`values.${v}.body`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA Section ──────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-sage-900 relative overflow-hidden">
        {/* Background shapes */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-[--radius-organic] bg-sage-800/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-[--radius-organic] bg-blush-900/20 blur-2xl"
        />

        <Container className="relative z-10 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-sage-500 mb-6">
            OLA VIVA
          </p>
          <h2 className="font-serif text-display text-blush-200 max-w-2xl mx-auto leading-tight mb-6">
            {t("ctaTitle")}
          </h2>
          <p className="font-sans text-sage-400 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            {t("ctaBody")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#destinos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blush-200 text-sage-900 font-sans text-sm font-semibold rounded-full hover:bg-blush-100 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-300 group"
            >
              {t("ctaButton")}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-sage-700 text-sage-300 font-sans text-sm font-medium rounded-full hover:border-sage-500 hover:text-sage-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500"
            >
              {t("backToHome")}
            </Link>
          </div>
        </Container>
      </section>

    </main>
  );
}
