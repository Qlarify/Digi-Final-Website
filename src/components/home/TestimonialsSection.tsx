"use client";

import { StaggerIn, StaggerChild, AnimateIn } from "@/components/AnimateIn";

const T = [
  {
    q: "Digitinize didn't just deliver a video — they delivered a business result. The brand film generated ₹12Cr in pre-launch bookings and became the centrepiece of our entire campaign.",
    name: "Rahul Sharma", role: "VP Marketing, Prestige Group", flag: "🇮🇳", metric: "₹12Cr Revenue",
  },
  {
    q: "We needed a white-label partner who could handle 60+ videos a month without any quality drop. Digitinize has been flawless for 18 months straight. Our clients have no idea we outsource.",
    name: "Sarah Mitchell", role: "Head of Production, CloudEdge Agency", flag: "🇬🇧", metric: "60+ videos/month",
  },
  {
    q: "Our patient education series now ranks #1 on Google for 6 key search terms. That's not just video — that's a long-term marketing asset that keeps compounding.",
    name: "Dr. Priya Nair", role: "Director, MediCare Hospitals", flag: "🇮🇳", metric: "#1 Google Ranking",
  },
  {
    q: "I've worked with 6 agencies across 3 countries. Digitinize is the only one I've kept. Fast, communicative, and they actually understand what converts.",
    name: "James O'Brien", role: "Founder, GrowthAgency", flag: "🇺🇸", metric: "Agency of Record",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section bg-glow-soft">
      <div className="wrap">
        {/* Header */}
        <div className="mb-20">
          <AnimateIn effect="fade-up"><p className="eyebrow mb-6">Client Stories</p></AnimateIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <AnimateIn effect="blur-up" delay={0.1}>
              <h2 className="title text-[#0A0A0A]">
                Results that<br /><span className="grad">speak volumes.</span>
              </h2>
            </AnimateIn>
            <AnimateIn effect="fade-in" delay={0.3}>
              <div className="flex items-center gap-2.5 label flex-shrink-0">
                <div className="flex -space-x-2">
                  {["A","S","P","J"].map((l, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#F7F6F2] text-[11px] font-bold text-white flex items-center justify-center flex-shrink-0"
                      style={{ background: `rgba(6,103,102,${0.45 + i * 0.13})` }}>
                      {l}
                    </div>
                  ))}
                </div>
                <span className="text-[#6b6b6b]">150+ happy clients</span>
              </div>
            </AnimateIn>
          </div>
        </div>

        <StaggerIn className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.09}>
          {T.map((t) => (
            <StaggerChild key={t.name} effect="fade-up">
              <div
                className="bg-white rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:-translate-y-1 transition-all duration-400"
                style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(6,103,102,0.04) 0%, transparent 70%)" }}
                />

                {/* Metric */}
                <div className="absolute top-6 right-6">
                  <span className="chip chip-teal text-[10px]">{t.metric}</span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-7">
                  {[...Array(5)].map((_,i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#066766">
                      <path d="M6 1l1.236 2.504 2.764.401-2 1.949.472 2.752L6 7.504l-2.472 1.102.472-2.752-2-1.949 2.764-.401z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="prose mb-8 font-light">&ldquo;{t.q}&rdquo;</blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full text-white text-sm font-bold font-[Montserrat] flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #066766, #1A8D8B)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0A0A0A]">{t.name} <span className="ml-0.5">{t.flag}</span></p>
                    <p className="text-[11px] text-[#6b6b6b] mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
