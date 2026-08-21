import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import CtaBanner from "@/components/CtaBanner";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobha Limited Builder Review | Track Record, Quality & Projects in Bangalore",
  description:
    "Sobha Limited builder review: backward-integrated construction, 130+ million sq ft delivered, and what it means for pre-launch buyers.",
  keywords: [
    "Sobha Limited builder review",
    "Sobha Limited Bangalore projects",
    "is Sobha a good builder",
    "Sobha construction quality",
    "best builders in Bangalore",
    "Sobha Limited track record",
  ],
  alternates: { canonical: "/sobha-limited-builder" },
  openGraph: {
    title: "Sobha Limited Builder Review | Track Record & Construction Quality",
    description:
      "Why backward-integrated construction makes Sobha Limited different, and what a pre-launch buyer should verify anyway.",
    url: `${SITE.url}/sobha-limited-builder`,
    images: ["/img/facade.jpg"],
  },
};

const builderOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sobha Limited",
  url: "https://www.sobha.com",
  foundingDate: "1995",
  areaServed: "IN",
  description:
    "Indian real estate developer founded in 1995, known for backward-integrated in-house construction.",
};

export default function BuilderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(builderOrg) }}
      />
    <PageShell
      eyebrow="The Builder"
      title="Sobha Limited Builder Review — Track Record, Quality and What It Means for Buyers"
      intro="Sobha Limited is one of very few Indian developers that manufactures rather than subcontracts. Here is what backward integration actually changes about the apartment you take handover of — and what a pre-launch buyer should still verify."
      image="/img/facade.jpg"
      imageAlt="Architectural facade detail showing construction quality on a Sobha residential tower"
      crumbs={[{ name: "Sobha Limited", href: "/sobha-limited-builder" }]}
      currentHref="/sobha-limited-builder"
    >
      <h2>Who Is Sobha Limited?</h2>
      <p className="mt-5 text-ink-soft">
        Founded in 1995 and headquartered in Bangalore, Sobha Limited is a listed real estate
        developer with residential and contractual operations across roughly 27 Indian cities. Per
        the company&apos;s own public disclosures it has delivered well over 130 million square feet
        of built area. Those figures come from Sobha&apos;s investor communications rather than
        independent audit, so treat them as company-stated — the verifiable signal for a buyer is
        the delivered project list in your own city, which you can inspect in person.
      </p>
      <p className="mt-4 text-ink-soft">
        In Bangalore specifically, Sobha has built across Whitefield, Sarjapur Road, Hebbal, Bellandur
        and Kanakapura Road. For anyone evaluating{" "}
        <Link href="/" className="text-gold underline decoration-gold/40">
          Sobha One World Hoskote
        </Link>
        , the most useful due diligence is a weekend spent walking two or three completed Sobha
        projects that are five to ten years old. New handovers look good universally; a decade-old
        building tells you the truth.
      </p>

      <h2 className="mt-14">Backward Integration — the Actual Differentiator</h2>
      <p className="mt-5 text-ink-soft">
        Most developers are assemblers. They buy land, obtain approvals, and appoint contractors:
        one for structure, another for glazing, a third for interiors, a fourth for landscaping.
        Quality then depends on how tightly a project management team can police a dozen separate
        commercial relationships, each with its own margin pressure.
      </p>
      <p className="mt-4 text-ink-soft">
        Sobha runs its own manufacturing divisions instead — concrete products, glazing and
        metalworks, interiors and furniture, and an in-house construction arm. The consequence is
        not marketing abstraction; it is tolerance stacking. Every handoff between vendors
        introduces a small dimensional or specification tolerance, and those tolerances accumulate.
        Fewer vendors means fewer accumulations, which shows up in the details buyers only notice
        years later: doors that still close flush, window frames that do not admit monsoon water,
        floor levels that stay true across a 1,600 sq.ft slab, tiles that have not lipped.
      </p>

      <h2 className="mt-14">Construction Quality Standards</h2>
      <p className="mt-5 text-ink-soft">
        The practices Sobha is known for include mock-up apartments built and rejected before mass
        production begins, in-house water-ingress testing of façade systems, slab-level tolerances
        measured in millimetres rather than centimetres, and a handover checklist running to
        hundreds of line items per apartment. For a high-rise of G+45 to G+53 — where wind loading,
        façade performance and vertical transportation all become non-trivial engineering problems —
        this discipline matters considerably more than it would in a four-storey building.
      </p>

      <CtaBanner action="visit" heading="Visit a completed Sobha project" sub="The best due diligence is a delivered building. We will arrange access to one nearby." />

      <h2 className="mt-14">Delivery Track Record and Why It Matters at Pre-Launch</h2>
      <p className="mt-5 text-ink-soft">
        In a pre-launch purchase you are not buying an apartment. You are buying a promise to build
        one, secured by the developer&apos;s balance sheet and reputation. Every other variable —
        price, floor plan, amenities — is downstream of whether the builder delivers at all, and
        delivers on time.
      </p>
      <p className="mt-4 text-ink-soft">
        This is the single strongest argument for paying a premium over a smaller local builder in
        the same micro-market. A listed developer with a long delivery history and in-house
        execution capability carries structurally lower completion risk than a first-time builder
        offering a lower per-square-foot rate. In Bangalore&apos;s recent history, the buyers who
        lost most were rarely those who overpaid — they were those who bought from developers who
        stalled.
      </p>

      <CtaBanner variant="dark" action="brochure" heading="Request the approvals and document set" sub="Sanctioned plan, title documents and RERA status as it stands today." />

      <h2 className="mt-14">What You Should Still Verify</h2>
      <p className="mt-5 text-ink-soft">
        A strong builder reputation reduces risk; it does not remove the need for diligence. Before
        you sign anything at Sobha One World Hoskote:
      </p>
      <ol className="my-8 space-y-4">
        {[
          "The RERA registration number for Phase 1 — currently under process with the Karnataka Real Estate Regulatory Authority. Verify it directly on the K-RERA portal, not from any brochure or website including this one.",
          "The sanctioned plan and approved layout, and that the tower and unit you are booking appear on it.",
          "Title documents and the encumbrance certificate for the land parcel.",
          "The agreement's carpet area declaration, which is the binding area figure under RERA — not the saleable area quoted in marketing material.",
          "The construction-linked payment schedule annexed to the agreement, and the penalty clauses that apply on delayed possession.",
          "The channel partner's own RERA agent registration, for whoever is handling your booking.",
        ].map((item, i) => (
          <li key={i} className="flex gap-5 border-b border-stone pb-4">
            <span className="font-serif text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[15px] text-ink-soft">{item}</span>
          </li>
        ))}
      </ol>

      <h2 className="mt-14">Is Sobha a Good Builder for a Hoskote Purchase?</h2>
      <p className="mt-5 text-ink-soft">
        On construction quality and completion risk, Sobha sits in the top tier of Indian developers
        — the in-house manufacturing model is genuinely unusual and genuinely produces better
        handover quality. The fair counterpoint is that this quality is priced in: a Sobha apartment
        will not be the cheapest per square foot in its micro-market, and buyers optimising purely
        for entry price will find lower numbers nearby.
      </p>
      <p className="mt-4 text-ink-soft">
        The question is therefore not whether Sobha is a good builder, but whether the premium is
        worth it for your holding period. For an end-user planning a decade in the home, or an
        investor who needs resale liquidity, brand and build quality both compound. For a short-hold
        flip, the premium is harder to recover.{" "}
        <Link href="/sobha-one-world-hoskote-price" className="text-gold underline decoration-gold/40">
          Compare the price list
        </Link>{" "}
        and read the{" "}
        <Link href="/blog/sobha-limited-developer-profile-review.html" className="text-gold underline decoration-gold/40">
          extended developer profile
        </Link>
        .
      </p>

      <p className="mt-10 text-[11.5px] text-ink-soft">
        *Company figures cited are as stated in Sobha Limited&apos;s public disclosures and are not
        independently verified here. This is an independent channel-partner website and is not the
        official website of Sobha Limited. Nothing on this page is investment advice.
      </p>
    </PageShell>
    </>
  );
}
