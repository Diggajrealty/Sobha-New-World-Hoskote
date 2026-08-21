"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { RESIDENCES } from "@/lib/content";
import { Reveal } from "./ui";

export default function Residences() {
  const [active, setActive] = useState(0);
  const unit = RESIDENCES[active];

  return (
    <Reveal>
      {/* configuration switcher */}
      <div className="mb-12 flex flex-wrap gap-px border border-stone bg-stone">
        {RESIDENCES.map((r, i) => (
          <button
            key={r.id}
            onClick={() => setActive(i)}
            className={`label-caps relative flex-1 min-w-[150px] px-5 py-5 transition-colors duration-400 ${
              i === active ? "bg-canvas text-ink" : "bg-surface text-ink-soft hover:text-ink"
            }`}
          >
            {i === active && (
              <motion.span
                layoutId="unit-underline"
                className="absolute inset-x-0 top-0 h-px bg-gold"
              />
            )}
            {r.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={unit.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src={unit.image}
              alt={`${unit.name} interior at Sobha One World Hoskote`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-[clamp(1.8rem,3vw,2.6rem)]">{unit.name}</h3>
            <div className="my-6 flex flex-wrap items-baseline gap-x-10 gap-y-2 border-y border-stone py-5">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  Carpet + Balcony
                </span>
                <span className="font-serif text-2xl">{unit.area}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                  Pre-launch price
                </span>
                <span className="font-serif text-2xl text-gold">{unit.price}</span>
              </div>
            </div>
            <p className="mb-6 text-ink-soft">{unit.blurb}</p>
            <ul className="mb-8 space-y-3">
              {unit.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm">
                  <Check size={15} className="mt-1 shrink-0 text-gold" />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href="#enquire"
              className="label-caps inline-flex items-center gap-2.5 border border-gold px-8 py-4 text-ink transition-all duration-500 hover:bg-gold hover:text-white"
            >
              Request Floor Plan <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </Reveal>
  );
}
