import type { Destination, DestinationEnvironment } from "@/types/destination";

const BLUR_DARK =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmM9QDwADhQGAWjR9awAAAABJRU5ErkJggg==";

export const ENVIRONMENT_GRADIENTS: Record<DestinationEnvironment, string> = {
  mountains:
    "linear-gradient(160deg, #141710 0%, #252A1F 30%, #3D4534 60%, #566149 100%)",
  snow: "linear-gradient(160deg, #E8ECE4 0%, #D1D9CA 30%, #B5C1AA 55%, #9BA78B 100%)",
  beaches:
    "linear-gradient(160deg, #0a2535 0%, #15445e 35%, #1e6b88 65%, #3598b5 100%)",
  islands:
    "linear-gradient(160deg, #0a2a1a 0%, #145a35 35%, #1d8a55 65%, #38b878 100%)",
};

export const DESTINATIONS: Destination[] = [
  // ── MALLORCA ──────────────────────────────────────────────────────────────
  {
    id: "mallorca",
    slug: "mallorca",
    environment: "islands",
    titleKey: "destinations.list.mallorca.title",
    descriptionKey: "destinations.list.mallorca.description",
    taglineKey: "destinations.list.mallorca.tagline",
    heroImage: {
      src: "/images/destinations/mallorca-bg.jpg",
      alt: "Mallorca, costa mediterránea",
      blurDataURL: BLUR_DARK,
      width: 1920,
      height: 1080,
    },
    coverImage: {
      src: "/images/destinations/mallorca-cover.jpg",
      alt: "Retiro en Mallorca",
      blurDataURL: BLUR_DARK,
      width: 800,
      height: 600,
    },
    galleryImages: [],
    price: 589,
    depositPrice: 180,
    datesKey: "destinations.list.mallorca.dates",
    durationDays: 5,
    maxPeople: 20,
    itinerary: [
      { dayKey: "day1", titleKey: "destinations.list.mallorca.itinerary.day1.title", bodyKey: "destinations.list.mallorca.itinerary.day1.body" },
      { dayKey: "day2", titleKey: "destinations.list.mallorca.itinerary.day2.title", bodyKey: "destinations.list.mallorca.itinerary.day2.body" },
      { dayKey: "day3", titleKey: "destinations.list.mallorca.itinerary.day3.title", bodyKey: "destinations.list.mallorca.itinerary.day3.body" },
      { dayKey: "day4", titleKey: "destinations.list.mallorca.itinerary.day4.title", bodyKey: "destinations.list.mallorca.itinerary.day4.body" },
      { dayKey: "day5", titleKey: "destinations.list.mallorca.itinerary.day5.title", bodyKey: "destinations.list.mallorca.itinerary.day5.body" },
    ],
    highlights: [
      "destinations.list.mallorca.highlights.h1",
      "destinations.list.mallorca.highlights.h2",
      "destinations.list.mallorca.highlights.h3",
      "destinations.list.mallorca.highlights.h4",
      "destinations.list.mallorca.highlights.h5",
      "destinations.list.mallorca.highlights.h6",
    ],
    included: [
      "destinations.list.mallorca.included.i1",
      "destinations.list.mallorca.included.i2",
      "destinations.list.mallorca.included.i3",
      "destinations.list.mallorca.included.i4",
    ],
    notIncluded: [
      "destinations.list.mallorca.notIncluded.n1",
      "destinations.list.mallorca.notIncluded.n2",
    ],
    travelStyle: [
      "destinations.list.mallorca.travelStyle.t1",
      "destinations.list.mallorca.travelStyle.t2",
      "destinations.list.mallorca.travelStyle.t3",
      "destinations.list.mallorca.travelStyle.t4",
    ],
    faqItems: [
      { questionKey: "destinations.list.mallorca.faq.q1.question", answerKey: "destinations.list.mallorca.faq.q1.answer" },
      { questionKey: "destinations.list.mallorca.faq.q2.question", answerKey: "destinations.list.mallorca.faq.q2.answer" },
      { questionKey: "destinations.list.mallorca.faq.q3.question", answerKey: "destinations.list.mallorca.faq.q3.answer" },
      { questionKey: "destinations.list.mallorca.faq.q4.question", answerKey: "destinations.list.mallorca.faq.q4.answer" },
      { questionKey: "destinations.list.mallorca.faq.q5.question", answerKey: "destinations.list.mallorca.faq.q5.answer" },
      { questionKey: "destinations.list.mallorca.faq.q6.question", answerKey: "destinations.list.mallorca.faq.q6.answer" },
      { questionKey: "destinations.list.mallorca.faq.q7.question", answerKey: "destinations.list.mallorca.faq.q7.answer" },
      { questionKey: "destinations.list.mallorca.faq.q8.question", answerKey: "destinations.list.mallorca.faq.q8.answer" },
    ],
    featured: true,
  },

  // ── TENERIFE ──────────────────────────────────────────────────────────────
  {
    id: "tenerife",
    slug: "tenerife",
    environment: "islands",
    titleKey: "destinations.list.tenerife.title",
    descriptionKey: "destinations.list.tenerife.description",
    taglineKey: "destinations.list.tenerife.tagline",
    heroImage: {
      src: "/images/destinations/tenerife-bg.jpg",
      alt: "Tenerife, isla volcánica",
      blurDataURL: BLUR_DARK,
      width: 1920,
      height: 1080,
    },
    coverImage: {
      src: "/images/destinations/tenerife-cover.jpg",
      alt: "Retiro en Tenerife",
      blurDataURL: BLUR_DARK,
      width: 800,
      height: 600,
    },
    galleryImages: [],
    price: 529,
    depositPrice: 149,
    datesKey: "destinations.list.tenerife.dates",
    durationDays: 5,
    maxPeople: 15,
    itinerary: [
      { dayKey: "day1", titleKey: "destinations.list.tenerife.itinerary.day1.title", bodyKey: "destinations.list.tenerife.itinerary.day1.body" },
      { dayKey: "day2", titleKey: "destinations.list.tenerife.itinerary.day2.title", bodyKey: "destinations.list.tenerife.itinerary.day2.body" },
      { dayKey: "day3", titleKey: "destinations.list.tenerife.itinerary.day3.title", bodyKey: "destinations.list.tenerife.itinerary.day3.body" },
      { dayKey: "day4", titleKey: "destinations.list.tenerife.itinerary.day4.title", bodyKey: "destinations.list.tenerife.itinerary.day4.body" },
      { dayKey: "day5", titleKey: "destinations.list.tenerife.itinerary.day5.title", bodyKey: "destinations.list.tenerife.itinerary.day5.body" },
    ],
    highlights: [
      "destinations.list.tenerife.highlights.h1",
      "destinations.list.tenerife.highlights.h2",
      "destinations.list.tenerife.highlights.h3",
      "destinations.list.tenerife.highlights.h4",
      "destinations.list.tenerife.highlights.h5",
      "destinations.list.tenerife.highlights.h6",
    ],
    included: [
      "destinations.list.tenerife.included.i1",
      "destinations.list.tenerife.included.i2",
      "destinations.list.tenerife.included.i3",
      "destinations.list.tenerife.included.i4",
    ],
    notIncluded: [
      "destinations.list.tenerife.notIncluded.n1",
      "destinations.list.tenerife.notIncluded.n2",
    ],
    travelStyle: [
      "destinations.list.tenerife.travelStyle.t1",
      "destinations.list.tenerife.travelStyle.t2",
      "destinations.list.tenerife.travelStyle.t3",
      "destinations.list.tenerife.travelStyle.t4",
    ],
    faqItems: [
      { questionKey: "destinations.list.tenerife.faq.q1.question", answerKey: "destinations.list.tenerife.faq.q1.answer" },
      { questionKey: "destinations.list.tenerife.faq.q2.question", answerKey: "destinations.list.tenerife.faq.q2.answer" },
      { questionKey: "destinations.list.tenerife.faq.q3.question", answerKey: "destinations.list.tenerife.faq.q3.answer" },
      { questionKey: "destinations.list.tenerife.faq.q4.question", answerKey: "destinations.list.tenerife.faq.q4.answer" },
      { questionKey: "destinations.list.tenerife.faq.q5.question", answerKey: "destinations.list.tenerife.faq.q5.answer" },
      { questionKey: "destinations.list.tenerife.faq.q6.question", answerKey: "destinations.list.tenerife.faq.q6.answer" },
      { questionKey: "destinations.list.tenerife.faq.q7.question", answerKey: "destinations.list.tenerife.faq.q7.answer" },
      { questionKey: "destinations.list.tenerife.faq.q8.question", answerKey: "destinations.list.tenerife.faq.q8.answer" },
    ],
    featured: true,
  },

  // ── MADEIRA ───────────────────────────────────────────────────────────────
  {
    id: "madeira",
    slug: "madeira",
    environment: "islands",
    titleKey: "destinations.list.madeira.title",
    descriptionKey: "destinations.list.madeira.description",
    taglineKey: "destinations.list.madeira.tagline",
    heroImage: {
      src: "/images/destinations/madeira-bg.jpg",
      alt: "Madeira, isla salvaje de Europa",
      blurDataURL: BLUR_DARK,
      width: 1920,
      height: 1080,
    },
    coverImage: {
      src: "/images/destinations/madeira-cover.png",
      alt: "Retiro en Madeira",
      blurDataURL: BLUR_DARK,
      width: 800,
      height: 600,
    },
    galleryImages: [],
    price: 635,
    depositPrice: 149,
    datesKey: "destinations.list.madeira.dates",
    durationDays: 5,
    maxPeople: 15,
    itinerary: [
      { dayKey: "day1", titleKey: "destinations.list.madeira.itinerary.day1.title", bodyKey: "destinations.list.madeira.itinerary.day1.body" },
      { dayKey: "day2", titleKey: "destinations.list.madeira.itinerary.day2.title", bodyKey: "destinations.list.madeira.itinerary.day2.body" },
      { dayKey: "day3", titleKey: "destinations.list.madeira.itinerary.day3.title", bodyKey: "destinations.list.madeira.itinerary.day3.body" },
      { dayKey: "day4", titleKey: "destinations.list.madeira.itinerary.day4.title", bodyKey: "destinations.list.madeira.itinerary.day4.body" },
      { dayKey: "day5", titleKey: "destinations.list.madeira.itinerary.day5.title", bodyKey: "destinations.list.madeira.itinerary.day5.body" },
    ],
    highlights: [
      "destinations.list.madeira.highlights.h1",
      "destinations.list.madeira.highlights.h2",
      "destinations.list.madeira.highlights.h3",
      "destinations.list.madeira.highlights.h4",
      "destinations.list.madeira.highlights.h5",
      "destinations.list.madeira.highlights.h6",
    ],
    included: [
      "destinations.list.madeira.included.i1",
      "destinations.list.madeira.included.i2",
      "destinations.list.madeira.included.i3",
      "destinations.list.madeira.included.i4",
      "destinations.list.madeira.included.i5",
      "destinations.list.madeira.included.i6",
      "destinations.list.madeira.included.i7",
    ],
    notIncluded: [
      "destinations.list.madeira.notIncluded.n1",
      "destinations.list.madeira.notIncluded.n2",
    ],
    travelStyle: [
      "destinations.list.madeira.travelStyle.t1",
      "destinations.list.madeira.travelStyle.t2",
      "destinations.list.madeira.travelStyle.t3",
      "destinations.list.madeira.travelStyle.t4",
    ],
    faqItems: [
      { questionKey: "destinations.list.madeira.faq.q1.question", answerKey: "destinations.list.madeira.faq.q1.answer" },
      { questionKey: "destinations.list.madeira.faq.q2.question", answerKey: "destinations.list.madeira.faq.q2.answer" },
      { questionKey: "destinations.list.madeira.faq.q3.question", answerKey: "destinations.list.madeira.faq.q3.answer" },
    ],
    featured: true,
  },

  // ── GALICIA ───────────────────────────────────────────────────────────────
  {
    id: "galicia",
    slug: "galicia",
    environment: "beaches",
    titleKey: "destinations.list.galicia.title",
    descriptionKey: "destinations.list.galicia.description",
    taglineKey: "destinations.list.galicia.tagline",
    heroImage: {
      src: "/images/destinations/galicia-bg.jpg",
      alt: "Galicia, costa atlántica del norte",
      blurDataURL: BLUR_DARK,
      width: 1920,
      height: 1080,
    },
    coverImage: {
      src: "/images/destinations/galicia-cover.png",
      alt: "Retiro en Galicia",
      blurDataURL: BLUR_DARK,
      width: 800,
      height: 600,
    },
    galleryImages: [],
    price: 320,
    depositPrice: 90,
    datesKey: "destinations.list.galicia.dates",
    durationDays: 3,
    maxPeople: 20,
    itinerary: [
      { dayKey: "day1", titleKey: "destinations.list.galicia.itinerary.day1.title", bodyKey: "destinations.list.galicia.itinerary.day1.body" },
      { dayKey: "day2", titleKey: "destinations.list.galicia.itinerary.day2.title", bodyKey: "destinations.list.galicia.itinerary.day2.body" },
      { dayKey: "day3", titleKey: "destinations.list.galicia.itinerary.day3.title", bodyKey: "destinations.list.galicia.itinerary.day3.body" },
    ],
    highlights: [
      "destinations.list.galicia.highlights.h1",
      "destinations.list.galicia.highlights.h2",
      "destinations.list.galicia.highlights.h3",
      "destinations.list.galicia.highlights.h4",
    ],
    included: [
      "destinations.list.galicia.included.i1",
      "destinations.list.galicia.included.i2",
      "destinations.list.galicia.included.i3",
      "destinations.list.galicia.included.i4",
      "destinations.list.galicia.included.i5",
      "destinations.list.galicia.included.i6",
    ],
    notIncluded: [
      "destinations.list.galicia.notIncluded.n1",
    ],
    travelStyle: [
      "destinations.list.galicia.travelStyle.t1",
      "destinations.list.galicia.travelStyle.t2",
      "destinations.list.galicia.travelStyle.t3",
    ],
    faqItems: [
      { questionKey: "destinations.list.galicia.faq.q1.question", answerKey: "destinations.list.galicia.faq.q1.answer" },
      { questionKey: "destinations.list.galicia.faq.q2.question", answerKey: "destinations.list.galicia.faq.q2.answer" },
      { questionKey: "destinations.list.galicia.faq.q3.question", answerKey: "destinations.list.galicia.faq.q3.answer" },
      { questionKey: "destinations.list.galicia.faq.q4.question", answerKey: "destinations.list.galicia.faq.q4.answer" },
    ],
    featured: false,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
