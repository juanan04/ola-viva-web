"use client";

import dynamic from "next/dynamic";
import SectionIntro from "./SectionIntro";

const WaveReveal = dynamic(() => import("./WaveReveal"), {
  ssr: false,
  loading: () => (
    <section className="bg-sand-50 py-section" aria-label="Intro section">
      <SectionIntro />
    </section>
  ),
});

interface WaveRevealWrapperProps {
  hero: React.ReactNode;
  children: React.ReactNode;
}

export default function WaveRevealWrapper({ hero, children }: WaveRevealWrapperProps) {
  return <WaveReveal hero={hero}>{children}</WaveReveal>;
}
