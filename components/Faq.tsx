"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-stone">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-stone">
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-7 text-left font-serif text-[clamp(1.1rem,1.6vw,1.4rem)] leading-snug text-ink"
              >
                {item.q}
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  className="shrink-0 text-gold"
                >
                  <Plus size={22} strokeWidth={1.2} />
                </motion.span>
              </button>
            </h3>
            {/* answers stay mounted so the copy ships in the SSR HTML for crawlers */}
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              className="overflow-hidden"
              aria-hidden={!isOpen}
            >
              <p className="pb-7 pr-12 text-[15px] text-ink-soft">{item.a}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
