"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import MerchHeader from "@/components/merch/MerchHeader";
import Container from "@/components/ui/Container";

export default function CheckoutPage() {
  const t = useTranslations("merch");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <MerchHeader />
      <main id="main-content" className="min-h-screen bg-sand-50 pt-16 flex items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-lg mx-auto text-center py-24"
          >
            {/* Lily decorative */}
            <div className="w-24 h-24 rounded-full bg-sage-100 mx-auto mb-8 flex items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sage-400"
                aria-hidden
              >
                <path d="M32 56 C32 56 20 44 20 32 C20 20 32 8 32 8" />
                <path d="M32 8 C32 8 44 20 44 32 C44 44 32 56 32 56" />
                <path d="M8 32 C8 32 20 20 32 20 C44 20 56 32 56 32" />
                <path d="M56 32 C56 32 44 44 32 44 C20 44 8 32 8 32" />
                <circle cx="32" cy="32" r="4" />
              </svg>
            </div>

            <h1 className="font-serif text-display text-sage-800 mb-4">
              {t("checkoutSoonTitle")}
            </h1>
            <p className="font-sans text-sm text-sage-600 leading-relaxed mb-10 max-w-sm mx-auto">
              {t("checkoutSoonBody")}
            </p>

            {/* Wave decoration */}
            <div className="flex justify-center mb-10" aria-hidden>
              <svg width="80" height="12" viewBox="0 0 80 12" fill="none" className="text-sage-300">
                <path d="M0 6 C10 0, 20 12, 30 6 S50 0, 60 6 S70 12, 80 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/merch"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-medium bg-sage-400 text-white hover:bg-sage-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
              >
                {t("backToShop")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-medium border border-sage-300 text-sage-700 hover:border-sage-400 hover:bg-sage-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
              >
                {t("contactUs")}
              </Link>
            </div>
          </motion.div>
        </Container>
      </main>
    </>
  );
}
