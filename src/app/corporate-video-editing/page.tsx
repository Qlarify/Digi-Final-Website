import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Corporate Video Editing Services | Digitinize",
  description: "Professional corporate video editing for global teams — polished internal comms, training, event, and brand videos with 48-hour turnaround.",
  keywords: "corporate video editing, business video editing, internal comms video, corporate post production",
  alternates: { canonical: "https://digitinize.com/corporate-video-editing" },
};

const data = {
  badge: "Editing · Global",
  headline: "Corporate Video Editing",
  subheadline: "Polished, Fast, On-Brand",
  description: "Your in-house comms team's secret weapon. We edit corporate footage into clean, on-brand video — at the volume and speed modern teams need.",
  services: [
    "Internal Comms & Town Halls",
    "Training & L&D Videos",
    "Event & Webinar Editing",
    "Executive & Leadership Cuts",
    "Multi-Cam Conference Edits",
    "Subtitles & Localization",
    "Brand-Templated Graphics",
    "Multi-Format Delivery",
  ],
  stats: [
    { value: "48h", label: "Turnaround" },
    { value: "4K", label: "Delivery" },
    { value: "100%", label: "White-Label Ready" },
    { value: "∞", label: "Revisions" },
  ],
  cta: "Start Editing",
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Video Editing",
    provider: { "@type": "Organization", name: "Digitinize" },
    areaServed: ["IN", "AE", "GB", "US", "CA", "AU"],
  },
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
