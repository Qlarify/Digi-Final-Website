import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "Video Services | Digitinize — Production & Editing",
  description: "Complete video services from Digitinize. Video production in India and professional editing services globally. Corporate, commercial, brand films, motion graphics & more.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
