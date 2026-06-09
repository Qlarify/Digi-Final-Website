import type { Metadata } from "next";
import { IndustriesPageContent } from "@/components/pages/IndustriesPageContent";

export const metadata: Metadata = {
  title: "Industries We Serve | Digitinize Video Production",
  description: "Digitinize creates video content for SaaS, healthcare, real estate, hospitality, finance, education, manufacturing, and ecommerce. Industry-specific expertise.",
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
