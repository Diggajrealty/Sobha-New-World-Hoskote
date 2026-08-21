import type { MetadataRoute } from "next";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "@/lib/content";
import { INNER_PAGES } from "@/lib/pages";

// Legacy blog posts are static HTML in public/blog — read them at build time
// so the sitemap can never drift from what is actually served.
function blogUrls() {
  try {
    return readdirSync(join(process.cwd(), "public", "blog"))
      .filter((f) => f.endsWith(".html"))
      .map((f) => `${SITE.url}/blog/${f}`);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...INNER_PAGES.map((p) => ({
      url: `${SITE.url}${p.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...blogUrls().map((url) => ({
      url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: url.endsWith("/index.html") ? 0.6 : 0.7,
    })),
  ];
}
