"use client";

import { useRef } from "react";
import { useScroll, useReducedMotion } from "framer-motion";
import LilyBloomVideo from "./LilyBloomVideo";
import TransformationText from "./TransformationText";
import LilyBloomSprite from "./LilyBloomSprite";

interface LilyBloomProps {
    transformationTexts: string[];
}

export default function LilyBloom({ transformationTexts }: LilyBloomProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const prefersReducedMotion = useReducedMotion();

    return (
        // Background matches the dark sage green of the frames so edges blend seamlessly
        <section
            ref={containerRef}
            className="relative h-[400vh]"
            style={{ backgroundColor: "#2e3d2e" }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {prefersReducedMotion ? (
                    <LilyBloomSprite />
                ) : (
                    <LilyBloomVideo scrollProgress={scrollYProgress} />
                )}
                <TransformationText
                    texts={transformationTexts}
                    scrollProgress={scrollYProgress}
                />
            </div>
        </section>
    );
}
