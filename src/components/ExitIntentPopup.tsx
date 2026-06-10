"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (dismissed || sessionStorage.getItem('exit_dismissed')) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) setShow(true);
    };

    // Also show on 60% scroll + 45s
    const timer = setTimeout(() => {
      if (!dismissed) setShow(true);
    }, 45000);

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(timer);
    };
  }, [dismissed]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem('exit_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm"
            onClick={dismiss}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[71] w-full max-w-md mx-4"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-black/[0.07]">
              {/* Top teal band */}
              <div className="bg-[#066766] px-8 py-6 text-white relative">
                <button onClick={dismiss} className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors">
                  <X size={18} />
                </button>
                <div className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[#D9F3F2] mb-2">Free Resource</div>
                <h3 className="text-[1.4rem] font-black font-[family-name:var(--font-montserrat)] leading-tight">
                  Get our free<br />Video Strategy Guide
                </h3>
              </div>

              <div className="px-8 py-6">
                {submitted ? (
                  <div className="text-center py-4">
                    <div className="text-4xl mb-3">🎬</div>
                    <p className="font-bold text-[#0a0a0a] mb-1">Guide sent to your inbox!</p>
                    <p className="text-[13px] text-[#717171]">Check your email — we&apos;ll follow up within 24 hours.</p>
                    <button onClick={dismiss} className="mt-4 text-[13px] text-[#a0a0a0] underline">Close</button>
                  </div>
                ) : (
                  <>
                    <p className="text-[14px] text-[#717171] leading-relaxed mb-5">
                      Before you go — get our <strong className="text-[#0a0a0a]">2025 Video Production Playbook</strong>: the exact strategy our top clients use to turn video into their #1 growth channel.
                    </p>
                    <ul className="space-y-2 mb-5">
                      {[
                        "10 video types that generate the most leads",
                        "How to brief a video agency (template inside)",
                        "Budget benchmarks for India & global markets",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[13px] text-[#3a3a3a]">
                          <div className="w-4 h-4 rounded-full bg-[#eefaf9] border border-[#066766]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#066766]" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex gap-2">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="flex-1 px-4 py-2.5 rounded-xl border border-black/[0.08] bg-[#f8f7f5] text-[13px] text-[#0a0a0a] placeholder-[#a0a0a0] focus:outline-none focus:border-[#066766]/40 transition-colors"
                      />
                      <button type="submit" className="flex items-center gap-1.5 px-4 py-2.5 bg-[#066766] text-white text-[13px] font-bold rounded-xl hover:bg-[#055554] transition-colors whitespace-nowrap">
                        <Download size={14} /> Get It Free
                      </button>
                    </form>
                    <p className="text-[11px] text-[#a0a0a0] mt-3 text-center">No spam. Unsubscribe anytime.</p>
                    <button onClick={dismiss} className="block w-full text-center text-[12px] text-[#a0a0a0] hover:text-[#3a3a3a] mt-2 transition-colors">
                      No thanks, I don&apos;t need more leads
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
