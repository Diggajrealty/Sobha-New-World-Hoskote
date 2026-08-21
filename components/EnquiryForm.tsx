"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Loader2 } from "lucide-react";
import { RESIDENCES } from "@/lib/content";

const PHONE_RE = /^[6-9]\d{9}$/;

type State = "idle" | "sending" | "done";

export default function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) return; // honeypot — silently drop bots

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!name) return setError("Please enter your name.");
    if (!PHONE_RE.test(phone))
      return setError("Enter a valid 10-digit Indian mobile number.");
    if (!data.get("consent")) return setError("Please accept the consent checkbox.");

    setError("");
    setState("sending");
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      setState("done");
      form.reset();
    } catch {
      setState("idle");
      setError("Something went wrong. Please call us instead.");
    }
  }

  const input =
    "w-full border border-stone bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-gold placeholder:text-ink-soft/70";

  return (
    <div
      className={`border border-gold/30 bg-canvas/95 backdrop-blur-lg p-6 sm:p-9 ${
        compact ? "" : "shadow-[0_40px_80px_-40px_rgba(36,29,22,0.6)]"
      }`}
    >
      <AnimatePresence mode="wait">
        {state === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10 text-center"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
              <Check size={24} />
            </div>
            <h3 className="mb-2 text-2xl">Thank You</h3>
            <p className="text-sm text-ink-soft">
              Our team will call you within 24 hours with the cost sheet and floor plans.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            noValidate
          >
            <h2 className="text-[1.7rem] leading-tight">Register Your Interest</h2>
            <p className="eyebrow mt-1.5 mb-6">Priority pre-launch pricing</p>

            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px]"
              aria-hidden="true"
            />

            <div className="space-y-3.5">
              <input className={input} name="name" placeholder="Full Name" required />
              <input
                className={input}
                name="phone"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="10-digit Mobile Number"
                required
              />
              <input className={input} name="email" type="email" placeholder="Email Address" />
              <select className={input} name="configuration" defaultValue="">
                <option value="" disabled>
                  Preferred Configuration
                </option>
                {RESIDENCES.map((r) => (
                  <option key={r.id}>{r.name}</option>
                ))}
              </select>
            </div>

            <label className="my-4 flex items-start gap-2.5 text-[11.5px] leading-relaxed text-ink-soft">
              <input type="checkbox" name="consent" className="mt-1 accent-gold" />
              I agree to be contacted about this project and accept the privacy policy.
            </label>

            <button
              type="submit"
              disabled={state === "sending"}
              className="label-caps flex w-full items-center justify-center gap-2 border border-gold bg-gold py-4 text-white transition-all duration-500 hover:bg-ink hover:border-ink disabled:opacity-60"
            >
              {state === "sending" ? (
                <>
                  <Loader2 size={14} className="animate-spin" /> Sending
                </>
              ) : (
                "Get Price & Floor Plans"
              )}
            </button>

            <div className="min-h-5 pt-2.5 text-xs text-[#A33]">{error}</div>
            <p className="text-center text-[10px] tracking-[0.1em] uppercase text-ink-soft">
              100% confidential · No spam
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
