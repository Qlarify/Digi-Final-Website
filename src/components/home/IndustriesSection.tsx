"use client";

import Link from "next/link";
import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";

const industries = [
  { name:"SaaS & Technology", href:"/video-editing-for-saas",               emoji:"🚀" },
  { name:"Healthcare",         href:"/industries#healthcare",                 emoji:"🏥" },
  { name:"Real Estate",        href:"/industries#real-estate",                emoji:"🏢" },
  { name:"Hospitality",        href:"/industries#hospitality",                emoji:"🏨" },
  { name:"Finance",            href:"/industries#finance",                    emoji:"📊" },
  { name:"Ecommerce",          href:"/video-editing-for-ecommerce",           emoji:"🛒" },
  { name:"Education",          href:"/industries#education",                  emoji:"🎓" },
  { name:"Manufacturing",      href:"/industries#manufacturing",              emoji:"🏭" },
  { name:"Agencies",           href:"/video-editing-for-agencies",            emoji:"🎨" },
  { name:"YouTube Creators",   href:"/video-editing-for-youtube-creators",    emoji:"📹" },
];

export function IndustriesSection() {
  return (
    <section className="section bg-glow-soft">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-16">
          <div>
            <AnimateIn effect="fade-up"><p className="eyebrow mb-6">Industries We Serve</p></AnimateIn>
            <AnimateIn effect="blur-up" delay={0.1}>
              <h2 className="title text-[#0A0A0A]">
                We speak every<br />
                <span className="grad">industry&apos;s language.</span>
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn effect="fade-up" delay={0.2}>
            <p className="prose max-w-sm">
              Sector expertise means we understand your audience, compliance requirements,
              and competitive landscape before we press record.
            </p>
          </AnimateIn>
        </div>

        <StaggerIn className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" staggerDelay={0.035}>
          {industries.map((ind) => (
            <StaggerChild key={ind.name} effect="scale-in">
              <Link
                href={ind.href}
                className="group flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 bg-white"
                style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}
              >
                <span className="text-2xl">{ind.emoji}</span>
                <span className="text-[12px] font-semibold text-[#737373] group-hover:text-[#066766] transition-colors leading-tight">
                  {ind.name}
                </span>
              </Link>
            </StaggerChild>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
