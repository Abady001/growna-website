import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyGrowna } from "@/components/sections/why-growna";
import { Process } from "@/components/sections/process";
import { FeaturedSolutions } from "@/components/sections/featured-solutions";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyGrowna />
      <Process />
      <FeaturedSolutions />
      <CTASection />
    </>
  );
}
