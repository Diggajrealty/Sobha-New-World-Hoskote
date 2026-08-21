"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { GALLERY } from "@/lib/content";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const move = useCallback(
    (step: number) => setIndex((i) => (i === null ? i : (i + step + GALLERY.length) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, move]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {GALLERY.map((img, i) => (
          <motion.button
            key={img.src + i}
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.07 }}
            className={`group relative overflow-hidden ${
              i === 0 || i === 5 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-4/3"
            }`}
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-1000 ease-lux group-hover:scale-107"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-forest-deep/0 opacity-0 transition-all duration-500 group-hover:bg-forest-deep/35 group-hover:opacity-100">
              <Expand size={22} className="text-white" />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
            className="fixed inset-0 z-200 flex items-center justify-center bg-forest-deep/95 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setIndex(null)}
              aria-label="Close gallery"
              className="absolute right-5 top-5 p-2 text-white/80 hover:text-gold"
            >
              <X size={26} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 p-3 text-white/70 hover:text-gold md:left-10"
            >
              <ChevronLeft size={34} />
            </button>
            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[82vh] w-full max-w-5xl"
            >
              <Image
                src={GALLERY[index].src}
                alt={GALLERY[index].alt}
                width={1600}
                height={1100}
                className="max-h-[82vh] w-full object-contain"
              />
              <figcaption className="pt-4 text-center text-[11px] uppercase tracking-[0.2em] text-white/70">
                {index + 1} / {GALLERY.length} · {GALLERY[index].alt}
              </figcaption>
            </motion.figure>
            <button
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
              aria-label="Next image"
              className="absolute right-3 p-3 text-white/70 hover:text-gold md:right-10"
            >
              <ChevronRight size={34} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
