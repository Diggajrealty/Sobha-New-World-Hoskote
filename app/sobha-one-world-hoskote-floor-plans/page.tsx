import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import { RESIDENCES, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobha One World Hoskote Floor Plans | 1, 2, 3 & 4 BHK Layouts & Sizes",
  description:
    "Sobha One World Hoskote floor plans: 1 BHK 734 sq.ft, 2 BHK 1,150 sq.ft, 3 BHK Luxe 1,600 sq.ft and 4 BHK Grande 2,650 sq.ft. Carpet vs saleable area, Vaastu orientation and room dimensions.",
  keywords: [
    "Sobha One World Hoskote floor plan",
    "3 BHK floor plan Hoskote",
    "2 BHK apartment Hoskote size",
    "4 BHK apartment East Bangalore",
    "carpet area vs saleable area",
    "Vaastu compliant apartments Bangalore",
  ],
  alternates: { canonical: "/sobha-one-world-hoskote-floor-plans" },
  openGraph: {
    title: "Sobha One World Hoskote Floor Plans | 1-4 BHK Layouts",
    description:
      "Unit-wise layouts, carpet vs saleable area and Vaastu orientation for every configuration at Sobha One World Hoskote.",
    url: `${SITE.url}/sobha-one-world-hoskote-floor-plans`,
    images: ["/img/living_room.jpg"],
  },
};

