import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Professional Video Editing Services | Digitinize",
  description: "World-class video editing services for agencies, SaaS companies, YouTubers, and brands. 48-hour turnaround, unlimited revisions, white-label ready. Serving UAE, UK, USA, Canada & Australia.",
  keywords: "video editing services, professional video editing, video post production, white label video editing, outsource video editing",
  alternates: { canonical: "https://digitinize.com/video-editing-services" },
};

const data = {
  badge: "Global Editing Services",
  headline: "Professional Video Editing",
  subheadline: "That Converts",
  description: "Precision editing for agencies, SaaS brands, content creators, and enterprises. We become your dedicated post-production team — at a fraction of in-house costs.",
  services: [
    "Corporate Video Editing",
    "Commercial Video Editing",
    "YouTube & Long-Form Editing",
    "Short-Form Content (Reels, TikTok)",
    "Podcast Video Editing",
    "Motion Graphics & Animation",
    "Color Grading & Sound Mix",
    "White-Label Editing",
  ],
  stats: [
    { value: "48h", label: "Average Turnaround" },
    { value: "4K", label: "Delivery Quality" },
    { value: "150+", label: "Monthly Videos Edited" },
    { value: "100%", label: "Client Satisfaction" },
  ],
  cta: "Start Editing",
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Video Editing Services",
    provider: { "@type": "Organization", name: "Digitinize" },
    description: "Professional video editing services for global clients",
    areaServed: ["UAE", "UK", "USA", "Canada", "Australia"],
  },
};

export default function VideoEditingServicesPage() {
  return <ServiceLandingPage data={data} />;
}
