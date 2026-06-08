import Link from "next/link";

const lawsAndPermits = [
  {
    title: "Research Requirements",
    description: "Data Requirements for EPA Registration",
    href: "/researchRequirements",
    icon: "star",
  },
  {
    title: "Field Studies",
    description: "Experimental Use Permits",
    href: "/experimentalUse",
    icon: "construction_worker",
  },
  {
    title: "External Resources",
    description: "Learn More!",
    href: "/externalResources",
    icon: "link",
  },
  {
    title: "Getting an Approval",
    description: "Permits & Regulations",
    href: "/gettingApproval",
    icon: "thumb_up_alt",
  },
  {
    title: "Regulatory Agencies",
    description: "Federal & State Regulations",
    href: "/regulationsDirectory",
    icon: "topic",
  },
];

const literature = [
  {
    title: "HABs 101",
    description: "Species, Impacts, Research, Resources, Response",
    href: "/habs101",
    icon: "public",
  },
  {
    title: "Literature Search",
    description: "Publications on HAB control technologies",
    href: "/literatureSearch",
    icon: "local_library",
  },
  {
    title: "Consultants Database",
    description: "Get Consultants or Experts",
    href: "/consultantsDatabase",
    icon: "contact_page",
  },
  {
    title: "Control Technologies",
    description: "Common Concepts",
    href: "/controlTechnologies",
    icon: "history",
  },
];

const products = [
  {
    title: "Registered Products",
    description: "Product Catalogue",
    href: "/registeredProducts",
    icon: "verified",
  },
  {
    title: "Patent Search",
    description: "IP, Inventorship Agreements & Registration Information",
    href: "/patentSearch",
    icon: "search",
  },
];

function ToolCard({ item }) {
  return (
    <Link
      href={item.href}
      className="group block h-full rounded-md border border-gray-300 bg-white p-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,94,162,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <svg
            className="usa-icon mt-0.5 shrink-0 text-xl"
            aria-hidden="true"
            focusable="false"
            role="img"
          >
            <use href={`/assets/img/sprite.svg#${item.icon}`}></use>
          </svg>

          <div className="min-w-0">
            <p className="font-semibold leading-snug text-black">
              {item.title}
            </p>
            <p className="mt-1 text-sm leading-snug text-gray-700">
              {item.description}
            </p>
          </div>
        </div>

        <svg
          className="usa-icon mt-0.5 shrink-0 text-xl transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
          focusable="false"
          role="img"
        >
          <use href="/assets/img/sprite.svg#launch"></use>
        </svg>
      </div>
    </Link>
  );
}

function ToolSection({ title, items, className = "", gridClassName = "" }) {
  return (
    <fieldset
      className={`rounded-xl border border-primary px-4 py-6 font-medium sm:px-6 sm:py-8 lg:px-8 ${className}`}
    >
      <legend className="px-2 text-base font-medium text-primary">
        {title}
      </legend>

      <div className={`mt-4 grid grid-cols-1 gap-4 sm:gap-6 ${gridClassName}`}>
        {items.map((item) => (
          <ToolCard key={item.title} item={item} />
        ))}
      </div>
    </fieldset>
  );
}

export default function Navigation() {
  return (
    <section className="w-full px-4 py-8 tracking-wide sm:px-6 sm:py-10 lg:px-10 xl:px-20">
      {/* Heading */}
      <p className="text-sm font-semibold text-green">RESOURCE NAVIGATION</p>

      <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
        Quick Access to Key Tools
      </h2>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
        Easily find permits, research, technologies, and approved products
        related to HAB control.
      </p>

      {/* Laws and Permit Section */}
      <ToolSection
        title="Laws and Permits"
        items={lawsAndPermits}
        className="mt-8"
        gridClassName="md:grid-cols-2 xl:grid-cols-3"
      />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
        <ToolSection
          title="Literature"
          items={literature}
          gridClassName="md:grid-cols-2"
        />

        <ToolSection title="Products" items={products} />
      </div>
    </section>
  );
}