export default function AboutTeam() {
  return (
    <div className="tracking-wide px-20 py-20">
      {/* Team + Images */}
      <p className="font-bold text-3xl">The Team</p>
      <div className="flex flex-row gap-5 mt-10">
        <div>
          <img src="/allen.jpg" className="w-80 h-80 object-contain" />
          <p className="font-bold text-xl">Allen R. Place</p>
          <p>Director, US HAB-CTI</p>
          <p>Professor, IMET -UMCES</p>
        </div>

        <div>
          <img src="/taylor.jpg" className="w-80 h-80 object-contain" />
          <p className="font-bold text-xl">Taylor Armstrong</p>
          <p>Program Manager, US HAB-CTI</p>
          <p>Professor, IMET -UMCES</p>
        </div>

        <div>
          <img src="/lizabeth.jpg" className="w-80 h-80 object-contain" />
          <p className="font-bold text-xl">Lizabeth Longstreet</p>
          <p>Research Laboratory</p>
          <p>Manager, US HAB-CTI,</p>
          <p>Mote Marine Laboratory</p>
        </div>

        <div>
          <img src="/kevin.jpg" className="w-80 h-80 object-contain" />
          <p className="font-bold text-xl">Kevin Claridge</p>
          <p>Operations Manager, US HAB-CTI</p>
          <p>VP, Sponsored Research,</p>
          <p>Mote Marine Lab</p>
        </div>

        <div>
          <img src="/amy.png" className="w-80 h-80 object-contain" />
          <p className="font-bold text-xl">Amy Grogan</p>
          <p>Director, HAB-CTI,</p>
          <p>Faculty Research Assistant</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="flex flex-row gap-65 mt-15">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p>Please send comments or questions to</p>
          <p className="font-bold">USHABCTI@umces.edu</p>
          <div className="mt-7">
            <p>Follow us on Facebook:</p>
            <p className="font-bold">facebook.com/page-link</p>
          </div>
        </div>

        {/* Funding */}
        <div>
          <h1 className="text-3xl font-bold">Funding</h1>
          <p>The U.S. Harmful Algal Bloom-Control Tecnologies Incubator is</p>
          <p>
            supported by funding from <b>NOAA's National Centres for </b>
            <span>
              <b>Coastal Ocean Science (NCCOS)</b>
            </span>
          </p>

          <div className="mt-7">
            <p>(NA22NOS4780172)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
