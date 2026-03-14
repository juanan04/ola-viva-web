import { getLocale, getTranslations } from "next-intl/server";
import WaveRevealWrapper from "@/components/home/WaveRevealWrapper";
import HeroSection from "@/components/home/HeroSection";
import SectionIntro from "@/components/home/SectionIntro";
import LilyBloom from "@/components/about/LilyBloom";
import PhilosophySection from "@/components/about/PhilosophySection";
import DestinationsSection from "@/components/home/DestinationsSection";
import { DESTINATIONS } from "@/data/destinations";

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations("about");
  const rawTexts = t.raw("transformationTexts");
  const transformationTexts = Array.isArray(rawTexts) ? rawTexts : [];

  return (
    <>
      {/* 1. Hero + Wave animation → SectionIntro */}
      <WaveRevealWrapper hero={<HeroSection />}>
        <SectionIntro />
      </WaveRevealWrapper>

      {/* 2. Sobre Nosotros — LilyBloom scroll animation + Philosophy */}
      <section id="sobre-nosotros">
        <LilyBloom transformationTexts={transformationTexts} />
        <PhilosophySection />
      </section>

      {/* 3. Destinos — scroll-driven horizontal card reveal */}
      <section id="destinos">
        <DestinationsSection destinations={DESTINATIONS} locale={locale} />
      </section>
    </>
  );
}
