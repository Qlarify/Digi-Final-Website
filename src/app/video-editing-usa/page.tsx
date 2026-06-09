import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
export const metadata: Metadata = {
  title: "Video Editing Services USA | Digitinize",
  description: "Professional video editing services for US brands and agencies. SaaS explainers, YouTube editing, corporate videos — delivered in 48 hours.",
  keywords: "video editing usa, video editing services america, outsource video editing usa, corporate video editing usa",
  alternates: { canonical: "https://digitinize.com/video-editing-usa" },
};
const data = {
  badge: "Serving United States",
  headline: "Video Editing Services",
  subheadline: "United States",
  description: "Powering US content teams with world-class editing. SaaS companies, agencies, coaches, and creators trust Digitinize to scale their video output.",
  services: ["SaaS & Tech Video Editing", "YouTube Channel Editing", "Podcast Video Production", "Corporate Video Editing", "Social Media Content", "Short-Form Reels & TikTok", "Webinar Editing", "White-Label Agency Editing"],
  stats: [{ value: "40+", label: "US Clients" }, { value: "EST/PST", label: "Overlap Hours" }, { value: "48h", label: "Turnaround" }, { value: "∞", label: "Revisions" }],
  cta: "Get US Quote",
};
export default function VideoEditingUSAPage() { return <ServiceLandingPage data={data} />; }
