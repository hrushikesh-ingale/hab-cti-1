import Hero from "@/components/home/hero.js";
import Navigation from "@/components/home/navigation.js";
import Agencies from "@/components/home/agencies.js";
import Strategies from "@/components/home/strategies.js";
import Disclaimer from "@/components/home/disclaimer.js";

import { getHomepageFields, getNavigationFields } from "@/lib/cms";

export default async function Home() {
  // Fetch both streams in parallel
  const [heroData, navigationData] = await Promise.all([
    getHomepageFields(),
    getNavigationFields()
  ]);

  return (
    <main>
      <Hero cms={heroData} />
      <Navigation cms={navigationData} />
      <Agencies />
      <Strategies />
      <Disclaimer />
    </main>
  );
}