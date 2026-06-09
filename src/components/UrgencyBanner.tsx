"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Zap } from "lucide-react";

export function UrgencyBanner() {
  const [visible, setVisible] = useState(true);
  const [spots] = useState(3); // Simulate limited spots

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -48, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] bg-[#066766] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center justify-center gap-2.5 flex-wrap">
            <Zap size={14} className="text-[#D9F3F2] flex-shrink-0" />
            <span className="text-[12px] font-medium text-white/90">
              Only <strong className="text-white font-black">{spots} onboarding spots</strong> left this month —
            </span>
            <Link
              href="/contact"
              className="text-[12px] font-bold text-[#D9F3F2] hover:text-white underline underline-offset-2 transition-colors whitespace-nowrap"
            >
              Reserve yours now →
            </Link>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-white/60 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
