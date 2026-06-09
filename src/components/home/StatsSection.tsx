"use client";

import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BeforeAfter } from "@/components/BeforeAfter";

const stats = [
  { end: 500,  suffix: "+",  label: "Videos Produced"  },
  { end: 150,  suffix: "+",  label: "Brands Served"     },
  { end: 10,   suffix: "M+", label: "Views Generated"   },
  { end: 98,   suffix: "%",  label: "Client Retention"  },
];

export function StatsSection() {
  return (
    /* DARK SECTION — creates rhythm in the page */
    <section className="section bg-spotlight film-grain text-white relative overflow-hidden">
      <div className="wrap">

        {/* Eyebrow */}
        <AnimateIn effect="fade-in">
          <p className="eyebrow text-[#066766] mb-16">By the Numbers</p>
        </AnimateIn>

        {/* Huge number grid */}
        <StaggerIn
          className="grid grid-cols-2 lg:grid-cols-4 mb-28"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          staggerDelay={0.07}
        >
          {stats.map((s, i) => (
            <StaggerChild key={s.label} effect="fade-in">
              <div
                className="py-12 lg:py-16 pr-8 hover:bg-white/[0.02] transition-colors duration-300"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="grad font-black tracking-[-0.05em] leading-none mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
                >
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </div>
                <p className="micro uppercase tracking-widest text-[#737373]">{s.label}</p>
              </div>
            </StaggerChild>
          ))}
        </StaggerIn>

        {/* Before / After — spacious 2-col */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">
          <AnimateIn effect="slide-right">
            <p className="eyebrow text-[#066766] mb-6">Before vs After</p>
            <h2 className="title text-white mb-8 leading-tight">
              See the<br />
              transformation<br />
              <span className="grad">in every frame.</span>
            </h2>
            <p className="prose text-[#737373] mb-10 max-w-sm">
              Raw footage to cinematic masterpiece. Professional color grading,
              motion graphics, and sound design — all delivered in 48 hours.
            </p>
            <ul className="space-y-4">
              {[
                "Hollywood-grade color science",
                "Branded motion graphics & titles",
                "Professional sound design & mix",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[13px] text-[#737373]">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(6,103,102,0.18)", border: "1px solid rgba(6,103,102,0.35)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#066766]" />
                  </div>
                  {t}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn effect="slide-left" delay={0.15}>
            <BeforeAfter beforeLabel="Raw Footage" afterLabel="Digitinize Edit" />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
