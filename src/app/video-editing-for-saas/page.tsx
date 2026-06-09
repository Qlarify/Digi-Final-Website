import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
export const metadata: Metadata = {
  title: "Video Editing for SaaS Companies | Digitinize",
  description: "Specialized video editing for SaaS and tech companies. Product demos, explainer videos, onboarding, and marketing videos that convert trials to customers.",
  alternates: { canonical: "https://digitinize.com/video-editing-for-saas" },
};
const data = {
  badge: "SaaS Video Editing",
  headline: "Video Editing for",
  subheadline: "SaaS Companies",
  description: "We understand SaaS marketing. Product demos that convert, onboarding videos that reduce churn, and brand films that land enterprise deals.",
  services: ["Product Demo Video Editing", "Onboarding & Tutorial Videos", "Explainer Video Production", "Customer Testimonial Editing", "Webinar & Event Recording", "Social Proof Video Editing", "Investor Pitch Video", "Feature Launch Announcements"],
  stats: [{ value: "60+", label: "SaaS Clients" }, { value: "3×", label: "Avg Conversion Lift" }, { value: "48h", label: "Turnaround" }, { value: "4K", label: "Quality" }],
  cta: "Talk to a SaaS Specialist",
};
export default function VideoEditingForSaasPage() { return <ServiceLandingPage data={data} />; }
