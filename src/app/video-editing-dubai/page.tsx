import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Video Editing Services Dubai, UAE | Digitinize",
  description: "Professional video editing services for Dubai and UAE brands. Corporate videos, social content, and white-label editing for Gulf agencies. 48-hour delivery.",
  keywords: "video editing dubai, video editing UAE, corporate video editing dubai, video post production dubai",
  alternates: { canonical: "https://digitinize.com/video-editing-dubai" },
};

const data = {
  badge: "Serving Dubai & UAE",
  headline: "Video Editing Services",
  subheadline: "Dubai & UAE",
  description: "Premium video editing for Dubai's ambitious brands and agencies. From corporate productions to luxury brand films — we deliver the quality the Gulf market demands.",
  services: [
    "Corporate Video Editing — Dubai",
    "Luxury Brand Film Editing",
    "Arabic & English Subtitle Support",
    "Social Media Content Editing",
    "Real Estate Video Editing",
    "Hospitality & Tourism Videos",
    "White-Label Agency Editing",
    "Event Highlight Videos",
  ],
  stats: [
    { value: "30+", label: "UAE Clients" },
    { value: "48h", label: "Turnaround" },
    { value: "GMT+4", label: "Overlap Hours" },
    { value: "4K", label: "Delivery Quality" },
  ],
  cta: "Get a Dubai Quote",
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Video Editing Services Dubai",
    provider: { "@type": "Organization", name: "Digitinize" },
    areaServed: { "@type": "Place", name: "Dubai, UAE" },
  },
};

export default function VideoEditingDubaiPage() {
  return <ServiceLandingPage data={data} />;
}
