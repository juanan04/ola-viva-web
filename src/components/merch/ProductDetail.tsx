"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { MerchProduct } from "@/types/merch";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
  product: MerchProduct;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const t = useTranslations("merch");
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants?.[0]?.id
  );
  const [added, setAdded] = useState(false);

  const sizeVariants = product.variants?.filter((v) => v.type === "size") ?? [];

  function handleAddToCart() {
    addItem(product.id, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const selectedVariantObj = product.variants?.find((v) => v.id === selectedVariant);
  const isAvailable = !selectedVariantObj || selectedVariantObj.available;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative aspect-square rounded-3xl overflow-hidden bg-sand-200"
      >
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Decorative organic blob */}
        <div
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-blush-200/30 blur-3xl pointer-events-none"
          aria-hidden
        />
      </motion.div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col justify-center"
      >
        {/* Category + tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-sans text-xs text-sage-500 uppercase tracking-widest">
            {t(`categories.${product.category}`)}
          </span>
          {product.tagKey && (
            <span
              className={cn(
                "px-2.5 py-0.5 rounded-full text-xs font-sans font-medium",
                product.tagKey === "bestseller"
                  ? "bg-sage-100 text-sage-700"
                  : "bg-blush-100 text-blush-700"
              )}
            >
              {t(`tags.${product.tagKey}`)}
            </span>
          )}
        </div>

        <h1 className="font-serif text-heading text-sage-800 mb-2">
          {t(`products.${product.nameKey}`)}
        </h1>

        <p className="font-serif text-3xl text-sage-700 mb-6">
          {product.price} €
        </p>

        <p className="font-sans text-sm leading-relaxed text-sage-600 mb-8">
          {t(`products.${product.descriptionKey}`)}
        </p>

        {/* Size selector */}
        {sizeVariants.length > 0 && (
          <div className="mb-8">
            <p className="font-sans text-xs font-medium text-sage-700 uppercase tracking-wide mb-3">
              {t("selectSize")}
            </p>
            <div className="flex flex-wrap gap-2">
              {sizeVariants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => v.available && setSelectedVariant(v.id)}
                  disabled={!v.available}
                  aria-pressed={selectedVariant === v.id}
                  className={cn(
                    "w-12 h-12 rounded-full font-sans text-sm font-medium transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2",
                    selectedVariant === v.id
                      ? "bg-sage-400 text-white shadow-md scale-105"
                      : v.available
                        ? "bg-white border border-sage-200 text-sage-700 hover:border-sage-400"
                        : "bg-sand-100 border border-sand-200 text-sage-300 cursor-not-allowed line-through"
                  )}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          disabled={!isAvailable}
          className={cn(
            "w-full md:w-auto md:min-w-[200px] py-4 px-8 rounded-full",
            "font-sans text-sm font-medium transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2",
            added
              ? "bg-sage-600 text-white scale-95"
              : isAvailable
                ? "bg-sage-400 text-white hover:bg-sage-500 active:scale-95 shadow-sm hover:shadow-md"
                : "bg-sand-200 text-sage-400 cursor-not-allowed"
          )}
        >
          {added ? (
            <span className="flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M2 8l4 4 8-8" />
              </svg>
              {t("added")}
            </span>
          ) : (
            t("addToCart")
          )}
        </button>

        {/* Trust notes */}
        <div className="mt-8 pt-8 border-t border-sand-200 grid grid-cols-2 gap-4">
          {[
            { icon: "🌿", key: "trustNatural" },
            { icon: "📦", key: "trustShipping" },
            { icon: "♻️", key: "trustSustainable" },
            { icon: "💚", key: "trustCommunity" },
          ].map(({ icon, key }) => (
            <div key={key} className="flex items-start gap-2">
              <span className="text-base" aria-hidden>{icon}</span>
              <p className="font-sans text-xs text-sage-500 leading-relaxed">
                {t(key)}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
