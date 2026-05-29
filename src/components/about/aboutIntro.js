export default function AboutIntro() {
  return (
    <div className="px-20 py-20 text-lg tracking-wide font-light">
      <p>
        The{" "}
        <b>
          United States Harmful Algal Bloom-Control Technologies Incubator (US
          HAB-CTI)
        </b>{" "}
        streamlines the vetting process for novel harmful algal bloom (HAB)
        control technologies. Our goal is to help the research community and
        funding agencies to identify and advance solutions that are feasible,
        environmentally acceptable, scalable, and cost-effective for controlling
        the impacts of both freshwater and marine HABS.
      </p>
      <p className="mt-6">
        We accelerate the development and assessment of strategies that
        eliminate or reduce harmful algae and their toxins through biological,
        chemical, or physical means. Our work is guided by an Advisory and
        Review Board with representatives from the U.S. Army Corps of Engineers,
        Environmental Protection Agency (EPA), U.S. Geological Survey (USGS),
        National Oceanic and Atmospheric Administration (NOAA), state agencies,
        academic institutions, non-governmental organizations, and industry.
      </p>

      {/* Our Mission */}
      <div className="flex flex-row gap-50 mt-18">
        <h1 className="font-bold text-2xl whitespace-nowrap">Our Mission</h1>
        <p>
          Our mission is to advance the development and use of effective,
          science-based technologies that control or reduce HABs and their
          toxins. We aim to expand the range of proven control options available
          and to simplify the licensing and permitting processes required for
          their deployment. By doing so, we support a more effective and
          coordinated national response of the growing challenge of HABs.
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
  );
}
