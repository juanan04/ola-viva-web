"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import CartIcon from "./CartIcon";
import LocaleSwitcher from "@/components/layout/LocaleSwitcher";

export default function MerchHeader() {
  const t = useTranslations("nav");
  const tMerch = useTranslations("merch");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
        isScrolled
          ? "bg-sand-50/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="OLA VIVA - Inicio"
          className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
        >
          <div className="w-9 h-9 rounded-full bg-sage-400 flex items-center justify-center">
            <span className="font-serif text-blush-200 text-xs italic font-light leading-none">
              OV
            </span>
          </div>
          <span className="font-serif text-xl italic font-light text-sage-800">
            Ola Viva
          </span>
        </Link>

        {/* Center breadcrumb */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex items-center gap-2 font-sans text-sm text-sage-500"
          >
            <Link href="/" className="hover:text-sage-700 transition-colors">{t("home")}</Link>
            <span aria-hidden>/</span>
            <span className="text-sage-700 font-medium">{tMerch("title")}</span>
          </motion.div>
        </AnimatePresence>

        {/* Right: locale switcher + cart */}
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
