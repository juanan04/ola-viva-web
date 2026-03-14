"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { Destination, DestinationEnvironment } from "@/types/destination";
import DestinationCard from "@/components/destinations/DestinationCard";
import CarouselBackground from "@/components/destinations/CarouselBackground";
import { useReducedMotion } from "framer-motion";

interface DestinationsSectionProps {
  destinations: Destination[];
  locale: string;
}

const CARD_WIDTH = 420;
const CARD_GAP = 24;

export default function DestinationsSection({
  destinations,
  locale,
}: DestinationsSectionProps) {
  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalScroll = (destinations.length - 1) * (CARD_WIDTH + CARD_GAP);
  // On mobile, just use 100vh so vertical scroll isn't hijacked
  const sectionHeight = isMobile ? "100vh" : `calc(100vh + ${totalScroll}px)`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll [0,1] → translateX [0, -totalScroll]
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalScroll]);

  // Track which card is active based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;
    const idx = Math.round(latest * (destinations.length - 1));
    setActiveIndex(Math.min(Math.max(idx, 0), destinations.length - 1));
  });

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    const scrollLeft = e.currentTarget.scrollLeft;
    // On mobile, card is 340px wide + 24px gap
    const cardMobileWidth = 340 + 24;
    const idx = Math.round(scrollLeft / cardMobileWidth);
    setActiveIndex(Math.min(Math.max(idx, 0), destinations.length - 1));
  };

  const activeDestination = destinations[activeIndex];
  const activeEnvironment: DestinationEnvironment =
    activeDestination?.environment ?? "mountains";

  return (
    <div
      ref={containerRef}
      style={{ height: sectionHeight }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Animated background changes with active card */}
        <CarouselBackground
          environment={activeEnvironment}
          imageSrc={activeDestination?.heroImage?.src}
          imageAlt={activeDestination?.heroImage?.alt}
          blurDataURL={activeDestination?.heroImage?.blurDataURL}
        />

        {/* Heading */}
        <div className="relative z-10 pt-20 pb-6 text-center">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t("destinations.subtitle")}
          </p>
          <h2 className="font-serif text-4xl font-light text-white md:text-5xl">
            {t("destinations.title")}
          </h2>
        </div>

        {/* Scroll hint */}
        <p className="relative z-10 text-center font-sans text-xs text-white/40 mb-6">
          {locale === "es" ? "Desliza para explorar" : "Scroll to explore"}
        </p>

        {/* Cards track */}
        <div
          className={cn(
            "relative z-10 flex items-center h-140",
            isMobile ? "overflow-x-auto snap-x snap-mandatory" : "overflow-hidden"
          )}
          onScroll={handleMobileScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Support older webkit for hiding scrollbar by moving it off-screen implicitly or just ignoring it since snap points work */}
          <style dangerouslySetInnerHTML={{
            __html: `
            .overflow-x-auto::-webkit-scrollbar { display: none; }
          `}} />
          <motion.div
            className={cn("flex gap-6 will-change-transform", isMobile ? "w-max" : "")}
            style={{
              x: isMobile || prefersReducedMotion ? 0 : x,
              paddingInline: isMobile ? "24px" : `calc((100vw - ${CARD_WIDTH}px) / 2)`,
            }}
          >
            {destinations.map((dest, idx) => (
              <div key={dest.id} className={cn("shrink-0", isMobile ? "snap-center" : "")}>
                <DestinationCard
                  destination={dest}
                  active={idx === activeIndex}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="relative z-10 flex justify-center gap-2 mt-6">
          {destinations.map((dest, idx) => (
            <div
              key={dest.id}
              className="h-2 rounded-full bg-white/40 transition-all duration-300"
              style={{ width: idx === activeIndex ? "24px" : "8px", opacity: idx === activeIndex ? 1 : 0.4 }}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
