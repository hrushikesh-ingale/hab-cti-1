export default function FundingSources() {
  return (
    <div>
      {/* Other Funding Opportunities */}
      <div className="border border-b-primary-lighter">
        <h1 className="font-bold text-primary-darker">
          Other Funding Opportunities
        </h1>
        <p className="font-bold text-primary hover:underline hover:text-primary">
          NOAA NCCOS PCMHAB
        </p>
        <p className="font-bold text-primary hover:underline hover:text-primary">
          USACE ERDC HAB Technology Demonstration Program
        </p>
        <p className="font-bold text-primary hover:underline hover:text-primary">
          USACE Freshwater Harmful Algal Bloom Research and
        </p>
        <p className="font-bold text-primary hover:underline hover:text-primary">
          FFWCC
        </p>
        <p className="font-bold text-primary hover:underline hover:text-primary">
          USGS HABs Matching Funds
        </p>
        <p className="font-bold text-primary hover:underline hover:text-primary">
          Florida Red Tide Mitigation and Technology Development Initiative
        </p>
      </div>

      {/* Data Partners */}
      <h1 className="text-primary-darker font-bold text-xs justify-center">
        DATA PARTNERS
      </h1>
      <div className="flex flex-row gap-50 justify-center">
        <div>
          <img src="/NOAA.svg" className="w-50 h-50 object-contain" />
          <p className="flex flex-row">NOAA</p>
        </div>

        <img src="/IMET.jpg" className="w-50 h-50 object-contain" />

        <img src="/MoteMarine.png" className="w-50 h-50 object-contain" />
      </div>
    </div>
  );
}
