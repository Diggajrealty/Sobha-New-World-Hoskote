"use client";

import { motion } from "motion/react";
import { Phone, MessageCircle, FileDown, CalendarCheck } from "lucide-react";
import { SITE } from "@/lib/content";

const ICONS = { phone: Phone, whatsapp: MessageCircle, brochure: FileDown, visit: CalendarCheck };

/* Inline conversion band, dropped between content sections so a reader never
   has to scroll back to the hero to act. */
export default function CtaBanner({
  heading,
  sub,
  variant = "light",
  action = "brochure",
}: {
  heading: string;
  sub: string;
  variant?: "light" | "dark";
  action?: keyof typeof ICONS;
}) {
  const Icon = ICONS[action];
  const dark = variant === "dark";

  const label =
    action === "phone"
      ? `Call ${SITE.phoneDisplay}`
      : action === "whatsapp"
        ? "Chat on WhatsApp"
        : action === "visit"
          ? "Book a Site Visit"
          : "Get Price & Floor Plans";

  const href =
    action === "phone"
      ? `tel:${SITE.phone}`
      : action === "whatsapp"
        ? `https://wa.me/${SITE.whatsapp}`
        : "#enquire";

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className={`my-14 flex flex-col items-start justify-between gap-6 border p-8 sm:flex-row sm:items-center sm:p-10 ${
        dark ? "border-gold/30 bg-forest text-[#F3EDE1]" : "border-gold/40 bg-surface"
      }`}
    >
      <div>
        <h3 className={`text-[clamp(1.3rem,2.2vw,1.8rem)] ${dark ? "text-white" : ""}`}>{heading}</h3>
        <p className={`mt-2 text-sm ${dark ? "text-[#F3EDE1]/75" : "text-ink-soft"}`}>{sub}</p>
      </div>
      <a
        href={href}
        className={`label-caps flex shrink-0 items-center gap-2.5 border px-7 py-4 transition-all duration-500 ${
          dark
            ? "border-gold bg-gold text-white hover:bg-canvas hover:text-ink hover:border-canvas"
            : "border-gold bg-gold text-white hover:bg-ink hover:border-ink"
        }`}
      >
        <Icon size={14} /> {label}
      </a>
    </motion.aside>
  );
}
