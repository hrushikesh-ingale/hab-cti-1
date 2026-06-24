"use client";
import { useState } from "react";

const tabs = {
  // Chemical Tab
  chemical: {
    label: "Chemical",
    icon: "science",
    subTabs: {
      conventional: {
        label: "Conventional Chemical",
        image: "/conventional.png",
        title: "Conventional Chemical",
        learnMoreLink: "/conventionalPesticide",
        body: [
          "Conventional pesticides are all active ingredients other than biological pesticides and antimicrobial pesticides. Conventional active ingredients are generally produced synthetically, i.e., are synthetic chemicals that prevent, mitigate, destroy, or repel any pest; or that act as a plant growth regulator, desiccant, defoliant or nitrogen stabilizer.",
          "Wood preservative and anti-foulant products that do not have antimicrobial uses and agricultural fungicide and aquatic herbicide products are either classified as a conventional or a biochemical pesticide. Biochemical pesticides with a toxic mode of action are classified for the purposes of the registration process as conventional pesticides.",
        ],
      },
      biochemical: {
        label: "Biochemical Pesticides",
        image: "/biochemical.png",
        title: "Biochemical Pesticides",
        learnMoreLink: "/",
        body: [
          "Biochemical Pesticides are substances that- (1) are naturally occuring chemicals or are synthetically dervived equivalents; (2) have a history of exposure to humans and the environment demonstrating minimal toxicity, or in the case of a synthetically-derived biochemical pesticides, are equivalent to a naturally occuring chemical that have such a history; and (3) have a nontoxic mode of action to the target pest(s). Biochemical pesticides include substances, such as insect sex pheromones, which interfere with mating, as well as various scented plant extracts that attract insect pests to traps. Because it is sometimes difficult to determine whether a substance meets the criteria for classification as a biochemical pesticide, EPA has established the Biochemical Classification Committee to make such decisions.",
        ],
      },
      antimicrobial: {
        label: "Antimicrobial Pesticides",
        image: "/antimicrobial.png",
        title: "Antimicrobial Pesticides",
        learnMoreLink: "/",
        body: [
          "An antimicrobial pesticide is intended to disinfect, sanitize, reduce, or mitigate growth or development of microbiological organisms; or protect inanimate objects, industrial processes or systems, surfaces, water, or other chemical substances from contamination, fouling, or deterioration caused by bacteria, viruses, fungi, protozoa, algae, or slime; and in the intended use if exempt from, or otherwise not subject to, a tolerance or a food additive regulation.",
          "Wood preservatives and anti-foulants are classified as antimicrobial pesticides if the products have antimicrobial claims. Other wood preservative, anti-foulant, agricultural fungicide, and aquatic herbicide products are either classified as conventionals or biopesticides.",
        ],
      },
      minimum: {
        label: "Minimum Risk Pesticides",
        image: "/minimum.png",
        title: "Minimum Risk Pesticides",
        learnMoreLink: "/minimumRiskPesticides",
        body: [
          "These are pesticides that meet a series of criteria determining them to pose little to no risk to human health or the environment. These pesticides are exempt from registration and label review under FIFRA.",
          "If a product does not meet all of the exemption criteria, the product is not exempt from FIFRA regulation under 40 CFR 152.25(f), and sale or distribution of the product without registration may be a violation of FIFRA unless it is otherwise exempt from registration requirements.",
        ],
      },
    },
  },
  // Biological Tab
  biological: {
    label: "Biological",
    icon: "hourglass_empty",
    subTabs: {
      biotech: {
        label: "Biotechnology",
        image: "/biotechnology.png",
        title: "Biotechnology",
        learnMoreLink: "/",
        body: [
          "The science of modifying the genetic composition of plants, animals, and microorganisms.",
          "This includes Plant-Incorporated Protectants (PIPs) and genetically modified microbial pesticides.",
        ],
      },
      biomanipulation: {
        label: "Biomanipulation",
        image: "/biomanipulation.png",
        title: "Biomanipulation",
        learnMoreLink: "/",
        body: [
          "The strategy to reduce algal blooms and improve water clarity by manipulating the populations of organisms within the food web, particularly fish, shellfish, zooplankton, and aquatic plants.",
        ],
      },
      microbial: {
        label: "Microbial Pesticides",
        image: "/microbial.png",
        title: "Microbial Pesticides",
        learnMoreLink: "/",
        body: [
          "Microbial pesticides consist of a microorganism (e.g., a bacterium, fungus, virus or protozoan) as the active ingredient.",
          "Microbial pesticides can control many different kinds of pests, although each seperate active ingredient is relatively specific for its target pests.",
        ],
      },
      biopesticides: {
        label: "Biopesticides",
        image: "/biopesticides.png",
        title: "Biopesticides",
        learnMoreLink: "/biopesticideRegistration",
        body: [
          "The EPA classifies Biopesticides as those derived from natural materials such as animals, plants, bacteria, and certain minerals. For example, canola oil and baking soda have pesticidal applications and are considered biopesticides.",
          "There are three major categories of biopesticide.",
          "1. Biochemical Pesticides: Naturally occurring, non-toxic substances that control pests without directly killing them (unlike synthetic conventional pesticides). Examples include insect sex pheromones that disrupt mating and scented plant extracts used as trap attractants. The EPA uses a special committee to officially classify these.",
          "2. Microbial Pesticides: Products containing microorganisms (bacteria, fungi, viruses, or protozoa) as the active ingredient. They are highly pest-specific; for instance, different strains of Bacillus thuringiensis (Bt) produce distinct proteins that target and starve specific insect larvae (like mosquitoes or moths) by binding to their gut receptors.",
          "3. Plant-Incorporated-Protectants (PIPs): Pesticidal substances produced naturally by plants that have been genetically modified. For example, scientists can insert the gene for the Bt protein directly into a plant's DNA, causing the plant itself to manufacture the pest-destroying substance. The EPA regulates the genetic material and the protein, but not the plant itself.",
        ],
      },
    },
  },
  // Physical Tab
  physical: {
    label: "Physical",
    icon: "wash",
    subTabs: {
      devices: {
        label: "Physical Devices",
        image: "/devices.png",
        title: "Devices",
        learnMoreLink: "/",
        body: [
          "an instrument or contrivance, generally working by physical means (e.g., electricity, light, or other mechanical or physical means) and not containing a substance or mixture of substances, that is intended to trap, destroy, repel, or mitigate a pest.",
          "This definition excludes equipment used for applying pesticides when sold seperately from the pesticides themselves. 40 C.F.R. & 152.500(a).",
        ],
      },
    },
  },
  // Minimum Risk Tab
  minimum: {
    label: "Minimum Risk Pesticides",
    subTabs: {
      devices: {
        label: "Minimum Risk Pesticides",
        image: "/minimum.png",
        title: "Minimum Risk Pesticides",
        learnMoreLink: "/minimumRiskPesticides",
        body: [
          "These are pesticides that meet a series of criteria determining them to pose little to no risk to human health or the environment. These pesticides are exempt from registration and label review under FIFRA.",
          "If a product does not meet all of the exemption criteria, the product is not exempt from FIFRA regulation under 40 CFR 152.25(f), and sale or distribution of the product without registration may be a violation of FIFRA unless it is otherwise exempt from registration requirements.",
        ],
      },
    },
  },
};

