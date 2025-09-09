import { HeroSection } from '@/components/sections/HeroSection';
import { PopularCities } from '@/components/sections/PopularCities';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Search & Filter */}
      <HeroSection />

      {/* Popular Cities Grid */}
      <PopularCities />
    </div>
  );
}
