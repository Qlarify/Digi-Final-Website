"use client";

const clients = [
  "Prestige Group","MediBridge","CloudStack","Grand Meridian","FinEdge",
  "RetailPro","EduFirst","GreenBuild","TechVenture","LaunchPad AI",
  "Prestige Group","MediBridge","CloudStack","Grand Meridian","FinEdge",
  "RetailPro","EduFirst","GreenBuild","TechVenture","LaunchPad AI",
];

export function ClientLogos() {
  return (
    <section style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem", background: "#F7F6F2", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
      <p className="micro uppercase tracking-[0.16em] text-center" style={{ marginBottom: "1.75rem" }}>
        Trusted by leading brands — India · UAE · UK · USA · Canada · Australia
      </p>
      <div className="relative overflow-hidden" style={{ height: "32px" }}>
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #F7F6F2, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg, #F7F6F2, transparent)" }} />
        <div className="marquee" style={{ height: "32px", alignItems: "center" }}>
          {clients.map((c, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-2 px-8" style={{ height: "32px" }}>
              <div className="w-1 h-1 rounded-full" style={{ background: "rgba(6,103,102,0.3)" }} />
              <span className="whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px", fontWeight: 600, color: "#6b6b6b", letterSpacing: "0.02em" }}>
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
