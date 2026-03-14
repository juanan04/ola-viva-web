"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ENVIRONMENT_GRADIENTS } from "@/data/destinations";
import type { DestinationEnvironment } from "@/types/destination";

interface CarouselBackgroundProps {
  environment: DestinationEnvironment;
  imageSrc?: string;
  imageAlt?: string;
  blurDataURL?: string;
}

export default function CarouselBackground({
  environment,
  imageSrc,
  imageAlt = "",
  blurDataURL,
}: CarouselBackgroundProps) {
  const gradient = ENVIRONMENT_GRADIENTS[environment];
  const key = imageSrc ?? environment;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <AnimatePresence mode="sync">
        <motion.div
          key={key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {imageSrc ? (
            <>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                sizes="100vw"
                priority
              />
              {/* Darken for legibility */}
              <div className="absolute inset-0 bg-black/50" />
            </>
          ) : (
            <div className="absolute inset-0" style={{ background: gradient }} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
