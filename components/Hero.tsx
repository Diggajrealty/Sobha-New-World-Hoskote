"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Phone } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import { SITE } from "@/lib/content";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <section
      ref={ref}
      id="enquire"
      className="relative flex min-h-svh items-end overflow-hidden pt-44 pb-16"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image
          src="/img/hero.jpg"
          alt="Luxury high-rise residential towers at golden hour — Sobha One World Hoskote, East Bangalore"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(36,29,22,0.78)_0%,rgba(36,29,22,0.46)_48%,rgba(36,29,22,0.2)_100%)]" />
      </motion.div>

      <div className="wrap grid w-full items-end gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:gap-16">
        <motion.div style={{ opacity: fade }} className="max-w-3xl text-white">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow mb-5 text-gold-light"
          >
            Pre-Launch · Sarakariguttahalli, Hoskote
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-6 text-[clamp(2.6rem,6.4vw,5.4rem)] text-white"
          >
            Sobha One World Hoskote —{" "}
            <em className="text-gilt italic">A Masterpiece of Modern Luxury</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.22 }}
            className="max-w-xl text-[1.05rem] text-white/88"
          >
            A ~300-acre master-planned township by Sobha Limited, bringing 1, 2, 3 and 4 BHK
            luxury apartments, 70% open green space and over 50 curated amenities to East
            Bangalore&apos;s fastest-growing corridor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.34 }}
          >
            <div className="mt-8 inline-block border-t border-white/35 pt-3.5 font-serif text-2xl">
              {SITE.priceFrom} onwards
            </div>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="#residences"
                className="label-caps border border-gold bg-gold px-8 py-4 text-white transition-all duration-500 hover:bg-ink hover:border-ink"
              >
                View Residences
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="label-caps flex items-center gap-2 border border-white/60 px-8 py-4 text-white transition-all duration-500 hover:bg-white hover:text-ink"
              >
                <Phone size={13} /> {SITE.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <EnquiryForm />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#vision"
        aria-label="Scroll to the vision section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.28em] text-white/60">Scroll</span>
        <motion.span
          animate={{ scaleY: [0.25, 1, 0.25], originY: 0 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block h-12 w-px bg-gold-light/70"
        />
      </motion.a>
    </section>
  );
}
