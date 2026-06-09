import { HeroSection }        from "@/components/home/HeroSection";
import { ClientLogos }         from "@/components/home/ClientLogos";
import { ProblemSection }      from "@/components/home/ProblemSection";
import { ServicesSection }     from "@/components/home/ServicesSection";
import { FeaturedWork }        from "@/components/home/FeaturedWork";
import { StatsSection }        from "@/components/home/StatsSection";
import { ProcessSection }      from "@/components/home/ProcessSection";
import { ComparisonSection }   from "@/components/home/ComparisonSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { GlobalEditingSection }from "@/components/home/GlobalEditingSection";
import { IndustriesSection }   from "@/components/home/IndustriesSection";
import { FAQSection }          from "@/components/home/FAQSection";
import { TrustSection }        from "@/components/home/TrustSection";
import { CTASection }          from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <ProblemSection />
      <ServicesSection />
      <FeaturedWork />
      <StatsSection />
      <ProcessSection />
      <ComparisonSection />
      <TestimonialsSection />
      <GlobalEditingSection />
      <IndustriesSection />
      <FAQSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
