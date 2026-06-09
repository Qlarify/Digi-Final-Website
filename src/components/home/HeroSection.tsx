"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VideoPreview } from "@/components/VideoPreview";

const WORDS = ["Cinematic.", "Compelling.", "Converting."];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [idx, setIdx] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const reelY  = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  useEffect(() => {
    const id = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="bg-aurora relative min-h-screen flex items-center overflow-hidden">
      {/* Fine dot grid over the gradient for texture */}
      <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />

      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <div className="wrap pt-48 lg:pt-44 pb-28">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">

            {/* ── LEFT — copy ── */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16,1,0.3,1] }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2"
                  style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 1px 12px rgba(0,0,0,0.04)" }}>
                  <div className="flex -space-x-1.5">
                    {["#066766","#1A8D8B","#2aadaa","#4ecac8"].map((c,i) => (
                      <div key={i} className="w-5 h-5 rounded-full border-2 border-white" style={{ background: c }} />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#737373] tracking-wide">150+ brands · 6 countries</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#066766] pulse" />
                </div>
              </motion.div>

              {/* Headline — semantic h1, sized to fit its column */}
              <h1 className="mb-7" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1.0, fontSize: "clamp(2.6rem, 4.6vw, 4.6rem)" }}>
                <span className="block clip">
                  <motion.span className="block text-[#0A0A0A]"
                    initial={{ y: "108%" }} animate={{ y: "0%" }}
                    transition={{ duration: 1, ease: [0.16,1,0.3,1], delay: 0.4 }}>
                    We Create
                  </motion.span>
                </span>
                <span className="block clip">
                  <motion.span className="block text-[#0A0A0A]"
                    initial={{ y: "108%" }} animate={{ y: "0%" }}
                    transition={{ duration: 1, ease: [0.16,1,0.3,1], delay: 0.52 }}>
                    Video That&apos;s
                  </motion.span>
                </span>
                {/* Rotating word — clipped so only one shows */}
                <span className="relative clip block" style={{ height: "1.12em" }}>
                  <span className="sr-only">Converting.</span>
                  {WORDS.map((w, i) => (
                    <motion.span
                      key={w}
                      aria-hidden="true"
                      className="grad absolute left-0 top-0 whitespace-nowrap"
                      initial={false}
                      animate={{
                        y: idx === i ? "0%" : idx > i ? "-112%" : "112%",
                        opacity: idx === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
                    >
                      {w}
                    </motion.span>
                  ))}
                </span>
              </h1>

              {/* Sub */}
              <motion.p className="lede max-w-md mb-9"
                initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1, delay: 1.0, ease: [0.16,1,0.3,1] }}>
                Premium video production for India&apos;s renowned brands.
              </motion.p>

              {/* CTAs */}
              <motion.div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-12"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.15, ease: [0.16,1,0.3,1] }}>
                <Link href="/contact" className="btn btn-solid justify-center sm:justify-start">
                  Book a Discovery Call <ArrowRight size={16} />
                </Link>
                {/* Lighter secondary — clear hierarchy on mobile */}
                <Link href="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-[#0A0A0A] hover:text-[#066766] transition-colors py-2">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ background: "var(--teal-bg)", border: "1px solid rgba(6,103,102,0.15)" }}>
                    <ArrowRight size={14} className="text-[#066766] group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  View Our Work
                </Link>
              </motion.div>

              {/* Inline stats — 2×2 on mobile, 4-up on larger */}
              <motion.div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-10 gap-y-6"
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.4, ease: [0.16,1,0.3,1] }}>
                {[
                  { v:"500+", l:"Videos" },
                  { v:"150+", l:"Brands" },
                  { v:"6",    l:"Countries" },
                  { v:"98%",  l:"Retention" },
                ].map(({ v, l }) => (
                  <div key={l}>
                    <div className="grad font-black tracking-[-0.04em]" style={{ fontFamily:"Montserrat, sans-serif", fontSize:"clamp(1.4rem,2.5vw,2rem)" }}>{v}</div>
                    <div className="micro uppercase tracking-widest mt-0.5">{l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — showreel ── */}
            <motion.div style={{ y: reelY }}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.16,1,0.3,1] }}
              className="relative"
            >
              {/* Floating proof chips */}
              <motion.div
                className="absolute -left-6 top-10 z-30 hidden sm:block"
                animate={{ y: [0,-8,0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                <div className="bg-white rounded-2xl border border-black/[0.07] shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F0FAF9] flex items-center justify-center">
                    <span className="text-[#066766] font-black text-[11px]">↑</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#0A0A0A]">340% Engagement</div>
                    <div className="text-[10px] text-[#6b6b6b]">Prestige · Brand Film</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -right-4 bottom-12 z-30 hidden sm:block"
                animate={{ y: [0,9,0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                <div className="bg-white rounded-2xl border border-black/[0.07] shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F0FAF9] flex items-center justify-center">
                    <span className="text-[#066766] font-black text-[11px]">4×</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#0A0A0A]">Trial Sign-ups</div>
                    <div className="text-[10px] text-[#6b6b6b]">CloudStack · SaaS</div>
                  </div>
                </div>
              </motion.div>

              <VideoPreview
                src="/videos/hero-reel.mp4"
                label="Digitinize Showreel 2025"
                meta="Selected work · 2024–25"
                duration="1:24"
                autoplayInView
                ratio="4 / 5"
                rounded="rounded-3xl"
                className="shadow-2xl shadow-black/20"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <motion.div animate={{ y: [0,8,0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <div className="w-px h-12 bg-gradient-to-b from-[#066766]/25 to-transparent mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
