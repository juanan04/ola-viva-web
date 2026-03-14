"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("nav");

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-sage-900/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            role="dialog"
            aria-modal
            aria-label={t("openMenu")}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-72 bg-sand-50 shadow-xl flex flex-col"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-sage-100">
              <span className="font-serif text-lg italic text-sage-700">
                Ola Viva
              </span>
              <button
                onClick={onClose}
                aria-label={t("closeMenu")}
                className="p-2 rounded-md text-sage-500 hover:text-sage-700 hover:bg-sage-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M4 4l12 12M16 4L4 16" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <Navigation
                className="flex-col gap-1"
                onLinkClick={onClose}
              />
            </div>

            {/* Footer: locale switcher */}
            <div className="px-6 py-5 border-t border-sage-100">
              <LocaleSwitcher />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
