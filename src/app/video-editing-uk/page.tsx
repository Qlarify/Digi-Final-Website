import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
export const metadata: Metadata = {
  title: "Video Editing Services UK | Digitinize",
  description: "Professional video editing for UK agencies and brands. White-label editing, corporate videos, and social content. Same-day support available.",
  keywords: "video editing uk, video editing london, video post production uk, outsource video editing uk",
  alternates: { canonical: "https://digitinize.com/video-editing-uk" },
};
const data = {
  badge: "Serving United Kingdom",
  headline: "Video Editing Services",
  subheadline: "United Kingdom",
  description: "Trusted by London agencies and UK brands for premium video editing. White-label ready, broadcast quality, delivered at pace.",
  services: ["Corporate Video Editing UK", "Agency White-Label Editing", "Social Media Content", "Documentary Editing", "Event Coverage Editing", "Motion Graphics UK", "YouTube Channel Editing", "Brand Film Post-Production"],
  stats: [{ value: "20+", label: "UK Clients" }, { value: "GMT±0", label: "Overlap Hours" }, { value: "48h", label: "Turnaround" }, { value: "4K", label: "Delivery" }],
  cta: "Get UK Quote",
};
export default function VideoEditingUKPage() { return <ServiceLandingPage data={data} />; }
