import type { Metadata } from "next";
import { PortfolioPageContent } from "@/components/pages/PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio | Digitinize — Video Production & Editing Showreel",
  description: "Explore Digitinize's portfolio of cinematic brand films, corporate videos, commercials, motion graphics, and edited content for brands across India and globally.",
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
