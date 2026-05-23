export default function AboutHero() {
  return (
    <div className="tracking-wide">
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
            About
            <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-700" />
          </a>
        </div>
      </div>

      {/* Background image */}
      <div className="relative text-white mt-4 overflow-hidden h-85">
        <div
          className="absolute inset-0 bg-cover bg-center kenburns-loop"
          style={{ backgroundImage: "url('/aboutHero.png')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-65 z-0" />
        {/* Content */}
        <div className="relative z-10 py-16 px-1 text-center mt-5">
          <svg
            className="usa-icon text-5xl border p-1 rounded !mb-0"
            aria-hidden="true"
            focusable="false"
            role="img"
          >
            <use href="/assets/img/sprite.svg#groups"></use>
          </svg>
          <h1 className="!text-6xl font-bold !mb-0 !mt-1">About</h1>
          <p className="text-lg !mt-3 text-gray-200">
            US Harmful Algal Bloom - Control
          </p>
          <p className="text-lg !mt-0 text-gray-200">
            Technologies & Regulatory Logistics
          </p>
        </div>
      </div>
    </div>
  );
}
