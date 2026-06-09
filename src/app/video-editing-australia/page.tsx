import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
export const metadata: Metadata = {
  title: "Video Editing Services Australia | Digitinize",
  description: "Premium video editing for Australian brands and media companies. Corporate, social, and white-label editing with fast overnight turnaround.",
  alternates: { canonical: "https://digitinize.com/video-editing-australia" },
};
const data = {
  badge: "Serving Australia",
  headline: "Video Editing Services",
  subheadline: "Australia",
  description: "Trusted by Australian media companies, agencies, and brands for premium post-production. Overnight turnaround thanks to our timezone advantage.",
  services: ["Corporate Video Editing AU", "Media Company Post-Production", "Social Media Content", "White-Label Editing", "Real Estate Video Editing", "Hospitality & Tourism", "YouTube Editing", "Short-Form Content"],
  stats: [{ value: "10+", label: "AU Clients" }, { value: "AEST", label: "Overlap" }, { value: "Overnight", label: "Turnaround" }, { value: "4K", label: "Quality" }],
  cta: "Get Australia Quote",
};
export default function VideoEditingAustraliaPage() { return <ServiceLandingPage data={data} />; }
