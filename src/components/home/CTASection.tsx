"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

export function CTASection() {
  return (
    /* DARK SECTION */
    <section className="section bg-spotlight film-grain text-white relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark opacity-[0.5] pointer-events-none" />

      <div className="wrap relative z-10 text-center">
        <AnimateIn effect="fade-up">
          <p className="eyebrow text-[#066766] mb-10">Start Your Project</p>
        </AnimateIn>

        <AnimateIn effect="blur-up" delay={0.1}>
          <h2 className="title text-white mb-8 max-w-4xl mx-auto">
            Ready to make video<br />
            that <span className="grad">actually performs?</span>
          </h2>
        </AnimateIn>

        <AnimateIn effect="fade-up" delay={0.25}>
          <p className="prose text-[#737373] max-w-lg mx-auto mb-14">
            Book a free 30-minute discovery call. We&apos;ll map out exactly
            how to make your video goals a reality — no fluff, no commitment.
          </p>
        </AnimateIn>

        <AnimateIn effect="fade-up" delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Link href="/contact" className="btn btn-solid text-[15px] px-8 py-4">
              <Calendar size={17} />
              Book a Discovery Call
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark text-[15px] px-8 py-4"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
          </div>
        </AnimateIn>

        <AnimateIn effect="fade-in" delay={0.55}>
          <p className="micro text-[#525252]">
            No commitment · Reply within 24h · Free strategy session
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
