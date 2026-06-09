"use client";

import { ArrowRight } from "lucide-react";
import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";
import { MagneticButton } from "@/components/MagneticButton";

const steps = [
  { no: "01", time: "Day 1",     title: "30-Minute Discovery Call",    desc: "We learn your goals, audience, and what success looks like. You leave with a tailored creative brief and timeline. Zero commitment." },
  { no: "02", time: "Days 2–5",  title: "Strategy & Pre-Production",   desc: "We map the script, visual style, shot list, and deliverable formats. You approve before a single frame is shot or edited." },
  { no: "03", time: "Day 6+",    title: "Production or Editing",       desc: "Your dedicated team gets to work, with a direct line to your project manager. First delivery within 48 hours of final brief." },
  { no: "04", time: "Ongoing",   title: "Revisions & Delivery",        desc: "Unlimited revision rounds until you're 100% satisfied. Clean 4K delivery in every format you need — no extra charge." },
];

export function ProcessSection() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left — heading */}
          <div className="lg:sticky lg:top-36 self-start">
            <AnimateIn effect="fade-up"><p className="eyebrow mb-6">How It Works</p></AnimateIn>
            <AnimateIn effect="blur-up" delay={0.1}>
              <h2 className="title text-[#0A0A0A] mb-7">
                From idea to<br /><span className="grad">final cut in 4 steps.</span>
              </h2>
            </AnimateIn>
            <AnimateIn effect="fade-up" delay={0.2}>
              <p className="prose max-w-sm mb-10">
                We&apos;ve removed every point of friction. Most clients are onboarded
                and holding their first deliverable within the same week.
              </p>
            </AnimateIn>
            <AnimateIn effect="fade-up" delay={0.3}>
              <div className="grid grid-cols-2 gap-3 mb-10 max-w-sm">
                {[
                  { stat: "24h",  label: "Response to first enquiry" },
                  { stat: "48h",  label: "First draft delivered" },
                  { stat: "100%", label: "On-time delivery rate" },
                  { stat: "∞",    label: "Revision rounds included" },
                ].map(({ stat, label }) => (
                  <div key={label} className="card-off p-4">
                    <div className="grad font-black text-[1.4rem] tracking-[-0.03em]" style={{ fontFamily: "Montserrat, sans-serif" }}>{stat}</div>
                    <div className="micro mt-1 leading-snug">{label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn effect="fade-up" delay={0.4}>
              <MagneticButton href="/contact" className="btn btn-solid">
                Book a Discovery Call <ArrowRight size={16} />
              </MagneticButton>
            </AnimateIn>
          </div>

          {/* Right — numbered ruled steps */}
          <div>
            <div className="hr-grad" />
            <StaggerIn staggerDelay={0.08}>
              {steps.map((step) => (
                <StaggerChild key={step.no} effect="slide-left">
                  <div className="grid gap-6 py-8 border-b" style={{ gridTemplateColumns: "auto 1fr", borderBottomColor: "rgba(0,0,0,0.06)" }}>
                    <div className="text-center w-14 flex-shrink-0">
                      <div className="grad font-black text-[1.3rem]" style={{ fontFamily: "Montserrat, sans-serif" }}>{step.no}</div>
                      <div className="micro mt-1 whitespace-nowrap">{step.time}</div>
                    </div>
                    <div>
                      <h3 className="font-bold tracking-[-0.02em] text-[#0A0A0A] mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.05rem" }}>{step.title}</h3>
                      <p className="prose-sm">{step.desc}</p>
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
