"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import InternalPageHero from "@/components/InternalPageHero";
import { getResearchRequirementsFields } from "@/lib/cms";

// --- STATIC DEFAULT RECOVERY ARRAYS (IF CMS FIELD BOXES ARE EMPTY) ---
const fallbackConventional = {
  tableTitle: "Conventional",
  tableLink: "https://www.epa.gov/pesticide-registration/conventional-pesticide-registration",
  rows: [
    { group: { title: "Applicator Exposure (Occupational & Residential)", link: "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-875-occupational-and-residential-exposure" } },
    { rd: "875.1100", bppd: "", name: "Dermal Outdoor Exposure", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "875.1300", bppd: "", name: "Inhalation Outdoor Exposure", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "875.1500", bppd: "", name: "Biological Monitoring", registrationFood: "CR", eupFood: "CR", nonFood: "CR" },
    { rd: "875.1600", bppd: "", name: "Data Reporting and Calculations", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "875.1700", bppd: "", name: "Product Use Information", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { group: { title: "Confidential Product Chemistry", link: "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-830-product-properties-test-guidelines" } },
    { rd: "830.1550", bppd: "", name: "Product Identity and Composition", registrationFood: "R", eupFood: "NR", nonFood: "NR" },
    { rd: "830.1600", bppd: "", name: "Description of Materials Used to Produce the Product", registrationFood: "R", eupFood: "NR", nonFood: "NR" },
    { rd: "830.1620", bppd: "", name: "Description of Production Process", registrationFood: "R", eupFood: "NR", nonFood: "NR" },
    { rd: "830.1650", bppd: "", name: "Description of formulation process", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "830.1670", bppd: "", name: "Discussion of Formation of Impurities", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "830.1700", bppd: "", name: "Preliminary Analysis", registrationFood: "CR", eupFood: "CR", nonFood: "CR" },
    { rd: "830.1750", bppd: "", name: "Certified Limits", registrationFood: "R", eupFood: "NR", nonFood: "NR" },
    { rd: "830.1800", bppd: "", name: "Enforcement Analytical Method", registrationFood: "R", eupFood: "NR", nonFood: "NR" },
    { rd: "830.1900", bppd: "", name: "Submittal of Samples", registrationFood: "CR", eupFood: "R", nonFood: "R" }
  ]
};

const fallbackBiochemical = {
  tableTitle: "Biochemical",
  tableLink: "https://www.epa.gov/pesticide-registration/biopesticide-registration",
  rows: [
    { group: { title: "Confidential Product Chemistry", link: "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-880-biochemicals-test-guidelines" } },
    { rd: "", bppd: "880.1100", name: "Product Identity and Composition", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "", bppd: "880.1200", name: "Description of Materials Used to Produce the Product", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "", bppd: "880.1200", name: "Description of Production Process", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "", bppd: "880.1200", name: "Description of formulation process", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "", bppd: "880.1400", name: "Discussion of Formation of Impurities", registrationFood: "R", eupFood: "R", nonFood: "R" }
  ]
};

const fallbackMicrobial = {
  tableTitle: "Microbial",
  tableLink: "https://www.epa.gov/pesticide-registration/biopesticide-registration",
  rows: [
    { group: { title: "Confidential Microbiology", link: "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-885-microbial-pesticide-test-guidelines" } },
    { rd: "", bppd: "885.1400", name: "Analysis of Samples", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "", bppd: "885.1500", name: "Certification of Limits", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "", bppd: "885.1300", name: "Discussion of Formation of Unintentional Ingredients", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "", bppd: "885.1200", name: "Manufacturing Process", registrationFood: "R", eupFood: "R", nonFood: "R" },
    { rd: "", bppd: "885.1100", name: "Product Identity", registrationFood: "R", eupFood: "R", nonFood: "R" }
  ]
};

function requirementClass(value) {
  if (value?.startsWith("R")) return "bg-[#fff2cc]";
  if (value?.startsWith("CR")) return "bg-[#cfe2f3]";
  return "bg-white";
}

function RequirementCell({ value }) {
  return (
    <td className={`border border-black px-1 py-1 align-middle text-[11px] leading-tight xl:px-1.5 xl:text-xs ${requirementClass(value)}`}>
      {value || ""}
    </td>
  );
}

function TableHeadingLink({ href, children }) {
  if (!href) return <span className="text-black">{children}</span>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#1155cc] underline underline-offset-2">
      {children}
    </a>
  );
}

