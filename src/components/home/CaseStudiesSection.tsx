"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Play } from "lucide-react";
import { AnimateIn, StaggerIn, StaggerChild } from "@/components/AnimateIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const caseStudies = [
  {
    id: "prestige",
    industry: "Real Estate",
    client: "Prestige Group",
    title: "Brand film that sold out 40% of units before launch",
    challenge: "Prestige needed to create pre-launch excitement for a luxury residential project with no physical showflat ready.",
    strategy: "We created a cinematic brand film showcasing the lifestyle, not the apartments — targeting aspirational emotions over features.",
    result: "The film ran as paid social and was shared organically by influencers, generating 2.3M views and direct inquiries worth ₹12Cr within 3 weeks.",
    metrics: [
      { label: "Pre-launch bookings",  value: 40,   suffix: "%",   prefix: "" },
      { label: "Organic shares",       value: 12400, suffix: "+",  prefix: "" },
      { label: "Views in 3 weeks",     value: 2.3,   suffix: "M",  prefix: "" },
      { label: "Revenue influenced",   value: 12,    suffix: "Cr", prefix: "₹" },
    ],
    color: "#066766",
    tag: "India",
  },
  {
    id: "cloudstack",
    industry: "SaaS",
    client: "CloudStack",
    title: "Product launch video that 4x'd trial sign-ups",
    challenge: "CloudStack was launching a complex B2B product with a niche audience and a 6-week runway before the next funding review.",
    strategy: "2-minute explainer with a strong pain-point hook, product demo in act 2, and a risk-reversal CTA. Ran across LinkedIn, YouTube pre-roll, and their website hero.",
    result: "Trial sign-ups increased 4× in the launch month. The video became the #1 source of qualified leads for the next quarter.",
    metrics: [
      { label: "Trial sign-up increase", value: 4,    suffix: "×",  prefix: "" },
      { label: "Cost per lead drop",     value: 67,   suffix: "%",  prefix: "-" },
      { label: "Watch-through rate",     value: 78,   suffix: "%",  prefix: "" },
      { label: "Months as #1 lead source", value: 3, suffix: " mo", prefix: "" },
    ],
    color: "#1A8D8B",
    tag: "Global",
  },
  {
    id: "medibridge",
    industry: "Healthcare",
    client: "MediCare Hospitals",
    title: "Patient education series that ranks #1 on Google",
    challenge: "MediCare was losing potential patients to competitors with stronger online content. Their procedures were complex and hard to explain.",
    strategy: "12-video patient education series: 2-minute condition explainers + 30-second symptom checkers, optimized for YouTube and Google search.",
    result: "6 videos rank on Google Page 1. Organic appointment bookings from video content grew to 35% of all digital bookings within 4 months.",
    metrics: [
      { label: "Google Page 1 rankings",   value: 6,   suffix: "",   prefix: "" },
      { label: "Organic booking growth",   value: 35,  suffix: "%",  prefix: "" },
      { label: "Combined video views",     value: 890, suffix: "K+", prefix: "" },
      { label: "Months to first ranking",  value: 6,   suffix: " wk",prefix: "" },
    ],
    color: "#066766",
    tag: "India",
  },
];

function MetricCard({ label, value, suffix, prefix, index }: { label: string; value: number; suffix: string; prefix: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl p-4 border border-black/[0.07]"
    >
      <div className="text-[1.6rem] font-black font-[family-name:var(--font-montserrat)] tracking-[-0.02em] gradient-text">
        <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
      </div>
      <div className="text-[11px] text-[#717171] mt-0.5 leading-snug">{label}</div>
    </motion.div>
  );
}

