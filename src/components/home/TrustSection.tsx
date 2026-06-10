"use client";

import { Shield, Clock, RefreshCw, Lock, Star, HeadphonesIcon, ArrowRight } from "lucide-react";
import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";
import { MagneticButton } from "@/components/MagneticButton";

const guarantees = [
  { icon: RefreshCw, title: "Unlimited Revisions",    desc: "We revise until you love it — no caps, no extra charges, no arguments." },
  { icon: Clock,     title: "On-Time Guarantee",       desc: "Miss our agreed deadline and your next project is 20% off. That's our commitment." },
  { icon: Lock,      title: "NDA on Every Project",    desc: "Every engagement is protected by a non-disclosure agreement. Your ideas are safe." },
  { icon: Shield,    title: "Quality Guarantee",       desc: "Not satisfied with quality after 3 revisions? Full refund, no questions asked." },
  { icon: Star,      title: "White-Label Promise",     desc: "We never contact your clients directly. Your brand is always in the spotlight." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "A named project manager on every account. Direct line, not a helpdesk ticket." },
];

export function TrustSection() {
  return (
    <section className="section-pad bg-white relative overflow-hidden">
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
      {/* Background aurora */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(6,103,102,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <AnimateIn effect="fade-up">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#066766] font-semibold mb-4">Risk-Free</p>
          </AnimateIn>
          <AnimateIn effect="blur-up" delay={0.1}>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black font-[family-name:var(--font-montserrat)] tracking-[-0.03em] text-[#0a0a0a]">
              You have nothing to lose.
              <br />
              <span className="gradient-text">Literally.</span>
            </h2>
          </AnimateIn>
          <AnimateIn effect="fade-up" delay={0.2}>
            <p className="text-[15px] text-[#717171] mt-4 max-w-xl mx-auto">
              We&apos;ve removed every risk from working with us. Six guarantees that mean you can only win.
            </p>
          </AnimateIn>
        </div>

        {/* Guarantees grid */}
        <StaggerIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14" staggerDelay={0.07}>
          {guarantees.map((g) => (
            <StaggerChild key={g.title} effect="scale-in">
              <div className="group rounded-2xl p-6 bg-[#f8f7f5] border border-black/[0.06] hover:border-[#066766]/20 hover:bg-[#eefaf9]/40 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#eefaf9] border border-[#066766]/12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <g.icon size={18} className="text-[#066766]" />
                </div>
                <h3 className="font-bold text-[14px] font-[family-name:var(--font-montserrat)] text-[#0a0a0a] mb-2">{g.title}</h3>
                <p className="text-[12px] text-[#717171] leading-relaxed">{g.desc}</p>
              </div>
            </StaggerChild>
          ))}
        </StaggerIn>

        {/* Social proof strip */}
        <AnimateIn effect="scale-in" delay={0.2}>
          <div className="bg-[#f8f7f5] rounded-2xl border border-black/[0.07] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 12 12" fill="#066766"><path d="M6 1l1.236 2.504 2.764.401-2 1.949.472 2.752L6 7.504l-2.472 1.102.472-2.752-2-1.949 2.764-.401z"/></svg>
                  ))}
                  <span className="text-[13px] font-bold text-[#0a0a0a] ml-1">5.0 / 5.0</span>
                  <span className="text-[13px] text-[#6b6b6b]">· 150+ reviews</span>
                </div>
                <p className="text-[15px] font-semibold text-[#0a0a0a] mb-1">
                  &ldquo;Best video partner we&apos;ve ever worked with. Period.&rdquo;
                </p>
                <p className="text-[13px] text-[#717171]">— Priya S., Marketing Director, Fortune 500 India</p>
              </div>
              <MagneticButton href="/contact"
                className="flex items-center gap-2.5 px-7 py-3.5 bg-[#066766] hover:bg-[#055554] text-white font-bold text-[15px] rounded-xl transition-all hover:shadow-lg hover:shadow-[#066766]/20 whitespace-nowrap"
              >
                Get Started Free <ArrowRight size={16} />
              </MagneticButton>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
