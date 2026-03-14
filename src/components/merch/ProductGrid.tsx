"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import type { MerchProduct, ProductCategory } from "@/types/merch";
import ProductCard from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: MerchProduct[];
}

const CATEGORIES: Array<ProductCategory | "all"> = [
  "all",
  "clothing",
  "accessories",
  "home",
];

export default function ProductGrid({ products }: ProductGridProps) {
  const t = useTranslations("merch");
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label={t("filterByCategory")}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2",
              activeCategory === cat
                ? "bg-sage-400 text-white shadow-sm"
                : "bg-white text-sage-600 border border-sage-200 hover:border-sage-400 hover:text-sage-800"
            )}
            aria-pressed={activeCategory === cat}
          >
            {cat === "all" ? t("allProducts") : t(`categories.${cat}`)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
