"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface ServiceData {
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  services: string[];
  stats: { value: string; label: string }[];
  cta: string;
  schema?: object;
}

export function ServiceLandingPage({ data }: { data: ServiceData }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <>
      {data.schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }} />
      )}

      {/* ── HERO — light aurora, matches home ── */}
      <section className="bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
        <div className="wrap relative z-10 pt-40 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#066766] pulse" />
            <span className="text-[11px] uppercase tracking-[0.13em] font-semibold text-[#6b6b6b]">{data.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16,1,0.3,1] }}
            className="text-[#0A0A0A] mx-auto max-w-4xl"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1.0, fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            {data.headline}<br />
            <span className="grad">{data.subheadline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16,1,0.3,1] }}
            className="lede max-w-2xl mx-auto mt-7 mb-10"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16,1,0.3,1] }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link href="/contact" className="btn btn-solid">{data.cta} <ArrowRight size={16} /></Link>
            <Link href="/portfolio" className="btn btn-outline">View Examples</Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white" style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="wrap py-14">
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 max-w-3xl mx-auto">
          {data.stats.map((stat, i) => (
            <motion.div key={stat.label}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="grad font-black mb-1" style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "-0.03em", fontSize: "clamp(1.8rem,4vw,2.75rem)" }}>{stat.value}</div>
              <div className="micro uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
         </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section bg-glow-soft" ref={ref}>
        <div className="wrap" style={{ maxWidth: "960px" }}>
          <div className="text-center mb-12">
            <p className="eyebrow mb-5">What&apos;s Included</p>
            <h2 className="title text-[#0A0A0A]">Everything you need,<br /><span className="grad">nothing you don&apos;t.</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {data.services.map((service, i) => (
              <motion.div key={service}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, ease: [0.16,1,0.3,1] }}
                className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4"
                style={{ border: "1px solid var(--rule)" }}
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--teal-bg)", border: "1px solid rgba(6,103,102,0.15)" }}>
                  <Check size={13} className="text-[#066766]" strokeWidth={2.5} />
                </span>
                <span className="text-[14px] font-medium text-[#0A0A0A]">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — dark cinematic band, matches home ── */}
      <section className="section-sm bg-white">
        <div className="wrap" style={{ maxWidth: "960px" }}>
          <div className="bg-spotlight film-grain relative overflow-hidden rounded-3xl text-center px-8 py-16 lg:py-20">
            <div className="relative z-10">
              <h2 className="heading text-white mb-4">Ready to get started?</h2>
              <p className="prose mx-auto max-w-md mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Book a free discovery call and we&apos;ll map out a tailored plan for your brand.
              </p>
              <Link href="/contact" className="btn btn-solid">Book a Discovery Call <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
