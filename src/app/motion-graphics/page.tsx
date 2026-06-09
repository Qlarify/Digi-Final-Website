import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Motion Graphics Services | Digitinize",
  description: "Professional motion graphics, animated explainers, kinetic typography, and branded animations. Elevate your content with world-class motion design.",
};

const data = {
  badge: "Motion Design",
  headline: "Motion Graphics",
  subheadline: "That Captivates",
  description: "Dynamic animations, explainer videos, and branded motion packages that make your content impossible to ignore.",
  services: [
    "2D Motion Graphics",
    "Animated Explainer Videos",
    "Kinetic Typography",
    "Logo Animation & Reveal",
    "Lower Thirds & Titles",
    "Social Media Motion Packs",
    "UI/UX Screen Animations",
    "Infographic Animation",
  ],
  stats: [
    { value: "200+", label: "Motion Projects" },
    { value: "4K", label: "Output Quality" },
    { value: "72h", label: "Turnaround" },
    { value: "∞", label: "Revisions" },
  ],
  cta: "Get a Motion Quote",
};

export default function MotionGraphicsPage() {
  return <ServiceLandingPage data={data} />;
}
