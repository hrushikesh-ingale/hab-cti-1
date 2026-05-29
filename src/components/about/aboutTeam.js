export default function AboutTeam() {
  return (
    <div className="tracking-wide px-20 py-4 text-lg">
      <p className="font-bold !text-4xl">The Team</p>

      {/* Team + Images */}
      <div className="flex flex-row mt-8">
        <div className="flex-1 w-full gap-10">
          <img src="/allen.jpg" className="w-48 h-64 object-cover" />
          <div className="mt-5 ml-1.5">
            <p className="font-bold text-xl">Allen R. Place</p>
            <p className="whitespace-nowrap">Director, US HAB-CTI</p>
            <p className="whitespace-nowrap">Professor, IMET -UMCES</p>
          </div>
        </div>
        <div className="flex-1 w-full gap-10">
          <img src="/taylor.jpg" className="w-48 h-64 object-cover" />
          <div className="mt-5">
            <p className="font-bold text-xl">Taylor Armstrong</p>
            <p>Program Manager, US HAB-CTI</p>
            <p className="whitespace-nowrap">Professor, IMET -UMCES</p>
          </div>
        </div>
        <div className="flex-1 w-full gap-10">
          <img src="/lizabeth.jpg" className="w-48 h-64 object-cover" />
          <div className="mt-5">
            <p className="font-bold text-xl">Lizabeth Longstreet</p>
            <p>Research Laboratory</p>
            <p className="whitespace-nowrap">Manager, US HAB-CTI,</p>
            <p className="whitespace-nowrap">Mote Marine Laboratory</p>
          </div>
        </div>
        <div className="flex-1 w-full gap-10">
          <img src="/kevin.jpg" className="w-48 h-64 object-cover" />
          <div className="mt-5">
            <p className="font-bold text-xl">Kevin Claridge</p>
            <p className="whitespace-nowrap">Operations Manager, US HAB-CTI</p>
            <p>VP, Sponsored Research,</p>
            <p>Mote Marine Lab</p>
          </div>
        </div>
        <div className="flex-1 w-full gap-10">
          <img src="/amy.png" className="w-48 h-64 object-cover" />
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
            <p className="whitespace-nowrap mt-7">
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
  );
}
