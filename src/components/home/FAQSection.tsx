"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

const faqs = [
  {
    q: "How quickly can you start on my project?",
    a: "Most clients are onboarded within 24 hours of the discovery call. We can have your first draft delivered within 48–72 hours of receiving your brief and raw footage.",
  },
  {
    q: "What's included in 'unlimited revisions'?",
    a: "Exactly what it says — unlimited rounds of feedback until you're 100% satisfied. We don't cap revisions, add revision charges, or push back on feedback. Our goal is a final product you're proud of.",
  },
  {
    q: "I'm an agency. Can you work under our brand name?",
    a: "Yes — we're the preferred white-label editing partner for 50+ agencies globally. We work completely under NDA, deliver under your brand, and will never reach out to your clients directly.",
  },
  {
    q: "We're based in the UK / USA / UAE. Can you work in our timezone?",
    a: "Our project managers work across multiple timezones. For UK clients, we have significant overlap hours. For USA clients, we turn around overnight. For UAE, we're almost in the same timezone. You'll always have same-day responses.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. Our editing plans are month-to-month — cancel anytime with 30 days' notice. For production projects, we work on a per-project basis. We earn your continued business with results, not contracts.",
  },
  {
    q: "What formats do you deliver in?",
    a: "We deliver 4K master files plus any cut-down formats you need — 16:9 (YouTube/web), 9:16 (Reels/TikTok/Stories), 1:1 (Instagram), and broadcast specs. Everything is included in your package.",
  },
  {
    q: "How do we share footage and give feedback?",
    a: "We use a dedicated client portal (Frame.io-style) for video review. You can leave timestamped comments directly on the video. No email chains, no confusion. Simple and professional.",
  },
  {
    q: "What's the quality difference between your plans?",
    a: "All plans receive the same editor quality and production standards. The difference is volume, turnaround speed, and included services (motion graphics, etc). We don't have a 'budget tier' — every client gets premium work.",
  },
  {
    q: "What if I'm not happy with the first draft?",
    a: "That's what unlimited revisions are for. We'll revise until you love it. In our 5+ years, fewer than 2% of projects have gone past a third revision — we get it right early because of our thorough briefing process.",
  },
  {
    q: "Do you work on videos for sensitive industries (healthcare, finance, legal)?",
    a: "Yes — we have extensive experience in regulated industries. We're HIPAA-aware for healthcare clients, understand financial compliance requirements, and can adapt scripts and visuals to meet regulatory guidelines.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-[#f8f7f5] relative">
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <AnimateIn effect="fade-up">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#066766] font-semibold mb-4">FAQ</p>
            </AnimateIn>
            <AnimateIn effect="blur-up" delay={0.1}>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black font-[family-name:var(--font-montserrat)] tracking-[-0.03em] text-[#0a0a0a] leading-tight mb-5">
                Every question
                <br />
                <span className="gradient-text">answered honestly.</span>
              </h2>
            </AnimateIn>
            <AnimateIn effect="fade-up" delay={0.2}>
              <p className="text-[14px] text-[#717171] leading-relaxed mb-7">
                These are the questions we get on every discovery call. We&apos;ve answered them here so you can make an informed decision.
              </p>
            </AnimateIn>
            <AnimateIn effect="fade-up" delay={0.3}>
              <div className="bg-white rounded-2xl border border-black/[0.07] p-5 text-center">
                <p className="text-[13px] text-[#3a3a3a] mb-3">Still have questions?</p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#066766] text-white text-[13px] font-bold rounded-xl hover:bg-[#055554] transition-all"
                >
                  Ask Us Directly <ArrowRight size={13} />
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Accordion */}
          <AnimateIn effect="fade-up" delay={0.1}>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  open === i ? "border-[#066766]/25 bg-white shadow-sm" : "border-black/[0.06] bg-white hover:border-[#066766]/15"
                }`}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  >
                    <span className={`text-[13px] font-semibold leading-snug transition-colors ${open === i ? "text-[#066766]" : "text-[#0a0a0a]"}`}>
                      {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-colors ${
                      open === i ? "bg-[#066766] text-white" : "bg-[#f3f3f0] text-[#717171]"
                    }`}>
                      {open === i ? <Minus size={12} strokeWidth={2.5} /> : <Plus size={12} strokeWidth={2.5} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 pb-5 text-[13px] text-[#717171] leading-relaxed border-t border-black/[0.05] pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
