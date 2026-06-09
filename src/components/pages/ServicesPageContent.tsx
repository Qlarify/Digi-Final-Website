"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Film, Video, Palette, Scissors, Layers, Play, Camera, Edit } from "lucide-react";
import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";

const production = [
  { icon: Film,   title: "Corporate Video Production", desc: "Board videos, AGMs, culture films, and leadership messaging.", href: "/services/corporate-video-production" },
  { icon: Play,   title: "Commercial Video",           desc: "High-ROI ads and commercials for TV, digital, and social.",   href: "/services/commercial-video-production" },
  { icon: Video,  title: "Brand Films",                desc: "Cinematic narratives that build equity and connection.",      href: "/services/brand-films" },
  { icon: Camera, title: "Product Videos",             desc: "Studio-quality product showcases that sell on any platform.", href: "/services/commercial-video-production" },
  { icon: Camera, title: "Event Videography",          desc: "Conferences, launches, and events captured beautifully.",     href: "/services/corporate-video-production" },
];

const editing = [
  { icon: Scissors, title: "Corporate Video Editing", desc: "Polished editing for internal and external comms.",          href: "/corporate-video-editing" },
  { icon: Edit,     title: "Commercial Editing",      desc: "Ad editing optimised for Meta, YouTube, and TV.",            href: "/video-editing-services" },
  { icon: Layers,   title: "Motion Graphics",         desc: "2D animation, explainers, and branded motion packages.",     href: "/motion-graphics" },
  { icon: Palette,  title: "Color Grading",           desc: "Cinematic color science for any format or style.",           href: "/services/color-grading" },
  { icon: Scissors, title: "White-Label Editing",     desc: "Fully confidential editing delivered under your brand.",     href: "/white-label-video-editing" },
  { icon: Play,     title: "YouTube Editing",         desc: "High-retention edits that grow channels and subscribers.",   href: "/video-editing-for-youtube-creators" },
  { icon: Video,    title: "Short-Form Content",      desc: "Reels, Shorts, and TikToks built for maximum reach.",        href: "/video-editing-services" },
];

function Group({ label, items }: { label: string; items: typeof production }) {
  return (
    <div>
      <AnimateIn effect="fade-up">
        <div className="flex items-center gap-4 mb-8">
          <span className="eyebrow whitespace-nowrap">{label}</span>
          <div className="h-px flex-1" style={{ background: "var(--rule)" }} />
        </div>
      </AnimateIn>
      <StaggerIn className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.06}>
        {items.map((s) => (
          <StaggerChild key={s.title} effect="fade-up">
            <Link href={s.href} className="group block bg-white rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid var(--rule)", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--teal-bg)", border: "1px solid rgba(6,103,102,0.12)" }}>
                <s.icon size={20} className="text-[#066766]" />
              </div>
              <h3 className="font-bold tracking-[-0.02em] text-[#0A0A0A] mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.05rem" }}>{s.title}</h3>
              <p className="prose-sm mb-4">{s.desc}</p>
              <span className="text-[12px] text-[#066766] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowUpRight size={12} />
              </span>
            </Link>
          </StaggerChild>
        ))}
      </StaggerIn>
    </div>
  );
}

export function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
        <div className="wrap relative z-10 pt-40 pb-16 text-center">
          <AnimateIn effect="fade-up"><p className="eyebrow mb-5">What We Offer</p></AnimateIn>
          <AnimateIn effect="blur-up" delay={0.1}>
            <h1 className="text-[#0A0A0A] mb-5" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}>
              All <span className="grad">services.</span>
            </h1>
          </AnimateIn>
          <AnimateIn effect="fade-up" delay={0.2}>
            <p className="lede max-w-xl mx-auto">End-to-end video capability — from first concept to final delivery.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Groups */}
      <section className="section-sm bg-white">
        <div className="wrap space-y-20">
          <Group label="Video Production — India" items={production} />
          <Group label="Video Editing — Global" items={editing} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-glow-soft">
        <div className="wrap text-center">
          <Link href="/contact" className="btn btn-solid">Start Your Project <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
