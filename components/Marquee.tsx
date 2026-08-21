"use client";

const ITEMS = [
  "300-Acre Masterplan",
  "G+53 Sky Towers",
  "70% Open Green",
  "50+ Amenities",
  "Grand Clubhouse",
  "Vaastu-Compliant Homes",
  "5 Min to NH-75",
  "Sobha Backward Integration",
];

/* Infinite gold ribbon — pure CSS translate, duplicated track for a seamless loop. */
export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-gold/25 bg-forest py-5">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-14 pr-14 hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-14" aria-hidden={copy === 1}>
            {ITEMS.map((item) => (
              <span
                key={item}
                className="flex items-center gap-14 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.28em] text-[#EADFC8]"
              >
                {item}
                <span className="size-1 rotate-45 bg-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-forest to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-forest to-transparent" />
    </div>
  );
}
