"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import WaveSVG from "./WaveSVG";

interface WaveRevealProps {
  hero: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Scroll-scrubbed wave transition.
 *
 * Structure (300vh scroll travel):
 *   <outer>            300vh — provides scroll travel
 *     <sticky>         100vh — pinned in viewport the whole time
 *       <hero>         fills sticky, fades out as wave covers it
 *       <next section> sits below hero, revealed when wave has passed
 *       <wave>         starts at bottom (100%), rises to -10% (above viewport)
 *     </sticky>
 *   </outer>
 *
 * Progress 0→0.45 : wave rises from bottom, covering the hero
 * Progress 0.45→1 : wave continues off-screen, hero fades out, next section visible
 */
export default function WaveReveal({ hero, children }: WaveRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress, smoothProgress } = useScrollProgress(containerRef);
  const progress = prefersReduced ? scrollYProgress : smoothProgress;

  // Wave: rises from bottom (100%) until the curve itself exits the top of the viewport (-120%)
  // We stop mapping at progress=0.65 so the rest of the scroll is spent on SectionIntro
  const waveY = useTransform(progress, [0, 0.65], ["100%", "-120%"]);

  // Hero: fades out as the wave sweeps over it
  const heroOpacity = useTransform(progress, [0.15, 0.48], [1, 0]);

  // SectionIntro: fades in cleanly once the wave curve has fully cleared
  const contentOpacity = useTransform(progress, [0.48, 0.68], [0, 1]);

  // Pointer events: pointer-events-none when opacity is 0 so the other layer is clickable
  const heroPointerEvents = useTransform(progress, (v) => v < 0.3 ? "auto" : "none");
  const contentPointerEvents = useTransform(progress, (v) => v > 0.5 ? "auto" : "none");

  if (prefersReduced) {
    return (
      <>
        <section aria-label="Hero">{hero}</section>
        <section className="bg-sand-50" aria-label="Intro">
          {children}
        </section>
      </>
    );
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      {/* Sticky viewport: hero + wave + next section all pinned together */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Hero (fades as wave covers it) ── */}
        <motion.div
          style={{ opacity: heroOpacity, pointerEvents: heroPointerEvents }}
          className="absolute inset-0 will-change-[opacity]"
        >
          {hero}
        </motion.div>

        {/* ── Next section (sand-50 bg, revealed after wave passes) ── */}
        <motion.div
          style={{ opacity: contentOpacity, pointerEvents: contentPointerEvents }}
          className="absolute inset-0 bg-sand-50 will-change-[opacity]"
        >
          {children}
        </motion.div>

        {/* ── Wave overlay: rises from bottom past the top of the viewport ── */}
        {/* Height 130% ensures the solid fill never shows a gap while rising */}
        <motion.div
          aria-hidden
          style={{ y: waveY, bottom: "-10%", height: "130%" }}
          className="absolute inset-x-0 will-change-transform pointer-events-none z-20"
        >
          {/*
           * WaveSVG has the wave curve at the TOP of the SVG,
           * and solid fill below. As it rises, the curve sweeps upward
           * across the screen like a real wave.
           */}
          <WaveSVG belowColor="#FDFCFB" animated={false} className="w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
}
