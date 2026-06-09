import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Color Grading Services | Digitinize",
  description: "Hollywood-grade color grading and finishing — from flat log footage to a distinctive cinematic look. DaVinci Resolve colorists, global delivery.",
  keywords: "color grading, color correction, davinci resolve, cinematic color grade, video finishing",
  alternates: { canonical: "https://digitinize.com/services/color-grading" },
};

const data = {
  badge: "Post-Production · Global",
  headline: "Color Grading",
  subheadline: "Your Signature Look",
  description: "Color is emotion. Our colorists turn raw, flat footage into a cohesive cinematic grade that becomes part of your brand's visual identity.",
  services: [
    "Primary & Secondary Grading",
    "Log / RAW Conversion",
    "Look Development & LUTs",
    "Skin-Tone & Shot Matching",
    "HDR & Rec.709 Delivery",
    "Beauty & Cleanup Work",
    "Film-Emulation Grades",
    "Brand Color Consistency",
  ],
  stats: [
    { value: "DaVinci", label: "Resolve Studio" },
    { value: "HDR", label: "& SDR Delivery" },
    { value: "48h", label: "Turnaround" },
    { value: "∞", label: "Revisions" },
  ],
  cta: "Grade Your Footage",
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Color Grading Services",
    provider: { "@type": "Organization", name: "Digitinize" },
    areaServed: ["IN", "AE", "GB", "US", "CA", "AU"],
  },
};

export default function Page() {
  return <ServiceLandingPage data={data} />;
}
