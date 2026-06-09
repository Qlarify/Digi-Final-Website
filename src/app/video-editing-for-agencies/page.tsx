import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
export const metadata: Metadata = {
  title: "Video Editing for Marketing Agencies | Digitinize",
  description: "Scale your agency's video output with Digitinize. White-label editing, fast turnaround, and agency-friendly pricing. Become a video powerhouse.",
  alternates: { canonical: "https://digitinize.com/video-editing-for-agencies" },
};
const data = {
  badge: "Agency Partnerships",
  headline: "Video Editing for",
  subheadline: "Marketing Agencies",
  description: "Agencies use Digitinize to scale video output without scaling headcount. White-label ready, agency-priced, and built for volume.",
  services: ["White-Label Video Editing", "Volume Agency Pricing", "Dedicated Account Manager", "Agency Portal Access", "Branded Deliveries", "NDA & Confidentiality", "Rush Delivery Available", "Unlimited Revisions"],
  stats: [{ value: "50+", label: "Agency Partners" }, { value: "60+", label: "Videos/Month Capacity" }, { value: "100%", label: "White-Label" }, { value: "48h", label: "Standard Turnaround" }],
  cta: "Become an Agency Partner",
};
export default function VideoEditingForAgenciesPage() { return <ServiceLandingPage data={data} />; }
