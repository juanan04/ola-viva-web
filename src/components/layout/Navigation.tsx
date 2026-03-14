"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", labelKey: "home", anchor: null },
  { href: "/", labelKey: "about", anchor: "sobre-nosotros" },
  { href: "/", labelKey: "destinations", anchor: "destinos" },
  { href: "/gallery", labelKey: "gallery", anchor: null },
  { href: "/merch", labelKey: "shop", anchor: null },
  { href: "/contact", labelKey: "contact", anchor: null },
] as const;

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
}

export default function Navigation({ className, onLinkClick }: NavigationProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();

  function handleAnchorClick(e: React.MouseEvent, anchor: string) {
    e.preventDefault();
    onLinkClick?.();
    // If not on home page, navigate first then scroll
    if (pathname !== "/") {
      window.location.href = `/#${anchor}`;
      return;
    }
    document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav aria-label="Main navigation">
      <ul className={cn("flex gap-1", className)}>
        {NAV_LINKS.map(({ href, labelKey, anchor }) => {
          const isActive =
            href === "/" && !anchor
              ? pathname === "/"
              : anchor
                ? false
                : pathname.startsWith(href);

          if (anchor) {
            return (
              <li key={labelKey}>
                <a
                  href={`/#${anchor}`}
                  onClick={(e) => handleAnchorClick(e, anchor)}
                  className={cn(
                    "relative px-3 py-2 font-sans text-sm font-medium transition-colors rounded-md cursor-pointer",
                    "hover:text-sage-600 hover:bg-sage-50",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400",
                    "text-sage-600"
                  )}
                >
                  {t(labelKey)}
                </a>
              </li>
            );
          }

          return (
            <li key={href + labelKey}>
              <Link
                href={href}
                onClick={onLinkClick}
                className={cn(
                  "relative px-3 py-2 font-sans text-sm font-medium transition-colors rounded-md",
                  "hover:text-sage-600 hover:bg-sage-50",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400",
                  isActive
                    ? "text-sage-700 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-sage-400"
                    : "text-sage-600"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {t(labelKey)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
