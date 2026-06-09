"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cols = {
  Services: [
    { l:"Video Production",   h:"/video-production" },
    { l:"Corporate Video",    h:"/services/corporate-video-production" },
    { l:"Brand Films",        h:"/services/brand-films" },
    { l:"Video Editing",      h:"/video-editing-services" },
    { l:"Motion Graphics",    h:"/motion-graphics" },
    { l:"White Label",        h:"/white-label-video-editing" },
  ],
  Markets: [
    { l:"Dubai, UAE",    h:"/video-editing-dubai" },
    { l:"United Kingdom",h:"/video-editing-uk" },
    { l:"United States", h:"/video-editing-usa" },
    { l:"Canada",        h:"/video-editing-canada" },
    { l:"Australia",     h:"/video-editing-australia" },
  ],
  Company: [
    { l:"About",     h:"/about" },
    { l:"Portfolio", h:"/portfolio" },
    { l:"Industries",h:"/industries" },
    { l:"Contact",   h:"/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="wrap py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-14">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 group mb-5 w-fit">
              <div className="w-7 h-7 rounded-[8px] bg-[#066766] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-white font-black text-[11px]" style={{ fontFamily: "Montserrat, sans-serif" }}>D</span>
              </div>
              <span className="font-black text-[15px] tracking-[-0.025em] text-[#0A0A0A]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                Digitinize
              </span>
            </Link>
            <p className="prose-sm text-[#6b6b6b] max-w-[220px] mb-8 leading-relaxed">
              Cinematic video production for India&apos;s top brands. World-class editing globally.
            </p>
            <Link href="/contact" className="btn btn-solid text-[13px] px-5 py-2.5 rounded-[10px]">
              Book a Call <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <p className="micro uppercase tracking-[0.14em] text-[#6b6b6b] font-semibold mb-5">{title}</p>
              <ul className="space-y-3">
                {links.map(({ l, h }) => (
                  <li key={l}>
                    <Link href={h} className="link prose-sm hover:text-[#0A0A0A] transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hr-grad" />
      <div className="wrap py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="micro">© {new Date().getFullYear()} Digitinize. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="link micro hover:text-[#525252] transition-colors">Privacy</Link>
          <Link href="/terms"   className="link micro hover:text-[#525252] transition-colors">Terms</Link>
          <span className="micro" style={{ color: "#D4D4D4" }}>India · UAE · UK · USA · CA · AU</span>
        </div>
      </div>
    </footer>
  );
}
