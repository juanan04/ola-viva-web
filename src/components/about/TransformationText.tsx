"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface TransformationTextProps {
    texts: string[];
    scrollProgress: MotionValue<number>;
}

// 3 positions for cinematic impact — left, right, center
const TEXT_LAYOUTS = [
    {
        // 0 — top-left, slides from left
        position: "top-[12%] left-[5%] max-w-[54vw]",
        align: "text-left",
        enter: { x: -70, y: 0 },
        exit:  { x: -50, y: 0 },
        size: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
    },
    {
        // 1 — right-center, slides from right
        position: "top-[36%] right-[4%] max-w-[48vw]",
        align: "text-right",
        enter: { x: 70, y: 0 },
        exit:  { x: 50, y: 0 },
        size: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
    },
    {
        // 2 — bottom-center, cinematic large, rises from below
        position: "bottom-[10%] left-1/2 -translate-x-1/2 w-[88vw]",
        align: "text-center",
        enter: { x: 0, y: 65 },
        exit:  { x: 0, y: -50 },
        size: "text-5xl sm:text-6xl md:text-8xl lg:text-9xl",
    },
] as const;

export default function TransformationText({ texts, scrollProgress }: TransformationTextProps) {
    const count = texts.length;
    // 3 texts: each gets ~30% of scroll, 5% gap between them
    const GAP = 0.05;
    const segmentLength = (1 - GAP * (count - 1)) / count;
    // Fade window: 9% for long, comfortable in/out
    const FADE = 0.09;

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {texts.map((text, i) => {
                const layout = TEXT_LAYOUTS[i % TEXT_LAYOUTS.length];
                const start = i * (segmentLength + GAP);
                const end   = start + segmentLength;

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(
                    scrollProgress,
                    [start, start + FADE, end - FADE, end],
                    [0, 1, 1, 0]
                );
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const x = useTransform(
                    scrollProgress,
                    [start, start + FADE, end - FADE, end],
                    [layout.enter.x, 0, 0, layout.exit.x]
                );
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const y = useTransform(
                    scrollProgress,
                    [start, start + FADE, end - FADE, end],
                    [layout.enter.y, 0, 0, layout.exit.y]
                );

                return (
                    <motion.div
                        key={i}
                        style={{ opacity, x, y }}
                        className={`absolute ${layout.position}`}
                    >
                        <h3
                            className={`
                                font-serif italic leading-none tracking-tight
                                ${layout.size} ${layout.align}
                                text-white
                            `}
                            style={{
                                textShadow:
                                    "0 2px 48px rgba(0,0,0,0.75), 0 0 100px rgba(0,0,0,0.35)",
                            }}
                        >
                            {text}
                        </h3>
                    </motion.div>
                );
            })}
        </div>
    );
}
