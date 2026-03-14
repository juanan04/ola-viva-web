"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const GALLERY_IMAGES = [
  { src: "/galery-imgs/galery-img1.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img2.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img3.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img4.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img5.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img6.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img7.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img8.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img9.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img10.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img11.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img12.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img13.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img14.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img15.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img16.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img17.jpeg", alt: "" },
  { src: "/galery-imgs/galery-img18.jpeg", alt: "" },
];

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const [selected, setSelected] = useState<number | null>(null);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (selected === null) return;
    if (e.key === "ArrowRight") setSelected((s) => (s! + 1) % GALLERY_IMAGES.length);
    if (e.key === "ArrowLeft") setSelected((s) => (s! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    if (e.key === "Escape") setSelected(null);
  }

  return (
    <main className="min-h-screen bg-[#fbf3e4]" onKeyDown={handleKeyDown}>
      {/* Hero header */}
      <section className="pt-36 pb-16 text-center">
        <Container>
          <p className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-sage-400 mb-4">
            {t("eyebrow")}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-normal text-[#1f1c19] leading-[1.05] mb-6">
            {t("title")}
          </h1>
          <p className="font-sans text-base md:text-lg text-[#1f1c19]/70 max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </Container>
      </section>

      {/* Masonry grid */}
      <section className="pb-24">
        <Container>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                onClick={() => setSelected(i)}
                className="relative block w-full overflow-hidden rounded-xl cursor-zoom-in group focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
                aria-label={`${t("viewImage")} ${i + 1}`}
              >
                <div className="relative w-full aspect-auto">
                  <Image
                    src={img.src}
                    alt={img.alt || `${t("imageAlt")} ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-xl bg-[#1f1c19]/0 group-hover:bg-[#1f1c19]/20 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1c19]/90 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors font-sans text-sm tracking-widest uppercase"
              onClick={() => setSelected(null)}
              aria-label={t("close")}
            >
              ✕
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 text-white/60 hover:text-white text-3xl transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setSelected((s) => (s! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}
              aria-label={t("prev")}
            >
              ‹
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[selected].src}
                alt={GALLERY_IMAGES[selected].alt || `${t("imageAlt")} ${selected + 1}`}
                width={1200}
                height={900}
                className="max-w-[90vw] max-h-[85vh] w-auto h-auto rounded-xl object-contain shadow-2xl"
                priority
              />
              <p className="text-center text-white/40 font-sans text-xs mt-3 tracking-widest">
                {selected + 1} / {GALLERY_IMAGES.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 text-white/60 hover:text-white text-3xl transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setSelected((s) => (s! + 1) % GALLERY_IMAGES.length); }}
              aria-label={t("next")}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
