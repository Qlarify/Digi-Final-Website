"use client";

import Link from "next/link";
import { Check, X, Minus } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

const features = [
  { feature: "Broadcast-quality output",       diy: false,   freelancer: "sometimes", digitinize: true },
  { feature: "Dedicated project manager",       diy: false,   freelancer: false,       digitinize: true },
  { feature: "48-hour turnaround",              diy: false,   freelancer: false,       digitinize: true },
  { feature: "Unlimited revisions",             diy: false,   freelancer: false,       digitinize: true },
  { feature: "White-label ready",               diy: false,   freelancer: false,       digitinize: true },
  { feature: "NDA & confidentiality",           diy: false,   freelancer: "sometimes", digitinize: true },
  { feature: "Consistent quality at scale",     diy: false,   freelancer: false,       digitinize: true },
  { feature: "Motion graphics & color grading", diy: false,   freelancer: "sometimes", digitinize: true },
  { feature: "Reliable deadline commitment",    diy: false,   freelancer: "sometimes", digitinize: true },
  { feature: "ROI-focused creative strategy",   diy: false,   freelancer: false,       digitinize: true },
];

function Cell({ value }: { value: boolean | "sometimes" | string }) {
  if (value === true)
    return <div className="flex justify-center"><div className="w-6 h-6 rounded-full bg-[#eefaf9] flex items-center justify-center"><Check size={13} className="text-[#066766]" strokeWidth={2.5} /></div></div>;
  if (value === false)
    return <div className="flex justify-center"><div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center"><X size={13} className="text-red-400" strokeWidth={2.5} /></div></div>;
  return <div className="flex justify-center"><div className="w-6 h-6 rounded-full bg-[#f3f3f0] flex items-center justify-center"><Minus size={13} className="text-[#6b6b6b]" /></div></div>;
}

export function ComparisonSection() {
  return (
    <section className="section bg-glow-soft">
      <div className="wrap" style={{ maxWidth: "960px" }}>
        <div className="text-center mb-14">
          <AnimateIn effect="fade-up">
            <p className="eyebrow mb-6">Why Digitinize</p>
          </AnimateIn>
          <AnimateIn effect="blur-up" delay={0.1}>
            <h2 className="title text-[#0A0A0A]">The honest comparison.</h2>
          </AnimateIn>
          <AnimateIn effect="fade-up" delay={0.2}>
            <p className="prose mt-4 max-w-lg mx-auto">
              Why 150+ brands choose us over doing it themselves, hiring a freelancer, or going to a big agency.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn effect="scale-in" delay={0.15}>
          <div className="bg-white rounded-3xl border border-black/[0.07] shadow-sm overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-4 divide-x divide-black/[0.06] border-b border-black/[0.06]">
              <div className="p-4 lg:p-5" />
              {[
                { label: "In-house / DIY",  sub: "Your team",     highlight: false },
                { label: "Freelancer",      sub: "One person",    highlight: false },
                { label: "Digitinize",      sub: "Your partner",  highlight: true  },
              ].map(({ label, sub, highlight }) => (
                <div key={label} className={`p-4 lg:p-5 text-center ${highlight ? "bg-[#eefaf9]" : ""}`}>
                  {highlight && <div className="text-[10px] uppercase tracking-[0.12em] text-[#066766] font-black mb-1">Best Choice</div>}
                  <div className={`text-[13px] font-black font-[family-name:var(--font-montserrat)] ${highlight ? "text-[#066766]" : "text-[#0a0a0a]"}`}>{label}</div>
                  <div className="text-[11px] text-[#6b6b6b] mt-0.5">{sub}</div>
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {features.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-4 divide-x divide-black/[0.04] border-b border-black/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-[#fafaf9]"}`}>
                <div className="p-3.5 lg:p-4 flex items-center">
                  <span className="text-[12px] text-[#3a3a3a] font-medium">{row.feature}</span>
                </div>
                <div className="p-3.5 flex items-center justify-center"><Cell value={row.diy} /></div>
                <div className="p-3.5 flex items-center justify-center"><Cell value={row.freelancer} /></div>
                <div className="p-3.5 flex items-center justify-center bg-[#eefaf9]/30"><Cell value={row.digitinize} /></div>
              </div>
            ))}

            {/* CTA row */}
            <div className="grid grid-cols-4 divide-x divide-black/[0.06] border-t border-black/[0.06]">
              <div className="p-5" />
              <div className="p-5 text-center">
                <div className="text-[11px] text-[#6b6b6b]">Handle everything yourself</div>
              </div>
              <div className="p-5 text-center">
                <div className="text-[11px] text-[#6b6b6b]">Inconsistent availability</div>
              </div>
              <div className="p-5 text-center bg-[#eefaf9]/40">
                <Link href="/contact"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#066766] hover:bg-[#055554] text-white text-[12px] font-bold rounded-xl transition-all"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
