"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";

const services = [
  { no:"01", title:"Corporate Video",      cat:"Production",  desc:"Board films, AGMs, company culture — captured with cinematic precision.",             href:"/services/corporate-video-production", market:"India"  },
  { no:"02", title:"Brand Films",          cat:"Production",  desc:"Cinematic narratives that define categories and build lasting brand equity.",          href:"/services/brand-films",                market:"India"  },
  { no:"03", title:"Commercial Video",     cat:"Production",  desc:"Performance ads for TV, YouTube, and Meta — engineered for conversion.",               href:"/services/commercial-video-production",market:"India"  },
  { no:"04", title:"Video Editing",        cat:"Post",        desc:"Precision editing that transforms raw footage into broadcast-ready content in 48h.",    href:"/video-editing-services",              market:"Global" },
  { no:"05", title:"Motion Graphics",      cat:"Post",        desc:"Branded animation, explainers, kinetic type — motion that stops the scroll.",          href:"/motion-graphics",                     market:"Global" },
  { no:"06", title:"Color Grading",        cat:"Post",        desc:"Hollywood color science — from flat log footage to your signature cinematic look.",    href:"/services/color-grading",              market:"Global" },
  { no:"07", title:"White-Label Editing",  cat:"Agency",      desc:"Your brand. Our team. NDA-protected high-volume editing for agencies worldwide.",      href:"/white-label-video-editing",           market:"Global" },
];

export function ServicesSection() {
  return (
    <section className="section bg-white">
      <div className="wrap">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 mb-20">
          <div>
            <AnimateIn effect="fade-up">
              <p className="eyebrow mb-6">What We Do</p>
            </AnimateIn>
            <AnimateIn effect="blur-up" delay={0.1}>
              <h2 className="title text-[#0A0A0A]">
                End-to-end video.<br />
                <span className="grad">Zero compromise.</span>
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn effect="fade-up" delay={0.2} className="flex flex-col justify-end">
            <p className="prose max-w-sm">
              From scripting and shooting to editing and delivery — every stage handled
              in-house at the same uncompromising standard.
            </p>
          </AnimateIn>
        </div>

        {/* Ruled list — how Linear and Stripe show features */}
        <div className="hr-grad mb-0" />
        <StaggerIn staggerDelay={0.045}>
          {services.map((s) => (
            <StaggerChild key={s.title} effect="fade-up">
              <Link
                href={s.href}
                className="group grid items-center gap-6 py-8 border-b transition-colors duration-200 hover:bg-[#F7F6F2] -mx-[clamp(1.25rem,5vw,4rem)] px-[clamp(1.25rem,5vw,4rem)]"
                style={{
                  gridTemplateColumns: "3.5rem 1fr auto auto",
                  borderBottomColor: "rgba(0,0,0,0.06)",
                }}
              >
                {/* Number */}
                <span className="micro font-bold text-[#6b6b6b]" style={{ fontFamily: "Montserrat, sans-serif" }}>{s.no}</span>

                {/* Title + desc */}
                <div className="min-w-0">
                  <div
                    className="font-black tracking-[-0.025em] text-[#0A0A0A] group-hover:text-[#066766] transition-colors mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1rem, 1.6vw, 1.35rem)" }}
                  >
                    {s.title}
                  </div>
                  <p className="prose-sm hidden sm:block max-w-xl">{s.desc}</p>
                </div>

                {/* Market chip */}
                <span className={`chip ${s.market === "India" ? "chip-teal" : "chip-gray"} hidden sm:inline-flex`}>
                  {s.market}
                </span>

                {/* Arrow */}
                <ArrowUpRight
                  size={18}
                  className="text-[#6b6b6b] group-hover:text-[#066766] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </Link>
            </StaggerChild>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
