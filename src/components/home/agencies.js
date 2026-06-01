import Link from "next/link";

export default function Agencies() {
  return (
    <div className="px-20 py-10 tracking-wide">
      {/* Agency Heading */}
      <p className="text-green font-bold text-sm">
        ACTS AND REGULATORY AGENCIES{" "}
      </p>
      <p className="font-bold text-3xl text-(--black)] mt-1">Permitting Laws</p>
      <p className="text-sm text-(--gray)] mt-2 max-w-xl whitespace-nowrap">
        Laws and regulations requiring permits for algaecide approval and
        deployment.
      </p>

      {/* Permitting Laws/ First Row */}
      <div className="flex flex-row mt-5 gap-5">
        {/* FIFRA */}
        <div className="relative p-3 bg-primary-lighter border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/USEPA.svg.png" className="w-16 h-16 mb-3 object-contain" />
          <div className="absolute top-3 right-3 bg-[#78a529] p-1 px-2 rounded-2xl text-white font-bold flex flex-row items-center gap-1 text-sm">
            <svg
              className="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#star"></use>
            </svg>
            Primary
          </div>
          <p className="font-semibold text-lg">Federal Insecticide,</p>
          <p className="font-semibold text-lg">Fungicide, and Rodenticide</p>
          <p className="font-semibold text-lg">Act (FIFRA)</p>
          <div className="mt-3 text-sm flex-1">
            <p>
              Regulates the use, sale, distribution, and registration of
              pesticides and algicides.
            </p>
          </div>
          <a
            href="/fifra"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* FFDCA */}
        <div className="relative p-3 bg-primary-lighter border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/USEPA.svg.png" className="w-16 h-16 mb-3 object-contain" />
          <div className="absolute top-3 right-3 bg-[#78a529] p-1 px-2 rounded-2xl text-white font-bold flex flex-row items-center gap-1 text-sm">
            <svg
              className="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#star"></use>
            </svg>
            Primary
          </div>
          <p className="font-semibold text-lg">Federal Food, Drug, and</p>
          <p className="font-semibold text-lg">Cosmetic Act (FFDCA)</p>
          <div className="mt-3 text-sm flex-1">
            <p>
              Authorizes the EPA to set pesticide tolerances in foods, including
              products used in marine or freshwater sites where fish or
              shellfish may be exposed and consumed by humans.
            </p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* PRIA */}
        <div className="relative p-3 bg-primary-lighter border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/USEPA.svg.png" className="w-16 h-16 mb-3 object-contain" />
          <div className="absolute top-3 right-3 bg-[#78a529] p-1 px-2 rounded-2xl text-white font-bold flex flex-row items-center gap-1 text-sm">
            <svg
              className="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#star"></use>
            </svg>
            Primary
          </div>
          <p className="font-semibold text-lg">Pesticide Registration</p>
          <p className="font-semibold text-lg">Improvement Act (PRIA)</p>
          <div className="mt-3 text-sm flex-1">
            <p>
              Establishes a fee-for-service system for pesticide registration at
              the EPA.
            </p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* NPDES */}
        <div className="relative p-3 bg-primary-lighter border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/USEPA.svg.png" className="w-16 h-16 mb-3 object-contain" />
          <div className="absolute top-3 right-3 bg-[#78a529] p-1 px-2 rounded-2xl text-white font-bold flex flex-row items-center gap-1 text-sm">
            <svg
              className="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#star"></use>
            </svg>
            Primary
          </div>
          <p className="font-semibold text-lg">Clean Water Act National</p>
          <p className="font-semibold text-lg">Pollutant Discharge</p>
          <p className="font-semibold text-lg">Elimination System (NPDES)</p>
          <div className="mt-3 text-sm flex-1">
            <p>
              Prohibits anybody from discharging "pollutants" through a "point
              source" into a "water of the United States" unless they have an
              NPDES permit.
            </p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Permitting Laws/ Second Row */}
      <div className="flex flex-row mt-5 gap-5">
        {/* State Policies */}
        <div className="relative p-3 bg-primary-lighter border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/us-map.png" className="w-16 h-16 mb-3 object-contain" />
          <div className="absolute top-3 right-3 bg-[#78a529] p-1 px-2 rounded-2xl text-white font-bold flex flex-row items-center gap-1 text-sm">
            <svg
              className="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#star"></use>
            </svg>
            Primary
          </div>
          <p className="font-semibold text-lg">State Policies and Permits</p>
          <div className="mt-3 text-sm flex-1">
            <p>More information coming soon!</p>
          </div>
          <a
            href="/regulationsDirectory"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* MPRSA */}
        <div className="relative p-3 bg-primary-lighter border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/USEPA.svg.png" className="w-16 h-16 mb-3 object-contain" />
          <div className="absolute top-3 right-3 bg-[#78a529] p-1 px-2 rounded-2xl text-white font-bold flex flex-row items-center gap-1 text-sm">
            <svg
              className="usa-icon"
              aria-hidden="true"
              focusable="false"
              role="img"
            >
              <use href="/assets/img/sprite.svg#star"></use>
            </svg>
            Primary
          </div>
          <p className="font-semibold text-lg">Marine Protection,</p>
          <p className="font-semibold text-lg">
            Research and Sanctuaries Act (MPRSA)
          </p>
          <div className="mt-3 text-sm flex-1">
            <p>
              Regulates the intentional transportation and disposal of materials
              into ocean waters.
            </p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* RHA/Section 10 */}
        <div className="relative p-3 border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/USEPA.svg.png" className="w-16 h-16 mb-3 object-contain" />
          <p className="font-semibold text-lg">Section 10 of the Rivers and</p>
          <p className="font-semibold text-lg">Harbors Act</p>
          <div className="mt-3 text-sm flex-1">
            <p>
              Prohibits unauthorized obstruction or alteration of U.S. navigable
              waters. A permit from the USACE is required for work or structures
              in, over, or under these waters, including many water bodies and
              wetlands regulated by the Corps.
            </p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Section 404 */}
        <div className="relative p-3 border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/castle.png" className="w-16 h-16 mb-3 object-contain" />
          <p className="font-semibold text-lg">Section 404 of the Clean</p>
          <p className="font-semibold text-lg">Water Act</p>
          <div className="mt-3 text-sm flex-1">
            <p>
              A permit is required for the discharge of dredged or fill material
              into waters of the United States.
            </p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* 2nd Heading */}
      <p className="font-bold text-3xl text-(--black)] mt-15">
        Acts Requiring Compliance
      </p>
      <p className="text-sm text-(--gray)] mt-2 max-w-xl whitespace-nowrap">
        Regulatory statutes with which the deployment of algaecide products must
        comply.
      </p>

      {/* Acts Requiring Compliance/ first row */}
      <div className="flex flex-row mt-5 gap-5">
        {/* Species Act */}
        <div className="p-3 border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/fish.svg.png" className="w-16 h-16 mb-3 object-contain" />
          <p className="font-semibold text-lg">Endangered Species Act</p>
          <div className="mt-3 text-sm flex-1">
            <p>
              Ensures actions authorized, funded, or carried out are not likely
              to jeopardize the continued existence of any listed species or
              result in the destruction or adverse modification of designated
              critical habitat of such species. EPA has an ecological risk
              assessment process for the evaluation of potential risk to
              endangered and threatened species from exposure to pesticides.
            </p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Stevens Act */}
        <div className="p-3 border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/NOAA.svg" className="w-16 h-16 mb-3 object-contain" />
          <p className="font-semibold text-lg">Magnuson-Stevens Act</p>
          <div className="mt-3 text-sm flex-1">
            <p>
              Protects habitat that fish need to spawn, breed, feed and grow to
              maturity and ensure a safe and sustainable supply of seafood.
            </p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* MMPA */}
        <div className="p-3 border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/NOAA.svg" className="w-16 h-16 mb-3 object-contain" />
          <p className="font-semibold text-lg">Marine Mammal Protection</p>
          <p className="font-semibold text-lg">Act (MMPA)</p>
          <div className="mt-3 text-sm flex-1">
            <p>
              Prohibits the disturbance of a marine mammal or marine mammal
              stock in the wild by causing disruption of behavioral patterns,
              including but not limited to migration, breathing, nursing,
              breeding, feeding, or sheltering (Level B harassment).
            </p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* NEPA */}
        <div className="p-3 border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/NEPA.svg.png" className="w-16 h-16 mb-3 object-contain" />
          <p className="font-semibold text-lg">National Environment Policy</p>
          <p className="font-semibold text-lg">Act (NEPA)</p>
          <div className="mt-3 text-sm flex-1">
            <p>
              Requires federal agencies to assess the environmental effects of
              their proposed actions prior to making decisions.
            </p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Acts Requiring Compliance/ second row */}
      <div className="flex flex-row mt-5 gap-5">
        {/* MBTA */}
        <div className="p-3 border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/fish.svg.png" className="w-16 h-16 mb-3 object-contain" />
          <p className="font-semibold text-lg">Migratory Birds Treaty</p>
          <p className="font-semibold text-lg">Act (MBTA)</p>
          <div className="mt-3 text-sm flex-1">
            <p>More information coming soon!</p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* NMSA */}
        <div className="p-3 border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/NOAA.svg" className="w-16 h-16 mb-3 object-contain" />
          <p className="font-semibold text-lg">National Marine Sanctuaries</p>
          <p className="font-semibold text-lg">Act (NMSA)</p>
          <div className="mt-3 text-sm flex-1">
            <p>More information coming soon!</p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        {/* CZMA */}
        <div className="p-3 border-gray-300 border-t-2 border-l-2 border-r-2 border-b-2 rounded w-full flex flex-col">
          <img src="/NOAA.svg" className="w-16 h-16 mb-3 object-contain" />
          <p className="font-semibold text-lg">
            Section 307 of the Coastal Zone Management
          </p>
          <p className="font-semibold text-lg">Act (CZMA)</p>
          <div className="mt-3 text-sm flex-1">
            <p>More information coming soon!</p>
          </div>
          <a
            href="/learnMore"
            className="text-sm font-bold underline text-black mt-auto pt-4 inline-block hover:text-primary transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
