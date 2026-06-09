"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";

const industries = [
  { id: "saas",          name: "SaaS & Technology", emoji: "🚀", href: "/video-editing-for-saas",            desc: "Product demos, explainers, and marketing videos that convert trials to customers.", services: ["Product Demos", "Onboarding", "Feature Launches", "Investor Pitches"] },
  { id: "healthcare",    name: "Healthcare",        emoji: "🏥", href: "#healthcare",                          desc: "Patient education, facility showcases, and medical brand films built on trust and clarity.", services: ["Patient Education", "Hospital Tours", "Doctor Intros", "Health Campaigns"] },
  { id: "real-estate",   name: "Real Estate",       emoji: "🏢", href: "#real-estate",                         desc: "Property showcases, developer brand films, and project launch videos that sell.", services: ["Property Tours", "Developer Films", "Launch Campaigns", "Aerial / Drone"] },
  { id: "hospitality",   name: "Hospitality",       emoji: "🏨", href: "#hospitality",                         desc: "Luxury hotel films, restaurant showcases, and destination videos that inspire bookings.", services: ["Hotel Films", "Restaurant Videos", "Event Spaces", "Experiences"] },
  { id: "finance",       name: "Finance",           emoji: "📊", href: "#finance",                             desc: "Trust-building videos for banks, fintech, and wealth-management brands.", services: ["Fintech Explainers", "Trust Videos", "Product Launches", "Testimonials"] },
  { id: "ecommerce",     name: "Ecommerce",         emoji: "🛒", href: "/video-editing-for-ecommerce",         desc: "Product videos, ad creatives, and UGC content that turn browsers into buyers.", services: ["Product Videos", "UGC Editing", "Ad Creatives", "Brand Stories"] },
  { id: "education",     name: "Education",         emoji: "🎓", href: "#education",                           desc: "E-learning content, campus videos, and course promotion for modern educators.", services: ["Course Promos", "Campus Tours", "E-Learning", "Faculty Intros"] },
  { id: "manufacturing", name: "Manufacturing",     emoji: "🏭", href: "#manufacturing",                       desc: "Industrial showcases, CSR films, and B2B video content for the manufacturing sector.", services: ["Factory Tours", "Process Docs", "CSR Films", "B2B Sales"] },
];

export function IndustriesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
        <div className="wrap relative z-10 pt-40 pb-16 text-center">
          <AnimateIn effect="fade-up"><p className="eyebrow mb-5">Sector Expertise</p></AnimateIn>
          <AnimateIn effect="blur-up" delay={0.1}>
            <h1 className="text-[#0A0A0A] mb-5" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}>
              Industries we <span className="grad">serve.</span>
            </h1>
          </AnimateIn>
          <AnimateIn effect="fade-up" delay={0.2}>
            <p className="lede max-w-xl mx-auto">We don&apos;t do generic. We specialise in the nuance of every sector we work in.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Grid */}
      <section className="section-sm bg-white">
        <div className="wrap">
          <StaggerIn className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.06}>
            {industries.map((ind) => (
              <StaggerChild key={ind.id} effect="fade-up">
                <div id={ind.id} className="bg-white rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1 group"
                  style={{ border: "1px solid var(--rule)", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-3xl mb-3 block">{ind.emoji}</span>
                      <h2 className="heading text-[#0A0A0A]" style={{ fontSize: "1.4rem" }}>{ind.name}</h2>
                    </div>
                    <Link href={ind.href} className="flex items-center gap-1 text-[12px] text-[#066766] hover:text-[#055554] font-semibold mt-2">
                      Learn more <ArrowUpRight size={12} />
                    </Link>
                  </div>
                  <p className="prose-sm mb-5">{ind.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.services.map((s) => (
                      <span key={s} className="chip chip-gray text-[11px]">{s}</span>
                    ))}
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerIn>
        </div>
      </section>
    </>
  );
}
