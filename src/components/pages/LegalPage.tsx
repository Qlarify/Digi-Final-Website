import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="bg-white">
      <div className="wrap" style={{ maxWidth: "760px" }}>
        <div className="pt-40 pb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#6b6b6b] hover:text-[#066766] transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>

          <p className="eyebrow mb-5">Legal</p>
          <h1
            className="text-[#0A0A0A] mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            {title}
          </h1>
          <p className="micro uppercase tracking-widest mb-12">Last updated · {updated}</p>

          <p className="lede mb-14">{intro}</p>

          <div className="space-y-12">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2
                  className="text-[#0A0A0A] mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, letterSpacing: "-0.02em", fontSize: "1.35rem" }}
                >
                  {s.heading}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="prose mb-4">{p}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-16 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
            <p className="prose-sm">
              Questions about this policy? Email{" "}
              <a href="mailto:hello@digitinize.com" className="text-[#066766] font-medium link-hover">hello@digitinize.com</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
