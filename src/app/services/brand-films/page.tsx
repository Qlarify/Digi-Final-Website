import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Brand Film Production | Digitinize",
  description: "Cinematic brand films that build equity and emotional connection — narrative-led storytelling that positions your brand above its category.",
  keywords: "brand film, brand video, cinematic brand film, brand storytelling india",
  alternates: { canonical: "https://digitinize.com/services/brand-films" },
};

const data = {
  badge: "Production · India",
  headline: "Brand Films",
  subheadline: "Stories That Build Equity",
  description: "We craft cinematic narratives that make audiences feel something — and remember you. Brand films that define categories, not just campaigns.",
  services: [
    "Brand Anthem Films",
    "Founder & Origin Stories",
    "Documentary-Style Films",
    "Manifesto & Vision Videos",
    "Lifestyle & Aspirational Films",
    "Cause & Purpose Storytelling",
    "Launch & Repositioning Films",
    "Festival-Grade Cinematography",
  ],
  stats: [
    { value: "120+", label: "Brand Films" },
    { value: "Cinema", label: "Grade Color" },
    { value: "10M+", label: "Views Generated" },
    { value: "150+", label: "Brands" },
  ],
  cta: "Start Your Brand Film",
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brand Film Production",
    provider: { "@type": "Organization", name: "Digitinize", address: { "@type": "PostalAddress", addressCountry: "IN" } },
    areaServed: "India",
  },
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
