export type DestinationEnvironment = "mountains" | "snow" | "beaches" | "islands";

export interface DestinationImage {
  src: string;
  alt: string;
  blurDataURL: string;
  width: number;
  height: number;
}

export interface ItineraryDay {
  dayKey: string;   // e.g. "day1"
  titleKey: string; // i18n key
  bodyKey: string;  // i18n key
}

export interface IncludedItem {
  textKey: string;
}

export interface FAQItem {
  questionKey: string;
  answerKey: string;
}

export interface Destination {
  id: string;
  slug: string;
  environment: DestinationEnvironment;
  titleKey: string;
  descriptionKey: string;
  taglineKey: string;
  heroImage: DestinationImage;
  coverImage: DestinationImage;
  galleryImages: DestinationImage[];
  /** Price in EUR */
  price: number;
  depositPrice: number;
  /** e.g. "26–30 marzo" */
  datesKey: string;
  durationDays: number;
  maxPeople: number;
  itinerary: ItineraryDay[];
  highlights: string[]; // i18n keys
  included: string[];   // i18n keys
  notIncluded: string[]; // i18n keys
  travelStyle: string[]; // i18n keys
  faqItems: FAQItem[];
  featured: boolean;
}
