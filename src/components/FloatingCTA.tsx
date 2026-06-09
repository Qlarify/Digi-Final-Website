"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle, X, Phone } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2 items-end"
              >
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 pl-4 pr-3.5 py-2.5 rounded-[12px] bg-white text-[13px] font-medium text-[#525252] hover:text-[#0A0A0A] whitespace-nowrap transition-colors"
                  style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                >
                  WhatsApp Us <MessageCircle size={15} className="text-[#25D366]" />
                </a>
                <Link href="/contact"
                  className="flex items-center gap-2.5 pl-4 pr-3.5 py-2.5 rounded-[12px] bg-white text-[13px] font-medium text-[#525252] hover:text-[#0A0A0A] whitespace-nowrap transition-colors"
                  style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                >
                  Book a Call <Phone size={15} className="text-[#066766]" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen(!open)}
            className="w-12 h-12 rounded-2xl text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
            style={{ background: "#066766", boxShadow: "0 8px 32px rgba(6,103,102,0.25)" }}
          >
            <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>
              {open ? <X size={20} /> : <MessageCircle size={20} />}
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
