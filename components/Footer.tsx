import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { SITE, NAV } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-forest-deep pt-16 text-sm text-[#CFC7B8] md:pt-22">
      <div className="wrap">
        <div className="grid gap-11 pb-13 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div>
            <div className="mb-3 font-serif text-3xl leading-tight text-white">
              Sobha One World
            </div>
            <p className="max-w-sm">
              An epitome of luxury living across ~300 acres in Sarakariguttahalli, Hoskote,
              East Bangalore. 1–4 BHK residences by Sobha Limited.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-gold">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold">
              Journal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/blog/index.html" className="transition-colors hover:text-gold">
                  All Articles
                </Link>
              </li>
              <li>
                <Link href="/blog/sobha-one-world-amenities-guide-hoskote.html" className="transition-colors hover:text-gold">
                  Amenities Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/hoskote-vs-whitefield-real-estate-comparison.html" className="transition-colors hover:text-gold">
                  Hoskote vs Whitefield
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <Phone size={14} className="text-gold" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <MessageCircle size={14} className="text-gold" /> {SITE.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MapPin size={14} className="mt-1 shrink-0 text-gold" />
                <span>
                  {SITE.address.street}, {SITE.address.locality},<br />
                  Bangalore, {SITE.address.region} {SITE.address.postal}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p className="border-t border-gold/20 py-6 text-[11.5px] leading-relaxed text-[#9C9384]">
          Disclaimer: This is an independent informational website operated by an authorised
          channel partner and is not the official website of Sobha Limited. All images are
          indicative and used for representational purposes only. Prices, plans and
          specifications are subject to change at the developer&apos;s discretion. RERA
          application for Phase 1 is in process; buyers must verify the RERA registration
          number and sanctioned plans before purchase.
        </p>

        <div className="flex flex-wrap justify-between gap-4 border-t border-gold/25 py-6 text-[11.5px] text-[#9C9384]">
          <span>© {new Date().getFullYear()} Sobha One World Hoskote. All rights reserved.</span>
          <span>Made for discerning homebuyers in East Bangalore.</span>
        </div>
      </div>
    </footer>
  );
}
