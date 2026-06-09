import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About Digitinize | Our Story, Team & Values",
  description: "Learn about Digitinize — India's premier video production company and global editing partner. Our story, process, values, and the team behind every frame.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