function RequirementTable({ tableData }) {
  if (!tableData || !tableData.rows || tableData.rows.length === 0) return null;

  return (
    <div className="mb-10 w-full overflow-x-auto">
      <table className="w-full min-w-[760px] table-fixed border-collapse border border-black text-left text-[11px] leading-tight text-black xl:text-xs">
        <colgroup>
          <col className="w-[8%]" />
          <col className="w-[8%]" />
          <col className="w-[43%]" />
          <col className="w-[14%]" />
          <col className="w-[15%]" />
          <col className="w-[12%]" />
        </colgroup>

        <caption className="border border-b-0 border-black bg-[#f1f3f4] px-3 py-2 text-center text-sm font-normal text-black xl:text-base">
          <TableHeadingLink href="https://www.epa.gov/pesticide-registration/data-requirements-pesticide-registration">
            Data requirements and test methods for pesticide products by type.
          </TableHeadingLink>
        </caption>

        <thead>
          <tr>
            <th colSpan="6" className="border border-black bg-white px-2 py-1.5 text-center text-[11px] font-bold xl:text-xs">
              Adapted from EPA Data Requirements for Development and Registration of Pesticide End-Use Products (EPs) • Prepared by Cynthia Ann Smith of Conn &amp; Smith, Inc. • 1/31-25
            </th>
          </tr>
          <tr>
            <th colSpan="6" className="border border-black bg-white px-2 py-2 text-center text-lg font-bold xl:text-xl">
              <TableHeadingLink href={tableData.tableLink}>
                {tableData.tableTitle}
              </TableHeadingLink>
            </th>
          </tr>
          <tr>
            <th className="border border-black bg-white px-1 py-1.5 text-left text-[11px] font-bold xl:text-xs">RD -<br />Registration<br />Division</th>
            <th colSpan="2" className="border border-black bg-white px-1 py-1.5 text-left text-[11px] font-normal xl:text-xs">
              <span className="font-bold">BPPD</span> - Biopesticides Division, unique tests for biopesticides, applicable to Biochemical and Microbial)
            </th>
            <th className="border border-black bg-white px-1 py-1.5 text-center text-xs font-bold xl:text-sm">REGISTRATION</th>
            <th colSpan="2" className="border border-black bg-white px-1 py-1.5 text-center text-xs font-bold xl:text-sm">EXPERIMENTAL USE PERMIT</th>
          </tr>
          <tr>
            <th colSpan="2" className="border border-black bg-white px-1 py-1.5 text-center text-xs font-bold xl:text-sm">Test Guideline<br />Series #</th>
            <th className="border border-black bg-white px-1 py-1.5 text-left text-xs font-bold italic xl:text-sm">Required (R), Conditionally<br />Required (CR), Not Required (NR)</th>
            <th className="border border-black bg-white px-1 py-1.5 text-left text-xs font-bold xl:text-sm">FOOD USE*<br />(Tolerance<br />Requirement)</th>
            <th className="border border-black bg-white px-1 py-1.5 text-left text-xs font-bold xl:text-sm">FOOD USE* (Tolerance<br />Requirement)</th>
            <th className="border border-black bg-white px-1 py-1.5 text-left text-xs font-bold xl:text-sm">NON-FOOD<br />USE</th>
          </tr>
          <tr>
            <th className="border border-black bg-white px-1 py-1 text-left text-xs font-bold xl:text-sm">RD</th>
            <th className="border border-black bg-white px-1 py-1 text-left text-xs font-bold xl:text-sm">BPPD</th>
            <th className="border border-black bg-white px-1 py-1 text-left text-xs font-bold xl:text-sm">TEST/GUIDLINE NAME</th>
            <th colSpan="3" className="border border-black bg-white px-1 py-1 text-center text-xs font-bold uppercase xl:text-sm">
              <TableHeadingLink href={tableData.tableLink}>{tableData.tableTitle}</TableHeadingLink>
            </th>
          </tr>
        </thead>

        <tbody>
          {tableData.rows.map((row, index) => {
            if (row.group) {
              const groupTitle = typeof row.group === 'object' ? row.group.title : row.group;
              const groupLink = typeof row.group === 'object' ? row.group.link : "";
              return (
                <tr key={`group-${index}`}>
                  <td colSpan="6" className="border border-black bg-[#e6e6e6] px-2 py-1.5 text-center text-xs font-bold xl:text-sm">
                    <TableHeadingLink href={groupLink}>{groupTitle}</TableHeadingLink>
                  </td>
                </tr>
              );
            }
            return (
              <tr key={`row-${row.name}-${index}`}>
                <td className="border border-black bg-white px-1 py-1 align-middle text-right text-[11px] leading-tight xl:px-1.5 xl:text-xs">{row.rd}</td>
                <td className="border border-black bg-white px-1 py-1 align-middle text-right text-[11px] leading-tight xl:px-1.5 xl:text-xs">{row.bppd}</td>
                <td className="border border-black bg-white px-1 py-1 align-middle text-left text-[11px] leading-tight xl:px-1.5 xl:text-xs">{row.name}</td>
                <RequirementCell value={row.registrationFood} />
                <RequirementCell value={row.eupFood} />
                <RequirementCell value={row.nonFood} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function ResearchRequirementsPage() {
  const [cms, setCms] = useState(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initFields() {
      try {
        const payload = await getResearchRequirementsFields();
        setCms(payload);
      } catch (err) {
        console.error("Headless API fetch crash:", err);
      } finally {
        setLoading(false);
      }
    }
    initFields();
  }, []);

  const sections = [
    { id: "overview", label: cms?.overviewTitle || "Overview" },
    { id: "data-requirements", label: cms?.section01Title || "Data requirements and test methods for pesticide products by type" },
    { id: "product-performance", label: cms?.section02Title || "Product Performance" },
    { id: "additional-information", label: cms?.additionalTitle || "Additional Information" }
  ];

  const getParsedPayload = (rawJson, fallback) => {
    if (!rawJson) return fallback;
    try {
      return JSON.parse(rawJson);
    } catch (e) {
      console.error("JSON formatting error inside text area box parser:", e);
      return fallback;
    }
  };

  const conventionalData = getParsedPayload(cms?.conventionalJson, fallbackConventional);
  const biochemicalData = getParsedPayload(cms?.biochemicalJson, fallbackBiochemical);
  const microbialData = getParsedPayload(cms?.microbialJson, fallbackMicrobial);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `#${id}`);
  };

  useEffect(() => {
    if (loading) return;
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, cms]);

  if (loading) {
    return <div className="p-20 text-center text-gray-500">Loading requirements matrix database...</div>;
  }

  // Fallbacks if the WordPress fields are blank
  const defaultOverviewHtml = `<p class="mb-8 text-lg">Individual research data requirements and EPA-approved tests for Conventional, Biochemical, and Microbial pesticide end-use products.</p>`;
  const defaultPerformanceHtml = `<p class="mb-8 text-lg">Efficacy Data (Series 810 – Product Performance Test Guidelines) is required for all pesticide types and registration situations, but tests will vary depending on the product’s intended performance as described in the label directions.</p>`;
  const defaultAdditionalHtml = `
    <ul class="ml-6 list-disc">
      <li>For more information on the test guidelines, see the EPA's Final Test Guidelines for Pesticides and Toxic Substances.</li>
      <li>For more information on the FIFRA registration process, see the Pesticide Registration page on this website.</li>
    </ul>
  `;

  return (
    <div className="px-4 py-10 tracking-wide sm:px-10 lg:px-20">
      {/* Breadcrumbs */}
      <div className="mb-8 flex flex-row items-center gap-2 text-sm text-gray-500">
        <svg className="usa-icon text-gray-500 w-4 h-4" aria-hidden="true" focusable="false" role="img">
          <use href="/assets/img/sprite.svg#arrow_back"></use>
        </svg>
        <Link href="/" className="text-primary hover:underline">Home</Link>
        <span>›</span>
        <span className="text-primary">Laws and Permits</span>
        <span>›</span>
        <span className="text-gray-800">Pesticide Registration Research Data Requirements</span>
      </div>

      <InternalPageHero
        title={cms?.pageTitle || "Pesticide Registration Research"}
        subtitle={cms?.pageSubtitle || "Data Requirements"}
        link="https://www.epa.gov/pesticide-registration/data-requirements-pesticide-registration"
      />

      <div className="flex flex-col lg:flex-row gap-10 mt-6">
        {/* Navigation Sidebar */}
        <div className="lg:mt-10 w-full lg:w-56 shrink-0">
          <div className="sticky top-8">
            <p className="mb-3 font-bold text-black">On this page</p>
            <div className="flex flex-col border-l-2 border-gray-200">
              {sections.map((section) => (
                <button
                  type="button"
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`py-2 pl-4 text-left text-sm transition-colors duration-200 hover:text-primary ${
                    activeSection === section.id
                      ? "-ml-[2px] border-l-4 border-black font-semibold text-black"
                      : "text-primary"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Display Sections */}
        <div className="min-w-0 flex-1 whitespace-normal breaks-words">
          {/* Section 0: Overview */}
          <div id="overview" className="mt-10 scroll-mt-28 border-b-4 border-primary-lighter pb-6 prose max-w-none">
            <h1 className="font-bold text-primary text-2xl mb-4">{cms?.overviewTitle || "Overview"}</h1>
            <div dangerouslySetInnerHTML={{ __html: cms?.overviewDescription || defaultOverviewHtml }} />
          </div>

          {/* Section 1: Tables Rendering Area */}
          <div id="data-requirements" className="scroll-mt-28 border-b-4 border-primary-lighter pt-10 pb-6">
            <h1 className="font-bold text-primary text-2xl mb-4">
              {cms?.section01Title || "Data requirements and test methods for pesticide products by type."}
            </h1>

            <div className="mb-8 text-lg">
              <RequirementTable tableData={conventionalData} />
              <RequirementTable tableData={biochemicalData} />
              <RequirementTable tableData={microbialData} />

              <p className="mt-5 text-base font-bold leading-6 text-black">
                *Note: “FOOD USE” does not necessarily mean a pesticide product that will be used directly on food products. Pesticides used in such a manner where residues may collect (establishing the need for a tolerance) on food products or organisms harvested for food would be classified as “FOOD USE.”
              </p>
            </div>
          </div>

          {/* Section 2: Product Performance */}
          <div id="product-performance" className="scroll-mt-28 border-b-4 border-primary-lighter pt-10 pb-6 prose max-w-none">
            <h1 className="font-bold text-primary text-2xl mb-4">{cms?.section02Title || "Product Performance"}</h1>
            <div dangerouslySetInnerHTML={{ __html: cms?.section02Description || defaultPerformanceHtml }} />
          </div>

          {/* Section 3: Additional Information */}
          <div id="additional-information" className="scroll-mt-28 pt-10 prose max-w-none">
            <h1 className="font-bold text-primary text-2xl mb-4">{cms?.additionalTitle || "Additional Information"}</h1>
            <div dangerouslySetInnerHTML={{ __html: cms?.additionalDescription || defaultAdditionalHtml }} />
          </div>
        </div>
      </div>
    </div>
  );
}