"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

/* Fade-and-rise on scroll — replaces the old IntersectionObserver script. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow mb-4">{children}</span>;
}

export function Rule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-14 bg-gold my-7 ${className}`} />;
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-[clamp(2rem,4.2vw,3.6rem)]">{title}</h2>
      <Rule className={center ? "mx-auto" : ""} />
      {lede && (
        <p className="text-[clamp(1.05rem,1.5vw,1.22rem)] leading-[1.85] text-ink-soft">
          {lede}
        </p>
      )}
    </Reveal>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "light";
  className?: string;
};

const BTN_BASE =
  "inline-flex items-center justify-center gap-2.5 label-caps px-8 py-4 border transition-all duration-500 ease-lux cursor-pointer";

const BTN_VARIANTS = {
  solid: "bg-gold border-gold text-white hover:bg-ink hover:border-ink hover:text-canvas",
  ghost: "bg-transparent border-gold text-ink hover:bg-gold hover:text-white",
  light: "bg-transparent border-white/60 text-white hover:bg-white hover:text-ink",
};

export function Btn({ href, children, variant = "solid", className = "" }: BtnProps) {
  return (
    <Link href={href} className={`${BTN_BASE} ${BTN_VARIANTS[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export { BTN_BASE, BTN_VARIANTS };