export function CaseStudiesSection() {
  const [active, setActive] = useState(caseStudies[0].id);
  const study = caseStudies.find((c) => c.id === active)!;

  return (
    <section className="section-pad bg-[#f8f7f5] relative">
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <AnimateIn effect="fade-up">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#066766] font-semibold mb-4">Proof</p>
          </AnimateIn>
          <AnimateIn effect="blur-up" delay={0.1}>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black font-[family-name:var(--font-montserrat)] tracking-[-0.03em] text-[#0a0a0a]">
              Real clients. <span className="gradient-text">Real results.</span>
            </h2>
          </AnimateIn>
          <AnimateIn effect="fade-up" delay={0.2}>
            <p className="text-[15px] text-[#717171] mt-4 max-w-xl mx-auto">
              Not testimonials — full case studies with the strategy, execution, and metrics.
            </p>
          </AnimateIn>
        </div>

        {/* Tabs */}
        <AnimateIn effect="fade-up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {caseStudies.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                  active === c.id
                    ? "bg-[#066766] text-white shadow-sm"
                    : "bg-white border border-black/[0.07] text-[#717171] hover:border-[#066766]/20 hover:text-[#066766]"
                }`}
              >
                {c.client}
                <span className={`ml-2 text-[10px] px-2 py-0.5 rounded-full ${active === c.id ? "bg-white/20 text-white" : "bg-[#f3f3f0] text-[#6b6b6b]"}`}>
                  {c.industry}
                </span>
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Case study panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl border border-black/[0.07] shadow-sm overflow-hidden"
          >
            <div className="grid lg:grid-cols-[1.1fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-black/[0.06]">
              {/* Left — story */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="tag-primary text-[11px] px-3 py-1 rounded-full font-semibold">{study.industry}</span>
                  <span className="tag-neutral text-[11px] px-3 py-1 rounded-full">{study.tag}</span>
                </div>

                <h3 className="text-[1.25rem] font-black font-[family-name:var(--font-montserrat)] tracking-tight text-[#0a0a0a] mb-7 leading-snug">
                  {study.title}
                </h3>

                <div className="space-y-5">
                  {[
                    { label: "Challenge", text: study.challenge, color: "text-red-500" },
                    { label: "Strategy",  text: study.strategy,  color: "text-[#066766]" },
                    { label: "Result",    text: study.result,    color: "text-[#0a0a0a]" },
                  ].map(({ label, text, color }) => (
                    <div key={label}>
                      <div className={`text-[10px] uppercase tracking-[0.15em] font-black mb-1.5 ${color}`}>{label}</div>
                      <p className="text-[13px] text-[#3a3a3a] leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>

                {/* Video preview placeholder */}
                <div className="mt-7 rounded-xl overflow-hidden aspect-video bg-[#f8f7f5] border border-black/[0.06] flex items-center justify-center cursor-pointer group hover:bg-[#eefaf9] transition-colors">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-[#066766] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[#066766]/25">
                      <Play size={18} className="text-white fill-white ml-0.5" />
                    </div>
                    <span className="text-[12px] text-[#6b6b6b] font-medium">Watch case study video</span>
                  </div>
                </div>
              </div>

              {/* Right — metrics */}
              <div className="p-8 lg:p-10 flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp size={16} className="text-[#066766]" />
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#717171] font-semibold">Results at a Glance</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {study.metrics.map((m, i) => (
                    <MetricCard key={m.label} {...m} index={i} />
                  ))}
                </div>

                {/* Quote */}
                <div className="flex-1 flex flex-col justify-end">
                  <blockquote className="bg-[#f8f7f5] rounded-xl p-5 border border-black/[0.06]">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#066766"><path d="M6 1l1.236 2.504 2.764.401-2 1.949.472 2.752L6 7.504l-2.472 1.102.472-2.752-2-1.949 2.764-.401z"/></svg>
                      ))}
                    </div>
                    <p className="text-[13px] text-[#3a3a3a] leading-relaxed italic mb-4">
                      &ldquo;Digitinize didn&apos;t just deliver a video — they delivered a result. The ROI was clear within the first week.&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#066766] flex items-center justify-center text-white text-[11px] font-bold">C</div>
                      <div>
                        <div className="text-[12px] font-semibold text-[#0a0a0a]">CMO, {study.client}</div>
                      </div>
                    </div>
                  </blockquote>

                  <Link href="/contact"
                    className="group mt-5 flex items-center justify-center gap-2 py-3.5 bg-[#066766] hover:bg-[#055554] text-white font-bold text-[14px] rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#066766]/20"
                  >
                    Get Similar Results
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
