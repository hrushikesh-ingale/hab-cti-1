import Hero from "@/components/home/hero.js";
import Navigation from "@/components/home/navigation.js";
import Agencies from "@/components/home/agencies.js";
import Strategies from "@/components/home/strategies.js";
import Disclaimer from "@/components/home/disclaimer.js";

import { 
  getHomepageFields, 
  getNavigationFields, 
  getPermittingLawsFields, 
  getComplianceActsFields,
  getStrategiesFields,
  getDisclaimerFields
} from "@/lib/cms";

export default async function Home() {
  // Fetch all five streams concurrently in parallel
  const [
    heroData, 
    navigationData, 
    permittingData, 
    complianceData,
    strategiesData,
    disclaimerData

  ] = await Promise.all([
    getHomepageFields(),
    getNavigationFields(),
    getPermittingLawsFields(),
    getComplianceActsFields(),
    getStrategiesFields(),
    getDisclaimerFields()
  ]);

  return (
    <main>
      <Hero cms={heroData} />
      <Navigation cms={navigationData} />
      <Agencies permittingCms={permittingData} complianceCms={complianceData} />
      {/* Injected consolidated control strategies data fields */}
      <Strategies cms={strategiesData} />
      <Disclaimer cms={disclaimerData} />
    </main>
  );
}