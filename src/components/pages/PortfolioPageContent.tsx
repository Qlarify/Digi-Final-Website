"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { VideoPreview } from "@/components/VideoPreview";

const filters = ["All", "Commercial", "Corporate", "Brand Film", "Social", "Motion Graphics", "Editing"];

const projects = [
  { title: "Prestige Residences",  client: "Prestige Group",  category: "Brand Film",      industry: "Real Estate",   src: "/videos/work-1.mp4", duration: "1:42" },
  { title: "MediBridge Explainer", client: "MediBridge Health", category: "Corporate",     industry: "Healthcare",    src: "/videos/work-2.mp4", duration: "2:15" },
  { title: "CloudStack Commercial",client: "CloudStack",      category: "Commercial",      industry: "SaaS",          src: "/videos/work-3.mp4", duration: "0:45" },
  { title: "Grand Meridian Film",  client: "Meridian Hotels", category: "Brand Film",      industry: "Hospitality",   src: "/videos/work-4.mp4", duration: "1:58" },
  { title: "FinEdge Explainer",    client: "FinEdge App",     category: "Commercial",      industry: "Finance",       src: "/videos/work-5.mp4", duration: "1:10" },
  { title: "EduFirst Promo",       client: "EduFirst",        category: "Social",          industry: "Education",     src: "/videos/work-6.mp4", duration: "0:30" },
  { title: "RetailPro Ads",        client: "RetailPro",       category: "Social",          industry: "Ecommerce",     src: "/videos/work-1.mp4", duration: "0:20" },
  { title: "GreenBuild CSR Film",  client: "GreenBuild Corp", category: "Corporate",       industry: "Manufacturing", src: "/videos/work-2.mp4", duration: "2:40" },
  { title: "LaunchPad Motion",     client: "LaunchPad AI",    category: "Motion Graphics", industry: "SaaS",          src: "/videos/work-3.mp4", duration: "0:50" },
];

export function PortfolioPageContent() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Header — aurora */}
      <section className="bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />
        <div className="wrap relative z-10 pt-40 pb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow mb-5">Our Work</p>
            <h1 className="text-[#0A0A0A] mb-5" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              Portfolio
            </h1>
            <p className="lede max-w-xl mx-auto">Every frame tells a story. Every story drives a result.</p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-sm bg-white">
        <div className="wrap">
          {/* Filters */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2.5 mb-12">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  active === f
                    ? "bg-[#066766] text-white shadow-md shadow-[#066766]/20"
                    : "bg-white text-[#6b6b6b] hover:text-[#0A0A0A]"
                }`}
                style={active === f ? {} : { border: "1px solid var(--rule-2)" }}
              >
                {f}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div key={p.title} layout
                  initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <VideoPreview
                    src={p.src}
                    label={p.title}
                    meta={`${p.industry} · ${p.category}`}
                    duration={p.duration}
                    ratio="4 / 3"
                    rounded="rounded-2xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
