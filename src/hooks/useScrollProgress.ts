import { type RefObject } from "react";
import { useScroll, useSpring } from "framer-motion";

/**
 * Tracks scroll progress of a container element.
 * offset "start start" → "end start" maps 0→1 as the element
 * travels from entering the viewport to its bottom reaching the top.
 */
export function useScrollProgress(
  containerRef: RefObject<HTMLElement | null>
) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return { scrollYProgress, smoothProgress };
}
