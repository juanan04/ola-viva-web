"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

interface ItineraryDay {
  dayKey: string;
  title: string;
  body: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface DestinationData {
  price: number;
  depositPrice: number;
  durationDays: number;
  maxPeople: number;
  dates: string;
  description: string;
  itinerary: ItineraryDay[];
  highlights: string[];
  included: string[];
  notIncluded: string[];
  travelStyle: string[];
  faqItems: FAQItem[];
}

interface Strings {
  aboutTrip: string;
  itineraryTitle: string;
  itinerarySubtitle: string;
  highlightsTitle: string;
  travelStyleTitle: string;
  includedTitle: string;
  notIncludedTitle: string;
  faqTitle: string;
  bookNow: string;
  depositNote: string;
  depositNote2: string;
  trustBadge1Title: string;
  trustBadge1Body: string;
  trustBadge2Title: string;
  trustBadge2Body: string;
  perPerson: string;
  days: string;
  people: string;
  backToDestinations: string;
}

interface Props {
  destination: DestinationData;
  strings: Strings;
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function CheckIcon({ color = "sage" }: { color?: "sage" | "red" }) {
  return color === "red" ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-red-500 mt-0.5" aria-hidden>
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-sage-500 mt-0.5" aria-hidden>
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-sage-400 mt-0.5" aria-hidden>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.22 }}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6"/>
    </motion.svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl md:text-3xl text-[#1f1c19] mb-6">
      {children}
    </h2>
  );
}

export default function DestinationDetailClient({ destination, strings }: Props) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const dayLabels = ["DÍA 1", "DÍA 2", "DÍA 3", "DÍA 4", "DÍA 5", "DÍA 6"];

  return (
    <Container>
      <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">

        {/* ── LEFT COLUMN ── */}
        <div className="space-y-14">

          {/* About */}
          <section>
            <SectionTitle>{strings.aboutTrip}</SectionTitle>
            <p className="font-sans text-base md:text-lg text-[#1f1c19]/75 leading-relaxed">
              {destination.description}
            </p>
          </section>

          {/* Itinerary */}
          <section>
            <SectionTitle>{strings.itineraryTitle}</SectionTitle>
            <p className="font-sans text-sm text-[#1f1c19]/50 mb-8 -mt-4">{strings.itinerarySubtitle}</p>
            <div className="relative space-y-0">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-sage-200" aria-hidden />
              {destination.itinerary.map((day, i) => (
                <div key={day.dayKey} className="relative pl-8 pb-8 last:pb-0">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-sage-400 ring-2 ring-[#f5f0e8]" aria-hidden />
                  <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-sage-400 mb-1">
                    {dayLabels[i] ?? `DÍA ${i + 1}`}
                  </p>
                  <h3 className="font-serif text-xl text-[#1f1c19] mb-2">{day.title}</h3>
                  <p className="font-sans text-sm text-[#1f1c19]/65 leading-relaxed">{day.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Highlights */}
          <section>
            <SectionTitle>{strings.highlightsTitle}</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#eee8dc] rounded-xl px-4 py-3">
                  <StarIcon />
                  <span className="font-sans text-sm text-[#1f1c19]/80">{h}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Travel style */}
          <section>
            <SectionTitle>{strings.travelStyleTitle}</SectionTitle>
            <ul className="space-y-2">
              {destination.travelStyle.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckIcon color="sage" />
                  <span className="font-sans text-sm text-[#1f1c19]/75">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Included / Not Included */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-serif text-xl text-[#1f1c19] mb-4 flex items-center gap-2">
                  <CheckIcon color="sage" />
                  {strings.includedTitle}
                </h2>
                <ul className="space-y-2">
                  {destination.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon color="sage" />
                      <span className="font-sans text-sm text-[#1f1c19]/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-xl text-[#1f1c19] mb-4 flex items-center gap-2">
                  <CheckIcon color="red" />
                  {strings.notIncludedTitle}
                </h2>
                <ul className="space-y-2">
                  {destination.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon color="red" />
                      <span className="font-sans text-sm text-[#1f1c19]/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <SectionTitle>{strings.faqTitle}</SectionTitle>
            <dl className="divide-y divide-[#1f1c19]/10">
              {destination.faqItems.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div key={item.id}>
                    <dt>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? null : item.id)}
                        className="flex w-full items-center justify-between gap-4 py-4 text-left group"
                      >
                        <span className="font-sans text-sm font-medium text-[#1f1c19] group-hover:text-sage-600 transition-colors">
                          {item.question}
                        </span>
                        <span className="shrink-0 text-[#1f1c19]/40">
                          <ChevronIcon open={isOpen} />
                        </span>
                      </button>
                    </dt>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.dd
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-4 font-sans text-sm leading-relaxed text-sage-500 bg-[#eee8dc] rounded-xl px-4 py-3 mb-2">
                            {item.answer}
                          </p>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </dl>
          </section>
        </div>

        {/* ── RIGHT COLUMN: sticky sidebar ── */}
        <aside className="sticky top-28 space-y-5">
          {/* Price card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#1f1c19]/5">
            <div className="text-right mb-5">
              <span className="font-serif text-4xl font-light text-[#1f1c19]">{destination.price} €</span>
              <p className="font-sans text-xs text-[#1f1c19]/40 mt-0.5">{strings.perPerson}</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 font-sans text-sm text-[#1f1c19]/70">
                <CalendarIcon />
                {destination.dates}
              </li>
              <li className="flex items-center gap-3 font-sans text-sm text-[#1f1c19]/70">
                <CalendarIcon />
                {destination.durationDays} {strings.days}
              </li>
              <li className="flex items-center gap-3 font-sans text-sm text-[#1f1c19]/70">
                <PeopleIcon />
                {destination.maxPeople} {strings.people}
              </li>
            </ul>

            <button
              type="button"
              className="w-full rounded-xl bg-sage-400 hover:bg-sage-500 text-white font-sans font-semibold text-sm py-3.5 transition-colors"
            >
              {strings.bookNow}
            </button>
            <p className="font-sans text-xs text-[#1f1c19]/45 text-center mt-2">{strings.depositNote}</p>
            <p className="font-sans text-xs text-[#1f1c19]/40 text-center">{strings.depositNote2}</p>
          </div>

          {/* Trust badges */}
          <div className="bg-[#eee8dc] rounded-2xl p-4 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sage-400 shrink-0" aria-hidden>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <div>
              <p className="font-sans text-sm font-semibold text-[#1f1c19]">{strings.trustBadge1Title}</p>
              <p className="font-sans text-xs text-[#1f1c19]/55">{strings.trustBadge1Body}</p>
            </div>
          </div>

          <div className="bg-[#eee8dc] rounded-2xl p-4 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sage-400 shrink-0" aria-hidden>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div>
              <p className="font-sans text-sm font-semibold text-[#1f1c19]">{strings.trustBadge2Title}</p>
              <p className="font-sans text-xs text-[#1f1c19]/55">{strings.trustBadge2Body}</p>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
