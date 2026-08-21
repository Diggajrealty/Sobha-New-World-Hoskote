"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

const DELAY_MS = 7000;
const STORAGE_KEY = "sow-popup-seen";

/* Timed enquiry modal. Shows once per browser session after DELAY_MS —
   re-prompting a visitor who already dismissed it costs more in bounce than
   it wins in leads. */
export default function PopupForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // private mode / storage blocked — fall through and show once
    }
    if (seen) return;

    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  // Esc to close + lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && dismiss();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={dismiss}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-heading"
          className="fixed inset-0 z-200 flex items-center justify-center bg-forest-deep/80 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto"
          >
            <button
              onClick={dismiss}
              aria-label="Close enquiry form"
              className="absolute right-4 top-4 z-10 p-1.5 text-ink-soft transition-colors hover:text-gold"
            >
              <X size={20} />
            </button>

            <div className="border-t-2 border-gold bg-canvas">
              <p id="popup-heading" className="px-6 pt-8 text-center font-serif text-lg text-ink sm:px-9">
                Pre-launch allocations are released in limited phases
              </p>
              <EnquiryForm compact />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
