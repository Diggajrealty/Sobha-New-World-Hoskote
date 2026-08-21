import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import StickyCta from "./StickyCta";
import EnquiryForm from "./EnquiryForm";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import { Ornament } from "./Ornament";
import { Reveal } from "./ui";
import { INNER_PAGES } from "@/lib/pages";

/* Shared frame for every inner page: hero band with breadcrumbs, content slot,
   enquiry block, and a hub of sibling links so link equity circulates instead
   of dead-ending on each page. */
export default function PageShell({
  title,
  eyebrow,
  intro,
  image,
  imageAlt,
  crumbs,
  currentHref,
  children,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  crumbs: Crumb[];
  currentHref: string;
  children: React.ReactNode;
}) {
  const siblings = INNER_PAGES.filter((p) => p.href !== currentHref);

  return (
    <>
      <Header />
      <main>
        {/* hero band */}
        <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-40 pb-16">
          <div className="absolute inset-0 -z-10">
            <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(36,29,22,0.82)_0%,rgba(36,29,22,0.5)_55%,rgba(36,29,22,0.25)_100%)]" />
          </div>
          <div className="wrap">
            <Breadcrumbs trail={crumbs} />
            <span className="eyebrow mb-4 text-gold-light">{eyebrow}</span>
            <h1 className="max-w-4xl text-[clamp(2.2rem,5vw,4.2rem)] text-white">{title}</h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] text-white/85">{intro}</p>
          </div>
        </section>

        {/* page content */}
        <section className="section-y wash">
          <div className="wrap max-w-4xl">{children}</div>
        </section>

        <Ornament className="pb-4" />

        {/* enquiry */}
        <section className="section-y">
          <div className="wrap grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <span className="eyebrow mb-4">Speak to the Sales Desk</span>
              <h2 className="text-[clamp(1.8rem,3.4vw,2.8rem)]">
                Get the Sobha One World Hoskote Cost Sheet &amp; Floor Plans
              </h2>
              <p className="mt-6 text-ink-soft">
                Share your requirement and our team will send the current price list, unit-wise
                availability, payment schedule and approved floor plans for Sobha One World
                Hoskote — plus a site-visit slot at Sarakariguttahalli if you would like to walk
                the land before booking.
              </p>
              <p className="mt-4 text-ink-soft">
                Pre-launch inventory in a township of this size moves in phases, and the price
                applicable at the time of booking is the one that carries through the payment
                plan. Buyers comparing 2 BHK and 3 BHK apartments in Hoskote usually want the
                per-square-foot comparison against Whitefield before deciding — ask for it and we
                will include it.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <EnquiryForm compact />
            </Reveal>
          </div>
        </section>

        {/* sibling hub — internal linking */}
        <section className="section-y bg-surface">
          <div className="wrap">
            <span className="eyebrow mb-4">Explore Sobha One World Hoskote</span>
            <h2 className="mb-10 text-[clamp(1.8rem,3.4vw,2.8rem)]">More on This Project</h2>
            <div className="grid gap-px border border-stone bg-stone sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex flex-col bg-canvas p-8 transition-colors duration-500 hover:bg-surface"
                >
                  <span className="eyebrow mb-3">{p.eyebrow}</span>
                  <h3 className="mb-3 text-xl">{p.linkTitle}</h3>
                  <p className="mb-5 flex-1 text-sm text-ink-soft">{p.linkBlurb}</p>
                  <span className="label-caps flex items-center gap-2 text-gold">
                    View <ArrowRight size={13} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
