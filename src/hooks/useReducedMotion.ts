import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Returns true when the user prefers reduced motion.
 * Wraps Framer Motion's hook with a safe fallback.
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
