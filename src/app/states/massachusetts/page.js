"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "special-considerations", label: "Special Considerations" },
  {
    id: "pesticide-registration-renewal",
    label: "Pesticide Registration & Renewal",
  },
  { id: "experimental-use-permit", label: "Experimental Use Permit" },
  {
    id: "order-of-conditions",
    label: "Order of Conditions (within Wetland Permitting)",
  },
  { id: "conservation-review", label: "Conservation Committee Review" },
  { id: "applicator-license", label: "Applicator License" },
  { id: "npdes-permit", label: "NPDES Permit" },
  {
    id: "department-conservation-recreation",
    label: "Department of Conservation & Recreation",
  },
  { id: "department-public-health", label: "Department of Public Health" },
];

const externalLinks = {
  epaRegion1: "https://www.epa.gov/aboutepa/epa-region-1-new-england",
  usaceNorthAtlantic: "https://www.nad.usace.army.mil/",
  usaceNewEngland: "https://www.nae.usace.army.mil/",

  departmentAgriculturalResources:
    "https://www.mass.gov/orgs/massachusetts-department-of-agricultural-resources",
  pesticideProductRegistration:
    "https://www.mass.gov/pesticide-product-registration",
  registrationGuide:
    "https://www.mass.gov/how-to/register-a-pesticide-product-in-massachusetts",
  eplacePortal: "https://www.mass.gov/eea-eplace-portal",
  minimumRisk:
    "https://www.epa.gov/minimum-risk-pesticides/minimum-risk-pesticides-exempted-registration-and-other-requirements",
  pesticideDevices:
    "https://www.epa.gov/pesticide-registration/pesticide-devices-guide-consumers",
  departmentEnvironmentalProtection:
    "https://www.mass.gov/orgs/massachusetts-department-of-environmental-protection",
  orderOfConditions:
    "https://www.mass.gov/how-to/wpa-form-5-order-of-conditions",
  wetlandsProtectionAct:
    "https://www.mass.gov/info-details/protecting-wetlands-in-massachusetts",

  pesticideExaminationLicensing:
    "https://www.mass.gov/pesticide-examination-and-licensing",
  pesticideLicenseFees:
    "https://www.mass.gov/info-details/pesticide-applicator-licensing-and-certification-fees",

  npdesPesticidePermitting: "https://www.epa.gov/npdes/pesticide-permitting",
  pesticideGeneralPermit:
    "https://www.epa.gov/npdes/pesticide-permitting-pesticide-general-permit-pgp",
  npdesPgpNoi: "https://npdes-ereporting.epa.gov/net-pgp/action/login",

  lakesPondsProgram:
    "https://www.mass.gov/info-details/lakes-and-ponds-program",
  guideToLakeManagement:
    "https://www.mass.gov/doc/guide-to-lake-and-pond-management/download",

  algaeInformation: "https://www.mass.gov/lists/algae-information",
  bureauClimateEnvironmentalHealth:
    "https://www.mass.gov/orgs/bureau-of-climate-and-environmental-health",

  acecProgram: "https://www.mass.gov/info-details/acec-program-overview",
  acecMap:
    "https://www.mass.gov/info-details/massgis-data-areas-of-critical-environmental-concern",

  marineProtectionAct:
    "https://www.epa.gov/ocean-dumping/marine-protection-research-and-sanctuaries-act-mprsa-and-federal-facilities",
  endangeredSpeciesAct:
    "https://www.epa.gov/laws-regulations/summary-endangered-species-act",
  riversHarborsAct:
    "https://www.epa.gov/cwa-404/summary-clean-water-act-section-404",
  marineMammalProtectionAct:
    "https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-protection-act",
  magnusonStevensAct:
    "https://www.fisheries.noaa.gov/topic/laws-policies/magnuson-stevens-act",
  migratoryBirdTreatyAct:
    "https://www.fws.gov/law/migratory-bird-treaty-act-1918",
};

function ExternalLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-primary text-underline ${className}`}
    >
      {children}
    </a>
  );
}

function HeaderLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-200 no-underline hover:underline"
    >
      {children}
    </a>
  );
}

function MailLink({ email, children }) {
  return (
    <a href={`mailto:${email}`} className="text-primary text-underline">
      {children || email}
    </a>
  );
}

export default function MassachusettsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <Link
          href="/regulationsDirectory"
          className="text-primary hover:underline"
        >
          Regulatory Directory
        </Link>

        <span>›</span>
        <span className="text-gray-800">Massachusetts</span>
      </div>

      {/* background image */}
      <div className="relative mt-4 h-60 text-white">
        <div className="absolute inset-0 bg-cover bg-center" />
        <div className="absolute inset-0 z-0 bg-black opacity-65" />

        {/* Content */}
        <div className="relative z-10 mt-5 px-1 py-16 text-center duration-300 hover:scale-105">
          <a
            href={externalLinks.pesticideProductRegistration}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white no-underline hover:no-underline"
          >
            <h1 className="!mb-0 !mt-1 !text-4xl font-bold text-white">
              Massachusetts
            </h1>
          </a>

          <p className="!mt-3 text-lg text-gray-200">
            <HeaderLink href={externalLinks.epaRegion1}>EPA Region 1</HeaderLink>
            ,{" "}
            <HeaderLink href={externalLinks.usaceNorthAtlantic}>
              USACE North Atlantic Division
            </HeaderLink>
            ,{" "}
            <HeaderLink href={externalLinks.usaceNewEngland}>
              New England District
            </HeaderLink>
          </p>
        </div>
      </div>

      {/* scroll left side */}
      <div className="mt-10 flex flex-row gap-10">
        <div className="mt-10 w-56 shrink-0">
          <div className="sticky top-8">
            <p className="mb-3 font-bold text-black">On this page</p>

            <div className="flex flex-col border-l-2 border-gray-200">
              {sections.map((section) => (
                <p
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`cursor-pointer py-2 pl-4 text-sm transition-colors duration-200 hover:text-primary ${
                    activeSection === section.id
                      ? "-ml-[2px] border-l-4 border-black font-semibold text-black"
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
          {/* overview / opening content section */}
          <div
            id="overview"
            className="mt-10 scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <div className="mb-8 text-lg">
              <p>
                <b>Algaecide Approval Process:</b> Federally approved
                algaecides must be registered with the{" "}
                <ExternalLink
                  href={externalLinks.departmentAgriculturalResources}
                >
                  Department of Agricultural Resources
                </ExternalLink>
                .{" "}
                <ExternalLink href={externalLinks.minimumRisk}>
                  Minimum risk (25b) products
                </ExternalLink>{" "}
                and{" "}
                <ExternalLink href={externalLinks.pesticideDevices}>
                  physical treatment devices
                </ExternalLink>{" "}
                are exempt from registration. For experimental testing, an{" "}
                <Link
                  href="/experimentalUse"
                  className="text-primary text-underline"
                >
                  Experimental Use Permit
                </Link>{" "}
                can be obtained by contacting the Department of Agricultural
                Resources directly. Following registration, the{" "}
                <ExternalLink
                  href={externalLinks.departmentEnvironmentalProtection}
                >
                  Department of Environmental Protection
                </ExternalLink>{" "}
                will review the product and grant an{" "}
                <ExternalLink href={externalLinks.orderOfConditions}>
                  Order of Conditions
                </ExternalLink>
                . This order details the places and circumstances under which the
                product can be used in accordance with the{" "}
                <ExternalLink href={externalLinks.wetlandsProtectionAct}>
                  Wetlands Protection Act
                </ExternalLink>
                . Following the Order of Conditions, the Conservation Commission
                of the city or town where the algaecide application is planned
                will vote on its usage. Conservation Commissions meet monthly.
              </p>

              <p className="mt-5">
                <b>Algaecide Application:</b> Any individual applying algaecide
                for commercial or experimental use is required to hold an{" "}
                <ExternalLink
                  href={externalLinks.pesticideExaminationLicensing}
                >
                  applicator license
                </ExternalLink>
                , granted by the Department of Environmental Protection. The
                discharge of any pesticide product into waters of the United
                States (WOTUS) is required to obtain a{" "}
                <ExternalLink href={externalLinks.npdesPesticidePermitting}>
                  National Pollution Discharge Elimination System (NPDES) permit
                </ExternalLink>
                . The NPDES permitting agency for Massachusetts is the Region 1
                office of the EPA. Algaecide applicators must complete the{" "}
                <ExternalLink href={externalLinks.pesticideGeneralPermit}>
                  Pesticide General Permit (PGP) for Discharges from the
                  Application of Pesticides
                </ExternalLink>
                .
              </p>
            </div>
          </div>

          {/* special considerations section */}
          <div
            id="special-considerations"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">Special Considerations</h1>

            <div className="mb-8 text-lg">
              <p>
                <b>Non-FIFRA-approved algaecide:</b> If planning to test the use
                of a non-FIFRA-approved algaecide in a freshwater system,
                contact the Department of Conservation and Recreation’s{" "}
                <ExternalLink href={externalLinks.lakesPondsProgram}>
                  Lakes &amp; Ponds Program
                </ExternalLink>
                .
              </p>

              <p className="mt-5">
                <b>Selecting a study site:</b> The MA Department of Public
                Health (DPH), Bureau of Climate and Environmental Health issues
                advisories for state-owned waterbodies. The DPH’s{" "}
                <ExternalLink href={externalLinks.algaeInformation}>
                  Algae Information
                </ExternalLink>{" "}
                page shows current advisories, safety information, and HAB
                educational materials. The department has historic data on algal
                blooms and associated toxins. DPH does not participate in product
                regulatory proceedings, but it is advised to contact DPH when
                planning field trials, as they can assist with site selection and
                inform on past HAB dynamics.
              </p>

              <h2 className="mt-8 font-bold text-primary">
                Massachusetts Areas of Critical Environmental Concern (ACEC)
              </h2>

              <p>
                An{" "}
                <ExternalLink href={externalLinks.acecProgram}>
                  ACEC designation
                </ExternalLink>{" "}
                recognizes significant ecosystems. Projects within an ACEC that
                are subject to state agency jurisdiction or regulation,
                particularly those that are initiated by an agency, require a
                state permit, or are funded by a state agency, are reviewed with
                closer scrutiny to avoid or minimize adverse environmental
                impacts. See a map of ACEC-designated regions{" "}
                <ExternalLink href={externalLinks.acecMap}>here</ExternalLink>.
              </p>

              <p className="mt-5">
                <b>Marine/Estuarine Application of Algaecides:</b> The use of
                algaecides in tidal and marine waters requires additional
                permits and considerations. Any algaecide discharged into “ocean
                waters” is subject to the{" "}
                <ExternalLink href={externalLinks.marineProtectionAct}>
                  Marine Protection, Research, and Sanctuaries Act (MPRSA)
                </ExternalLink>
                . To obtain MPRSA permitting for Massachusetts, contact Steven
                Wolf (
                <MailLink email="wolf.steven@epa.gov">
                  wolf.steven@epa.gov
                </MailLink>
                , 617-918-1617) at the EPA Region 1 Office.
              </p>

              <p className="mt-5">
                Additional regulations may apply, including but not limited to
                the{" "}
                <ExternalLink href={externalLinks.endangeredSpeciesAct}>
                  Endangered Species Act
                </ExternalLink>
                ,{" "}
                <ExternalLink href={externalLinks.riversHarborsAct}>
                  Rivers and Harbors Act
                </ExternalLink>
                ,{" "}
                <ExternalLink href={externalLinks.marineMammalProtectionAct}>
                  Marine Mammal Protection Act
                </ExternalLink>
                ,{" "}
                <ExternalLink href={externalLinks.magnusonStevensAct}>
                  Magnuson-Stevens Fisheries Conservation &amp; Management Act
                </ExternalLink>
                , and{" "}
                <ExternalLink href={externalLinks.migratoryBirdTreatyAct}>
                  Migratory Bird Treaty Act
                </ExternalLink>
                . See the{" "}
                <Link href="/" className="text-primary text-underline">
                  homepage
                </Link>{" "}
                to learn more about the acts pertinent to algaecide application
                in tidal waters.
              </p>
            </div>
          </div>

          {/* pesticide registration renewal */}
          <div
            id="pesticide-registration-renewal"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">
              Pesticide Registration &amp; Renewal
            </h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  <ExternalLink href={externalLinks.registrationGuide}>
                    Registration Guide
                  </ExternalLink>
                  <ul className="mt-3 ml-6 list-[circle]">
                    <li>
                      <ExternalLink href={externalLinks.eplacePortal}>
                        ePLACE Portal
                      </ExternalLink>{" "}
                      Help 844-733-7522
                    </li>
                    <li className="mt-3">
                      No registration required for minimum risk products or
                      physical devices
                    </li>
                  </ul>
                </li>

                <li className="mt-3">
                  Contact: Hotze Wijnja,{" "}
                  <MailLink email="Hotze.Wijnja@mass.gov">
                    Hotze.Wijnja@mass.gov
                  </MailLink>
                </li>

                <li className="mt-3">
                  Submit at least 90 days before intended use
                </li>

                <li className="mt-3">
                  <ExternalLink
                    href={externalLinks.pesticideProductRegistration}
                  >
                    Associated Fees
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>

          {/* experimental use permit */}
          <div
            id="experimental-use-permit"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">Experimental Use Permit</h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  Contact Taryn Lascola directly for permit information
                  <ul className="mt-3 ml-6 list-[circle]">
                    <li>
                      <MailLink email="Taryn.Lascola@mass.gov">
                        Taryn.Lascola@mass.gov
                      </MailLink>
                      , 617-626-1776
                    </li>
                  </ul>
                </li>

                <li className="mt-3">
                  Submit at least 90 days before intended use
                </li>

                <li className="mt-3">Experimental Use Permit Fee: $200</li>
              </ul>
            </div>
          </div>

          {/* order of conditions */}
          <div
            id="order-of-conditions"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">
              Order of Conditions (within Wetland Permitting)
            </h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  Contact: David Wong,{" "}
                  <MailLink email="david.w.wong@mass.gov">
                    david.w.wong@mass.gov
                  </MailLink>
                  , 617-874-7155
                </li>
              </ul>
            </div>
          </div>

          {/* conservation committee review */}
          <div
            id="conservation-review"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">
              Conservation Committee Review
            </h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  Use the link above to find Conservation Committee contact
                  information for your region of interest
                </li>
              </ul>
            </div>
          </div>

          {/* applicator license */}
          <div
            id="applicator-license"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">Applicator License</h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  Contact: Steven Antunes-Kenyon,{" "}
                  <MailLink email="pestexamlicense@mass.gov">
                    pestexamlicense@mass.gov
                  </MailLink>
                  , 502-281-6787
                </li>

                <li className="mt-3">
                  <ExternalLink href={externalLinks.pesticideLicenseFees}>
                    Associated Fees
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>

          {/* npdes permit */}
          <div
            id="npdes-permit"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">NPDES Permit</h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  <ExternalLink href={externalLinks.pesticideGeneralPermit}>
                    Pesticide General Permit for Discharges for the Application
                    of Pesticides (PGP)
                  </ExternalLink>
                  <ul className="mt-3 ml-6 list-[circle]">
                    <li>
                      PGP is the NPDES permit for algaecide application in
                      Massachusetts
                    </li>
                    <li className="mt-3">
                      <ExternalLink href={externalLinks.npdesPgpNoi}>
                        Complete NOI
                      </ExternalLink>{" "}
                      (pg 130 - 174)
                    </li>
                  </ul>
                </li>

                <li className="mt-3">
                  Contact: George Papadopoulos,{" "}
                  <MailLink email="papadopoulos.george@epa.gov">
                    papadopoulos.george@epa.gov
                  </MailLink>
                  , 617- 918-1579
                </li>
              </ul>
            </div>
          </div>

          {/* department conservation recreation */}
          <div
            id="department-conservation-recreation"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">
              Department of Conservation &amp; Recreation
            </h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  <ExternalLink href={externalLinks.lakesPondsProgram}>
                    Lakes &amp; Ponds Program
                  </ExternalLink>
                  <ul className="mt-3 ml-6 list-[circle]">
                    <li>
                      Contact: Kara Sliwoski,{" "}
                      <MailLink email="Kara.Silwoski@mass.gov">
                        Kara.Silwoski@mass.gov
                      </MailLink>
                    </li>
                    <li className="mt-3">
                      <ExternalLink href={externalLinks.guideToLakeManagement}>
                        Guide to Lake Management
                      </ExternalLink>{" "}
                      (Working Draft)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* department public health */}
          <div id="department-public-health" className="scroll-mt-28">
            <h1 className="font-bold text-primary">
              Department of Public Health
            </h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  <ExternalLink
                    href={externalLinks.bureauClimateEnvironmentalHealth}
                  >
                    Bureau of Climate &amp; Environmental Health
                  </ExternalLink>
                </li>

                <li className="mt-3">
                  The MA Department of Public Health (DPH), Bureau of Climate and
                  Environmental Health issues advisories for state-owned
                  waterbodies. The DPH’s{" "}
                  <ExternalLink href={externalLinks.algaeInformation}>
                    Algae Information
                  </ExternalLink>{" "}
                  page shows current advisories, safety information, and HAB
                  educational materials. The department has historic data on
                  algal blooms and associated toxins. DPH does not participate in
                  product regulatory proceedings. However, it is advised to
                  contact DPH when planning field trials, as they can assist with
                  site selection and provide information on past HAB dynamics.
                </li>

                <li className="mt-3">
                  Contact: Logan Bailey,{" "}
                  <MailLink email="logan.bailey@mass.gov">
                    logan.bailey@mass.gov
                  </MailLink>
                  , 857-319-1104
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}