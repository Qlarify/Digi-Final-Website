import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Commercial Video Production | Digitinize",
  description: "High-impact commercial video production for TV, YouTube, Meta, and digital — performance-engineered ads that drive measurable results.",
  keywords: "commercial video production, tv commercial, video ad production, ad film india",
  alternates: { canonical: "https://digitinize.com/services/commercial-video-production" },
};

const data = {
  badge: "Production · India",
  headline: "Commercial Video",
  subheadline: "Engineered to Convert",
  description: "Every frame is built around a single job — moving your audience to act. Concept to final cut, optimized for the platforms that matter.",
  services: [
    "TV & OTT Commercials",
    "YouTube & Pre-Roll Ads",
    "Meta & Performance Creatives",
    "Product Launch Films",
    "Digital Out-of-Home (DOOH)",
    "Festive & Campaign Ads",
    "Multi-Format Ad Variants",
    "Direct-Response Video",
  ],
  stats: [
    { value: "200+", label: "Commercials" },
    { value: "4K", label: "Delivery" },
    { value: "3×", label: "Avg Engagement Lift" },
    { value: "12+", label: "Industries" },
  ],
  cta: "Brief Your Commercial",
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Video Production",
    provider: { "@type": "Organization", name: "Digitinize", address: { "@type": "PostalAddress", addressCountry: "IN" } },
    areaServed: "India",
  },
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
