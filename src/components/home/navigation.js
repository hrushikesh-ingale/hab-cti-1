"use client";
import Link from "next/link";

export default function Navigation({ cms }) {
  // 1. Laws and Permits Array
  const lawsAndPermits = [
    {
      title: cms?.lawsPermitsCard01Title || "Research Requirements",
      description: cms?.lawsPermitsCard01Description || "Data Requirements for EPA Registration",
      href: cms?.lawsPermitsCard01Link || "/researchRequirements",
      icon: cms?.lawsPermitsCard01Icon || "star",
    },
    {
      title: cms?.lawsPermitsCard02Title || "Field Studies",
      description: cms?.lawsPermitsCard02Description || "Experimental Use Permits",
      href: cms?.lawsPermitsCard02Link || "/experimentalUse",
      icon: cms?.lawsPermitsCard02Icon || "construction_worker",
    },
    {
      title: cms?.lawsPermitsCard03Title || "External Resources",
      description: cms?.lawsPermitsCard03Description || "Learn More!",
      href: cms?.lawsPermitsCard03Link || "/externalResources",
      icon: cms?.lawsPermitsCard03Icon || "link",
    },
    {
      title: cms?.lawsPermitsCard04Title || "Getting an Approval",
      description: cms?.lawsPermitsCard04Description || "Permits & Regulations",
      href: cms?.lawsPermitsCard04Link || "/gettingApproval",
      icon: cms?.lawsPermitsCard04Icon || "thumb_up_alt",
    },
    {
      title: cms?.lawsPermitsCard05Title || "Regulatory Agencies",
      description: cms?.lawsPermitsCard05Description || "Federal & State Regulations",
      href: cms?.lawsPermitsCard05Link || "/regulationsDirectory",
      icon: cms?.lawsPermitsCard05Icon || "topic",
    },
  ];

  // 2. Literature Array (Mapped from image_81d6a4.png structures)
  const literature = [
    {
      title: cms?.literatureCardTitle01 || "HABs 101",
      description: cms?.literatureCardDescription01 || "Species, Impacts, Research, Resources, Response",
      href: cms?.literatureCardLink01 || "/habs101",
      icon: cms?.literatureCardIcon01 || "public",
    },
    {
      title: cms?.literatureCardTitle02 || "Literature Search",
      description: cms?.literatureCardDescription02 || "Publications on HAB control technologies",
      href: cms?.literatureCardLink02 || "/literatureSearch",
      icon: cms?.literatureCardIcon02 || "local_library",
    },
    {
      title: cms?.literatureCardTitle03 || "Consultants Database",
      description: cms?.literatureCardDescription03 || "Get Consultants or Experts",
      href: cms?.literatureCardLink03 || "/consultantsDatabase",
      icon: cms?.literatureCardIcon03 || "contact_page",
    },
    {
      title: cms?.literatureCardTitle04 || "Control Technologies",
      description: cms?.literatureCardDescription04 || "Common Concepts",
      href: cms?.literatureCardLink04 || "/controlTechnologies",
      icon: cms?.literatureCardIcon04 || "history",
    },
  ];

  // 3. Products Array (Mapped from image_81d6a4.png structures)
  const products = [
    {
      title: cms?.productsCardTitle01 || "Registered Products",
      description: cms?.productsCardDescription01 || "Product Catalogue",
      href: cms?.productsCardLink01 || "/registeredProducts",
      icon: cms?.productsCardIcon01 || "verified",
    },
    {
      title: cms?.productsCardTitle02 || "Patent Search",
      description: cms?.productsCardDescription02 || "IP, Inventorship Agreements & Registration Information",
      href: cms?.productsCardLink02 || "/patentSearch",
      icon: cms?.productsCardIcon02 || "search",
    },
  ];

  return (
    <section className="w-full px-4 py-8 tracking-wide sm:px-6 sm:py-10 lg:px-10 xl:px-20">
      <p className="text-sm font-semibold text-green">RESOURCE NAVIGATION</p>

      <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
        Quick Access to Key Tools
      </h2>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
        Easily find permits, research, technologies, and approved products related to HAB control.
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