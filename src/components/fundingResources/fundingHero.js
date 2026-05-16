export default function FundingHero() {
  return (
    <div className="tracking-wide">
      {/* link to go back to home */}
      <div className="flex flex-row mt-5 ml-4 font-light">
        <svg
          className="usa-icon text-gray-500"
          aria-hidden="true"
          focusable="false"
          role="img"
        >
          <use href="/assets/img/sprite.svg#arrow_back"></use>
        </svg>
        <a className="text-black ml-2 hover:text-primary text-sm" href="/">
          Funding Resources
        </a>
      </div>

      {/* funding hero image */}
      <div className="relative mt-8">
        <img src="/" className="w-full object-cover h-105" />
        <div className="absolute inset-0 bg-black opacity-80 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
          <h1 className="!text-6xl font-bold">Funding Opportunities</h1>
          <p className="text-xl">
            A repository of available grants and funding options
          </p>
          <p className="text-xl">for your research.</p>
        </div>
      </div>

      <div className="border-primary-lighter border-b-6 mt-20 flex flex-row">
        <div>
          <p className="font-bold">On this page</p>
          <p>US HABCTI Grnat Information</p>
          <p>2025 Notice of Funding and Review Process</p>
          <p>Resources</p>
          <p>Other Funding Opportunities</p>
        </div>
        <h1 className="text-primary-darker">US HAB-CTI Grant Information</h1>
        <p className="mb-6 font-light">
          One of the objectives of the US HAB-CTI is to fund extramural proof of
          concept, innovative HAB control tools and technology projects to
          assess their real-world feasibility. It is anticipated that US HAB-CTI
          research will primarily be conducted in the scale of "Tier 1" (small
          scale lab testing) or "Tier 2" (tanks, mesocosms, and raceways).
          Promising US HAB-CTI tools and technologies will be encouraged to
          apply to relevant future NOAA Prevention Control and Mitigation HAB
          competitive funding announcements or other opportunities independent
          from the US HAB-CTI (shown as "Tier 3" and "Tier 4" in image).
        </p>
      </div>

      {/* Tiers */}

      <div className="px-5 py-10">
        <p>images here</p>
        <h1 className="font-bold">US Harmful Algal Bloom - Control</h1>
        <h1 className="font-bold">Technologies Incubator Clearinghouse</h1>

        <div className="bg-primary-lighter px-3 py-10 flex flex-row gap-25">
          <p>Incubator Funding</p>
          <p>Other Funding</p>
          <div className="bg-white">
            <h1 className="font-bold">Tier 1</h1>
            <p>Lab expiriments &</p>
            <p>Literature Search</p>
            <p>Img here</p>
            <ul>
              <li>Effects on the cells and Toxins in the Lab</li>
              <li>Previous Uses Worldwide</li>
              <li>Exisiting Regulatory</li>
              <li>Approvals</li>
            </ul>
          </div>
          <div className="bg-white">
            <h1 className="font-bold">Tier 2</h1>
            <p>Mesocosms,</p>
            <p>Raceways,</p>
            <p>Collaborations</p>
            <p>Img here</p>
            <ul>
              <li>Effective with Natural Communities</li>
              <li>Ecological Impacts</li>
              <li>Human Health Concerns</li>
              <li>Logistical Issues</li>
              <li>Economically Feasible</li>
            </ul>
          </div>
          <div className="bg-white">
            <h1 className="font-bold">Tier 3</h1>
            <p>Canals/Marinas,</p>
            <p>Nearshore,</p>
            <p>Offshore</p>
            <p>Img here</p>
            <ul>
              <li>Pilot Studies</li>
              <li>Field Demonstrations</li>
              <li>Federal/State/Local</li>
              <li>Regulatory Approvals</li>
              <li>Public Interactions</li>
            </ul>
          </div>
          <div className="bg-white">
            <h1 className="font-bold">Tier 4</h1>
            <p>Commercialize</p>
            <p>Monitor</p>
            <p>Img here</p>
            <ul>
              <li>Customers</li>
              <li>Intellectual Property</li>
              <li>Efficiency Scaling</li>
              <li>State/Local Budgets</li>
              <li>Deployment</li>
              <li>Contractors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
