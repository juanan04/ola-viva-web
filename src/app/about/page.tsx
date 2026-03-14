import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LilyBloom from "@/components/about/LilyBloom";
import PhilosophySection from "@/components/about/PhilosophySection";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about");
  return {
    title: t("title"),
    description: t("philosophy.body"),
  };
}

export default function AboutPage() {
  const t = useTranslations("about");
  const rawTexts = t.raw("transformationTexts");
  const transformationTexts = Array.isArray(rawTexts) ? rawTexts : [];

  return (
    <div className="min-h-screen bg-sage-50 pt-24">
      <Container className="mb-8">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} withLine />
      </Container>
      <LilyBloom transformationTexts={transformationTexts} />
      <PhilosophySection />
    </div>
  );
}
