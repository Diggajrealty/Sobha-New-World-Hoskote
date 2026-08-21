import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // explicitly welcome AI search crawlers (answer engines, not training-only bots)
      { userAgent: ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
