"use client";
import { useState } from "react";

export default function Strategies({ cms }) {
  const [activeTab, setActiveTab] = useState("chemical");
  const [activeSubTab, setActiveSubTab] = useState("conventional");

  // Safely format full paragraph blocks by splitting on newlines from WP
  const parseBodyText = (text, fallbacks) => {
    if (!text) return fallbacks;
    return text.split("\n").map(p => p.trim()).filter(Boolean);
  };

  const tabs = {
    chemical: {
      label: cms?.tab01 || "Chemical",
      icon: "science",
      subTabs: {
        conventional: {
          label: cms?.tab01SubTab01Label || "Conventional Chemical",
          image: cms?.tab01SubTab01Image?.node?.sourceUrl || "/conventional.png",
          title: cms?.tab01SubTab01Label || "Conventional Chemical",
          learnMoreLink: cms?.tab01SubTab01Link || "/conventionalPesticide",
          body: parseBodyText(cms?.tab01SubTab01Description, [
            "Conventional pesticides are all active ingredients other than biological pesticides and antimicrobial pesticides. Conventional active ingredients are generally produced synthetically, i.e., are synthetic chemicals that prevent, mitigate, destroy, or repel any pest; or that act as a plant growth regulator, desiccant, defoliant or nitrogen stabilizer.",
            "Wood preservative and anti-foulant products that do not have antimicrobial uses and agricultural fungicide and aquatic herbicide products are either classified as a conventional or a biochemical pesticide. Biochemical pesticides with a toxic mode of action are classified for the purposes of the registration process as conventional pesticides.",
          ]),
        },
        biochemical: {
          label: cms?.tab01SubTab02Label || "Biochemical Pesticides",
          image: cms?.tab01SubTab02Image?.node?.sourceUrl || "/biochemical.png",
          title: cms?.tab01SubTab02Label || "Biochemical Pesticides",
          learnMoreLink: cms?.tab01SubTab02Link || "/learnMore",
          body: parseBodyText(cms?.tab01SubTab02Description, [
            "Biochemical Pesticides are substances that- (1) are naturally occuring chemicals or are synthetically dervived equivalents; (2) have a history of exposure to humans and the environment demonstrating minimal toxicity, or in the case of a synthetically-derived biochemical pesticides, are equivalent to a naturally occuring chemical that have such a history; and (3) have a nontoxic mode of action to the target pest(s). Biochemical pesticides include substances, such as insect sex pheromones, which interfere with mating, as well as various scented plant extracts that attract insect pests to traps. Because it is sometimes difficult to determine whether a substance meets the criteria for classification as a biochemical pesticide, EPA has established the Biochemical Classification Committee to make such decisions.",
          ]),
        },
        antimicrobial: {
          label: cms?.tab01SubTab03Label || "Antimicrobial Pesticides",
          image: cms?.tab01SubTab03Image?.node?.sourceUrl || "/antimicrobial.png",
          title: cms?.tab01SubTab03Label || "Antimicrobial Pesticides",
          learnMoreLink: cms?.tab01SubTab03Link || "/learnMore",
          body: parseBodyText(cms?.tab01SubTab03Description, [
            "An antimicrobial pesticide is intended to disinfect, sanitize, reduce, or mitigate growth or development of microbiological organisms; or protect inanimate objects, industrial processes or systems, surfaces, water, or other chemical substances from contamination, fouling, or deterioration caused by bacteria, viruses, fungi, protozoa, algae, or slime; and in the intended use if exempt from, or otherwise not subject to, a tolerance or a food additive regulation.",
            "Wood preservatives and anti-foulants are classified as antimicrobial pesticides if the products have antimicrobial claims. Other wood preservative, anti-foulant, agricultural fungicide, and aquatic herbicide products are either classified as conventionals or biopesticides.",
          ]),
        },
        minimum: {
          label: cms?.tab01SubTab04Label || "Minimum Risk Pesticides",
          image: cms?.tab01SubTab04Image?.node?.sourceUrl || "/minimum.png",
          title: cms?.tab01SubTab04Label || "Minimum Risk Pesticides",
          learnMoreLink: cms?.tab01SubTab04Link || "/learnMore",
          body: parseBodyText(cms?.tab01SubTab04Description, [
            "These are pesticides that meet a series of criteria determining them to pose little to no risk to human health or the environment. These pesticides are exempt from registration and label review under FIFRA.",
            "If a product does not meet all of the exemption criteria, the product is not exempt from FIFRA regulation under 40 CFR 152.25(f), and sale or distribution of the product without registration may be a violation of FIFRA unless it is otherwise exempt from registration requirements.",
          ]),
        },
      },
    },
    biological: {
      label: cms?.tab02 || "Biological",
      icon: "hourglass_empty",
      subTabs: {
        biotech: {
          label: cms?.tab02SubTab01Label || "Biotechnology",
          image: cms?.tab02SubTab01Image?.node?.sourceUrl || "/biotechnology.png",
          title: cms?.tab02SubTab01Label || "Biotechnology",
          learnMoreLink: cms?.tab02SubTab01Link || "/learnMore",
          body: parseBodyText(cms?.tab02SubTab01Description, [
            "The science of modifying the genetic composition of plants, animals, and microorganisms.",
            "This includes Plant-Incorporated Protectants (PIPs) and genetically modified microbial pesticides.",
          ]),
        },
        biomanipulation: {
          label: cms?.tab02SubTab02Label || "Biomanipulation",
          image: cms?.tab02SubTab02Image?.node?.sourceUrl || "/biomanipulation.png",
          title: cms?.tab02SubTab02Label || "Biomanipulation",
          learnMoreLink: cms?.tab02SubTab02Link || "/learnMore",
          body: parseBodyText(cms?.tab02SubTab02Description, [
            "The strategy to reduce algal blooms and improve water clarity by manipulating the populations of organisms within the food web, particularly fish, shellfish, zooplankton, and aquatic plants.",
          ]),
        },
        microbial: {
          label: cms?.tab02SubTab03Label || "Microbial Pesticides",
          image: cms?.tab02SubTab03Image?.node?.sourceUrl || "/microbial.png",
          title: cms?.tab02SubTab03Label || "Microbial Pesticides",
          learnMoreLink: cms?.tab02SubTab03Link || "/learnMore",
          body: parseBodyText(cms?.tab02SubTab03Description, [
            "Microbial pesticides consist of a microorganism (e.g., a bacterium, fungus, virus or protozoan) as the active ingredient.",
            "Microbial pesticides can control many different kinds of pests, although each seperate active ingredient is relatively specific for its target pests.",
          ]),
        },
        biopesticides: {
          label: cms?.tab02SubTab04Label || "Biopesticides",
          image: cms?.tab02SubTab04Image?.node?.sourceUrl || "/biopesticides.png",
          title: cms?.tab02SubTab04Label || "Biopesticides",
          learnMoreLink: cms?.tab02SubTab04Link || "/biopesticideRegistration",
          body: parseBodyText(cms?.tab02SubTab04Description, [
            "The EPA classifies Biopesticides as those derived from natural materials such as animals, plants, bacteria, and certain minerals. For example, canola oil and baking soda have pesticidal applications and are considered biopesticides.",
            "There are three major categories of biopesticide.",
            "1. Biochemical Pesticides: Naturally occurring, non-toxic substances that control pests without directly killing them (unlike synthetic conventional pesticides). Examples include insect sex pheromones that disrupt mating and scented plant extracts used as trap attractants. The EPA uses a special committee to officially classify these.",
            "2. Microbial Pesticides: Products containing microorganisms (bacteria, fungi, viruses, or protozoa) as the active ingredient. They are highly pest-specific; for instance, different strains of Bacillus thuringiensis (Bt) produce distinct proteins that target and starve specific insect larvae (like mosquitoes or moths) by binding to their gut receptors.",
            "3. Plant-Incorporated-Protectants (PIPs): Pesticidal substances produced naturally by plants that have been genetically modified. For example, scientists can insert the gene for the Bt protein directly into a plant's DNA, causing the plant itself to manufacture the pest-destroying substance. The EPA regulates the genetic material and the protein, but not the plant itself."
          ]),
        },
      },
    },
    physical: {
      label: cms?.tab03 || "Physical",
      icon: "wash",
      subTabs: {
        devices: {
          label: cms?.tab03SubTab01Label || "Physical Devices",
          image: cms?.tab03SubTab01Image?.node?.sourceUrl || "/devices.png",
          title: cms?.tab03SubTab01Label || "Devices",
          learnMoreLink: cms?.tab03SubTab01Link || "/learnMore",
          body: parseBodyText(cms?.tab03SubTab01Description, [
            "an instrument or contrivance, generally working by physical means (e.g., electricity, light, or other mechanical or physical means) and not containing a substance or mixture of substances, that is intended to trap, destroy, repel, or mitigate a pest.",
            "This definition excludes equipment used for applying pesticides when sold seperately from the pesticides themselves. 40 C.F.R. & 152.500(a).",
          ]),
        },
      },
    },
    minimum: {
      label: cms?.tab04 || "Minimum Risk Pesticides",
      icon: "assignment_turned_in",
      subTabs: {
        devices: {
          label: cms?.tab04SubTab01Label || "Minimum Risk Pesticides",
          image: cms?.tab04SubTab01Image?.node?.sourceUrl || "/minimum.png",
          title: cms?.tab04SubTab01Label || "Minimum Risk Pesticides",
          learnMoreLink: cms?.tab04SubTab01Link || "/learnMore",
          body: parseBodyText(cms?.tab04SubTab01Description, [
            "These are pesticides that meet a series of criteria determining them to pose little to no risk to human health or the environment. These pesticides are exempt from registration and label review under FIFRA.",
            "If a product does not meet all of the exemption criteria, the product is not exempt from FIFRA regulation under 40 CFR 152.25(f), and sale or distribution of the product without registration may be a violation of FIFRA unless it is otherwise exempt from registration requirements.",
          ]),
        },
      },
    },
  };

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    // Dynamic key resolution ensures no lookup mismatches across varying objects
    const firstSubTabKey = Object.keys(tabs[tabKey].subTabs)[0];
    setActiveSubTab(firstSubTabKey);
  };

  const currentSubTabs = tabs[activeTab].subTabs;
  const currentContent = currentSubTabs[activeSubTab] || Object.values(currentSubTabs)[0];

  return (
    <div className="px-4 py-10 tracking-wide sm:px-10 lg:px-20">
      <p className="text-sm font-bold text-green">CONTROL STRATEGIES</p>
      <h2 className="mt-1 text-3xl font-bold text-black">
        {cms?.sectionTitle || "Types of HAB Control Technologies"}
      </h2>
      <p className="mt-2 max-w-xl text-sm text-gray-600 whitespace-pre-line">
        {cms?.sectionDescription || "Determining what type of product you have is key as each type has a different process for registration"}
      </p>

      {/* Main Tabs Container */}
      <div className="mt-5 rounded-xl border border-gray-300 overflow-hidden">
        <div className="bg-[#ecf8dc] flex flex-wrap text-gray-500 font-bold p-4 gap-2">
          {Object.entries(tabs).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`p-4 rounded transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 flex-1 min-w-[140px] ${activeTab === key ? "bg-[#4b710a] text-white" : "text-gray-500 hover:bg-[#bed79c]"}`}
            >
              {tab.icon && (
                <svg className="usa-icon w-4 h-4" aria-hidden="true" focusable="false" role="img">
                  <use href={`/assets/img/sprite.svg#${tab.icon}`}></use>
                </svg>
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sub Tabs Container */}
        <div className="bg-primary-lighter text-gray-500 font-bold p-3 flex flex-wrap gap-2">
          {Object.entries(currentSubTabs).map(([key, subTab]) => (
            <button
              key={key}
              onClick={() => setActiveSubTab(key)}
              className={`rounded py-2 px-3 font-bold transition-all duration-300 cursor-pointer flex-1 text-center min-w-[120px] ${activeSubTab === key ? "bg-primary text-white" : "text-gray-500 hover:bg-[#bed6e8]"}`}
            >
              {subTab.label}
            </button>
          ))}
        </div>

        {/* Selected Data Output Viewport */}
        <div className="bg-white text-black p-6 border-t border-gray-300">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={currentContent.image}
              alt=""
              className="w-60 h-60 object-contain shrink-0 mx-auto md:mx-0 mt-2"
            />
            <div className="flex flex-col justify-between min-h-[15rem] w-full">
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">{currentContent.title}</h3>
                <div className="space-y-4 pr-1 max-h-64 overflow-y-auto">
                  {currentContent.body.map((paragraph, i) => {
                    const colonIndex = paragraph.indexOf(":");
                    return (
                      <p key={i} className={`font-light text-gray-800 leading-relaxed ${i > 0 ? "mt-5" : ""}`}>
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
              
              <a href={currentContent.learnMoreLink || "/learnMore"} className="mt-6 block">
                <button className="usa-button bg-primary flex items-center gap-1">
                  Learn More
                  <svg className="usa-icon w-4 h-4" aria-hidden="true" focusable="false" role="img">
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