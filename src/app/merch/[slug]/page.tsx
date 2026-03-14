import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { MERCH_PRODUCTS, getMerchBySlug } from "@/data/merch";
import ProductDetail from "@/components/merch/ProductDetail";
import MerchHeader from "@/components/merch/MerchHeader";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/merch/ProductCard";
import { Link } from "@/i18n/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MERCH_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getMerchBySlug(slug);
  const t = await getTranslations("merch");
  if (!product) return {};
  return {
    title: t(`products.${product.nameKey}`),
    description: t(`products.${product.descriptionKey}`),
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getMerchBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations("merch");

  const related = MERCH_PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 4);

  return (
    <>
      <MerchHeader />
      <main id="main-content" className="min-h-screen bg-sand-50 pt-16">
        {/* Back link */}
        <div className="border-b border-sand-200 bg-white/60">
          <Container>
            <div className="py-3 flex items-center gap-2 font-sans text-xs text-sage-500">
              <Link href="/merch" className="hover:text-sage-700 transition-colors flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                  <path d="M9 2L4 7l5 5" />
                </svg>
                {t("backToShop")}
              </Link>
              <span aria-hidden>/</span>
              <span className="text-sage-700">{t(`products.${product.nameKey}`)}</span>
            </div>
          </Container>
        </div>

        {/* Product detail */}
        <section className="py-section">
          <Container>
            <ProductDetail product={product} />
          </Container>
        </section>

        {/* Related products */}
        {related.length > 0 && (
          <section className="py-section border-t border-sand-200 bg-white/40">
            <Container>
              <h2 className="font-serif text-heading text-sage-800 mb-10">
                {t("relatedProducts")}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>
    </>
  );
}
