import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { DESTINATIONS } from "@/data/destinations";
import DestinationsCarousel from "@/components/destinations/DestinationsCarousel";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("destinations");
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function DestinationsPage() {
  const locale = await getLocale();

  return (
    <div className="min-h-screen">
      <DestinationsCarousel destinations={DESTINATIONS} locale={locale} />
    </div>
  );
}
