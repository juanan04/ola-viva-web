import { getTranslations } from "next-intl/server";
import { MERCH_PRODUCTS } from "@/data/merch";
import ProductGrid from "@/components/merch/ProductGrid";
import MerchHeader from "@/components/merch/MerchHeader";
import Container from "@/components/ui/Container";

export async function generateMetadata() {
  const t = await getTranslations("merch");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function MerchPage() {
  const t = await getTranslations("merch");

  return (
    <>
      <MerchHeader />
      <main id="main-content" className="min-h-screen bg-sand-50 pt-16">
        {/* Hero section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-sage-50 to-sand-50 py-20 md:py-28">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blush-100/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" aria-hidden />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-100/60 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" aria-hidden />

          <Container className="relative text-center">
            <p className="font-sans text-xs uppercase tracking-widest text-sage-500 mb-4">
              {t("eyebrow")}
            </p>
            <h1 className="font-serif text-display text-sage-800 mb-4">
              {t("title")}
            </h1>
            <p className="font-sans text-sm md:text-base text-sage-600 max-w-xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </Container>
        </section>

        {/* Products */}
        <section className="py-section">
          <Container>
            <ProductGrid products={MERCH_PRODUCTS} />
          </Container>
        </section>
      </main>
    </>
  );
}
