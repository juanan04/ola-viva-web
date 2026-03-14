"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { MERCH_PRODUCTS } from "@/data/merch";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems } = useCart();
  const t = useTranslations("merch");
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, closeCart]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (isOpen) drawerRef.current?.focus();
  }, [isOpen]);

  const subtotal = items.reduce((sum, item) => {
    const product = MERCH_PRODUCTS.find((p) => p.id === item.productId);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);

  function handleCheckout() {
    closeCart();
    router.push("/merch/checkout");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-sage-900/40 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label={t("cart")}
            tabIndex={-1}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-sand-50 shadow-2xl flex flex-col outline-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand-200">
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-xl text-sage-800">{t("cart")}</h2>
                {totalItems > 0 && (
                  <span className="text-xs font-sans font-medium text-sage-500 bg-sage-100 rounded-full px-2 py-0.5">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                aria-label={t("closeCart")}
                className="p-2 rounded-full text-sage-500 hover:text-sage-800 hover:bg-sage-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
                  <path d="M2 2l14 14M16 2L2 16" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-sage-400" aria-hidden>
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </div>
                  <p className="font-serif text-lg text-sage-700">{t("emptyCart")}</p>
                  <p className="font-sans text-sm text-sage-500">{t("emptyCartSub")}</p>
                  <button
                    onClick={closeCart}
                    className="mt-2 font-sans text-sm font-medium text-sage-600 underline underline-offset-2 hover:text-sage-800 transition-colors"
                  >
                    {t("continueShopping")}
                  </button>
                </div>
              ) : (
                items.map((item) => {
                  const product = MERCH_PRODUCTS.find((p) => p.id === item.productId);
                  if (!product) return null;
                  return (
                    <div key={`${item.productId}-${item.variantId ?? ""}`} className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-sand-200">
                        <Image
                          src={product.images[0].src}
                          alt={product.images[0].alt}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-sm font-medium text-sage-800 truncate">
                          {t(`products.${product.nameKey}`)}
                        </p>
                        {item.variantId && (
                          <p className="font-sans text-xs text-sage-500 mt-0.5">
                            {t("size")}: {item.variantId.toUpperCase()}
                          </p>
                        )}
                        <p className="font-serif text-sm text-sage-700 mt-1">
                          {product.price} €
                        </p>
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center border border-sage-200 rounded-full overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                              aria-label={t("decrease")}
                              className="w-7 h-7 flex items-center justify-center text-sage-600 hover:bg-sage-100 transition-colors text-sm"
                            >
                              −
                            </button>
                            <span className="w-7 text-center font-sans text-sm text-sage-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                              aria-label={t("increase")}
                              className="w-7 h-7 flex items-center justify-center text-sage-600 hover:bg-sage-100 transition-colors text-sm"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.productId, item.variantId)}
                            aria-label={t("remove")}
                            className="text-xs text-sage-400 hover:text-blush-500 transition-colors underline underline-offset-2"
                          >
                            {t("remove")}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-sand-200 px-6 py-5 space-y-4 bg-white">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-sage-600">{t("subtotal")}</span>
                  <span className="font-serif text-lg text-sage-800">{subtotal} €</span>
                </div>
                <p className="font-sans text-xs text-sage-400">{t("shippingNote")}</p>
                <button
                  onClick={handleCheckout}
                  className={cn(
                    "w-full py-3.5 rounded-full font-sans text-sm font-medium",
                    "bg-sage-400 text-white hover:bg-sage-500 active:bg-sage-600",
                    "transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
                  )}
                >
                  {t("checkout")}
                </button>
                <button
                  onClick={closeCart}
                  className="w-full py-2.5 rounded-full font-sans text-sm font-medium text-sage-600 hover:text-sage-800 hover:bg-sage-50 transition-colors"
                >
                  {t("continueShopping")}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
