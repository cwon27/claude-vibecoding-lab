import { HeroSection } from '@/components/sections/HeroSection';
import { PopularCities } from '@/components/sections/PopularCities';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Search & Filter */}
      <HeroSection />

      {/* Popular Cities Grid */}
      <PopularCities />

      {/* Real-time Stats Dashboard */}
      <StatsSection />

      {/* Core Features */}
      <FeaturesSection />

      {/* User Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
