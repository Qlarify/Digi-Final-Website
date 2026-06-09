"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";

const markets = [
  { name:"India",          href:"/video-production",        flag:"🇮🇳", desc:"Full-service production for India's top brands" },
  { name:"Dubai, UAE",     href:"/video-editing-dubai",     flag:"🇦🇪", desc:"Agencies & luxury brands across the Gulf" },
  { name:"United Kingdom", href:"/video-editing-uk",        flag:"🇬🇧", desc:"White-label partner for London agencies" },
  { name:"United States",  href:"/video-editing-usa",       flag:"🇺🇸", desc:"SaaS, creators, and content teams" },
  { name:"Canada",         href:"/video-editing-canada",    flag:"🇨🇦", desc:"Bilingual content production support" },
  { name:"Australia",      href:"/video-editing-australia", flag:"🇦🇺", desc:"Overnight delivery for AU media companies" },
];

export function GlobalEditingSection() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-24 items-start">

          {/* Left */}
          <div>
            <AnimateIn effect="fade-up"><p className="eyebrow mb-6">Global Editing Services</p></AnimateIn>
            <AnimateIn effect="blur-up" delay={0.1}>
              <h2 className="title text-[#0A0A0A] mb-8">
                Your editing team,<br />
                <span className="grad">wherever you are.</span>
              </h2>
            </AnimateIn>
            <AnimateIn effect="fade-up" delay={0.2}>
              <p className="prose max-w-sm mb-12">
                Scale your content operations with a world-class editing team.
                White-label, subscription, or project-based — we integrate seamlessly into your workflow.
              </p>
            </AnimateIn>

            {/* Specs — 2-col grid */}
            <AnimateIn effect="slide-right" delay={0.25}>
              <div
                className="grid grid-cols-2 gap-px bg-black/[0.06] rounded-2xl overflow-hidden mb-12"
              >
                {[
                  { v:"48h",   l:"Turnaround" },
                  { v:"4K",    l:"Delivery Quality" },
                  { v:"100%",  l:"White-Label Ready" },
                  { v:"∞",     l:"Revision Rounds" },
                ].map(({ v, l }) => (
                  <div key={l} className="bg-white p-5">
                    <div className="grad font-black text-2xl tracking-[-0.03em] mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>{v}</div>
                    <p className="micro uppercase tracking-widest">{l}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn effect="fade-up" delay={0.35}>
              <Link href="/video-editing-services" className="btn btn-solid">
                Explore Editing Services <ArrowRight size={15} />
              </Link>
            </AnimateIn>
          </div>

          {/* Right — markets */}
          <div className="pt-2">
            <div className="hr-grad" />
            <StaggerIn staggerDelay={0.07}>
              {markets.map((m) => (
                <StaggerChild key={m.name} effect="slide-left">
                  <Link
                    href={m.href}
                    className="group flex items-center gap-4 py-5 border-b hover:bg-[#F7F6F2] -mx-[clamp(1.25rem,5vw,4rem)] px-[clamp(1.25rem,5vw,4rem)] transition-colors duration-200"
                    style={{ borderBottomColor: "rgba(0,0,0,0.06)" }}
                  >
                    <span className="text-2xl w-10 flex-shrink-0">{m.flag}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-semibold text-[#0A0A0A] group-hover:text-[#066766] transition-colors">{m.name}</p>
                      <p className="text-[12px] text-[#6b6b6b] mt-0.5">{m.desc}</p>
                    </div>
                    <ArrowUpRight size={15} className="text-[#D4D4D4] group-hover:text-[#066766] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </Link>
                </StaggerChild>
              ))}
              <StaggerChild effect="slide-left">
                <Link href="/white-label-video-editing"
                  className="group flex items-center gap-4 py-5 mt-1 -mx-[clamp(1.25rem,5vw,4rem)] px-[clamp(1.25rem,5vw,4rem)] hover:bg-[#F0FAF9] transition-colors duration-200"
                  style={{ borderTop: "1px dashed rgba(6,103,102,0.2)", borderBottom: "1px dashed rgba(6,103,102,0.2)", borderRadius: "0" }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(6,103,102,0.10)", border: "1px solid rgba(6,103,102,0.15)" }}>
                    <span className="text-[#066766] text-[11px] font-black" style={{ fontFamily: "Montserrat, sans-serif" }}>WL</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-[#066766]">White-Label Partner</p>
                    <p className="text-[12px] text-[#6b6b6b] mt-0.5">NDA-protected agency editing</p>
                  </div>
                  <ArrowUpRight size={15} className="text-[#066766]/30 group-hover:text-[#066766] transition-colors flex-shrink-0" />
                </Link>
              </StaggerChild>
            </StaggerIn>
          </div>
        </div>
      </div>
    </section>
  );
}
