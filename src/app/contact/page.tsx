import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Book a Discovery Call | Digitinize",
  description: "Start your video project today. Book a free 30-minute discovery call with Digitinize — India's premier video production company and global editing partner.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
