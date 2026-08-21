import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Residences from "@/components/Residences";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import Marquee from "@/components/Marquee";
import SectionRail from "@/components/SectionRail";
import MapEmbed from "@/components/MapEmbed";
import { Ornament, SectionNumber } from "@/components/Ornament";
import { Reveal, SectionHead, Eyebrow, Rule } from "@/components/ui";
import { AMENITIES, BENTO, DISTANCES, FAQS, POSTS, RESIDENCES, SPECS, SITE } from "@/lib/content";
import { INNER_PAGES } from "@/lib/pages";
import CtaBanner from "@/components/CtaBanner";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE.url}/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <SectionRail />
      <main>
        <Hero />
        <Stats />
        <Marquee />

        {/* VISION */}
        <section id="vision" className="section-y grid-bg wash">
          <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionNumber n="01" label="The Vision" />
              <h2 className="text-[clamp(2rem,4.2vw,3.6rem)]">
                Sobha One World Hoskote — Project Vision &amp; 300-Acre Masterplan
              </h2>
              <Rule />
              <p className="dropcap text-[clamp(1.05rem,1.5vw,1.22rem)] leading-[1.85] text-ink-soft">
                Sobha One World is not a residential complex. It is a self-sustaining city
                within a city — roughly 300 acres of master-planned land in Hoskote, engineered
                around the way people actually want to live in 2026 and beyond.
              </p>
              <p className="mt-5 text-ink-soft">
                The first phase, Sobha One Residences, introduces a collection of high-rise
                towers rising between 45 and 53 floors, framing uninterrupted views of
                Hoskote&apos;s lakes, the Nandi foothills on a clear morning and the glittering
                IT skyline of Whitefield to the west. Each tower is positioned on the masterplan
                to protect privacy and sightlines: no balcony looks directly into another, and
                every home is oriented for cross-ventilation and daylight rather than for
                maximum unit count.
              </p>
              <blockquote className="my-8 border-l border-gold py-1.5 pl-7 font-serif text-[clamp(1.25rem,2vw,1.6rem)] italic leading-snug">
                Built on more than 25 years of Sobha Limited&apos;s backward-integrated
                construction legacy — where the glazing, joinery, concrete and interiors are
                produced in-house, not outsourced.
              </blockquote>
              <p className="text-ink-soft">
                That backward integration is the quiet reason Sobha homes feel different when you
                walk into them. Sobha manufactures its own aluminium and glazing systems, its own
                furniture and joinery, its own concrete and its own metalwork. Fewer vendors
                means fewer tolerances stacking up, and it shows in the details buyers notice a
                decade later: doors that still close flush, window frames that do not leak in the
                monsoon, floor levels that stay true across a 1,600 sq.ft slab.
              </p>
              <p className="mt-5 text-ink-soft">
                Above ground, the masterplan dedicates more than 70% of the land to open,
                breathable space — forested buffers, jogging loops, rain-fed water bodies, themed
                gardens and cricket-capable lawns. Below ground it is equally serious: rainwater
                harvesting, a sewage treatment plant with treated-water reuse for landscaping,
                solar-assisted common lighting, EV-ready parking bays and an underground utility
                corridor so the streets stay free of overhead cabling.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div className="framed relative aspect-3/4 max-h-[660px] w-full">
                <Image
                  src="/img/vision.jpg"
                  alt="Aerial view of a master-planned township with high-rise towers surrounded by green landscaping"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* INVESTMENT */}
        <section className="section-y bg-surface">
          <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative order-1 lg:order-none">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/img/location.jpg"
                  alt="Highway infrastructure and the expanding city corridor near Hoskote, East Bangalore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionNumber n="02" label="Investment Potential" />
              <h2 className="text-[clamp(2rem,4.2vw,3.6rem)]">
                Why Invest in Sobha One World Hoskote, East Bangalore
              </h2>
              <Rule />
              <p className="text-[clamp(1.05rem,1.5vw,1.22rem)] leading-[1.85] text-ink-soft">
                Hoskote has spent two decades as Bangalore&apos;s industrial and logistics
                back-office. It is now being rewritten as the city&apos;s most credible
                residential growth corridor — and early entry is the entire investment thesis.
              </p>
              <p className="mt-5 text-ink-soft">
                The single largest catalyst is the Satellite Town Ring Road (STRR). By linking
                Hoskote directly to Dobbaspet, Devanahalli, Sarjapur and Attibele without routing
                traffic through the congested core, the STRR converts Hoskote from an eastern
                edge into a genuine junction. Land parcels on ring-road junctions historically
                outperform the wider market, because they inherit residential demand alongside
                warehousing, retail and institutional demand at the same time.
              </p>
              <p className="mt-5 text-ink-soft">
                Layer onto that the widening of NH-75 (Old Madras Road), the proposed extension
                of Namma Metro&apos;s Purple Line beyond Whitefield toward Hoskote, and the
                suburban rail proposals along the Bangalore–Chennai line. Each independently
                shortens the commute; together they change the character of the address. Hoskote
                also sits in the influence zone of the Bangalore–Chennai Expressway, which
                strengthens an industrial base where KIADB estates already host manufacturing,
                pharma and packaging majors.
              </p>

              <h3 className="mt-9 text-2xl">The pricing argument</h3>
              <p className="mt-3 text-ink-soft">
                Comparable Grade-A inventory in central Whitefield and Varthur transacts far
                above what a buyer pays per square foot in Hoskote today, yet the commute delta
                between them keeps shrinking. That gap — a mature-market price on one side of a
                20-minute drive and an emerging-market price on the other — is precisely where
                capital appreciation lives. Buying at pre-launch, before RERA registration and
                phase-wise escalations, is the lowest ticket the project will ever offer.
              </p>

              <h3 className="mt-9 text-2xl">The rental argument</h3>
              <p className="mt-3 text-ink-soft">
                Rental demand in East Bangalore is driven by employment, not speculation. ITPL,
                EPIP Zone, Brookefield, KTPO and the Whitefield SEZ cluster employ several lakh
                professionals, and the Hoskote industrial belt adds a second, non-IT tenant pool
                that stays resilient through technology slowdowns. Branded township inventory
                with a clubhouse, security and managed maintenance consistently rents faster and
                at a premium to standalone buildings in the same pin code.
              </p>

              <Link
                href="/blog/why-hoskote-is-bangalore-next-big-real-estate-hotspot.html"
                className="label-caps mt-7 inline-flex items-center gap-2 border-b border-gold pb-1 text-ink"
              >
                Full analysis: why Hoskote is next <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </section>

        <div className="wrap">
          <CtaBanner action="brochure" heading="Get the Sobha One World Hoskote price list" sub="Configuration-wise pricing, payment plan and current tranche availability." />
        </div>

        {/* RESIDENCES */}
        <section id="residences" className="section-y">
          <div className="wrap">
            <div className="mb-14">
              <SectionHead
                eyebrow="Residences & Configurations"
                title="Choose Your Home — 1, 2, 3 &amp; 4 BHK Configurations"
                lede="From a 734 sq.ft first home to a 2,650 sq.ft sky estate, every apartment is Vaastu-compliant, cross-ventilated and planned so circulation space works for you rather than against your furniture."
              />
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-3xl text-ink-soft">
                  Full layouts, room dimensions and carpet-area figures are on the{" "}
                  <Link href="/sobha-one-world-hoskote-floor-plans" className="text-gold underline decoration-gold/40">
                    floor plans page
                  </Link>
                  . Interiors are specified to Sobha&apos;s signature standard: engineered marble or
                  large-format vitrified flooring in living and dining areas, premium laminated
                  wooden flooring in master bedrooms, granite-topped modular kitchen platforms
                  with provision for chimney, hob and water purifier, anti-skid ceramic in
                  bathrooms, and CP and sanitaryware from international brands. Doors are
                  engineered hardwood from Sobha&apos;s own joinery division, and every home is
                  wired for smart-home provisioning — lighting scenes, video door phone and
                  app-controlled access.
                </p>
              </Reveal>
            </div>
            <Residences />

            {/* full configuration table — always in the DOM for crawlers */}
            <Reveal delay={0.1}>
              <div className="mt-16 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <caption className="mb-5 text-left eyebrow">
                    Sobha One World Hoskote — Price &amp; Size Chart
                  </caption>
                  <thead>
                    <tr className="border-y border-stone">
                      {["Configuration", "Saleable Area", "Pre-Launch Price", "Best Suited For"].map((h) => (
                        <th
                          key={h}
                          className="py-4 pr-6 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-soft"
                        >
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
                        <td className="py-5 pr-6 text-sm text-ink-soft">{r.highlights[0]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <p className="mt-8 text-[11.5px] text-ink-soft">
              *Pricing is indicative, applicable to the pre-launch phase only, and subject to
              change without prior notice. Terms and conditions apply.
            </p>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section id="lifestyle" className="section-y bg-surface">
          <div className="wrap">
            <div className="mb-14">
              <SectionHead
                eyebrow="Amenities"
                title="A Glimpse of the Clubhouse &amp; Resident Lifestyle"
                lede="More than 50 amenities, anchored by a multi-level Grand Clubhouse that functions less like a society facility and more like a private resort you happen to live inside."
              />
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-3xl text-ink-soft">
                  The clubhouse houses a temperature-controlled lap pool with a separate
                  toddlers&apos; pool and sun deck, a gymnasium with cardio and free-weight zones,
                  a yoga and meditation pavilion, spa treatment rooms with steam and sauna, a
                  residents&apos; lounge, a co-working business centre, a private theatre and a
                  banquet hall. Outdoors, the landscape is designed in themed zones rather than as
                  leftover green: a reflexology walk, an amphitheatre, senior citizens&apos;
                  courts, a butterfly and herb garden, shaded jogging and cycling loops, pet runs
                  and children&apos;s play zones finished in international-standard anti-fall
                  surfacing.
                </p>
              </Reveal>
            </div>

            <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-4">
              {BENTO.map((tile, i) => (
                <Reveal
                  key={tile.src + i}
                  delay={(i % 4) * 0.06}
                  className={`group relative overflow-hidden ${tile.span}`}
                >
                  <Image
                    src={tile.src}
                    alt={`${tile.title} at Sobha One World Hoskote`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-lux group-hover:scale-107"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(36,29,22,0.76),rgba(36,29,22,0)_58%)]" />
                  <figcaption className="absolute inset-x-6 bottom-5 z-10 font-serif text-xl leading-tight text-white">
                    <small className="mb-1.5 block font-sans text-[10px] tracking-[0.2em] uppercase text-gold-light">
                      {tile.kicker}
                    </small>
                    {tile.title}
                  </figcaption>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <ul className="mt-14 grid gap-px border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-4">
                {AMENITIES.map((a) => (
                  <li key={a} className="bg-canvas px-5 py-4 text-[13px] text-ink-soft">
                    <span className="mr-2.5 text-gold">—</span>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <div className="wrap">
          <CtaBanner variant="dark" action="visit" heading="Book a site visit at Sarakariguttahalli" sub="Walk the 300-acre masterplan and see the tower positions before you choose a unit." />
        </div>

        {/* LOCATION */}
        <section id="location" className="section-y">
          <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionNumber n="05" label="Location & Connectivity" />
              <h2 className="text-[clamp(2rem,4.2vw,3.6rem)]">
                Where Sobha One World Sits — and Why It Commutes Well
              </h2>
              <Rule />
              <p className="text-[clamp(1.05rem,1.5vw,1.22rem)] leading-[1.85] text-ink-soft">
                Sarakariguttahalli, Hoskote sits just off Old Madras Road (NH-75), five minutes
                from the highway and directly in the path of the upcoming Satellite Town Ring
                Road.
              </p>
              <p className="mt-5 text-ink-soft">
                The practical effect is a commute that runs against peak traffic. Residents
                heading to Whitefield, ITPL or Brookefield travel inbound on a corridor built for
                freight-grade capacity, while the airport is reachable in roughly 40 minutes via
                the cargo road without touching the city centre. Schools, hospitals and daily
                retail are already established in Hoskote town — this is not an address waiting
                for its ecosystem to arrive. Retail and leisure along the same corridor include
                Phoenix Marketcity, VR Bengaluru, Forum Shantiniketan and Nexus Whitefield.
              </p>

              <ul className="mt-8 border-t border-stone">
                {DISTANCES.map((d) => (
                  <li
                    key={d.place}
                    className="flex items-baseline justify-between gap-5 border-b border-stone py-4"
                  >
                    <b className="text-[14.5px] font-medium">{d.place}</b>
                    <span className="whitespace-nowrap font-serif text-lg text-gold">
                      {d.time}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/blog/connectivity-guide-hoskote-to-whitefield.html"
                className="label-caps mt-7 inline-flex items-center gap-2 border-b border-gold pb-1 text-ink"
              >
                Full connectivity guide <ArrowRight size={14} />
              </Link>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div className="framed relative aspect-3/4 max-h-[640px] w-full">
                <Image
                  src="/img/facade.jpg"
                  alt="Modern architectural facade detail of a luxury residential tower in warm light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="wrap mt-16">
            <Reveal>
              <MapEmbed />
            </Reveal>
          </div>
        </section>

        {/* DEVELOPER */}
        <section className="section-y bg-surface">
          <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className="relative order-1 lg:order-none">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/img/lobby.jpg"
                  alt="Grand residential lobby with marble finishes at Sobha One World"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionNumber n="06" label="The Developer" />
              <h2 className="text-[clamp(2rem,4.2vw,3.6rem)]">Sobha Limited — the Builder Behind Sobha One World Hoskote</h2>
              <Rule />
              <p className="text-[clamp(1.05rem,1.5vw,1.22rem)] leading-[1.85] text-ink-soft">
                Founded in 1995, Sobha Limited has delivered more than 130 million square feet
                across 27 cities, and it remains one of the very few Indian developers that builds
                almost entirely in-house.
              </p>
              <p className="mt-5 text-ink-soft">
                Most developers assemble a project from contractors: one for structure, another
                for glazing, a third for interiors, a fourth for landscaping. Sobha runs its own
                manufacturing divisions — concrete products, glazing and metalworks, interiors and
                furniture, and a full construction arm. When quality is the output of a supply
                chain you own, accountability does not disperse across a dozen agreements.
              </p>
              <h3 className="mt-9 text-2xl">What that means for a buyer</h3>
              <p className="mt-3 text-ink-soft">
                <Link href="/sobha-limited-builder" className="text-gold underline decoration-gold/40">
                  Read the full Sobha Limited builder review
                </Link>{" "}
                for the delivery record. Slab-level tolerances measured in millimetres, mock-up flats built and rejected
                before mass production, in-house testing of façade systems for water ingress, and
                a handover checklist running to hundreds of items per apartment. It also means
                delivery discipline — which matters enormously in a pre-launch purchase where the
                buyer commits before the building exists.
              </p>
              <h3 className="mt-9 text-2xl">RERA and documentation</h3>
              <p className="mt-3 text-ink-soft">
                Sobha One World Phase 1 is a pre-launch offering; the RERA application with the
                Karnataka Real Estate Regulatory Authority is under process. Registration numbers,
                sanctioned plans and the formal possession schedule will be published on
                registration. Verify the RERA number and approved plans before executing any
                agreement — our team will share the complete document set, payment schedule and
                cost sheet on request.
              </p>
            </Reveal>
          </div>
        </section>

        <Ornament className="py-4" />

        {/* GALLERY */}
        <section id="gallery" className="section-y">
          <div className="wrap">
            <div className="mb-14">
              <SectionHead
                center
                eyebrow="Aesthetic Excellence"
                title="Sobha One World Hoskote Gallery — Apartments, Clubhouse &amp; Landscape"
                lede="Apartment interiors, the Grand Clubhouse, landscaped gardens and tower views. Click any frame to open the full-screen viewer."
              />
            </div>
            <Gallery />
          </div>
        </section>

        <Ornament className="py-4" />

        {/* SPECIFICATIONS */}
        <section className="section-y">
          <div className="wrap">
            <div className="mb-14">
              <SectionHead
                eyebrow="Specifications"
                title="Sobha One World Hoskote Specifications &amp; Apartment Finishes"
                lede="A pre-launch brochure is a promise; specifications are the evidence behind it. Here is what goes into a Sobha One World apartment, trade by trade."
              />
            </div>
            <div className="grid gap-px border border-stone bg-stone md:grid-cols-2">
              {SPECS.map((s, i) => (
                <Reveal key={s.head} delay={(i % 2) * 0.06} className="bg-canvas p-8 sm:p-10">
                  <h3 className="mb-3 text-2xl">{s.head}</h3>
                  <p className="text-[15px] text-ink-soft">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y bg-surface">
          <div className="wrap max-w-4xl">
            <div className="mb-12">
              <SectionHead eyebrow="Information" title="Sobha One World Hoskote FAQs — Price, RERA, Possession &amp; Location" />
            </div>
            <Reveal>
              <Faq />
            </Reveal>
          </div>
        </section>

        <div className="wrap">
          <CtaBanner action="whatsapp" heading="Questions about pricing, RERA or possession?" sub="Message the sales desk on WhatsApp — replies within working hours." />
        </div>

        {/* BLOG */}
        <section id="blog" className="section-y">
          <div className="wrap">
            <div className="mb-14">
              <SectionHead
                eyebrow="Latest Insights"
                title="Hoskote Real Estate Guides &amp; Sobha One World Insights"
                lede="Research, comparisons and commute analysis on East Bangalore's fastest-changing corridor."
              />
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {POSTS.map((post, i) => (
                <Reveal key={post.href} delay={i * 0.08}>
                  <Link href={post.href} className="group flex h-full flex-col">
                    <div className="relative mb-5 aspect-16/10 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-1000 ease-lux group-hover:scale-106"
                      />
                    </div>
                    <time
                      dateTime={post.date}
                      className="text-[10.5px] uppercase tracking-[0.2em] text-gold"
                    >
                      {post.dateLabel} · {post.read}
                    </time>
                    <h3 className="mb-2 mt-2.5 text-[1.35rem]">{post.title}</h3>
                    <p className="mb-5 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
                    <span className="label-caps self-start border-b border-gold pb-1">
                      Read More
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PAGE HUB */}
        <section className="section-y bg-surface">
          <div className="wrap">
            <div className="mb-12">
              <SectionHead
                eyebrow="Project Guides"
                title="Sobha One World Hoskote — Price, Floor Plans, Amenities & Location"
                lede="Detailed guides on every part of the project, written for buyers comparing luxury apartments in Hoskote against Whitefield and the wider East Bangalore market."
              />
            </div>
            <div className="grid gap-px border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-3">
              {INNER_PAGES.map((p, i) => (
                <Reveal key={p.href} delay={(i % 3) * 0.06}>
                  <Link
                    href={p.href}
                    className="group flex h-full flex-col bg-canvas p-8 transition-colors duration-500 hover:bg-surface"
                  >
                    <span className="eyebrow mb-3">{p.eyebrow}</span>
                    <h3 className="mb-3 text-xl">{p.linkTitle}</h3>
                    <p className="mb-5 flex-1 text-sm text-ink-soft">{p.linkBlurb}</p>
                    <span className="label-caps flex items-center gap-2 text-gold">
                      Read <ArrowRight size={13} className="transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="section-y bg-forest text-center">
          <div className="wrap max-w-3xl">
            <Reveal>
              <span className="eyebrow mb-4 text-gold-light">Priority Access</span>
              <h2 className="text-[clamp(2rem,4.2vw,3.6rem)] text-white">
                Book Sobha One World Hoskote at Pre-Launch Price
              </h2>
              <Rule className="mx-auto" />
              <p className="text-[clamp(1.05rem,1.5vw,1.22rem)] leading-[1.85] text-[#F3EDE1]/80">
                Pre-launch allocations at Sobha One World are released in limited phases. Register
                today for the cost sheet, floor plans and first pick of floors and views.
              </p>
              <a
                href="#enquire"
                className="label-caps mt-8 inline-flex border border-gold bg-gold px-8 py-4 text-white transition-all duration-500 hover:bg-canvas hover:text-ink"
              >
                Register Your Interest
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCta />
    </>
  );
}
