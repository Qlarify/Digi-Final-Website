"use client";

import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";
import { TrendingDown, Clock, DollarSign, Target, AlertTriangle, ThumbsDown } from "lucide-react";

const problems = [
  { icon: TrendingDown, pain: "Views but zero enquiries",        cause: "Generic content that never speaks to your buyer's real pain points or triggers action." },
  { icon: Clock,        pain: "In-house editing eats your week",  cause: "Marketers spending 60% of their time wrestling timelines instead of doing strategy." },
  { icon: DollarSign,   pain: "Agencies that don't move metrics", cause: "Premium prices for polished work that looks nice but doesn't shift a single number." },
  { icon: Target,       pain: "Inconsistent quality",             cause: "No repeatable process. Every video becomes a gamble on quality and delivery." },
  { icon: AlertTriangle,pain: "Missed launch windows",            cause: "The ad goes live two weeks late and the product moment has already passed." },
  { icon: ThumbsDown,   pain: "Amateur next to competitors",      cause: "First impressions decide trust. Low-quality video reads as a low-quality brand." },
];

export function ProblemSection() {
  return (
    <section className="section bg-glow-soft">
      <div className="wrap">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <AnimateIn effect="fade-up">
            <p className="eyebrow mb-6">Sound Familiar?</p>
          </AnimateIn>
          <AnimateIn effect="blur-up" delay={0.1}>
            <h2 className="title text-[#0A0A0A] mb-6">
              Most video doesn&apos;t work.<br />
              <span className="grad">Here&apos;s exactly why.</span>
            </h2>
          </AnimateIn>
          <AnimateIn effect="fade-up" delay={0.2}>
            <p className="prose max-w-xl">
              Six reasons brands quietly waste money on video — and the reason
              the ones who switched to Digitinize stopped.
            </p>
          </AnimateIn>
        </div>

        {/* Problem grid — neutral, airy */}
        <StaggerIn className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.06}>
          {problems.map((p) => (
            <StaggerChild key={p.pain} effect="fade-up">
              <div className="card p-8 h-full group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-6"
                  style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                  <p.icon size={17} className="text-[#6b6b6b] group-hover:text-[#066766] transition-colors" strokeWidth={1.75} />
                </div>
                <p className="font-bold tracking-[-0.02em] text-[#0A0A0A] mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1.1rem" }}>
                  {p.pain}
                </p>
                <p className="prose-sm">{p.cause}</p>
              </div>
            </StaggerChild>
          ))}
        </StaggerIn>

        {/* Solution turn — dark cinematic band */}
        <AnimateIn effect="scale-in" delay={0.1}>
          <div className="mt-6 rounded-3xl bg-spotlight text-white relative overflow-hidden film-grain p-10 lg:p-14 text-center">
            <p className="micro uppercase tracking-[0.16em] text-[#066766] mb-3 relative z-10">The good news</p>
            <p className="relative z-10 heading text-white">
              Every one of these is solved by the <span className="grad">right video partner.</span>
            </p>
            <p className="relative z-10 prose-sm mt-4" style={{ color: "#6b6b6b" }}>That&apos;s why 150+ brands chose Digitinize.</p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
