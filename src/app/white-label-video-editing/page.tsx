import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";

export const metadata: Metadata = {
  title: "White Label Video Editing for Agencies | Digitinize",
  description: "Scale your agency with Digitinize's white-label video editing. Deliver premium video content under your brand — fast, consistent, and confidential.",
  keywords: "white label video editing, agency video editing, outsource video editing, video editing partner",
  alternates: { canonical: "https://digitinize.com/white-label-video-editing" },
};

const data = {
  badge: "White-Label Partner",
  headline: "White-Label Video Editing",
  subheadline: "For Agencies That Scale",
  description: "Your brand, our expertise. We become your invisible editing team — delivering broadcast-quality video under your agency's name, on demand.",
  services: [
    "Full NDA & Confidentiality",
    "Agency Onboarding Portal",
    "Dedicated Project Manager",
    "Branded Delivery System",
    "Volume Discounts Available",
    "48–72 Hour Turnaround",
    "Unlimited Revisions",
    "Scalable Monthly Plans",
  ],
  stats: [
    { value: "50+", label: "Agency Partners" },
    { value: "100%", label: "NDA Protected" },
    { value: "48h", label: "Turnaround" },
    { value: "0", label: "Branding Leaks" },
  ],
  cta: "Become a Partner",
};

export default function WhiteLabelPage() {
  return <ServiceLandingPage data={data} />;
}
