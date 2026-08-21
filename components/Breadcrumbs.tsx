import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE } from "@/lib/content";

export type Crumb = { name: string; href: string };

/* Visible breadcrumb trail + matching BreadcrumbList JSON-LD (now genuinely
   multi-item, so it earns its place in the graph). */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items = [{ name: "Home", href: "/" }, ...trail];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/70">
          {items.map((c, i) => (
            <li key={c.href} className="flex items-center gap-2">
              {i < items.length - 1 ? (
                <>
                  <Link href={c.href} className="transition-colors hover:text-gold-light">
                    {c.name}
                  </Link>
                  <ChevronRight size={12} className="text-gold/70" />
                </>
              ) : (
                <span className="text-gold-light">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
