"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "enquire", label: "Overview" },
  { id: "vision", label: "The Vision" },
  { id: "residences", label: "Residences" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "location", label: "Location" },
  { id: "gallery", label: "Gallery" },
  { id: "blog", label: "Journal" },
];

/* Fixed dot rail that tracks the section in view. Desktop only, decorative nav. */
export default function SectionRail() {
  const [active, setActive] = useState("enquire");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="space-y-4">
        {SECTIONS.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id}>
              <a href={`#${s.id}`} className="group flex items-center gap-3" aria-current={on}>
                <span
                  className={`block h-px transition-all duration-500 ease-lux ${
                    on ? "w-8 bg-gold" : "w-3 bg-ink/25 group-hover:w-6 group-hover:bg-gold/60"
                  }`}
                />
                <span
                  className={`text-[9.5px] font-semibold uppercase tracking-[0.2em] transition-all duration-500 ${
                    on
                      ? "text-gold opacity-100"
                      : "text-ink-soft opacity-0 group-hover:opacity-70"
                  }`}
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
