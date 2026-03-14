"use client";

import { motion } from "framer-motion";

export default function LilyBloomSprite() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute inset-0 w-full h-full"
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/frames-lirio/65.png"
                alt="Lirio florecido"
                className="w-full h-full select-none"
                draggable={false}
                style={{
                    objectFit: "cover",
                    objectPosition: "center 40%",
                    transform: "scale(1.12)",
                    transformOrigin: "center center",
                }}
            />
        </motion.div>
    );
}
