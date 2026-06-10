"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services",   href: "/services"   },
  { label: "Work",       href: "/portfolio"  },
  { label: "Industries", href: "/industries" },
  { label: "About",      href: "/about"      },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1,  y: 0  }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="wrap">
          <div
            className="mx-auto mt-5 flex items-center justify-between rounded-2xl px-5 py-3"
            style={{
              background:    scrolled ? "rgba(255,255,255,0.85)" : "transparent",
              backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
              WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
              border: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
              boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.05)" : "none",
              transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-[8px] bg-[#066766] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <span className="text-white font-black text-[11px]" style={{ fontFamily: "Montserrat, sans-serif" }}>D</span>
              </div>
              <span className="font-black text-[15px] tracking-[-0.025em] text-[#066766]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Digitinize
              </span>
            </Link>

            {/* Links — desktop */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="px-3.5 py-2 text-[13px] font-medium text-[#525252] hover:text-[#0A0A0A] rounded-xl hover:bg-black/[0.04] transition-all duration-150"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Right */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/contact" className="text-[13px] font-medium text-[#737373] hover:text-[#0A0A0A] px-3 py-2 transition-colors">
                Contact
              </Link>
              <Link href="/contact" className="btn btn-solid text-[13px] px-5 py-2.5 rounded-[10px]">
                Book a Call
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-[#525252] rounded-xl hover:bg-black/[0.04] transition-colors"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col px-8 pt-28 pb-12"
          >
            <nav className="flex flex-col">
              {[...links, { label: "Contact", href: "/contact" }].map((l, i) => (
                <motion.div key={l.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 + 0.05 }}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 border-b border-black/[0.05]"
                  >
                    <span className="font-black text-[2rem] tracking-[-0.03em] text-[#0A0A0A]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                      {l.label}
                    </span>
                    <span className="text-[#066766]">↗</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pt-8">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-solid w-full justify-center text-[1rem] rounded-2xl py-4">
                Book a Discovery Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
