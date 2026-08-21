"use client";

import { motion } from "motion/react";

/* Thin gold rule with a centred diamond — the editorial section divider. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.4 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
      className={`flex items-center justify-center gap-4 ${className}`}
    >
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60 sm:w-28" />
      <span className="size-1.5 rotate-45 border border-gold" />
      <span className="size-1 rotate-45 bg-gold/70" />
      <span className="size-1.5 rotate-45 border border-gold" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60 sm:w-28" />
    </motion.div>
  );
}

/* Oversized outlined section numeral, e.g. 01 — used as an editorial marker. */
export function SectionNumber({ n, label }: { n: string; label: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      <span
        className="font-serif text-5xl leading-none text-transparent sm:text-6xl"
        style={{ WebkitTextStroke: "1px rgba(197,160,89,0.55)" }}
        aria-hidden="true"
      >
        {n}
      </span>
      <span className="eyebrow">{label}</span>
    </div>
  );
}