export default function Strategies() {
  const [activeTab, setActiveTab] = useState("chemical");
  const [activeSubTab, setActiveSubTab] = useState("conventional");

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    setActiveSubTab(Object.keys(tabs[tabKey].subTabs)[0]);
  };

  const currentSubTabs = tabs[activeTab].subTabs;
  const currentContent =
    currentSubTabs[activeSubTab] || Object.values(currentSubTabs)[0];

  return (
    <div className="px-20 py-10 tracking-wide">
      <p className="text-green font-bold text-sm">CONTROL STRATEGIES</p>
      <p className="font-bold text-3xl text-(--black) mt-1">
        Types of HAB Control Technologies
      </p>
      <p className="text-sm text-(--gray) mt-2 max-w-xl whitespace-nowrap">
        Determining what type of product you have is key as each type has a
        different process for registration
      </p>

      {/* main tabs */}
      <div className="rounded-xl border-b border-l-2 border-t-2 border-r-2 border-gray-300 mt-5">
        <div className="bg-[#ecf8dc] flex flex-row text-gray-500 font-bold px-4 py-4">
          {Object.entries(tabs).map(([key, tab]) => (
            <p
              key={key}
              onClick={() => handleTabClick(key)}
              className={`p-4 rounded transition-all duration-400 cursor-pointer flex items-center justify-center gap-1 flex-1 ${activeTab === key ? "bg-[#4b710a] text-white" : "text-gray-500 hover:bg-[#bed79c]"}`}
            >
              <svg
                className="usa-icon"
                aria-hidden="true"
                focusable="false"
                role="img"
              >
                <use href={`/assets/img/sprite.svg#${tab.icon}`}></use>
              </svg>
              {tab.label}
            </p>
          ))}
        </div>

        {/* sub tabs */}
        <div className="bg-primary-lighter text-gray-500 font-bold px-3 py-3 flex flex-row">
          {Object.entries(currentSubTabs).map(([key, subTab]) => (
            <p
              key={key}
              onClick={() => setActiveSubTab(key)}
              className={`rounded py-2 px-2 font-bold transition-all duration-400 cursor-pointer flex-1 text-center ${activeSubTab === key ? "bg-primary text-white" : "text-gray-500 hover:bg-[#bed6e8]"}`}
            >
              {subTab.label}
            </p>
          ))}
        </div>

        <div className="rounded border-b border-l border-t border-r border-gray-300 bg-white text-black p-6">
          <div className="flex flex-row gap-6 items-stretch mb-6">
            <img
              src={currentContent.image}
              className="w-60 h-60 object-contain shrink-0 mt-6"
            />
            <div className="flex flex-col justify-between min-h-52">
              <div>
                <h1 className="font-bold">{currentContent.title}</h1>
                <div className="max-h-34 overflow-y-auto pr-1">
                  {currentContent.body.map((paragraph, i) => {
                    const colonIndex = paragraph.indexOf(":");
                    return (
                      <p
                        key={i}
                        className={`font-light ${i > 0 ? "mt-5" : ""}`}
                      >
                        {colonIndex !== -1 ? (
                          <>
                            <span className="font-bold">
                              {paragraph.slice(0, colonIndex + 1)}
                            </span>
                            {paragraph.slice(colonIndex + 1)}
                          </>
                        ) : (
                          paragraph
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>
              <a href={currentContent.learnMoreLink || "/learnMore"}>
                <button className="usa-button bg-primary !mt-5 w-fit self-start">
                  Learn More
                  <svg
                    className="usa-icon"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                  >
                    <use href="/assets/img/sprite.svg#arrow_forward"></use>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
