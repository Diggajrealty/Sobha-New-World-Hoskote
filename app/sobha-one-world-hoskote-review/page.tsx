import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import PageShell from "@/components/PageShell";
import CtaBanner from "@/components/CtaBanner";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobha One World Hoskote Review 2026 | Pros, Cons & Is It Worth Buying?",
  description:
    "An honest Sobha One World Hoskote review: pros, cons, pre-launch risk, RERA status and which buyer the project actually suits.",
  keywords: [
    "Sobha One World Hoskote review",
    "is Sobha One World worth buying",
    "Sobha One World Hoskote pros and cons",
    "best apartments in Hoskote",
    "Hoskote property investment review",
    "pre launch project risk Bangalore",
  ],
  alternates: { canonical: "/sobha-one-world-hoskote-review" },
  openGraph: {
    title: "Sobha One World Hoskote Review 2026 | Pros, Cons & Verdict",
    description:
      "A balanced assessment of Sobha One World Hoskote — what genuinely works, what to be cautious about, and who the project actually suits.",
    url: `${SITE.url}/sobha-one-world-hoskote-review`,
    images: ["/img/vision.jpg"],
  },
};

const PROS = [
  "Grade-A listed developer with in-house manufacturing and a long delivery record — the lowest-risk variable in a pre-launch purchase.",
  "Township scale (~300 acres) supports amenities, open space and tower spacing that small-plot projects structurally cannot match.",
  "Entry price materially below comparable Grade-A stock in Greater Whitefield, roughly 20 minutes away.",
  "Two independent tenant pools — Whitefield IT and the Hoskote KIADB industrial belt — which stabilises rental demand across cycles.",
  "Pre-launch pricing is the lowest the project will quote, with the widest choice of floor, facing and view.",
  "Genuine infrastructure catalyst in the STRR, not merely a speculative one.",
];

const CONS = [
  "Pre-RERA booking: registration for Phase 1 is still under process, so you commit before the statutory protections fully attach.",
  "Long horizon to possession versus a ready-to-move flat — you pay EMI and rent simultaneously if you are an end user.",
  "Hoskote's social infrastructure — specialist healthcare, premium retail, widest school choice — still trails Whitefield.",
  "Phased township delivery means early residents live alongside active construction for years.",
  "Metro extension toward Hoskote is a proposal, not a funded commitment; do not price it as certain.",
  "Sobha's build quality is priced in — cheaper per-square-foot options exist in the same micro-market.",
];

const VERDICT = [
  ["End-user family, 7-10 year horizon", "Strong fit", "Build quality and amenities compound over a long hold, and the price gap versus Whitefield funds a larger apartment."],
  ["Long-term investor", "Strong fit", "Infrastructure catalyst plus dual tenant pools support both appreciation and yield."],
  ["First-time buyer on a tight budget", "Consider carefully", "The 1 BHK entry point is accessible, but the all-in cost adds 12-18% and possession is years out."],
  ["Short-hold flipper", "Weak fit", "Pre-launch to possession is a long, illiquid window and the brand premium is hard to recover quickly."],
  ["Buyer needing a home now", "Weak fit", "This is under construction. Look at ready-to-move stock instead."],
];

