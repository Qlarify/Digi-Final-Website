"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { VideoPreview } from "@/components/VideoPreview";

const works = [
  { src:"/videos/work-1.mp4", title:"Prestige Residences", meta:"Brand Film · Real Estate", duration:"1:42", result:"₹12Cr pre-launch bookings", size:"hero" },
  { src:"/videos/work-2.mp4", title:"MediBridge",          meta:"Corporate · Healthcare",   duration:"2:15", result:"#1 Google Ranking",       size:"sm"   },
  { src:"/videos/work-3.mp4", title:"CloudStack",          meta:"Commercial · SaaS",        duration:"0:45", result:"4× trial sign-ups",       size:"sm"   },
  { src:"/videos/work-4.mp4", title:"Grand Meridian",      meta:"Brand Film · Hospitality", duration:"1:58", result:"+40% direct bookings",    size:"wide" },
];

export function FeaturedWork() {
  return (
    <section className="section bg-glow-soft">
      <div className="wrap">
        <div className="flex items-end justify-between mb-16">
          <div>
            <AnimateIn effect="fade-up"><p className="eyebrow mb-5">Selected Work</p></AnimateIn>
            <AnimateIn effect="blur-up" delay={0.1}>
              <h2 className="title text-[#0A0A0A]">Work that<br /><span className="grad">proves the point.</span></h2>
            </AnimateIn>
          </div>
          <AnimateIn effect="fade-in" delay={0.3}>
            <Link href="/portfolio" className="link label hover:text-[#0A0A0A] hidden sm:inline-flex items-center gap-2 transition-colors">
              View all <ArrowRight size={13} />
            </Link>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[230px]">
          {works.map((w, i) => {
            const col = w.size === "hero" ? "md:col-span-2 md:row-span-2" : w.size === "wide" ? "md:col-span-2" : "";
            const ratio = w.size === "hero" ? "1 / 1" : w.size === "wide" ? "21 / 9" : "4 / 3";
            return (
              <AnimateIn key={w.title} effect="scale-in" delay={i * 0.08} className={col}>
                <div className="relative h-full">
                  <VideoPreview
                    src={w.src}
                    label={w.title}
                    meta={w.meta}
                    duration={w.duration}
                    ratio={ratio}
                    rounded="rounded-3xl"
                    className="h-full w-full"
                  />
                  {/* Result chip */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
                    <span className="chip text-[10px]" style={{ background:"rgba(255,255,255,0.92)", color:"#066766", border:"1px solid rgba(6,103,102,0.15)" }}>
                      {w.result}
                    </span>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
