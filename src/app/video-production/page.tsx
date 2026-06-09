import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Video Production Services India | Digitinize",
  description: "India's premier video production company. Corporate videos, brand films, commercials, product videos & event coverage. Cinematic quality, delivered on time.",
  keywords: "video production india, corporate video production, brand film india, commercial video production",
  alternates: { canonical: "https://digitinize.com/video-production" },
};

const data = {
  badge: "India Video Production",
  headline: "Cinematic Video Production",
  subheadline: "For India's Best Brands",
  description: "From bold brand films to high-converting commercials, we produce video content that positions your brand at the top of your industry.",
  services: [
    "Corporate Video Production",
    "Commercial Video Production",
    "Brand Films & Documentaries",
    "Product Video Production",
    "Event Videography & Coverage",
    "CEO & Spokesperson Videos",
    "Testimonial Video Production",
    "Training & Internal Videos",
  ],
  stats: [
    { value: "500+", label: "Videos Produced" },
    { value: "4K", label: "Shoot Quality" },
    { value: "10+", label: "Years Experience" },
    { value: "150+", label: "Brands Served" },
  ],
  cta: "Plan Your Production",
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Video Production Services",
    provider: { "@type": "Organization", name: "Digitinize", address: { "@type": "PostalAddress", addressCountry: "IN" } },
    areaServed: "India",
  },
};

export default function VideoProductionPage() {
  return <ServiceLandingPage data={data} />;
}