export default function ReviewPage() {
  return (
    <PageShell
      eyebrow="Honest Review 2026"
      title="Sobha One World Hoskote Review — Pros, Cons and Who Should Actually Buy"
      intro="A balanced assessment of East Bangalore's largest pre-launch township, written to help you decide against it as readily as for it. What genuinely works, what carries real risk, and which buyer profile the project fits."
      image="/img/vision.jpg"
      imageAlt="Aerial view of a large master-planned township with high-rise towers and green landscaping"
      crumbs={[{ name: "Review", href: "/sobha-one-world-hoskote-review" }]}
      currentHref="/sobha-one-world-hoskote-review"
    >
      <h2>Sobha One World Hoskote Review — Summary Verdict</h2>
      <p className="mt-5 text-ink-soft">
        Sobha One World Hoskote is a credible, well-located, well-built township at a price that
        reflects an emerging micro-market rather than a mature one. Its strongest attributes are the
        developer&apos;s execution record and the sheer scale of the masterplan. Its principal risk
        is timing: you are buying pre-RERA, before registration, in a location whose social
        infrastructure is still catching up to its connectivity.
      </p>
      <p className="mt-4 text-ink-soft">
        For a buyer with a long horizon, that combination is favourable. For anyone who needs
        certainty of possession or a mature neighbourhood on day one, it is not. Below is the
        detailed reasoning rather than the conclusion alone.
      </p>

      <div className="my-10 grid gap-px border border-stone bg-stone md:grid-cols-2">
        <div className="bg-canvas p-8">
          <h3 className="mb-5 flex items-center gap-3 text-2xl">
            <Check size={20} className="text-gold" /> What Works
          </h3>
          <ul className="space-y-4">
            {PROS.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-ink-soft">
                <Check size={15} className="mt-1 shrink-0 text-gold" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-canvas p-8">
          <h3 className="mb-5 flex items-center gap-3 text-2xl">
            <X size={20} className="text-ink-soft" /> What to Weigh Carefully
          </h3>
          <ul className="space-y-4">
            {CONS.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-ink-soft">
                <X size={15} className="mt-1 shrink-0 text-ink-soft" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="mt-14">Is Sobha One World Hoskote a Good Investment?</h2>
      <p className="mt-5 text-ink-soft">
        The investment case rests on a single measurable spread: Grade-A inventory in central
        Whitefield transacts well above the Hoskote pre-launch rate, while the drive between the two
        is around 20 minutes and shortening as the corridor improves. Historically, that kind of gap
        compresses when infrastructure lands — the emerging side rises toward the mature side rather
        than the reverse.
      </p>
      <p className="mt-4 text-ink-soft">
        The catalyst here is unusually concrete. The Satellite Town Ring Road converts Hoskote from
        a peripheral address into a junction with direct links to Devanahalli, Sarjapur and
        Attibele, bypassing the city core. Ring-road junctions attract residential, warehousing,
        retail and institutional demand simultaneously, which is why they tend to outperform
        single-driver locations.
      </p>
      <p className="mt-4 text-ink-soft">
        The honest caveat: infrastructure timelines in India slip routinely. Underwrite the purchase
        on the connectivity that exists today — NH-75, the Kadugodi metro terminus, the airport
        cargo road — and treat the STRR completion and any metro extension as upside rather than as
        the basis of your numbers.{" "}
        <Link href="/sobha-one-world-hoskote-location" className="text-gold underline decoration-gold/40">
          See the full connectivity breakdown
        </Link>
        .
      </p>

      <CtaBanner action="phone" heading="Have a question this review did not answer?" sub="Speak to the sales desk directly — including the parts we flagged as risks." />

      <h2 className="mt-14">Pre-Launch Risk — Stated Plainly</h2>
      <p className="mt-5 text-ink-soft">
        RERA registration for Phase 1 is under process with the Karnataka authority. Until it is
        issued there is no registration number to verify, no statutorily declared carpet area, and
        no RERA-backed possession date. This is normal for a pre-launch tranche and it is also a
        real, non-trivial risk that the discount is compensating you for.
      </p>
      <p className="mt-4 text-ink-soft">
        Mitigate it the way an experienced buyer does: verify the registration on the K-RERA portal
        the moment it is issued and before you execute the agreement; read the token refund terms
        rather than accepting a summary of them; confirm the sanctioned plan shows your tower and
        unit; and check the delay-penalty clause. A strong developer reduces completion risk
        substantially but never eliminates the paperwork obligations.{" "}
        <Link href="/blog/pre-launch-vs-ready-to-move-apartment-bangalore.html" className="text-gold underline decoration-gold/40">
          Compare pre-launch against ready-to-move
        </Link>
        .
      </p>

      <h2 className="mt-14">Who Should Buy Sobha One World Hoskote?</h2>
      <div className="my-8 overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead>
            <tr className="border-y border-stone">
              {["Buyer Profile", "Verdict", "Reasoning"].map((h) => (
                <th key={h} className="py-4 pr-6 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {VERDICT.map(([who, verdict, why]) => (
              <tr key={who} className="border-b border-stone align-top">
                <td className="py-5 pr-6 font-serif text-lg">{who}</td>
                <td className="py-5 pr-6 text-sm font-semibold text-gold">{verdict}</td>
                <td className="py-5 pr-6 text-sm text-ink-soft">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CtaBanner variant="dark" action="brochure" heading="Get the Hoskote vs Whitefield cost comparison" sub="Like-for-like per-square-foot and total-cost numbers for both micro-markets." />

      <h2 className="mt-14">How It Compares to Whitefield Projects</h2>
      <p className="mt-5 text-ink-soft">
        Against a comparable Whitefield launch, Sobha One World Hoskote trades neighbourhood
        maturity for space and price. In Whitefield you get established schools, hospitals and
        retail within minutes, and you pay a mature-market rate for a smaller apartment. In Hoskote
        you get significantly more square footage and open space for the same budget, on a corridor
        that is improving rather than saturated, and you accept a longer drive to the best of the
        social infrastructure.
      </p>
      <p className="mt-4 text-ink-soft">
        Neither is objectively correct — it is a question of what your household actually optimises
        for.{" "}
        <Link href="/blog/hoskote-vs-whitefield-real-estate-comparison.html" className="text-gold underline decoration-gold/40">
          Read the detailed Hoskote vs Whitefield comparison
        </Link>{" "}
        and check the{" "}
        <Link href="/sobha-one-world-hoskote-floor-plans" className="text-gold underline decoration-gold/40">
          floor plans
        </Link>{" "}
        to see what the extra area buys.
      </p>

      <p className="mt-10 text-[11.5px] text-ink-soft">
        *This review is prepared by an authorised channel partner and reflects an informed but
        commercially interested opinion — we earn a commission on bookings. It is not investment
        advice and is not the official position of Sobha Limited. Verify all facts, approvals and
        RERA registration independently before purchase.
      </p>
    </PageShell>
  );
}
