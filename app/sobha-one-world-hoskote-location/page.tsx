import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CtaBanner from "@/components/CtaBanner";
import MapEmbed from "@/components/MapEmbed";
import { DISTANCES, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobha One World Hoskote Location & Connectivity | Whitefield, ITPL, Airport",
  description:
    "Sobha One World Hoskote location: 20 min to Whitefield, 25 to ITPL, 40 to the airport, 5 to NH-75, adjacent to the STRR.",
  keywords: [
    "Sobha One World Hoskote location",
    "Hoskote to Whitefield distance",
    "Hoskote connectivity Bangalore",
    "apartments near Old Madras Road",
    "STRR Hoskote",
    "Hoskote metro station",
    "schools near Hoskote",
  ],
  alternates: { canonical: "/sobha-one-world-hoskote-location" },
  openGraph: {
    title: "Sobha One World Hoskote Location & Connectivity",
    description:
      "Sarakariguttahalli, Hoskote — 5 min to NH-75, 20 min to Whitefield, 40 min to the airport, adjacent to the STRR.",
    url: `${SITE.url}/sobha-one-world-hoskote-location`,
    images: ["/img/location.jpg"],
  },
};

const SOCIAL = [
  ["Schools", "International and CBSE/ICSE schools along Old Madras Road and in Whitefield, with established options inside Hoskote town for younger years."],
  ["Hospitals", "Multi-speciality hospitals in Hoskote town for routine care; tertiary care in Whitefield within roughly half an hour."],
  ["Retail & leisure", "Phoenix Marketcity, VR Bengaluru, Forum Shantiniketan and Nexus Whitefield sit along the same corridor."],
  ["Employment", "ITPL, EPIP Zone, KTPO, Brookefield and the Whitefield SEZ cluster to the west; the Hoskote KIADB industrial belt on the doorstep."],
];

