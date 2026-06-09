import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageTransition } from "@/components/PageTransition";
import { UrgencyBanner } from "@/components/UrgencyBanner";
import { StickyBottomBar } from "@/components/StickyBottomBar";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digitinize | Cinematic Video Production & Professional Video Editing",
  description:
    "Digitinize delivers world-class video production in India and professional video editing services globally. Corporate videos, brand films, motion graphics & more.",
  keywords:
    "video production india, corporate video production, video editing services, white label video editing, motion graphics, color grading, brand films",
  openGraph: {
    title: "Digitinize | Cinematic Video Production & Editing",
    description: "Premium video production for India. Professional editing services worldwide.",
    type: "website",
    url: "https://digitinize.com",
    siteName: "Digitinize",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <Navigation />
          <PageTransition><main>{children}</main></PageTransition>
          <Footer />
          <FloatingCTA />
          <ExitIntentPopup />
        </SmoothScroll>
      </body>
    </html>
  );
}
