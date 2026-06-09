"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  {
    id: "eup-application",
    label:
      "Information Required for the EPA Experimental Use Permit Application",
  },
  {
    id: "confidential-statement",
    label: "Information Required for the EPA Confidential Statement of Formula",
  },
  { id: "required-forms", label: "Required Forms" },
  { id: "additional-resources", label: "Additional Resources" },
  {
    id: "questions",
    label: "Questions about EPA Experimental Use Permits?",
  },
];

const externalLinks = {
  eupChapter:
    "https://www.epa.gov/pesticide-registration/pesticide-registration-manual-chapter-12-applying-experimental-use-permit",
  cfr1723:
    "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-E/part-172/section-172.3",
  cfr1724:
    "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-E/part-172/section-172.4",
  cfr1726:
    "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-E/part-172/section-172.6",
  cfrPart158:
    "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-E/part-158",
  cfrPart160:
    "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-E/part-160",
  cfrPart161:
    "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-E/part-161",
  cdx: "https://www.epa.gov/pesticide-registration/electronic-submissions-pesticide-applications",
  pspUserGuide:
    "https://www.epa.gov/system/files/documents/2021-08/psp-user-guide_opp.pdf",
  blankForms:
    "https://www.epa.gov/pesticide-registration/pesticide-registration-manual-blank-forms",
  form857017:
    "https://www.epa.gov/sites/default/files/2013-07/documents/8570-17.pdf",
  form85704:
    "https://www.epa.gov/sites/default/files/2013-07/documents/8570-4_0.pdf",
  form857035:
    "https://www.epa.gov/sites/default/files/2021-01/documents/8570-35.pdf",
  suggestedFormat:
    "https://www.epa.gov/pesticide-registration/pesticide-registration-manual-chapter-12-applying-experimental-use-permit#suggested-format-for-an-experimental-use-permit-application",
  finalTestGuidelines:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/final-test-guidelines-pesticides-and-toxic",
  oecdGuidelines:
    "https://www.oecd.org/en/topics/sub-issues/testing-of-chemicals/test-guidelines.html",
  pdsl: "https://www.epa.gov/pesticide-registration/pesticide-data-submitters-list-pdsl",
  prn20113:
    "https://www.epa.gov/pesticide-registration/prn-2011-3-standard-format-data-submitted-under-fifra-and-certain-provisions",
  npicStateAgencies: "https://npic.orst.edu/reg/state_agencies.html",
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

export default function ExperimentalUse() {
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
        <span className="text-primary">Laws and Permits</span>
        <span>›</span>
        <span className="text-gray-800">EPA Experimental Use Permit</span>
      </div>

      {/* background image */}
      <div className="relative mt-4 h-50 text-white">
        <div className="absolute inset-0 bg-cover bg-center" />
        <div className="absolute inset-0 z-0 bg-black opacity-65" />

        {/* Content */}
        <div className="relative z-10 mt-5 px-1 py-16 text-center duration-300 hover:scale-105">
          <a
            href={externalLinks.eupChapter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white no-underline hover:no-underline"
          >
            <h1 className="!mb-0 !mt-1 !text-4xl font-bold text-white">
              EPA Experimental Use Permit
            </h1>
          </a>

          <p className="!mt-3 text-lg text-gray-200">
            Experimental Use Permit Application Requirements
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
          {/* overview section */}
          <div
            id="overview"
            className="mt-10 scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">Overview</h1>

            <div className="mb-8 text-lg">
              <p>
                To perform field trials on a new algaecide product or a new use
                for an approved product, you must obtain an Experimental Use
                Permit (EUP) from the EPA and the respective state(s) where
                field trials will be conducted. Aquatic area allowance varies by
                state.
              </p>

              <p className="mt-5">
                For aquatic uses, there is normally an exemption for testing in
                water bodies one surface acre or less in size per pest tested.
                However, only products with a tolerance or exemption from
                tolerance may be tested in waters used for irrigation, drinking
                water supplies, or swimming, or waters that contain or affect
                any fish, shellfish, or other plants or animals that may be
                taken for food or feed, including marine waters. See{" "}
                <ExternalLink href={externalLinks.cfr1723}>
                  40 CFR 172.3
                </ExternalLink>
                .
              </p>

              <p className="mt-5">
                Three forms must be submitted to obtain an EPA EUP:{" "}
                <ExternalLink href={externalLinks.form857017}>
                  EPA Form 8570-17
                </ExternalLink>{" "}
                (Application for an Experimental Use Permit),{" "}
                <ExternalLink href={externalLinks.form85704}>
                  EPA Form 8570-4
                </ExternalLink>{" "}
                (Confidential Statement of Formula), and{" "}
                <ExternalLink href={externalLinks.form857035}>
                  EPA Form 8570-35
                </ExternalLink>{" "}
                (Data Matrix). If you are testing a new application of an
                approved product, a Confidential Statement of Formula is not
                required.
              </p>

              <p className="mt-5">
                Forms can be submitted online through the EPA&apos;s{" "}
                <ExternalLink href={externalLinks.cdx}>
                  Central Data Exchange (CDX) Online Submission System
                </ExternalLink>
                . User guides are available for submitting an EUP Application
                through the{" "}
                <ExternalLink href={externalLinks.pspUserGuide}>
                  CDX Pesticide Submissions Portal (PSP)
                </ExternalLink>{" "}
                and an electronic Confidential Statement of Formula.
              </p>

              <p className="mt-5">
                An EUP must also be approved by the state in which the
                experimental use is to take place. To determine the policy of an
                individual state, use the external link to the{" "}
                <ExternalLink href={externalLinks.npicStateAgencies}>
                  National Pesticide Information Center
                </ExternalLink>{" "}
                or the internal link to the{" "}
                <Link
                  href="/regulationsDirectory"
                  className="text-primary text-underline"
                >
                  US Regulatory Map
                </Link>
                .
              </p>
            </div>
          </div>

          {/* eup application section */}
          <div
            id="eup-application"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">
              Information Required for the EPA Experimental Use Permit
              Application
            </h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>Purpose or objectives of the proposed testing</li>

                <li className="mt-3">
                  Detailed description of the proposed testing program,
                  including the following test parameters:
                  <ul className="mt-3 ml-6 list-[circle]">
                    <li>Pest organism(s) involved</li>
                    <li className="mt-3">
                      Amount of pesticide proposed to be used
                    </li>
                    <li className="mt-3">Crops, fauna, and flora involved</li>
                    <li className="mt-3">
                      Sites and modes of pesticide applications
                    </li>
                    <li className="mt-3">Pesticide dosage rates</li>
                    <li className="mt-3">
                      Location of test site, including states
                    </li>
                    <li className="mt-3">Number of acres in test site</li>
                    <li className="mt-3">
                      Number of structural sites or number of animals by state
                      to be included in the testing
                    </li>
                    <li className="mt-3">Proposed dates of the testing</li>
                    <li className="mt-3">How the testing will be supervised</li>
                    <li className="mt-3">
                      Name, street address, telephone number and qualifications
                      of program participants, including those not employed by
                      the applicant
                    </li>
                    <li className="mt-3">
                      Names and street addresses of cooperators, meaning persons
                      owning or controlling application sites and granting
                      permission to permittees to use these sites, if available
                      at the time of the application or as soon thereafter as
                      available
                    </li>
                    <li className="mt-3">
                      Results of prior testing of the product by the applicant
                      to determine<sup>1</sup>
                      <ol className="mt-3 ml-6 list-decimal">
                        <li>Toxicity and effects in or on target organisms</li>
                        <li className="mt-3">
                          Toxicity and effects in or on nontarget plants,
                          animals, and insects at or near the application site
                        </li>
                        <li className="mt-3">
                          Harm to the environment from the application of this
                          product
                        </li>
                      </ol>
                    </li>
                    <li className="mt-3">
                      How the applicant intends to store and dispose of unused
                      pesticides and containers from the proposed experimental
                      use.
                    </li>
                  </ul>
                </li>

                <li className="mt-3">
                  Toxicity data may already be available for some ingredients.
                  Applicants should use the{" "}
                  <ExternalLink href={externalLinks.pdsl}>
                    Pesticide Data Submitters List
                  </ExternalLink>{" "}
                  to determine if existing data is available, negating the need
                  for additional testing.
                </li>

                <li className="mt-3">
                  Statement explaining whether a tolerance exists or is being
                  requested, especially if the product is to be tested in a
                  manner that may result in residues in food or feed, for
                  example fish moving in and out of the test site. If a
                  tolerance is being requested, the temporary tolerance petition
                  must be provided with the EUP application. Whenever all food
                  or feed derived from the experimental program is to be
                  destroyed or fed to experimental animals, a statement must be
                  included explaining this.
                </li>

                <li className="mt-3">
                  Labeling Requirements
                  <ul className="mt-3 ml-6 list-[circle]">
                    <li>
                      A proposed label must be included in the EUP application
                    </li>
                    <li className="mt-3">
                      Prominently states “For Experimental Use Only”
                    </li>
                    <li className="mt-3">Experimental Use Permit Number</li>
                    <li className="mt-3">
                      Statement “Not for sale to any person other than a
                      participant or cooperator of the EPA-approved Experimental
                      Use Program”
                    </li>
                    <li className="mt-3">The name, brand, or trademark</li>
                    <li className="mt-3">
                      The name and address of the permittee, producer, or
                      registrant
                    </li>
                    <li className="mt-3">Net contents</li>
                    <li className="mt-3">An ingredient statement</li>
                    <li className="mt-3">Warning or caution statements</li>
                    <li className="mt-3">
                      Any limitations on entry of persons into treated areas
                    </li>
                    <li className="mt-3">
                      Establishment registration number, except in those cases
                      where application of the pesticide is made solely by the
                      producer
                    </li>
                    <li className="mt-3">The directions for trial use.</li>
                  </ul>
                </li>
              </ul>

              <p className="mt-5 text-base">
                <sup>1</sup> Note that toxicity test results and environmental
                fate, meaning harm to the environment, must be obtained using{" "}
                <ExternalLink href={externalLinks.cfrPart160}>
                  Good Laboratory Practices
                </ExternalLink>
                .
              </p>
            </div>
          </div>

          {/* confidential statement section */}
          <div
            id="confidential-statement"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">
              Information Required for the EPA Confidential Statement of Formula
            </h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  A complete confidential statement of formula of the product to
                  be tested that provides a tabulation of the names and
                  percentage by weight of each ingredient, both active and
                  inert.
                </li>

                <li className="mt-3">
                  Chemical and physical properties of each active ingredient of
                  the formulation being tested, including the analytical methods
                  to be used to determine these (40 CFR 158.210, 158.220, 40 CFR
                  158.310, 40 CFR 158.2081, 40 CFR 158.2171, and 40 CFR
                  161.150-161.190);{" "}
                  <ExternalLink href={externalLinks.cfrPart158}>
                    EPA CFR Part 158: Data Requirements for Pesticides
                  </ExternalLink>
                  ,
                  <ExternalLink href={externalLinks.cfrPart160}>
                    EPA CFR Part 160: Good Laboratory Practice Standards
                  </ExternalLink>
                  .
                </li>

                <li className="mt-3">
                  Available data on the rate of decline of residues on the
                  treated crop or site, together with other information relevant
                  to determining when workers can safely re-enter treated areas
                  (40 CFR 158.250, 40 CFR 158.270, 40 CFR 2082, 40 CFR 158.2172,
                  40 CFR 161.240 and 40 CFR 161.390).
                </li>

                <li className="mt-3">
                  Available toxicity and exposure data, including human
                  epidemiological data, relevant to assessing the potential of
                  the product to cause injury to users and other people who may
                  be exposed (40 CFR 158.230, 40 CFR 158.240, 40 CFR 158.243, 40
                  158.260, 40 CFR 158.2083, 40 CFR 158.2084, 40 CFR 158.2173, 40
                  CFR 158.2174 and 40 CFR 161.340).
                </li>

                <li className="mt-3">
                  If submitted in a physical form, the submitted data (three
                  copies) should be bound and formatted in accordance with the
                  requirements of{" "}
                  <ExternalLink href={externalLinks.prn20113}>
                    PRN 2011-3
                  </ExternalLink>
                  .
                </li>
              </ul>
            </div>
          </div>

          {/* required forms section */}
          <div
            id="required-forms"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">Required Forms</h1>

            <div className="mb-8 text-lg">
              <p>
                The following forms must be submitted as part of the
                Experimental Use Permit Application.
              </p>

              <ul className="mt-5 ml-6 list-disc">
                <li>
                  Application for an Experimental Use Permit{" "}
                  <ExternalLink href={externalLinks.form857017}>
                    (EPA Form 8570-17)
                  </ExternalLink>
                </li>

                <li className="mt-3">
                  Confidential Statement of Formula{" "}
                  <ExternalLink href={externalLinks.form85704}>
                    (EPA Form 8570-4)
                  </ExternalLink>
                </li>

                <li className="mt-3">
                  Data Matrix{" "}
                  <ExternalLink href={externalLinks.form857035}>
                    (EPA Form 8570-35)
                  </ExternalLink>
                </li>
              </ul>

              <p className="mt-5">
                <b>
                  This information was collected from EPA Pesticide Registration
                  Manual: Chapter 12 - Applying for an Experimental Use Permit,
                  unless otherwise specified. For more details, please visit the{" "}
                  <ExternalLink href={externalLinks.eupChapter}>
                    website
                  </ExternalLink>
                  .
                </b>
              </p>
            </div>
          </div>

          {/* additional resources section */}
          <div
            id="additional-resources"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">Additional Resources</h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  See the EPA website for the{" "}
                  <ExternalLink href={externalLinks.suggestedFormat}>
                    Suggested Format for an EUP Application
                  </ExternalLink>
                  .
                </li>

                <li className="mt-3">
                  For additional information on data requirements, see the EPA{" "}
                  <ExternalLink href={externalLinks.finalTestGuidelines}>
                    Test Guidelines for Pesticides and Toxic Substances
                  </ExternalLink>
                  .
                </li>

                <li className="mt-3">
                  For information on the standardized methods required when
                  collecting data, visit the{" "}
                  <ExternalLink href={externalLinks.oecdGuidelines}>
                    OECD Guidelines for the Testing of Chemicals
                  </ExternalLink>{" "}
                  webpage.
                </li>

                <li className="mt-3">
                  For existing data on ingredient toxicity that may substitute
                  additional testing, visit the{" "}
                  <ExternalLink href={externalLinks.pdsl}>
                    Pesticide Data Submitters List
                  </ExternalLink>
                  .
                </li>
              </ul>
            </div>
          </div>

          {/* questions section */}
          <div id="questions" className="scroll-mt-28">
            <h1 className="font-bold text-primary">
              Questions about EPA Experimental Use Permits?
            </h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  <b>Antimicrobial Pesticides Contact:</b> Yvette Hopkins,{" "}
                  <a
                    className="text-primary text-underline"
                    href="mailto:hopkins.yvette@epa.gov"
                  >
                    hopkins.yvette@epa.gov
                  </a>
                  , 703-308-6214
                </li>

                <li className="mt-3">
                  <b>Biopesticides Contact:</b> Robert Torla,{" "}
                  <a
                    className="text-primary text-underline"
                    href="mailto:torla.robert@epa.gov"
                  >
                    torla.robert@epa.gov
                  </a>
                  , 703-308-8098
                </li>

                <li className="mt-3">
                  <b>Conventional Pesticides Contact:</b> Linda Arrington,{" "}
                  <a
                    className="text-primary text-underline"
                    href="mailto:arrington.linda@epa.gov"
                  >
                    arrington.linda@epa.gov
                  </a>
                  , 703-305-5446
                </li>

                <li className="mt-3">
                  <b>Pesticide Data Submitters List Contact:</b> Brenda Minnema,{" "}
                  <a
                    className="text-primary text-underline"
                    href="mailto:minnema.brenda@epa.gov"
                  >
                    minnema.brenda@epa.gov
                  </a>
                  , 202-566-2840
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
