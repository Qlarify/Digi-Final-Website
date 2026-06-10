"use client";


import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";

const values = [
  { title: "Cinematic Quality",        desc: "We refuse to make content that blends in. Every frame is intentional, every cut earns its place." },
  { title: "Client Partnership",       desc: "We're not vendors — we're partners. Your success is the only metric we track." },
  { title: "Speed Without Compromise", desc: "The market moves fast. We match the pace without ever cutting corners." },
  { title: "Global Thinking",          desc: "Built in India, serving the world. We understand local nuance and global standards." },
];

const process = [
  { step: "01", title: "Discovery Call",        desc: "We learn your brand, goals, audience, and what success looks like for you." },
  { step: "02", title: "Strategy & Brief",      desc: "A tailored creative brief with timeline, deliverables, and production plan." },
  { step: "03", title: "Production / Editing",  desc: "Our team brings the vision to life with precision and creativity." },
  { step: "04", title: "Review & Refinement",   desc: "Unlimited revisions until you're 100% satisfied. No questions asked." },
  { step: "05", title: "Delivery & Support",    desc: "Clean delivery across every format, with ongoing support for future projects." },
];

export function AboutPageContent() {
  return (
    <>
      {/* Hero — aurora */}
      <section className="bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
        <div className="wrap relative z-10 pt-40 pb-24">
          <AnimateIn effect="fade-up"><p className="eyebrow mb-6">Our Story</p></AnimateIn>
          <AnimateIn effect="blur-up" delay={0.1}>
            <h1 className="text-[#0A0A0A] mb-8 max-w-3xl" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}>
              Built for brands<br /><span className="grad">that mean business.</span>
            </h1>
          </AnimateIn>
          <AnimateIn effect="fade-up" delay={0.2}>
            <p className="lede max-w-2xl">
              Digitinize was founded on a simple belief: great video shouldn&apos;t be a luxury.
              Today we&apos;re a trusted production partner in India and a global force in professional
              editing — serving brands, agencies, and creators across six countries.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-glow-soft">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            <AnimateIn effect="fade-up" className="lg:sticky lg:top-36">
              <p className="eyebrow mb-6">What We Stand For</p>
              <h2 className="title text-[#0A0A0A]">Our<br /><span className="grad">values.</span></h2>
            </AnimateIn>
            <StaggerIn className="grid sm:grid-cols-2 gap-3" staggerDelay={0.08}>
              {values.map((v) => (
                <StaggerChild key={v.title} effect="fade-up">
                  <div className="bg-white rounded-2xl p-7 h-full" style={{ border: "1px solid var(--rule)" }}>
                    <h3 className="heading text-[#0A0A0A] mb-2.5" style={{ fontSize: "1.15rem" }}>{v.title}</h3>
                    <p className="prose-sm">{v.desc}</p>
                  </div>
                </StaggerChild>
              ))}
            </StaggerIn>
          </div>
        </div>
      </section>

      {/* Process — ruled list */}
      <section className="section bg-white">
        <div className="wrap" style={{ maxWidth: "960px" }}>
          <div className="text-center mb-14">
            <AnimateIn effect="fade-up"><p className="eyebrow mb-5">How We Work</p></AnimateIn>
            <AnimateIn effect="blur-up" delay={0.1}><h2 className="title text-[#0A0A0A]">Our process.</h2></AnimateIn>
          </div>
          <div className="hr-grad" />
          <StaggerIn staggerDelay={0.07}>
            {process.map((s) => (
              <StaggerChild key={s.step} effect="fade-up">
                <div className="grid gap-6 py-7 items-baseline" style={{ gridTemplateColumns: "auto 1fr", borderBottom: "1px solid var(--rule)" }}>
                  <span className="grad font-black text-[1.3rem]" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.step}</span>
                  <div>
                    <h3 className="font-bold tracking-[-0.02em] text-[#0A0A0A] mb-1.5" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.1rem" }}>{s.title}</h3>
                    <p className="prose-sm max-w-xl">{s.desc}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-white">
        <div className="wrap" style={{ maxWidth: "960px" }}>
          <div className="bg-spotlight film-grain relative overflow-hidden rounded-3xl text-center px-8 py-16 lg:py-20">
            <div className="relative z-10">
              <h2 className="heading text-white mb-4">Ready to work together?</h2>
              <p className="prose mx-auto max-w-md mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Let&apos;s create something your audience won&apos;t forget.
              </p>
              <Link href="/contact" className="btn btn-solid">Book a Discovery Call <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
