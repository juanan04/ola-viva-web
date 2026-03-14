"use client";

import { useEffect, useRef } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 65;
const FRAME_PATH = (n: number) =>
    `/frames-lirio/${String(n).padStart(2, "0")}.png`;

// Global cache to hold Image objects
const imageCache: HTMLImageElement[] = [];

// Preload to unblock the main thread smoothly
function preloadImages() {
    if (typeof window === "undefined" || imageCache.length > 0) return;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new window.Image();
        img.src = FRAME_PATH(i);
        imageCache.push(img);
    }
}

interface LilyBloomVideoProps {
    scrollProgress: MotionValue<number>;
}

export default function LilyBloomVideo({ scrollProgress }: LilyBloomVideoProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const renderFrameRef = useRef<number>(0);

    const drawFrame = (frameIndex: number) => {
        if (!canvasRef.current || imageCache.length === 0) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imageCache[frameIndex];
        if (!img) return;

        // Draw if ready, otherwise attempt to wait
        if (img.complete && img.naturalWidth > 0) {
            // Guarantee canvas scale matches original image
            if (canvas.width !== img.naturalWidth) {
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        } else {
            // Fallback for fast scroll: draw when this specific image finally loads
            const handleLoad = () => {
                if (renderFrameRef.current === frameIndex) {
                    if (canvas.width !== img.naturalWidth) {
                        canvas.width = img.naturalWidth;
                        canvas.height = img.naturalHeight;
                    }
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0);
                }
                img.removeEventListener("load", handleLoad);
            };
            img.addEventListener("load", handleLoad);
        }
    };

    useEffect(() => {
        preloadImages();
        // Setup initial frame if available
        const firstImg = imageCache[0];
        if (firstImg) {
            if (firstImg.complete) {
                drawFrame(0);
            } else {
                firstImg.addEventListener("load", () => drawFrame(0));
            }
        }
    }, []);

    useMotionValueEvent(scrollProgress, "change", (latest) => {
        const clamped = Math.min(Math.max(latest, 0), 1);
        const frameIdx = Math.round(clamped * (TOTAL_FRAMES - 1));

        if (renderFrameRef.current !== frameIdx) {
            renderFrameRef.current = frameIdx;
            requestAnimationFrame(() => {
                drawFrame(renderFrameRef.current);
            });
        }
    });

    return (
        <div className="absolute inset-0 w-full h-full">
            <canvas
                ref={canvasRef}
                className="w-full h-full select-none"
                style={{
                    // Same properties keep the visual alignment
                    objectFit: "cover",
                    objectPosition: "center 40%",
                    transform: "scale(1.12) translateZ(0)",
                    transformOrigin: "center center",
                    willChange: "transform",
                }}
            />
        </div>
    );
}
