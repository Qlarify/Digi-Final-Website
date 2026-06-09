"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

export function StickyBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-white border-t border-black/[0.08] shadow-2xl shadow-black/10 px-4 py-3 flex items-center gap-3">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#eefaf9] border border-[#066766]/15 flex items-center justify-center"
            >
              <MessageCircle size={20} className="text-[#066766]" />
            </a>
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#066766] text-white font-bold text-[14px] rounded-xl"
            >
              <Calendar size={16} />
              Book Free Discovery Call
              <ArrowRight size={15} />
            </Link>
          </div>
          {/* Safe area spacer */}
          <div className="bg-white h-safe-area-inset-bottom" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
