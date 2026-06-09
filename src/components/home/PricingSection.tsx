"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";
import { MagneticButton } from "@/components/MagneticButton";
import { motion } from "framer-motion";

const editingPlans = [
  {
    name: "Starter",
    tag: null,
    price: { usd: 499, inr: null },
    cadence: "per month",
    desc: "Perfect for solo creators and small brands getting started with consistent video content.",
    videos: "Up to 8 videos/month",
    features: [
      "Up to 8 videos/month",
      "Up to 10 min each",
      "Color grading included",
      "Music licensing included",
      "2 revision rounds",
      "72h turnaround",
    ],
    cta: "Start Editing",
    highlight: false,
  },
  {
    name: "Growth",
    tag: "Most Popular",
    price: { usd: 999, inr: null },
    cadence: "per month",
    desc: "For growing brands and agencies that need volume, quality, and reliability.",
    videos: "Up to 20 videos/month",
    features: [
      "Up to 20 videos/month",
      "Up to 20 min each",
      "Color grading + motion graphics",
      "Music licensing included",
      "Unlimited revisions",
      "48h turnaround",
      "Dedicated project manager",
      "White-label ready",
    ],
    cta: "Get Growth Plan",
    highlight: true,
  },
  {
    name: "Agency",
    tag: null,
    price: { usd: null, inr: null },
    cadence: null,
    desc: "For agencies and enterprises with high volume, custom workflows, and white-label requirements.",
    videos: "Unlimited volume",
    features: [
      "Unlimited videos",
      "Any length or format",
      "Full post-production suite",
      "NDA + confidentiality agreement",
      "Dedicated team assigned",
      "24h rush turnaround",
      "Custom delivery portal",
      "Quarterly strategy review",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

const productionPackages = [
  {
    name: "Brand Starter",
    price: "₹75,000",
    priceUSD: null,
    desc: "Your first professional brand video.",
    deliverables: ["1-minute brand film", "One shooting day", "2 rounds of revisions", "4K delivery + social cuts"],
    highlight: false,
  },
  {
    name: "Growth Pack",
    price: "₹2,50,000",
    priceUSD: null,
    desc: "A complete video content arsenal for a product launch or campaign.",
    deliverables: ["Hero brand film (2 min)", "3 testimonial videos", "5 social cut-downs", "Motion graphics package", "Color grade + sound"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceUSD: null,
    desc: "Multi-location shoots, ongoing retainers, and large campaign production.",
    deliverables: ["Strategy + scripting", "Multi-day shoots", "Full post-production", "Unlimited revisions", "Dedicated account team"],
    highlight: false,
  },
];

export function PricingSection() {
  const [tab, setTab] = useState<"editing" | "production">("editing");

  return (
    <section className="section-pad bg-white relative">
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <AnimateIn effect="fade-up">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#066766] font-semibold mb-4">Transparent Pricing</p>
          </AnimateIn>
          <AnimateIn effect="blur-up" delay={0.1}>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black font-[family-name:var(--font-montserrat)] tracking-[-0.03em] text-[#0a0a0a]">
              Simple pricing,
              <span className="gradient-text"> no surprises.</span>
            </h2>
          </AnimateIn>
          <AnimateIn effect="fade-up" delay={0.2}>
            <p className="text-[15px] text-[#717171] mt-3 max-w-md mx-auto">
              Every plan includes unlimited revisions. You pay for outcomes, not hours.
            </p>
          </AnimateIn>
        </div>

        {/* Tab switcher */}
        <AnimateIn effect="scale-in" delay={0.1} className="flex justify-center mb-10">
          <div className="inline-flex bg-[#f3f3f0] rounded-xl p-1">
            {(["editing", "production"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-lg text-[13px] font-semibold capitalize transition-all duration-300 ${
                  tab === t ? "bg-white text-[#0a0a0a] shadow-sm" : "text-[#717171] hover:text-[#3a3a3a]"
                }`}
              >
                Video {t === "editing" ? "Editing (Global)" : "Production (India)"}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Cards */}
        {tab === "editing" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {editingPlans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className={`relative rounded-2xl p-7 h-full flex flex-col border transition-all duration-300 ${
                  plan.highlight
                    ? "bg-[#066766] border-[#066766] shadow-xl shadow-[#066766]/20 text-white"
                    : "bg-white border-black/[0.07] hover:border-[#066766]/20 hover:shadow-sm"
                }`}>
                  {plan.tag && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0a] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                      {plan.tag}
                    </div>
                  )}
                  <div className="mb-5">
                    <div className={`text-[11px] uppercase tracking-[0.15em] font-semibold mb-1 ${plan.highlight ? "text-white/60" : "text-[#6b6b6b]"}`}>
                      {plan.name}
                    </div>
                    <div className={`text-[2rem] font-black font-[family-name:var(--font-montserrat)] tracking-tight ${plan.highlight ? "text-white" : "gradient-text"}`}>
                      {plan.price.usd ? `$${plan.price.usd}` : "Custom"}
                    </div>
                    {plan.cadence && <div className={`text-[12px] mt-0.5 ${plan.highlight ? "text-white/60" : "text-[#6b6b6b]"}`}>{plan.cadence}</div>}
                    <p className={`text-[12px] mt-3 leading-relaxed ${plan.highlight ? "text-white/70" : "text-[#717171]"}`}>{plan.desc}</p>
                  </div>

                  <ul className="space-y-2.5 mb-7 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? "bg-white/20" : "bg-[#eefaf9]"}`}>
                          <Check size={10} className={plan.highlight ? "text-white" : "text-[#066766]"} strokeWidth={3} />
                        </div>
                        <span className={`text-[12px] ${plan.highlight ? "text-white/80" : "text-[#3a3a3a]"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact"
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-[14px] transition-all duration-300 ${
                      plan.highlight
                        ? "bg-white text-[#066766] hover:bg-[#f0fafa]"
                        : "bg-[#066766] text-white hover:bg-[#055554] hover:shadow-md hover:shadow-[#066766]/20"
                    }`}
                  >
                    {plan.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {productionPackages.map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className={`relative rounded-2xl p-7 h-full flex flex-col border transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-[#066766] border-[#066766] shadow-xl shadow-[#066766]/20 text-white"
                    : "bg-white border-black/[0.07] hover:border-[#066766]/20"
                }`}>
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0a] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-5">
                    <div className={`text-[11px] uppercase tracking-widest font-semibold mb-1 ${pkg.highlight ? "text-white/60" : "text-[#6b6b6b]"}`}>{pkg.name}</div>
                    <div className={`text-[2rem] font-black font-[family-name:var(--font-montserrat)] tracking-tight ${pkg.highlight ? "text-white" : "gradient-text"}`}>
                      {pkg.price}
                    </div>
                    <p className={`text-[12px] mt-3 leading-relaxed ${pkg.highlight ? "text-white/70" : "text-[#717171]"}`}>{pkg.desc}</p>
                  </div>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {pkg.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pkg.highlight ? "bg-white/20" : "bg-[#eefaf9]"}`}>
                          <Check size={10} className={pkg.highlight ? "text-white" : "text-[#066766]"} strokeWidth={3} />
                        </div>
                        <span className={`text-[12px] ${pkg.highlight ? "text-white/80" : "text-[#3a3a3a]"}`}>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-[14px] transition-all ${
                      pkg.highlight ? "bg-white text-[#066766]" : "bg-[#066766] text-white hover:bg-[#055554]"
                    }`}
                  >
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Guarantee strip */}
        <AnimateIn effect="scale-in" delay={0.2}>
          <div className="bg-[#f8f7f5] rounded-2xl border border-black/[0.06] p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#eefaf9] border border-[#066766]/15 flex items-center justify-center flex-shrink-0">
                <Zap size={20} className="text-[#066766]" />
              </div>
              <div>
                <div className="font-bold text-[14px] text-[#0a0a0a]">Not 100% satisfied? We work until you are — for free.</div>
                <div className="text-[12px] text-[#717171] mt-0.5">Every plan includes unlimited revisions. No time limits. No arguments.</div>
              </div>
            </div>
            <MagneticButton href="/contact"
              className="flex-shrink-0 flex items-center gap-2 px-5 py-3 bg-[#0a0a0a] text-white text-[13px] font-bold rounded-xl hover:bg-[#1a1a1a] transition-all whitespace-nowrap"
            >
              Book Free Call <ArrowRight size={14} />
            </MagneticButton>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
