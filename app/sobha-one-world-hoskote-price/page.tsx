import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CtaBanner from "@/components/CtaBanner";
import { RESIDENCES, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobha One World Hoskote Price List 2026 | 1-4 BHK Prices from ₹1.09 Cr",
  description:
    "Sobha One World Hoskote price list 2026: 1 BHK from Rs 1.09 Cr*, plus per sq ft rate, payment plan, stamp duty and GST breakdown.",
  keywords: [
    "Sobha One World Hoskote price",
    "Sobha One World price list",
    "Sobha One World Hoskote 3 BHK price",
    "luxury apartment price in Hoskote",
    "flat price in Hoskote Bangalore",
    "per sq ft rate Hoskote",
    "Sobha One World cost sheet",
  ],
  alternates: { canonical: "/sobha-one-world-hoskote-price" },
  openGraph: {
    title: "Sobha One World Hoskote Price List 2026 | 1-4 BHK from ₹1.09 Cr*",
    description:
      "Configuration-wise price list, per sq ft rate, payment schedule and the true all-in cost of a Sobha One World Hoskote apartment.",
    url: `${SITE.url}/sobha-one-world-hoskote-price`,
    images: ["/img/lobby.jpg"],
  },
};

const COSTS = [
  ["Base price (1 BHK, ~734 sq.ft)", "₹1.09 Cr* onwards"],
  ["Indicative rate per sq.ft", "₹14,800 – ₹15,500* (pre-launch band)"],
  ["Floor rise charges", "Applicable above a threshold floor, per the cost sheet"],
  ["Car park (covered)", "Charged separately, one bay per apartment minimum"],
  ["Club membership (one-time)", "Charged separately at booking"],
  ["Stamp duty (Karnataka)", "5% of agreement value above ₹45 lakh"],
  ["Registration charges", "1% of agreement value"],
  ["Khata & legal", "As applicable at registration"],
  ["GST (under-construction)", "5% without input tax credit, as per prevailing rules"],
  ["Maintenance deposit", "Advance corpus, collected at handover"],
];

const PAYMENT = [
  ["On expression of interest", "Pre-launch token amount (refundable per the terms sheet)"],
  ["On allotment / agreement","Balance to 10-20% of agreement value"],
  ["Construction-linked slabs", "Milestone-wise on foundation, structure and finishing stages"],
  ["On offer of possession", "Final instalment, plus registration and deposits"],
];

const aggregateOffer = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  url: `${SITE.url}/sobha-one-world-hoskote-price`,
  priceCurrency: "INR",
  lowPrice: 10900000,
  offerCount: 4,
  availability: "https://schema.org/PreOrder",
  itemOffered: { "@id": `${SITE.url}/#property` },
};

