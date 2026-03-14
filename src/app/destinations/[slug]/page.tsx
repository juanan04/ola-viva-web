import { notFound } from "next/navigation";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { DESTINATIONS, getDestinationBySlug } from "@/data/destinations";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import DestinationDetailClient from "@/components/destinations/DestinationDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const t = await getTranslations();
  const destination = getDestinationBySlug(slug);
  if (!destination) return { title: "Not Found" };
  return {
    title: `${t(destination.titleKey as any)} | OLA VIVA`,
    description: t(destination.descriptionKey as any),
  };
}

export default async function DestinationSlugPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const t = await getTranslations();

  const title = t(destination.titleKey as any);
  const tagline = t(destination.taglineKey as any);
  const description = t(destination.descriptionKey as any);
  const dates = t(destination.datesKey as any);

  const itinerary = destination.itinerary.map((day) => ({
    dayKey: day.dayKey,
    title: t(day.titleKey as any),
    body: t(day.bodyKey as any),
  }));

  const highlights = destination.highlights.map((k) => t(k as any));
  const included = destination.included.map((k) => t(k as any));
  const notIncluded = destination.notIncluded.map((k) => t(k as any));
  const travelStyle = destination.travelStyle.map((k) => t(k as any));
  const faqItems = destination.faqItems.map((item, i) => ({
    id: `faq-${i}`,
    question: t(item.questionKey as any),
    answer: t(item.answerKey as any),
  }));

  const strings = {
    aboutTrip: t("destinations.aboutTrip" as any),
    itineraryTitle: t("destinations.itineraryTitle" as any),
    itinerarySubtitle: t("destinations.itinerarySubtitle" as any),
    highlightsTitle: t("destinations.highlightsTitle" as any),
    travelStyleTitle: t("destinations.travelStyleTitle" as any),
    includedTitle: t("destinations.includedTitle" as any),
    notIncludedTitle: t("destinations.notIncludedTitle" as any),
    faqTitle: t("destinations.faqTitle" as any),
    bookNow: t("destinations.bookNow" as any),
    depositNote: t("destinations.depositNote" as any, { deposit: destination.depositPrice }),
    depositNote2: t("destinations.depositNote2" as any),
    trustBadge1Title: t("destinations.trustBadge1Title" as any),
    trustBadge1Body: t("destinations.trustBadge1Body" as any),
    trustBadge2Title: t("destinations.trustBadge2Title" as any),
    trustBadge2Body: t("destinations.trustBadge2Body" as any),
    perPerson: t("destinations.perPerson" as any),
    days: t("destinations.days" as any),
    people: t("destinations.people" as any),
    backToDestinations: t("destinations.backToDestinations" as any),
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* ── Hero ── */}
      <section className="relative h-[55vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src={destination.heroImage.src}
          alt={destination.heroImage.alt}
          fill
          priority
          placeholder="blur"
          blurDataURL={destination.heroImage.blurDataURL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* Back link */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <Container>
            <Link
              href="/#destinos"
              className="inline-flex items-center gap-2 font-sans text-sm text-white/80 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              {strings.backToDestinations}
            </Link>
          </Container>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10">
          <Container>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-3 leading-tight">
              {title}
            </h1>
            <p className="font-sans text-base md:text-lg text-white/80 font-light max-w-2xl mb-6">
              {tagline}
            </p>
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white font-sans text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                {destination.durationDays} {strings.days}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white font-sans text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                {destination.maxPeople} {strings.people}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white font-sans text-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                {dates}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-400 text-white font-sans text-sm font-semibold">
                {destination.price} €
              </span>
            </div>
          </Container>
        </div>
      </section>

      {/* ── Body: two-column layout ── */}
      <DestinationDetailClient
        destination={{
          price: destination.price,
          depositPrice: destination.depositPrice,
          durationDays: destination.durationDays,
          maxPeople: destination.maxPeople,
          dates,
          description,
          itinerary,
          highlights,
          included,
          notIncluded,
          travelStyle,
          faqItems,
        }}
        strings={strings}
      />
    </div>
  );
}
