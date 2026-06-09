import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
export const metadata: Metadata = {
  title: "Video Editing Services Canada | Digitinize",
  description: "Professional video editing for Canadian brands and agencies. Bilingual content support, corporate videos, and white-label editing partnerships.",
  alternates: { canonical: "https://digitinize.com/video-editing-canada" },
};
const data = {
  badge: "Serving Canada",
  headline: "Video Editing Services",
  subheadline: "Canada",
  description: "From Toronto to Vancouver, we're the editing partner Canadian agencies and brands rely on for consistent, high-quality video content.",
  services: ["English & French Content", "Corporate Video Editing", "White-Label Agency Editing", "Social Media Content", "YouTube Editing", "E-Learning Video Editing", "Brand Film Post-Production", "Short-Form Content"],
  stats: [{ value: "15+", label: "Canadian Clients" }, { value: "EST/PST", label: "Overlap" }, { value: "48h", label: "Turnaround" }, { value: "4K", label: "Quality" }],
  cta: "Get Canada Quote",
};
export default function VideoEditingCanadaPage() { return <ServiceLandingPage data={data} />; }
