import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import CtaBanner from "@/components/CtaBanner";
import { AMENITIES, BENTO, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobha One World Hoskote Amenities | 50+ Facilities & Grand Clubhouse",
  description:
    "Sobha One World Hoskote amenities: Grand Clubhouse, pool, gym, spa, tennis, kids' zones and 70% open green across 300 acres.",
  keywords: [
    "Sobha One World Hoskote amenities",
    "clubhouse apartments Hoskote",
    "swimming pool apartments East Bangalore",
    "gated community amenities Bangalore",
    "township amenities Hoskote",
    "kids play area apartments Bangalore",
  ],
  alternates: { canonical: "/sobha-one-world-hoskote-amenities" },
  openGraph: {
    title: "Sobha One World Hoskote Amenities | 50+ Facilities",
    description:
      "Grand Clubhouse, sports precinct, wellness suite, themed gardens and township infrastructure across a 300-acre masterplan.",
    url: `${SITE.url}/sobha-one-world-hoskote-amenities`,
    images: ["/img/pool.jpg"],
  },
};

export default function AmenitiesPage() {
  return (
    <PageShell
      eyebrow="Amenities & Lifestyle"
      title="Sobha One World Hoskote Amenities — 50+ Facilities Across 300 Acres"
      intro="The Grand Clubhouse, the sports precinct, the wellness suite and the township infrastructure that keeps a 300-acre community running — and what each one costs you in monthly maintenance."
      image="/img/pool.jpg"
      imageAlt="Temperature-controlled swimming pool at the Sobha One World Hoskote clubhouse"
      crumbs={[{ name: "Amenities", href: "/sobha-one-world-hoskote-amenities" }]}
      currentHref="/sobha-one-world-hoskote-amenities"
    >
      <h2>The Sobha One World Hoskote Grand Clubhouse</h2>
      <p className="mt-5 text-ink-soft">
        Amenities are where large townships separate themselves from standalone gated communities,
        and the arithmetic is simple: a two-acre project spreads clubhouse cost across a few hundred
        families, so it builds a gym and a pool. A 300-acre township spreads it across thousands, so
        it can build a multi-level clubhouse with facilities that would be uneconomic anywhere else.
      </p>
      <p className="mt-4 text-ink-soft">
        At Sobha One World Hoskote the clubhouse anchors the amenity programme. Inside it sit a
        temperature-controlled lap pool with a separate toddlers&apos; pool and sun deck, a
        gymnasium with distinct cardio and free-weight zones, a yoga and meditation pavilion, spa
        treatment rooms with steam and sauna, a residents&apos; lounge, a co-working business centre
        with bookable meeting rooms, a private theatre and a banquet hall sized for family
        functions. For most residents this replaces three separate memberships.
      </p>

      <div className="my-10 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[210px] md:grid-cols-4">
        {BENTO.slice(0, 5).map((t, i) => (
          <figure key={t.src} className={`relative overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
            <Image src={t.src} alt={`${t.title} at Sobha One World Hoskote`} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(36,29,22,0.75),transparent_58%)]" />
            <figcaption className="absolute inset-x-5 bottom-4 font-serif text-lg text-white">
              <small className="mb-1 block font-sans text-[9.5px] tracking-[0.2em] uppercase text-gold-light">{t.kicker}</small>
              {t.title}
            </figcaption>
          </figure>
        ))}
      </div>

      <CtaBanner action="visit" heading="Walk the masterplan in person" sub="Book a guided site visit at Sarakariguttahalli and see the amenity zones on the ground." />

      <h2 className="mt-14">Sports and Recreation Facilities</h2>
      <p className="mt-5 text-ink-soft">
        The sports precinct covers floodlit tennis and basketball courts, indoor badminton and
        squash, cricket practice nets, a skating rink, and a games room with table tennis and
        billiards. Floodlighting matters more than it sounds: in a city where most residents get
        home after 7 pm, an unlit court is an amenity you pay for and never use.
      </p>
      <p className="mt-4 text-ink-soft">
        Outdoors, the landscape is designed as programmed zones rather than leftover green. A
        reflexology walkway, an amphitheatre for community evenings, senior citizens&apos; seating
        courts, a butterfly and herb garden, shaded jogging and cycling loops, and pet-friendly runs
        each serve a specific resident group. Children get dedicated play zones finished in
        international-standard anti-fall surfacing, age-separated so toddlers are not sharing
        equipment with ten-year-olds.
      </p>

      <h2 className="mt-14">Complete Amenities List</h2>
      <p className="mt-5 text-ink-soft">
        The full inventory across the Sobha One World Hoskote masterplan, spanning recreation,
        wellness, sports, family facilities and township infrastructure:
      </p>
      <ul className="my-8 grid gap-px border border-stone bg-stone sm:grid-cols-2">
        {AMENITIES.map((a) => (
          <li key={a} className="bg-canvas px-5 py-4 text-[13.5px] text-ink-soft">
            <span className="mr-2.5 text-gold">—</span>
            {a}
          </li>
        ))}
      </ul>

      <h2 className="mt-14">70% Open Green Space — What It Actually Buys You</h2>
      <p className="mt-5 text-ink-soft">
        The most valuable amenity in a Bangalore township is the one nobody lists: distance between
        towers. Dedicating more than 70% of a 300-acre site to open space means the buildings sit
        far enough apart that your balcony does not look into a neighbour&apos;s living room, air
        moves between the blocks, and the ground plane stays walkable instead of becoming a car
        park. In dense projects on small plots, that is structurally impossible regardless of how
        long the amenity list runs.
      </p>
      <p className="mt-4 text-ink-soft">
        The green cover also does measurable work on temperature. Mature landscaping, forested
        buffers and rain-fed water bodies keep the microclimate several degrees below the
        surrounding built-up area through Bangalore&apos;s April peak — which shows up directly in
        your air-conditioning bill.
      </p>

      <h2 className="mt-14">Township Infrastructure and Sustainability</h2>
      <p className="mt-5 text-ink-soft">
        Behind the visible amenities sits the infrastructure that determines whether a township
        still functions well in year ten: rainwater harvesting, an on-site sewage treatment plant
        with treated-water reuse for landscaping, organic waste conversion, solar-assisted
        common-area lighting, EV-ready parking bays, and an underground utility corridor that keeps
        overhead cabling off the streets. Security runs on a manned perimeter, CCTV coverage of
        common areas and tower lobbies, video door phones in every apartment, and boom-barrier
        access control at the gates.
      </p>
      <p className="mt-4 text-ink-soft">
        Convenience retail, a créche and day-care, and an ATM sit within the township, so most
        weekday errands never require leaving the gates. For a location like Hoskote — where the
        surrounding retail ecosystem is still maturing relative to{" "}
        <Link href="/sobha-one-world-hoskote-location" className="text-gold underline decoration-gold/40">
          Whitefield
        </Link>{" "}
        — internal convenience infrastructure is not a luxury, it is the thing that makes the
        address livable from day one.
      </p>

      <CtaBanner variant="dark" action="brochure" heading="Get the amenity plan and maintenance projection" sub="Phase-wise facility list plus the projected per-square-foot maintenance rate." />

      <h2 className="mt-14">What Amenities Cost in Monthly Maintenance</h2>
      <p className="mt-5 text-ink-soft">
        Every amenity carries a running cost, recovered through monthly maintenance charged per
        square foot of saleable area. A township with a large amenity programme will always sit at
        the higher end of the local range — but the per-family cost of a shared clubhouse falls as
        the resident count rises, which is precisely why large townships deliver more facility per
        rupee of maintenance than small projects do. Ask for the projected maintenance rate along
        with the{" "}
        <Link href="/sobha-one-world-hoskote-price" className="text-gold underline decoration-gold/40">
          cost sheet
        </Link>{" "}
        and factor it into your monthly outflow alongside the EMI.
      </p>

      <p className="mt-10 text-[11.5px] text-ink-soft">
        *Amenities listed are as proposed across the phased masterplan and are indicative. Facility
        availability, phasing and specifications are subject to change by the developer and to the
        sanctioned plans. Images are representative.
      </p>
    </PageShell>
  );
}