export default function FloorPlansPage() {
  return (
    <PageShell
      eyebrow="Floor Plans & Layouts"
      title="Sobha One World Hoskote Floor Plans — 1, 2, 3 & 4 BHK Apartment Layouts"
      intro="Every configuration at Sobha One World Hoskote, from the 734 sq.ft 1 BHK to the 2,650 sq.ft 4 BHK Grande — with what the numbers mean once furniture, carpet area and Vaastu orientation enter the conversation."
      image="/img/living_room.jpg"
      imageAlt="Luxury living room layout in a Sobha One World Hoskote apartment"
      crumbs={[{ name: "Floor Plans", href: "/sobha-one-world-hoskote-floor-plans" }]}
      currentHref="/sobha-one-world-hoskote-floor-plans"
    >
      <h2>Sobha One World Hoskote Floor Plan Sizes at a Glance</h2>
      <p className="mt-5 text-ink-soft">
        Sobha One World Hoskote offers four apartment configurations across towers of G+45 to G+53
        floors. Every layout is Vaastu-compliant, cross-ventilated and planned so that circulation
        space serves the rooms rather than eating into them — a distinction that matters far more
        than the headline square footage when you actually move furniture in.
      </p>

      <div className="my-9 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-y border-stone">
              {["Configuration", "Saleable Area", "Indicative Carpet", "Balconies", "Price"].map((h) => (
                <th key={h} className="py-4 pr-6 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["1 BHK Residence", "~734 sq.ft.", "~470 sq.ft.", "1 deep balcony", "₹1.09 Cr*"],
              ["2 BHK Residence", "~1,150 sq.ft.", "~740 sq.ft.", "2 + utility", "On request"],
              ["3 BHK Luxe", "~1,600 sq.ft.", "~1,030 sq.ft.", "Full-width deck", "On request"],
              ["4 BHK Grande", "~2,650 sq.ft.", "~1,700 sq.ft.", "270° corner decks", "On request"],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-stone">
                <td className="py-5 pr-6 font-serif text-lg">{row[0]}</td>
                <td className="py-5 pr-6 text-sm text-ink-soft">{row[1]}</td>
                <td className="py-5 pr-6 text-sm text-ink-soft">{row[2]}</td>
                <td className="py-5 pr-6 text-sm text-ink-soft">{row[3]}</td>
                <td className="py-5 pr-6 font-serif text-gold">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11.5px] text-ink-soft">
        Carpet areas above are indicative estimates at roughly 64–65% of saleable area, the typical
        efficiency band for high-rise towers in Bangalore. The RERA carpet area declared at
        registration is the binding figure.
      </p>

      <h2 className="mt-14">Carpet Area vs Saleable Area — Read the Floor Plan Correctly</h2>
      <p className="mt-5 text-ink-soft">
        This single distinction causes more buyer regret in Bangalore than any other. Saleable area
        (also called super built-up) includes your apartment plus a proportionate share of lobbies,
        staircases, lift cores and amenity space. Carpet area, defined under RERA, is the usable
        floor inside your walls. A 3 BHK apartment in Hoskote advertised at 1,600 sq.ft saleable
        will live like roughly 1,030 sq.ft.
      </p>
      <p className="mt-4 text-ink-soft">
        The practical test when you review any floor plan: ignore the total, and check the
        individual room dimensions instead. A master bedroom needs 12&apos; × 12&apos; to take a
        king bed with walking space on both sides. A living room narrower than 11&apos; forces a
        single seating wall. A kitchen under 8&apos; wide cannot hold a parallel counter. Ask for
        dimensioned plans, not just coloured renders — we send both.
      </p>

      <h2 className="mt-14">Configuration-Wise Layout Notes</h2>
      <div className="mt-8 grid gap-8">
        {RESIDENCES.map((r) => (
          <article key={r.id} className="grid gap-6 border border-stone bg-canvas p-6 sm:grid-cols-[200px_1fr] sm:p-8">
            <div className="relative aspect-4/3 w-full">
              <Image src={r.image} alt={`${r.name} layout at Sobha One World Hoskote`} fill sizes="200px" className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl">{r.name} Floor Plan — {r.area}</h3>
              <p className="mt-3 text-sm text-ink-soft">{r.blurb}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {r.highlights.map((h) => (
                  <li key={h} className="text-sm text-ink-soft">
                    <span className="mr-2 text-gold">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <h2 className="mt-14">Vaastu Compliance and Apartment Orientation</h2>
      <p className="mt-5 text-ink-soft">
        Every apartment at Sobha One World Hoskote is planned to Vaastu principles: the main
        entrance in the north or east where the tower orientation permits, the kitchen in the
        south-east, master bedroom in the south-west, and the pooja niche in the north-east. For
        buyers who weight Vaastu heavily, ask for the unit-numbering sheet — within any tower, only
        a subset of stacks give a true north or east entry, and those stacks sell first at
        pre-launch.
      </p>
      <p className="mt-4 text-ink-soft">
        Orientation matters practically as well as ritually in Bangalore. East-facing living rooms
        get soft morning light and stay comfortable through the afternoon; west-facing units take
        the harsh afternoon sun and run measurably warmer from March to May. North-facing homes get
        the most even daylight year-round. On the upper floors of a G+53 tower, the trade-off flips
        toward view: the lake and Nandi-side vistas sit on specific faces, and those command a
        floor-rise premium.
      </p>

      <h2 className="mt-14">Which Configuration Should You Buy?</h2>
      <p className="mt-5 text-ink-soft">
        For a first purchase or a pure rental play, the 1 BHK and 2 BHK apartments in Hoskote carry
        the lowest ticket and the deepest tenant pool — IT professionals commuting to Whitefield
        and ITPL, and manufacturing staff in the Hoskote KIADB belt. For an end-use family home,
        the 3 BHK Luxe is the sweet spot: enough room for a study or a live-in parent, without the
        maintenance and furnishing cost of the 4 BHK. The 4 BHK Grande is a lifestyle purchase —
        buy it for the corner views and the volume, not for yield.
      </p>
      <p className="mt-4 text-ink-soft">
        Compare the numbers against the{" "}
        <Link href="/sobha-one-world-hoskote-price" className="text-gold underline decoration-gold/40">
          full price list and cost sheet
        </Link>
        , then check what your maintenance will fund on the{" "}
        <Link href="/sobha-one-world-hoskote-amenities" className="text-gold underline decoration-gold/40">
          amenities page
        </Link>
        .
      </p>

      <p className="mt-10 text-[11.5px] text-ink-soft">
        *Floor plans, areas and dimensions on this page are indicative and for representation only.
        Actual layouts, carpet areas and specifications are as per the sanctioned plans and the
        RERA declaration, which is under process for Phase 1.
      </p>
    </PageShell>
  );
}
