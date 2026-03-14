"use client";

import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface CartIconProps {
  className?: string;
}

export default function CartIcon({ className }: CartIconProps) {
  const { totalItems, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      aria-label={`Carrito (${totalItems} productos)`}
      className={cn(
        "relative p-2 rounded-full transition-colors",
        "text-sage-600 hover:text-sage-800 hover:bg-sage-100",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400",
        className
      )}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-blush-400 text-white text-[10px] font-medium flex items-center justify-center px-1 leading-none">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </button>
  );
}
