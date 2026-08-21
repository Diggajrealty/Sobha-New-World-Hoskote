/* Inner-page registry — single source for nav, footer, sibling hubs and sitemap,
   so a new page is linked from everywhere the moment it is added here. */
export const INNER_PAGES = [
  {
    href: "/sobha-one-world-hoskote-price",
    eyebrow: "Price List",
    linkTitle: "Sobha One World Hoskote Price List 2026",
    linkBlurb:
      "Configuration-wise pricing, per-sq-ft rates, payment plan, stamp duty, GST and total cost of ownership.",
    navLabel: "Price",
  },
  {
    href: "/sobha-one-world-hoskote-floor-plans",
    eyebrow: "Floor Plans",
    linkTitle: "1, 2, 3 & 4 BHK Floor Plans",
    linkBlurb:
      "Unit-wise layouts, carpet vs saleable area, Vaastu orientation and room-by-room dimensions.",
    navLabel: "Floor Plans",
  },
  {
    href: "/sobha-one-world-hoskote-amenities",
    eyebrow: "Amenities",
    linkTitle: "50+ Amenities & Grand Clubhouse",
    linkBlurb:
      "The full amenity inventory — clubhouse, sports, wellness, kids' zones and township infrastructure.",
    navLabel: "Amenities",
  },
  {
    href: "/sobha-one-world-hoskote-location",
    eyebrow: "Location",
    linkTitle: "Location & Connectivity in Hoskote",
    linkBlurb:
      "Distances to Whitefield, ITPL and the airport, plus schools, hospitals, STRR and metro plans.",
    navLabel: "Location",
  },
  {
    href: "/sobha-limited-builder",
    eyebrow: "The Builder",
    linkTitle: "Sobha Limited — Builder Profile",
    linkBlurb:
      "Track record, backward integration, delivered projects and what it means for a pre-launch buyer.",
    navLabel: "Builder",
  },
  {
    href: "/sobha-one-world-hoskote-review",
    eyebrow: "Honest Review",
    linkTitle: "Sobha One World Hoskote Review",
    linkBlurb:
      "A balanced pros-and-cons assessment: who this project suits, and who should look elsewhere.",
    navLabel: "Review",
  },
] as const;