export default function LocationPage() {
  return (
    <PageShell
      eyebrow="Location & Connectivity"
      title="Sobha One World Hoskote Location — Connectivity to Whitefield, ITPL & the Airport"
      intro="Sarakariguttahalli, Hoskote sits five minutes off NH-75 and directly in the path of the Satellite Town Ring Road. Here is what that means for your actual daily commute, and what infrastructure is genuinely funded versus merely proposed."
      image="/img/location.jpg"
      imageAlt="Highway corridor and infrastructure near Hoskote, East Bangalore"
      crumbs={[{ name: "Location", href: "/sobha-one-world-hoskote-location" }]}
      currentHref="/sobha-one-world-hoskote-location"
    >
      <h2>Sobha One World Hoskote Address and Location Map</h2>
      <p className="mt-5 text-ink-soft">
        The project address is Sarakariguttahalli, Hoskote, Bangalore, Karnataka 562114 —
        coordinates 13.0712° N, 77.7988° E — just off Old Madras Road (NH-75), on the eastern edge
        of the Bangalore metropolitan area and adjacent to the alignment of the upcoming Satellite
        Town Ring Road.
      </p>

      <div className="my-10">
        <MapEmbed />
      </div>

      <h2 className="mt-14">Distance and Drive Times from Sobha One World Hoskote</h2>
      <p className="mt-5 text-ink-soft">
        Drive times below are typical off-peak figures. The structural advantage of this address is
        directional: the morning flow toward Whitefield and ITPL runs inbound on a corridor built to
        carry freight, so residents travel against the heaviest congestion rather than into it.
      </p>
      <ul className="my-8 border-t border-stone">
        {DISTANCES.map((d) => (
          <li key={d.place} className="flex items-baseline justify-between gap-5 border-b border-stone py-4">
            <b className="text-[15px] font-medium">{d.place}</b>
            <span className="whitespace-nowrap font-serif text-lg text-gold">{d.time}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-14">Hoskote to Whitefield — the Commute That Decides the Purchase</h2>
      <p className="mt-5 text-ink-soft">
        For most buyers here, this is the only distance that matters. Hoskote to Greater Whitefield
        is roughly 14 km and about 20 minutes off-peak, running west along Old Madras Road; ITPL and
        the EPIP Zone add another five minutes or so. In peak morning traffic, expect the figure to
        stretch, though noticeably less than the equivalent inbound crawl from the northern or
        southern suburbs, because the eastern corridor carries a lighter passenger-vehicle load.
      </p>
      <p className="mt-4 text-ink-soft">
        Kadugodi metro station, the current eastern terminus of the Namma Metro Purple Line, is
        around 25 minutes away — which makes a park-and-ride commute to the CBD practical today,
        without waiting for any future extension.{" "}
        <Link href="/blog/connectivity-guide-hoskote-to-whitefield.html" className="text-gold underline decoration-gold/40">
          Read the detailed Hoskote to Whitefield connectivity guide
        </Link>
        .
      </p>

      <CtaBanner action="visit" heading="See the location for yourself" sub="We will arrange pickup and a drive through the Whitefield and ITPL commute route." />

      <h2 className="mt-14">Infrastructure Pipeline — Funded vs Proposed</h2>
      <p className="mt-5 text-ink-soft">
        Real estate marketing tends to present every infrastructure headline as imminent. It is
        worth separating them, because the risk profile differs sharply.
      </p>
      <h3 className="mt-8 text-2xl">Satellite Town Ring Road (STRR)</h3>
      <p className="mt-3 text-ink-soft">
        The most consequential project for Hoskote. Linking Dobbaspet, Devanahalli, Hoskote,
        Sarjapur and Attibele, the STRR turns Hoskote from an eastern edge into a junction, letting
        traffic bypass the city core entirely. Sections are at varying stages of execution under the
        national highways programme — verify current status for the Hoskote stretch before pricing
        it into your decision.
      </p>
      <h3 className="mt-8 text-2xl">NH-75 widening and the Bangalore–Chennai Expressway</h3>
      <p className="mt-3 text-ink-soft">
        Old Madras Road is the spine of this corridor, and Hoskote sits inside the influence zone of
        the Bangalore–Chennai Expressway. The expressway&apos;s primary effect is economic rather
        than residential: it strengthens the industrial and logistics base that already anchors
        local employment through the KIADB estates.
      </p>
      <h3 className="mt-8 text-2xl">Metro extension toward Hoskote</h3>
      <p className="mt-3 text-ink-soft">
        A Purple Line extension beyond Whitefield toward Hoskote has been discussed in planning
        proposals, but treat it as a proposal, not a committed delivery date. Buy the address for
        the connectivity that exists today — NH-75, the Kadugodi metro terminus, the airport cargo
        road — and treat any metro extension as upside, not as the basis of your valuation.
      </p>

      <h2 className="mt-14">Social Infrastructure Around Hoskote</h2>
      <div className="my-8 grid gap-px border border-stone bg-stone sm:grid-cols-2">
        {SOCIAL.map(([head, body]) => (
          <div key={head} className="bg-canvas p-7">
            <h3 className="mb-2 text-xl">{head}</h3>
            <p className="text-sm text-ink-soft">{body}</p>
          </div>
        ))}
      </div>
      <p className="text-ink-soft">
        An honest caveat: Hoskote&apos;s social infrastructure is real but still maturing compared
        with central Whitefield. Everyday needs — schooling, routine healthcare, groceries, banking
        — are served locally today. Specialist care, premium retail and the widest school choice
        still mean a drive west. That gap is precisely why the per-square-foot price differs, and it
        is narrowing each year as the corridor develops.
      </p>

      <CtaBanner variant="dark" action="phone" heading="Ask about rental yields in Hoskote" sub="Current rent bands for 2 and 3 BHK apartments in the micro-market." />

      <h2 className="mt-14">Why the Location Supports Rental Demand</h2>
      <p className="mt-5 text-ink-soft">
        Hoskote draws tenants from two independent employment pools, which is unusual and valuable.
        The first is IT: professionals working at ITPL, EPIP Zone and the Whitefield SEZ cluster who
        want a larger apartment than Whitefield rents afford. The second is industrial: engineering,
        pharma, packaging and logistics staff in the Hoskote KIADB estates, whose demand holds
        steady through technology-sector slowdowns. A landlord exposed to both is materially better
        insulated than one dependent on IT alone.
      </p>
      <p className="mt-4 text-ink-soft">
        For the wider investment case — price gap, appreciation drivers and comparison against
        saturated micro-markets — see the{" "}
        <Link href="/sobha-one-world-hoskote-review" className="text-gold underline decoration-gold/40">
          project review
        </Link>{" "}
        and{" "}
        <Link href="/blog/why-hoskote-is-bangalore-next-big-real-estate-hotspot.html" className="text-gold underline decoration-gold/40">
          why Hoskote is Bangalore&apos;s next hotspot
        </Link>
        .
      </p>

      <p className="mt-10 text-[11.5px] text-ink-soft">
        *Distances and drive times are indicative, measured off-peak, and will vary with traffic and
        route. Infrastructure projects referenced are government proposals or works at varying
        stages of approval and execution; verify current status with the relevant authority before
        relying on them in a purchase decision.
      </p>
    </PageShell>
  );
}
