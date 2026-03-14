"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import type { Destination } from "@/types/destination";
import DestinationCard from "./DestinationCard";
import CarouselBackground from "./CarouselBackground";
import type { DestinationEnvironment } from "@/types/destination";

interface DestinationsCarouselProps {
  destinations: Destination[];
  locale: string;
}

export default function DestinationsCarousel({
  destinations,
  locale,
}: DestinationsCarouselProps) {
  const t = useTranslations();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // IntersectionObserver: detect which card is most centered
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-card]"));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with greatest intersectionRatio
        let best = entries[0];
        entries.forEach((e) => {
          if (e.intersectionRatio > (best?.intersectionRatio ?? 0)) best = e;
        });
        if (best && best.intersectionRatio > 0.4) {
          const idx = Number(best.target.getAttribute("data-card"));
          if (!isNaN(idx)) setActiveIndex(idx);
        }
      },
      {
        root: track,
        threshold: [0, 0.4, 0.6, 1],
      }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  const scrollToIndex = useCallback(
    (idx: number) => {
      const track = trackRef.current;
      if (!track) return;
      const target = track.querySelector<HTMLElement>(`[data-card="${idx}"]`);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    },
    []
  );

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.min(activeIndex + 1, destinations.length - 1);
      scrollToIndex(next);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = Math.max(activeIndex - 1, 0);
      scrollToIndex(prev);
    }
  }

  const activeDestination = destinations[activeIndex];
  const activeEnvironment: DestinationEnvironment =
    activeDestination?.environment ?? "mountains";

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      aria-label={t("destinations.title")}
    >
      {/* Animated background */}
      <CarouselBackground
        environment={activeEnvironment}
        imageSrc={activeDestination?.heroImage?.src}
        imageAlt={activeDestination?.heroImage?.alt}
        blurDataURL={activeDestination?.heroImage?.blurDataURL}
      />

      {/* Heading */}
      <div className="relative z-10 pt-20 pb-10 text-center">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          {t("destinations.subtitle")}
        </p>
        <h2 className="font-serif text-4xl font-light text-white md:text-5xl">
          {t("destinations.title")}
        </h2>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        role="region"
        aria-label={t("destinations.title")}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative z-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-12 focus-visible:outline-none"
        style={{
          paddingInline: "max(2rem, calc((100vw - 400px) / 2))",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {destinations.map((dest, idx) => (
          <div
            key={dest.id}
            data-card={idx}
            className="snap-center"
          >
            <DestinationCard
              destination={dest}
              active={idx === activeIndex}
            />
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div
        className="relative z-10 flex justify-center gap-2 pb-8"
        role="tablist"
        aria-label={t("destinations.title")}
      >
        {destinations.map((dest, idx) => (
          <button
            key={dest.id}
            role="tab"
            aria-selected={idx === activeIndex}
            aria-label={t(dest.titleKey)}
            onClick={() => scrollToIndex(idx)}
            className="h-2 rounded-full bg-white/40 transition-all duration-300 hover:bg-white/70 aria-selected:w-6 aria-selected:bg-white"
            style={{ width: idx === activeIndex ? undefined : "8px" }}
          />
        ))}
      </div>
    </section>
  );
}
