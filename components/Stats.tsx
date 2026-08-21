"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { STATS } from "@/lib/content";

function Counter({ to, duration = 1600 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); // ease-out cubic
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{n}</span>;
}

export default function Stats() {
  return (
    <section className="border-y border-gold/30 bg-surface">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-11 text-center ${
                i % 2 === 1 ? "border-l border-stone" : ""
              } ${i >= 2 ? "border-t border-stone md:border-t-0" : ""} ${
                i === 2 ? "md:border-l" : ""
              } ${i === 3 ? "md:border-l" : ""}`}
            >
              <b className="mb-2.5 block font-serif text-[clamp(2.2rem,3.4vw,3rem)] leading-none font-normal text-gold">
                {s.prefix}
                <Counter to={s.value} />
                {s.suffix}
              </b>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
                {s.label}
              </span>
              <span className="mx-auto mt-4 block h-px w-8 bg-gold/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
