"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { MerchProduct } from "@/types/merch";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: MerchProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("merch");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link
        href={`/merch/${product.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded-2xl"
      >
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-sand-200 mb-4">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Tag badge */}
          {product.tagKey && (
            <span
              className={cn(
                "absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-sans font-medium",
                product.tagKey === "bestseller"
                  ? "bg-sage-400 text-white"
                  : "bg-blush-300 text-blush-900"
              )}
            >
              {t(`tags.${product.tagKey}`)}
            </span>
          )}
          {/* Hover overlay with CTA */}
          <div className="absolute inset-0 bg-sage-900/0 group-hover:bg-sage-900/20 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <span className="bg-white/90 backdrop-blur-sm text-sage-800 text-xs font-sans font-medium px-4 py-2 rounded-full">
              {t("viewProduct")}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="px-1">
          <p className="font-sans text-xs text-sage-500 uppercase tracking-wide mb-1">
            {t(`categories.${product.category}`)}
          </p>
          <h3 className="font-serif text-lg text-sage-800 group-hover:text-sage-600 transition-colors leading-tight">
            {t(`products.${product.nameKey}`)}
          </h3>
          <p className="font-serif text-base text-sage-700 mt-1">
            {product.price} €
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