export default function PricePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOffer) }}
      />
    <PageShell
      eyebrow="Price List 2026"
      title="Sobha One World Hoskote Price List — 1, 2, 3 & 4 BHK Apartment Prices"
      intro="Configuration-wise pre-launch pricing for Sobha One World Hoskote, plus the charges that sit outside the headline number — floor rise, car park, club membership, stamp duty, GST and maintenance corpus."
      image="/img/lobby.jpg"
      imageAlt="Luxury residential lobby at Sobha One World Hoskote, East Bangalore"
      crumbs={[{ name: "Price List", href: "/sobha-one-world-hoskote-price" }]}
      currentHref="/sobha-one-world-hoskote-price"
    >
      <h2>Sobha One World Hoskote Price List — Configuration-Wise</h2>
      <p className="mt-5 text-ink-soft">
        Sobha One World Hoskote price starts at <strong>₹1.09 Cr*</strong> for a 1 BHK apartment of
        approximately 734 sq.ft, and runs up to the 4 BHK Grande at roughly 2,650 sq.ft. The table
        below is the current pre-launch band. Because Phase 1 is still pre-RERA, the developer
        releases inventory in tranches and revises the rate between tranches, so the applicable
        Sobha One World price list is the one issued on the day you book.
      </p>

      <div className="my-9 overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead>
            <tr className="border-y border-stone">
              {["Configuration", "Saleable Area", "Price", "Booking Stage"].map((h) => (
                <th key={h} className="py-4 pr-6 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RESIDENCES.map((r) => (
              <tr key={r.id} className="border-b border-stone">
                <td className="py-5 pr-6 font-serif text-xl">{r.name}</td>
                <td className="py-5 pr-6 text-sm text-ink-soft">{r.area}</td>
                <td className="py-5 pr-6 font-serif text-lg text-gold">{r.price}</td>
                <td className="py-5 pr-6 text-sm text-ink-soft">Pre-launch</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-ink-soft">
        For 2 BHK, 3 BHK Luxe and 4 BHK Grande apartments the price is released on request rather
        than published, which is standard practice for a pre-launch tranche — it lets the developer
        hold the rate for genuine buyers instead of anchoring the market before RERA registration.
        Request the cost sheet and you will receive the exact figure for the tower, floor and
        facing you are considering.
      </p>

      <h2 className="mt-14">What the Sobha One World Hoskote Cost Sheet Actually Includes</h2>
      <p className="mt-5 text-ink-soft">
        The headline flat price in Hoskote — here or anywhere in Bangalore — is never the amount
        that leaves your account. A realistic all-in budget for a luxury apartment in Hoskote adds
        roughly 12–18% on top of the base price once statutory charges and one-time deposits are
        counted. Here is what to plan for:
      </p>

      <dl className="my-9 grid gap-px border border-stone bg-stone sm:grid-cols-2">
        {COSTS.map(([k, v]) => (
          <div key={k} className="bg-canvas p-6">
            <dt className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-soft">{k}</dt>
            <dd className="mt-2 font-serif text-lg">{v}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-12 text-2xl">Per Square Foot Rate in Hoskote vs Whitefield</h3>
      <p className="mt-4 text-ink-soft">
        The per sq ft rate is the honest way to compare a flat price in Hoskote against Whitefield,
        Varthur or Budigere Cross, because saleable-area definitions differ between builders. At
        the pre-launch band, Sobha One World Hoskote prices sit materially below comparable Grade-A
        launches inside Greater Whitefield, while the drive between them is around 20 minutes. That
        spread is the core of the investment case, and it is the number to interrogate before you
        compare glossy brochures.{" "}
        <Link href="/blog/hoskote-vs-whitefield-real-estate-comparison.html" className="text-gold underline decoration-gold/40">
          See the full Hoskote vs Whitefield comparison
        </Link>
        .
      </p>

      <CtaBanner action="brochure" heading="Get the exact cost sheet for your configuration" sub="Unit-wise pricing, floor rise, car park and the full payment schedule — sent within 24 hours." />

      <h2 className="mt-14">Sobha One World Hoskote Payment Plan</h2>
      <p className="mt-5 text-ink-soft">
        Payment for an under-construction apartment in Karnataka is construction-linked, which
        protects the buyer: money is released against completed milestones rather than against a
        calendar. The broad structure for Sobha One World Hoskote is below; the binding schedule is
        the one annexed to your agreement.
      </p>
      <ol className="my-8 space-y-4">
        {PAYMENT.map(([stage, detail], i) => (
          <li key={stage} className="flex gap-5 border-b border-stone pb-4">
            <span className="font-serif text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
            <span>
              <strong className="block text-[15px]">{stage}</strong>
              <span className="text-sm text-ink-soft">{detail}</span>
            </span>
          </li>
        ))}
      </ol>

      <h3 className="mt-12 text-2xl">Home Loan Eligibility and EMI Planning</h3>
      <p className="mt-4 text-ink-soft">
        At ₹1.09 Cr, a 1 BHK in Hoskote typically needs around ₹22 lakh of own contribution against
        an 80% loan-to-value sanction, with the balance financed over 20–25 years. Lenders sanction
        against the agreement value, not the all-in cost, so stamp duty, registration, GST and club
        charges must come from own funds. Sobha projects are typically approved by all major banks
        and housing finance companies once RERA registration is issued, which also unlocks
        disbursement against construction milestones. Buyers who book at pre-launch usually pay the
        token from own funds and draw the loan after agreement execution.
      </p>

      <CtaBanner variant="dark" action="phone" heading="Discuss pricing with the sales desk" sub="Ask about current tranche rates, pre-launch offers and home-loan tie-ups." />

      <h2 className="mt-14">Is Sobha One World Hoskote Worth the Price?</h2>
      <p className="mt-5 text-ink-soft">
        Three things justify a premium over the local Hoskote market rate: the developer, the scale
        and the timing. Sobha Limited builds through its own manufacturing divisions rather than
        subcontracting, which is why its handover quality holds up a decade later. A ~300-acre
        township supports amenities and open space that a two-acre standalone project structurally
        cannot. And a pre-launch entry buys the lowest price the project will ever quote, with the
        widest choice of floor, view and facing.
      </p>
      <p className="mt-4 text-ink-soft">
        The counterweight is honest: this is a pre-RERA booking with a longer wait to possession
        than a ready-to-move flat, and Hoskote&apos;s social infrastructure is still maturing
        relative to Whitefield. Price the risk, do not ignore it —{" "}
        <Link href="/sobha-one-world-hoskote-review" className="text-gold underline decoration-gold/40">
          read the balanced project review
        </Link>{" "}
        and{" "}
        <Link href="/blog/pre-launch-vs-ready-to-move-apartment-bangalore.html" className="text-gold underline decoration-gold/40">
          pre-launch vs ready-to-move
        </Link>{" "}
        before committing.
      </p>

      <p className="mt-10 text-[11.5px] text-ink-soft">
        *All prices, rates and charges on this page are indicative, apply to the pre-launch phase
        only, and are subject to revision by the developer without notice. Statutory rates (stamp
        duty, registration, GST) are as prevailing and may change. This is not a price quotation or
        an offer; the cost sheet issued by the developer at booking prevails. RERA registration for
        Phase 1 is under process.
      </p>
    </PageShell>
    </>
  );
}
