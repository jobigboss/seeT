import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroBackground } from "@/components/HeroBackground";
import { HeroSection } from "@/sections/HeroSection";
import { TrustStrip } from "@/sections/TrustStrip";
import { ServicesSection } from "@/sections/ServicesSection";
import { PlatformOverview } from "@/sections/PlatformOverview";
import { DataNetworkVisualization } from "@/sections/DataNetworkVisualization";
import { TechStack } from "@/sections/TechStack";
import { UseCases } from "@/sections/UseCases";
import { CallToAction } from "@/sections/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section with its background */}
        <div className="relative border-b border-white/5">
          <HeroBackground />
          <HeroSection />
        </div>
        
        <TrustStrip />
        <ServicesSection />
        <PlatformOverview />
        <DataNetworkVisualization />
        <TechStack />
        <UseCases />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
