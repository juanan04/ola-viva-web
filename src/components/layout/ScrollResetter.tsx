"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";

export default function ScrollResetter() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser scroll restoration so it doesn't fight us
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
