import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/pages/ServiceLandingPage";
export const metadata: Metadata = {
  title: "Video Editing for Ecommerce Brands | Digitinize",
  description: "Ecommerce video editing that drives sales. Product videos, unboxing edits, ads, and social content that converts browsers into buyers.",
  alternates: { canonical: "https://digitinize.com/video-editing-for-ecommerce" },
};
const data = {
  badge: "Ecommerce Video Editing",
  headline: "Video Editing for",
  subheadline: "Ecommerce Brands",
  description: "Video content that sells. Product demos, UGC edits, ad creatives, and social content optimized for maximum conversion.",
  services: ["Product Demo Video Editing", "UGC Content Editing", "Meta & Google Ad Creatives", "Amazon Product Videos", "Unboxing Video Editing", "Shopify Store Videos", "Instagram & TikTok Reels", "Brand Story Videos"],
  stats: [{ value: "80+", label: "Ecommerce Clients" }, { value: "48h", label: "Turnaround" }, { value: "↑25%", label: "Avg ROAS Lift" }, { value: "4K", label: "Quality" }],
  cta: "Scale Your Ecommerce Content",
};
export default function VideoEditingForEcommercePage() { return <ServiceLandingPage data={data} />; }
