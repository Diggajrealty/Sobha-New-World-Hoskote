"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/content";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-5 right-5 z-90 flex flex-col gap-3"
        >
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            aria-label="Chat on WhatsApp"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-forest bg-forest text-white shadow-[0_14px_30px_-10px_rgba(43,36,30,0.65)] transition-all duration-400 hover:-translate-y-0.5 hover:bg-forest-deep"
          >
            <MessageCircle size={21} />
          </a>
          <a
            href={`tel:${SITE.phone}`}
            aria-label="Call the sales team"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-[0_14px_30px_-10px_rgba(43,36,30,0.65)] transition-all duration-400 hover:-translate-y-0.5 hover:bg-ink"
          >
            <Phone size={20} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
