"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { NAV, SITE } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = !scrolled && !open; // white text over the hero image

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 transition-colors duration-500 ease-lux border-b ${
        scrolled || open
          ? "bg-canvas/95 backdrop-blur-md border-gold/30"
          : "border-transparent"
      }`}
    >
      <div className="bg-forest text-[10.5px] tracking-[0.2em] uppercase text-[#EADFC8] text-center py-2.5 px-4">
        Pre-Launch Now Open <span className="mx-2 opacity-40">·</span>
        <b className="text-gold font-semibold">1, 2, 3 &amp; 4 BHK from {SITE.priceFrom}</b>
        <span className="mx-2 opacity-40 hidden sm:inline">·</span>
        <span className="hidden sm:inline">Hoskote, East Bangalore</span>
      </div>

      <div className="wrap">
        <nav className="flex h-21 items-center justify-between" aria-label="Primary">
          <Link href="/" className="leading-tight">
            <span
              className={`block font-serif text-2xl transition-colors duration-500 ${
                light ? "text-white" : "text-ink"
              }`}
            >
              Sobha One World
            </span>
            <span className="block text-[9px] tracking-[0.32em] uppercase text-gold">
              Hoskote · Bangalore
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`label-caps transition-colors duration-300 hover:text-gold ${
                    light ? "text-white/85" : "text-ink/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/blog/index.html"
                className={`label-caps transition-colors duration-300 hover:text-gold ${
                  light ? "text-white/85" : "text-ink/80"
                }`}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#enquire"
                className="label-caps border border-gold bg-gold px-6 py-3.5 text-white transition-all duration-500 hover:bg-ink hover:border-ink"
              >
                Enquire
              </a>
            </li>
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`lg:hidden p-2 transition-colors ${light ? "text-white" : "text-ink"}`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* scroll progress hairline */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-px origin-left bg-gold"
      />

      {/* mobile sheet */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-canvas border-t border-stone"
        >
          <ul className="wrap py-2">
            {[...NAV, { label: "Blog", href: "/blog/index.html" }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="label-caps block border-b border-stone py-4 text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#enquire"
                onClick={() => setOpen(false)}
                className="label-caps block bg-gold py-4 text-center text-white"
              >
                Enquire Now
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
