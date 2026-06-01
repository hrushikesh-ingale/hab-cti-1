export default function About() {
  return (
    <div className="tracking-wide px-20">
      {/* link to go back to home */}
      <div className="flex flex-row mt-5 font-light">
        <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 cursor-pointer w-fit">
          <svg
            className="usa-icon text-gray-500"
            aria-hidden="true"
            focusable="false"
            role="img"
          >
            <use href="/assets/img/sprite.svg#arrow_back"></use>
          </svg>
          <a className="text-black ml-2 text-sm relative group" href="/">
            About
            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-700" />
          </a>
        </div>
      </div>

      {/* Background image */}
      <div className="relative text-white mt-4 overflow-hidden h-75 rounded-lg">
        <div
          className="absolute inset-0 bg-cover bg-center kenburns-loop"
          style={{ backgroundImage: "url('/aboutHero.png')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-65 z-0" />
        {/* Content */}
        <div className="relative z-10 py-16 px-1 text-center mt-7">
          <h1 className="!text-5xl font-bold !mb-0 !mt-3">About</h1>
          <p className="text-lg !mt-3 text-gray-200">
            US Harmful Algal Bloom - Control
          </p>
          <p className="text-lg !mt-0 text-gray-200">
            Technologies & Regulatory Logistics
          </p>
        </div>
      </div>

      <div className="py-20 text-lg tracking-wide font-light">
        <p>
          The{" "}
          <b>
            United States HAB Control Technologies & Regulatory Logistics (US
            HAB CTRL)
          </b>{" "}
          streamlines the vetting process for novel harmful algal bloom (HAB)
          control technologies. Our goal is to help the research community and
          funding agencies to identify and advance solutions that are feasible,
          environmentally acceptable, scalable, and cost-effective for
          controlling the impacts of both freshwater and marine HABS.
        </p>
        <p className="mt-6">
          We accelerate the development and assessment of strategies that
          eliminate or reduce harmful algae and their toxins through biological,
          chemical, or physical means. Our work is guided by an Advisory and
          Review Board with representatives from the U.S. Army Corps of
          Engineers, Environmental Protection Agency (EPA), U.S. Geological
          Survey (USGS), National Oceanic and Atmospheric Administration (NOAA),
          state agencies, academic institutions, non-governmental organizations,
          and industry.
        </p>

        {/* Our Mission */}
        <div className="flex flex-row gap-50 mt-18">
          <h1 className="font-bold text-2xl whitespace-nowrap">Our Mission</h1>
          <p>
            Our mission is to advance the development and use of effective,
            science-based technologies that control or reduce HABs and their
            toxins. We aim to expand the range of proven control options
            available and to simplify the licensing and permitting processes
            required for their deployment. By doing so, we support a more
            effective and coordinated national response of the growing challenge
            of HABs.
          </p>
        </div>

        {/* Our Partners */}
        <div className="flex flex-row gap-50 mt-15">
          <h1 className="font-bold text-2xl whitespace-nowrap">Our Partners</h1>
          <div className="flex flex-row gap-10">
            <div className="flex flex-row items-center gap-6">
              <img
                src="/NOAA.svg"
                className="w-20 h-20 object-contain shrink-0"
              />
              <div className="text-primary font-bold">
                <p>National Oceanic and</p>
                <p>Atmospheric Administration</p>
                <p>(NOAA)</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <img
                src="/IMET.jpg"
                className="w-20 h-20 object-contain shrink-0"
              />
              <div className="text-primary font-bold">
                <p>Institute of Marine and</p>
                <p>Environmental Technology</p>
                <p>(IMET)</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <img
                src="/mote.png"
                className="w-20 h-20 object-contain shrink-0"
              />
              <div className="text-primary font-bold">
                <p>Mote Marine Laboratory</p>
                <p>(MOTE)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 text-lg">
        <p className="font-bold !text-4xl">The Team</p>
        {/* Team + Images */}
        <div className="flex flex-row mt-8 gap-8">
          <div className="flex-1">
            <img src="/allen.jpg" className="w-full h-64 object-cover" />
            <div className="mt-5 ml-1.5">
              <p className="font-bold text-xl">Allen R. Place</p>
              <p className="whitespace-nowrap">Director, US HAB-CTI</p>
              <p className="whitespace-nowrap">Professor, IMET -UMCES</p>
            </div>
          </div>
          <div className="flex-1">
            <img src="/taylor.jpg" className="w-full h-64 object-cover" />
            <div className="mt-5">
              <p className="font-bold text-xl">Taylor Armstrong</p>
              <p>Program Manager, US HAB-CTI</p>
              <p className="whitespace-nowrap">Professor, IMET -UMCES</p>
            </div>
          </div>
          <div className="flex-1">
            <img src="/lizabeth.jpg" className="w-full h-64 object-cover" />
            <div className="mt-5">
              <p className="font-bold text-xl">Lizabeth Longstreet</p>
              <p>Research Laboratory</p>
              <p className="whitespace-nowrap">Manager, US HAB-CTI,</p>
              <p className="whitespace-nowrap">Mote Marine Laboratory</p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/kevin.jpg"
              className="w-full h-64 object-cover object-top"
            />
            <div className="mt-5">
              <p className="font-bold text-xl">Kevin Claridge</p>
              <p className="whitespace-nowrap">
                Operations Manager, US HAB-CTI
              </p>
              <p>VP, Sponsored Research,</p>
              <p>Mote Marine Lab</p>
            </div>
          </div>
          <div className="flex-1">
            <img src="/amy.jpg" className="w-full h-64 object-cover" />
            <div className="mt-5">
              <p className="font-bold text-xl">Amy Grogan</p>
              <p className="whitespace-nowrap">
                Director of HAB-CTRL, US HAB-CTI,
              </p>
              <p>Faculty Research Assistant,</p>
              <p>IMET -UMCES</p>
            </div>
          </div>
        </div>
        {/* Contact Information */}
        <div className="flex flex-col gap-8 mt-5">
          <div className="flex flex-row items-start gap-30">
            <h1 className="text-2xl font-bold whitespace-nowrap">Contact Us</h1>
            <div>
              <p className="whitespace-nowrap mt-9">
                Please send comments or questions to <b>USHABCTI@umces.edu</b>
              </p>
            </div>
          </div>

          {/* Funding */}
          <div className="flex flex-row items-start gap-30">
            <h1 className="text-2xl font-bold whitespace-nowrap">Funding</h1>
            <div>
              <p className="mt-5 ml-12">
                The U.S. Harmful Algal Bloom-Control Tecnologies Incubator is
                supported by funding from <b>NOAA's National Centres for </b>
                <span>
                  <b>Coastal Ocean Science (NCCOS)</b>
                </span>{" "}
                {""}
                (NA22NOS4780172)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
