import Hero from "@/components/home/hero.js";
import Navigation from "@/components/home/navigation.js";
import Agencies from "@/components/home/agencies.js";
import Strategies from "@/components/home/strategies.js";
import Disclaimer from "@/components/home/disclaimer.js";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navigation />
      <Agencies />
      <Strategies />
      <Disclaimer />
    </main>
  );
}
