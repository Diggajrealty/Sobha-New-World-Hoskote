"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const SRC =
  "https://www.google.com/maps?q=13.0712,77.7988&hl=en&z=14&output=embed";

/* Click-to-load map: keeps Google's iframe (and its cookies/JS) off the initial page load. */
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="framed relative aspect-16/10 w-full overflow-hidden bg-surface">
      {loaded ? (
        <iframe
          src={SRC}
          title="Sobha One World Hoskote location map — Sarakariguttahalli, Hoskote, Bangalore 562114"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full grayscale-[0.35]"
        />
      ) : (
        <button
          onClick={() => setLoaded(true)}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(135deg,#F2EDE4,#E5E1D8)]"
        >
          <span className="flex size-14 items-center justify-center rounded-full border border-gold text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-white">
            <MapPin size={22} />
          </span>
          <span className="label-caps text-ink">View on Google Maps</span>
          <span className="max-w-xs text-center text-xs text-ink-soft">
            Sarakariguttahalli, Hoskote, Bangalore 562114 · 13.0712° N, 77.7988° E
          </span>
        </button>
      )}
    </div>
  );
}
