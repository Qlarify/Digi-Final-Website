import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Corporate Video Production | Digitinize",
  description: "Corporate video production for India's leading organizations — company films, AGMs, leadership messaging, and culture videos shot with cinematic precision.",
  keywords: "corporate video production, company film, AGM video, leadership video, corporate video india",
  alternates: { canonical: "https://digitinize.com/services/corporate-video-production" },
};

const data = {
  badge: "Production · India",
  headline: "Corporate Video",
  subheadline: "Built for Boardrooms & Beyond",
  description: "From annual reports to brand anthems, we turn complex organizations into clear, compelling stories your stakeholders remember.",
  services: [
    "Company Profile Films",
    "AGM & Annual Report Videos",
    "Leadership & CEO Messaging",
    "Culture & Employer-Brand Videos",
    "Training & Internal Comms",
    "Event & Conference Coverage",
    "Investor & Stakeholder Films",
    "CSR & Sustainability Stories",
  ],
  stats: [
    { value: "300+", label: "Corporate Films" },
    { value: "4K", label: "Shoot Quality" },
    { value: "48h", label: "Cut Turnaround" },
    { value: "150+", label: "Brands Served" },
  ],
  cta: "Plan Your Corporate Film",
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Video Production",
    provider: { "@type": "Organization", name: "Digitinize", address: { "@type": "PostalAddress", addressCountry: "IN" } },
    areaServed: "India",
  },
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
