"use client";

import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";

const reasons = [
  { no:"01", title:"48-Hour Turnaround",    desc:"Fast without compromise. Broadcast-ready content delivered at record speed — every time." },
  { no:"02", title:"Cinematic Standard",    desc:"Hollywood-grade production values applied to every project, at every budget." },
  { no:"03", title:"Global Infrastructure", desc:"India-based team serving 6 countries — timezone-aware, communication-first." },
  { no:"04", title:"Dedicated PM",          desc:"One point of contact from brief to delivery. No handoffs. No confusion." },
  { no:"05", title:"White-Label Ready",     desc:"Fully NDA-protected editing for agencies. Your brand, our craft." },
  { no:"06", title:"ROI-Driven",            desc:"Every creative decision is anchored in your business objective, not aesthetics alone." },
];

export function WhyUs() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-24">

          {/* Left — sticky statement */}
          <div className="lg:sticky lg:top-36 self-start">
            <AnimateIn effect="fade-up">
              <p className="eyebrow mb-6">Why Digitinize</p>
            </AnimateIn>
            <AnimateIn effect="blur-up" delay={0.1}>
              <h2 className="title text-[#0A0A0A] mb-8">
                The standard<br />
                others<br />
                <span className="grad">aspire to.</span>
              </h2>
            </AnimateIn>
            <AnimateIn effect="fade-up" delay={0.2}>
              <p className="prose max-w-xs">
                We obsess over every frame because your audience does.
                Quality is not a mode we can switch off.
              </p>
            </AnimateIn>
          </div>

          {/* Right — ruled list of reasons */}
          <div>
            <div className="hr-grad" />
            <StaggerIn staggerDelay={0.06}>
              {reasons.map((r) => (
                <StaggerChild key={r.title} effect="fade-up">
                  <div
                    className="grid gap-6 py-8 border-b hover:bg-[#F7F6F2] -mx-[clamp(1.25rem,5vw,4rem)] px-[clamp(1.25rem,5vw,4rem)] transition-colors duration-200"
                    style={{ gridTemplateColumns: "2.5rem 1fr", borderBottomColor: "rgba(0,0,0,0.06)" }}
                  >
                    <span className="micro font-bold text-[#6b6b6b] pt-0.5">{r.no}</span>
                    <div>
                      <p
                        className="font-bold tracking-[-0.02em] text-[#0A0A0A] mb-2"
                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.05rem" }}
                      >
                        {r.title}
                      </p>
                      <p className="prose-sm">{r.desc}</p>
                    </div>
                  </div>
                </StaggerChild>
              ))}
            </StaggerIn>
          </div>
        </div>
      </div>
    </section>
  );
}
