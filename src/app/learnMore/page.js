import Link from "next/link";

export default function LearnMore() {
  return (
    <div className="px-20 py-10 tracking-wide">
      {/* Breadcrumb */}
      <div className="mb-8 flex flex-row items-center gap-2 text-sm text-gray-500">
        <svg
          className="usa-icon text-gray-500"
          aria-hidden="true"
          focusable="false"
          role="img"
        >
          <use href="/assets/img/sprite.svg#arrow_back"></use>
        </svg>

        <Link href="/" className="text-primary hover:underline">
          Home
        </Link>

        <span>›</span>
        <span className="text-gray-800">Learn More</span>
      </div>

      {/* Header */}
      <div className="relative mt-4 h-50 text-white">
        <div className="absolute inset-0 bg-cover bg-center" />
        <div className="absolute inset-0 z-0 bg-black opacity-65" />

        <div className="relative z-10 mt-5 px-1 py-16 text-center duration-300 hover:scale-105">
          <h1 className="!mb-0 !mt-1 !text-4xl font-bold text-white">
            Learn More
          </h1>
          <p className="!mt-3 text-lg text-gray-200">
            Additional information about pesticide product categories and
            approval pathways
          </p>
        </div>
      </div>
    </div>
  );
}
