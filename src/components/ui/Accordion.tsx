"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  /** Allow multiple items open simultaneously */
  multiple?: boolean;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </motion.svg>
  );
}

export default function Accordion({ items, className, multiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  function toggle(id: string) {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      return multiple ? [...prev, id] : [id];
    });
  }

  return (
    <dl className={cn("divide-y divide-sage-200/60", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id}>
            <dt>
              <button
                type="button"
                id={`accordion-trigger-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-${item.id}`}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                onClick={() => toggle(item.id)}
              >
                <span className="font-sans text-sm font-medium text-sage-800">
                  {item.question}
                </span>
                <span className="shrink-0 text-sage-500">
                  <ChevronIcon open={isOpen} />
                </span>
              </button>
            </dt>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.dd
                  id={`accordion-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${item.id}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 font-sans text-sm leading-relaxed text-sage-600">
                    {item.answer}
                  </p>
                </motion.dd>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </dl>
  );
}
