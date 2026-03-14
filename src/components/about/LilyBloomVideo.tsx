"use client";

import { useEffect, useRef } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 65;
const FRAME_PATH = (n: number) =>
    `/frames-lirio/${String(n).padStart(2, "0")}.png`;

// Preload all frames so switching is instant
function preloadFrames() {
    if (typeof window === "undefined") return;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new window.Image();
        img.src = FRAME_PATH(i);
    }
}

interface LilyBloomVideoProps {
    scrollProgress: MotionValue<number>;
}

export default function LilyBloomVideo({ scrollProgress }: LilyBloomVideoProps) {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        preloadFrames();
    }, []);

    useMotionValueEvent(scrollProgress, "change", (latest) => {
        const img = imgRef.current;
        if (!img) return;
        const clamped = Math.min(Math.max(latest, 0), 1);
        const frameIdx = Math.round(clamped * (TOTAL_FRAMES - 1)) + 1;
        const next = FRAME_PATH(frameIdx);
        if (!img.src.endsWith(next)) {
            img.src = next;
        }
    });

    return (
        <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                ref={imgRef}
                src={FRAME_PATH(1)}
                alt="Lirio floreciendo"
                className="w-full h-full select-none"
                draggable={false}
                style={{
                    // Cover the full viewport and zoom slightly to hide the Veo watermark in the bottom-right corner
                    objectFit: "cover",
                    objectPosition: "center 40%",
                    transform: "scale(1.12)",
                    transformOrigin: "center center",
                }}
            />
        </div>
    );
}
