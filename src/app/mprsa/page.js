"use client";
import { useState, useEffect } from "react";
import InternalPageHero from "@/components/InternalPageHero";

export default function Mprsa() {
  const [activeSection, setActiveSection] = useState("background");

  const sections = [
    { id: "background", label: "Background" },
    { id: "implementing-agency", label: "Implementing Agency" },
    { id: "regulatory-application", label: "Regulatory Application" },
    { id: "permits", label: "Permit(s) applicable to algaecide use" },
    { id: "contacts", label: "Contacts" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // scroll event
  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-20 py-10 tracking-wide">
      {/* Breadcrumb */}
      <div className="flex flex-row items-center gap-2 text-sm text-gray-500 mb-8">
        <svg
          className="usa-icon text-gray-500"
          aria-hidden="true"
          focusable="false"
          role="img"
        >
          <use href="/assets/img/sprite.svg#arrow_back"></use>
        </svg>
        <a href="/" className="text-primary hover:underline">
          Home
        </a>
        <span>›</span>
        <span className="text-primary">Permiting Laws</span>
        <span>›</span>
        <span className="text-gray-800">MPRSA</span>
      </div>

      {/* Page Hero Title */}
      <InternalPageHero
        title="Marine Protection, Research and Sanctuaries Act (MPRSA)"
        subtitle="MPRSA Overview"
        link="https://www.epa.gov/marine-protection-permitting"
      />
      {/* scroll left side */}
      <div className="flex flex-row gap-10 mt-0">
        <div className="w-56 shrink-0 mt-10">
          <div className="sticky top-8">
            <p className="font-bold text-black mb-3">On this page</p>
            <div className="border-l-2 border-gray-200 flex flex-col">
              {sections.map((section) => (
                <p
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`pl-4 py-2 text-sm cursor-pointer transition-colors duration-200 hover:text-primary ${
                    activeSection === section.id
                      ? "text-black font-semibold border-l-4 border-black -ml-[2px]"
                      : "text-primary"
                  }`}
                >
                  {section.label}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          {/* background section */}
          <div
            id="background"
            className="border-b-4 border-primary-lighter mt-10"
          >
            <h1 className="text-primary font-bold">Background</h1>
            <p className="mb-8 text-lg">
              The Marine Protection, Research and Sanctuaries Act (MPRSA) was
              enacted by the U.S Congress in 1972. MPRSA regulates the
              transportation and disposition of materials in the ocean that
              would adversely affect human health, welfare, or amenities, or the
              marine environment, ecological systems, or economic
              potentialities.
            </p>
          </div>

          {/* implementing agency section */}
          <div
            id="implementing-agency"
            className="border-b-4 border-primary-lighter text-lg"
          >
            <h1 className="text-primary font-bold">Implementing Agency(s)</h1>
            <div className="mb-6">
              <p>
                EPA, US Army Corps of Engineers (authorization of dredge
                disposition), US Coast Guard (surveillance)
              </p>
            </div>
            <div className="mb-8"></div>
          </div>

          {/* regulatory application */}
          <div
            id="regulatory-application"
            className="border-b-4 border-primary-lighter"
          >
            <h1 className="text-primary font-bold">Regulatory Application</h1>
            <div className="mb-8 text-lg">
              <p>
                MPRSA regulates the “dumping” of{" "}
                <span className="text-underline">any material</span> in the
                ocean seaward of the baseline. The baseline is defined as the
                mean lower low water line, or ordinary low water mark, along the
                coast and the "closing lines" across river mouths and openings
                of bays that are depicted on official United States Nautical
                Charts{" "}
                <a
                  href="https://www.epa.gov/marine-protection-permitting/marine-protection-research-and-sanctuaries-act-permits-frequently#whenismprsapermitrequired"
                  className="text-primary text-underline"
                  target="_blank"
                >
                  (see a map defining the baseline
                </a>
                ). The use of any algaecide product that will not be physically
                recovered from waters seaward of the baseline requires a permit
                under MPRSA.
              </p>
              <div className="mt-5">
                <ul>
                  <li className="whitespace-nowrap">
                    <b>Environment:</b> Saltwater
                  </li>
                  <li className="mt-5">
                    <b>Waterbody:</b> Territorial seas (coastline out to 3 nm),
                    Contiguous zone (3 - 9 nm off coastline), Economic exclusive
                    zone (200 nm), High seas (greater than 200 nm)
                  </li>
                  <li className="mt-5">
                    <b>Algaecide classification:</b> Conventional pesticide,
                    Biochemical pesticide, Antimicrobial pesticide, Minimum risk
                  </li>
                  <li className="mt-5">
                    <b>Related regulatory acts and permits:</b>{" "}
                    <a className="text-underline text-primary" href="/esa">
                      ESA
                    </a>
                    ,{" "}
                    <a
                      className="text-underline text-primary"
                      href="/section10"
                    >
                      RHA
                    </a>
                    ,{" "}
                    <a className="text-underline text-primary" href="/npdes">
                      CWA
                    </a>
                    ,{" "}
                    <a className="text-underline text-primary" href="/mmpa">
                      MMPA
                    </a>{" "}
                    <p>
                      Description: Algaecide use in coastal systems requires
                      compliance with the EPA’s Endangered Species Act and may
                      require permitting through the US Army Corps of Engineers’
                      Rivers and Harbors Act. The release of non-recoverable
                      algaecides into the waters of the US (WOTUS) requires an
                      NPDES permit.
                    </p>
                  </li>
                  <li className="mt-5">
                    <b>Additional considerations:</b> MPRSA permit applications
                    require a map of the area where the product will be
                    released. Be mindful of dispersion outside the planned
                    deployment area due to currents, wind, and tides.
                    Experimental use requires federal and state Experimental Use
                    Permits.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* permits applicable to algaecide use */}
          <div id="permits" className="border-b-4 border-primary-lighter">
            <h1 className="text-primary font-bold">
              Permit(s) applicable to algaecide use
            </h1>
            <div className="mb-8 text-lg">
              <p>
                <a
                  href="https://www.epa.gov/marine-protection-permitting/mprsa-research-permits"
                  className="text-primary text-underline"
                  target="_blank"
                >
                  Research Permit
                </a>
                ,{" "}
                <a
                  href="https://www.epa.gov/marine-protection-permitting/mprsa-general-permits"
                  className="text-primary text-underline"
                  target="_blank"
                >
                  General Permit
                </a>
                ,{" "}
                <a
                  href="https://www.epa.gov/marine-protection-permitting/marine-protection-research-and-sanctuaries-act-permits-frequently"
                  className="text-primary text-underline"
                  target="_blank"
                >
                  MPRSA Permit FAQs
                </a>
              </p>
            </div>
          </div>

          {/* Contacts */}
          <div id="contacts">
            <h1 className="text-primary font-bold">Contacts</h1>
            <p className="text-lg">
              Office of Pesticides Products (OPP) Contacts
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <p>
                Research Permits:{" "}
                <a
                  className="text-primary text-lg"
                  href="mailto:MarineProtectionPermitting@epa.gov"
                >
                  MarineProtectionPermitting@epa.gov
                </a>
              </p>
              <p>
                For all other inquiries, contact your {""}
                <a
                  href="https://www.epa.gov/marine-protection-permitting/forms/marine-protection-permitting-program-regional-contacts"
                  className="text-primary text-underline text-lg"
                  target="_blank"
                >
                  Regional MPRSA Agent.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
