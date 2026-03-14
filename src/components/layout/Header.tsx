"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileMenu from "./MobileMenu";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const HamburgerIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M3 6h16M3 11h16M3 16h16" />
  </svg>
);

export default function Header() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo — siempre visible */}
          <Link
            href="/"
            aria-label="OLA VIVA - Inicio"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 rounded"
            onClick={(e) => {
              // Smooth scroll to top if we are already on the home page / hero section
              if (window.location.pathname === '/' || window.location.pathname === '/es' || window.location.pathname === '/en') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
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

          {/* Estado inicial: nav desktop + locale switcher */}
          <AnimatePresence initial={false}>
            {!isScrolled && (
              <motion.div
                key="full-nav"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex items-center gap-4"
              >
                <Navigation />
                <div className="w-px h-4 bg-sage-200" aria-hidden />
                <LocaleSwitcher />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Estado scroll: hamburguesa siempre a la derecha */}
          <AnimatePresence initial={false}>
            {isScrolled ? (
              <motion.button
                key="hamburger-scrolled"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileOpen(true)}
                aria-label={t("openMenu")}
                aria-expanded={mobileOpen}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  "text-sage-600 hover:text-sage-800 hover:bg-white/20",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
                )}
              >
                <HamburgerIcon />
              </motion.button>
            ) : (
              /* Hamburguesa mobile (solo en móvil, estado sin scroll) */
              <motion.button
                key="hamburger-mobile"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                onClick={() => setMobileOpen(true)}
                aria-label={t("openMenu")}
                aria-expanded={mobileOpen}
                className={cn(
                  "md:hidden p-2 rounded-md transition-colors",
                  "text-sage-600 hover:text-sage-800 hover:bg-white/20",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
                )}
              >
                <HamburgerIcon />
              </motion.button>
            )}
          </AnimatePresence>

        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
