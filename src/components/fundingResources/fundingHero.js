export default function FundingHero() {
  return (
    <div className="tracking-wide px-20">
      {/* link to go back to home */}
      <div className="flex flex-row mt-5 ml-4 font-light">
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
            Funding Resources
            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-700" />
          </a>
        </div>
      </div>

      {/* Background image */}
      <div className="relative text-white mt-4 overflow-hidden h-75 rounded-lg">
        <div
          className="absolute inset-0 bg-cover bg-center kenburns-loop"
          style={{ backgroundImage: "url('/fundingHero.png')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-65 z-0" />
        {/* Content */}
        <div className="relative z-10 py-16 px-1 text-center mt-5">
          <h1 className="!text-5xl font-bold !mb-0 !mt-3">
            Funding Opportunities
          </h1>
          <p className="text-lg !mt-3 text-gray-200">
            A repository of available grants and funding options
          </p>
          <p className="text-lg !mt-0 text-gray-200">for your research.</p>
        </div>
      </div>

      {/* WIP */}
      <div className="text-center mb-8 mt-10">
        <h1 className="text-3xl text-primary font-bold">
          This page is currently under development...
        </h1>
        <p>Please check back soon!</p>
      </div>
    </div>
  );
}
