"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  {
    id: "data-requirements",
    label: "Data requirements and test methods for pesticide products by type",
  },
  { id: "product-performance", label: "Product Performance" },
  { id: "additional-information", label: "Additional Information" },
];

const externalLinks = {
  epaDataRequirements:
    "https://www.epa.gov/pesticide-registration/data-requirements-pesticide-registration",
  finalTestGuidelines:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/final-test-guidelines-pesticides-and-toxic",
  productPerformance:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-810-product-performance-test-guidelines",
  conventionalRegistration:
    "https://www.epa.gov/pesticide-registration/conventional-pesticide-registration",
  biopesticideRegistration:
    "https://www.epa.gov/pesticide-registration/biopesticide-registration",
  antimicrobialRegistration:
    "https://www.epa.gov/pesticide-registration/antimicrobial-pesticide-registration",
  preApplicationMeetings:
    "https://www.epa.gov/pesticide-registration/guidance-pre-application-meetings-new-active-ingredients-major-new-uses-and",
  productProperties830:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-830-product-properties-test-guidelines",
  environmentalFate835:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-835-fate-transport-and-transformation-test",
  sprayDrift840:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-840-spray-drift-test-guidelines",
  ecologicalEffects850:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-850-ecological-effects-test-guidelines",
  residueChemistry860:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-860-residue-chemistry-test-guidelines",
  healthEffects870:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-870-health-effects-test-guidelines",
  exposure875:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-875-occupational-and-residential-exposure",
  biochemicals880:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-880-biochemicals-test-guidelines",
  microbial885:
    "https://www.epa.gov/test-guidelines-pesticides-and-toxic-substances/series-885-microbial-pesticide-test-guidelines",
};

const conventionalRows = [
  { group: "Applicator Exposure (Occupational & Residential)" },
  {
    rd: "875.1100",
    bppd: "",
    name: "Dermal Outdoor Exposure",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "875.1300",
    bppd: "",
    name: "Inhalation Outdoor Exposure",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "875.1500",
    bppd: "",
    name: "Biological Monitoring",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "875.1600",
    bppd: "",
    name: "Data Reporting and Calculations",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "875.1700",
    bppd: "",
    name: "Product Use Information",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },

  { group: "Confidential Product Chemistry" },
  {
    rd: "830.1550",
    bppd: "",
    name: "Product Identity and Composition",
    registrationFood: "R",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "830.1600",
    bppd: "",
    name: "Description of Materials Used to Produce the Product",
    registrationFood: "R",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "830.1620",
    bppd: "",
    name: "Description of Production Process",
    registrationFood: "R",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "830.1650",
    bppd: "",
    name: "Description of formulation process",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.1670",
    bppd: "",
    name: "Discussion of Formation of Impurities",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.1700",
    bppd: "",
    name: "Preliminary Analysis",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.1750",
    bppd: "",
    name: "Certified Limits",
    registrationFood: "R",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "830.1800",
    bppd: "",
    name: "Enforcement Analytical Method",
    registrationFood: "R",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "830.1900",
    bppd: "",
    name: "Submittal of Samples",
    registrationFood: "CR",
    eupFood: "R",
    nonFood: "R",
  },

  { group: "Ecological Effects (Aquatic Non-target Organisms)" },
  {
    rd: "850.1010",
    bppd: "",
    name: "Aquatic Invertebrate, Acute Toxicity, Freshwater",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "850.1025",
    bppd: "",
    name: "Oyster Acute Toxicity Test (Shell Deposition)",
    registrationFood: "R (minimum 1 mollusk, 1 other invertebrate)",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "850.1035",
    bppd: "",
    name: "Mysid Acute Toxicity Test",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "",
  },
  {
    rd: "850.1045",
    bppd: "",
    name: "Penaeid Acute Toxicity Test",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "",
  },
  {
    rd: "850.1055",
    bppd: "",
    name: "Bivalve Acute Toxicity Test (Embryo, Larval)",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "",
  },
  {
    rd: "850.1075",
    bppd: "",
    name: "Fish Acute Toxicity Test: Freshwater",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "850.1950",
    bppd: "",
    name: "Simulated or Actual Field Testing for Aquatic Organisms",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "850.1075",
    bppd: "",
    name: "Fish Acute Toxicity Test: Marine",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },

  { group: "Ecological Effects (Non-target Birds, Bees, Plants)" },
  {
    rd: "850.2500",
    bppd: "",
    name: "Simulated or Actual Field Testing",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "850.3030",
    bppd: "",
    name: "Honey Bee Toxicity of Residues on Foliage",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "850.3040",
    bppd: "",
    name: "Field Testing for Pollinators",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "850.4100",
    bppd: "",
    name: "Terrestrial Plant Toxicity: Seedling Emergence",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "850.4150",
    bppd: "",
    name: "Terrestrial Plant Toxicity: Vegetative Vigor",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "850.4300",
    bppd: "",
    name: "Terrestrial Field Phytotoxicity",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "850.4450",
    bppd: "",
    name: "Aquatic Field Phytotoxicity",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },

  { group: "Environmental Fate" },
  {
    rd: "835.6100",
    bppd: "",
    name: "Terrestrial Field Dissipation",
    registrationFood: "CR",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "835.6200",
    bppd: "",
    name: "Aquatic (Sediment) Field Dissipation",
    registrationFood: "R",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "835.6400",
    bppd: "",
    name: "Combination and Tank Mix Field Dissipation",
    registrationFood: "CR",
    eupFood: "NR",
    nonFood: "NR",
  },

  { group: "Mammalian Toxicology Data" },
  {
    rd: "870.1100",
    bppd: "",
    name: "Acute Oral Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.1200",
    bppd: "",
    name: "Acute Dermal Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.1300",
    bppd: "",
    name: "Acute Inhalation Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.2400",
    bppd: "",
    name: "Acute Eye Irritation",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.2500",
    bppd: "",
    name: "Acute Dermal Irritation",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.2600",
    bppd: "",
    name: "Skin Sensitization",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.3200",
    bppd: "",
    name: "21/28 Day Dermal",
    registrationFood: "R",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "870.3250",
    bppd: "",
    name: "90-Day Dermal",
    registrationFood: "CR",
    eupFood: "NR",
    nonFood: "NR",
  },

  { group: "Physical & Chemical Properties" },
  {
    rd: "830.6302",
    bppd: "",
    name: "Color",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.6303",
    bppd: "",
    name: "Physical State",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.6304",
    bppd: "",
    name: "Odor",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.6313",
    bppd: "",
    name: "Stability to Normal and Elevated Temperatures, Metals, and Metal Ions",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.6314",
    bppd: "",
    name: "Oxidation/Reduction: Chemical Incompatibility",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.6315",
    bppd: "",
    name: "Flammability",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.6316",
    bppd: "",
    name: "Explodability",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.6317",
    bppd: "",
    name: "Storage Stability",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.6319",
    bppd: "",
    name: "Miscibility",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.6320",
    bppd: "",
    name: "Corrosion Characteristics",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.6321",
    bppd: "",
    name: "Dielectric Breakdown Voltage",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.7000",
    bppd: "",
    name: "pH",
    registrationFood: "CR",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.7100",
    bppd: "",
    name: "Viscocity",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.7300",
    bppd: "",
    name: "Density / Relative Density / Bulk Density",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.7520",
    bppd: "",
    name: "Particle Size, Fiber Length, and Diameter Distribution",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },

  { group: "Post-Application Exposure (Occupational & Residential)" },
  {
    rd: "875.2100",
    bppd: "",
    name: "Dislodgeable Foliar Residue and Turf Transferable Residues",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "875.2200",
    bppd: "",
    name: "Soil Residue Dissipation",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "875.2400",
    bppd: "",
    name: "Dermal Exposure",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "875.2500",
    bppd: "",
    name: "Inhalation Exposure",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "875.2600",
    bppd: "",
    name: "Biological Monitoring",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "875.2700",
    bppd: "",
    name: "Product Use Information",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "875.2800",
    bppd: "",
    name: "Description of Human Activity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "875.2900",
    bppd: "",
    name: "Data Reporting and Calculations",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "875.3000",
    bppd: "",
    name: "Nondietary Ingestion Exposure",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },

  { group: "Residue Chemistry" },
  {
    rd: "860.1200",
    bppd: "",
    name: "Directions for Use",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "NR",
  },
  {
    rd: "860.1380",
    bppd: "",
    name: "Magnitude of the Residue: Storage Stability Data",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "NR",
  },
  {
    rd: "860.1400",
    bppd: "",
    name: "Magnitude of the Residue: Water, Fish, Potable Water, and Irrigated Crops",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "NR",
  },
  {
    rd: "860.1480",
    bppd: "",
    name: "Magnitude of the Residue: Meat, Milk, Poultry, Eggs",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "860.1500",
    bppd: "",
    name: "Magnitude of the Residue: Crop Field Trials (Plants)",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "NR",
  },
  {
    rd: "860.1520",
    bppd: "",
    name: "Magnitude of the Residue: Processed Food/Feed",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "860.1550",
    bppd: "",
    name: "Proposed Tolerance",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "NR",
  },
  {
    rd: "860.1560",
    bppd: "",
    name: "Reasonable Grounds in Support of the Petition",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "NR",
  },
  {
    rd: "860.1900",
    bppd: "",
    name: "Field Rotational Crops",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },

  { group: "Spray Drift" },
  {
    rd: "840.1100",
    bppd: "",
    name: "Droplet Size",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "840.1200",
    bppd: "",
    name: "Droplet Size",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
];

const biochemicalRows = [
  { group: "Confidential Product Chemistry" },
  {
    rd: "",
    bppd: "880.1100",
    name: "Product Identity and Composition",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "",
    bppd: "880.1200",
    name: "Description of Materials Used to Produce the Product",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "",
    bppd: "880.1200",
    name: "Description of Production Process",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "",
    bppd: "880.1200",
    name: "Description of formulation process",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "",
    bppd: "880.1400",
    name: "Discussion of Formation of Impurities",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.1700",
    bppd: "",
    name: "Preliminary Analysis",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.1750",
    bppd: "",
    name: "Certified Limits",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.1800",
    bppd: "",
    name: "Enforcement Analytical Method",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.1900",
    bppd: "",
    name: "Submittal of Samples",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },

  { group: "Ecological Effects (Aquatic Non-target)" },
  {
    rd: "850.1010",
    bppd: "",
    name: "Aquatic Invertebrate, Acute Toxicity, Freshwater",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "850.1025",
    bppd: "",
    name: "Oyster Acute Toxicity Test (Shell Deposition)",
    registrationFood: "CR (Tier III)",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "850.1035",
    bppd: "",
    name: "Mysid Acute Toxicity Test",
    registrationFood: "CR (Tier III)",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "850.1045",
    bppd: "",
    name: "Penaeid Acute Toxicity Test",
    registrationFood: "CR (Tier III)",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "850.1055",
    bppd: "",
    name: "Bivalve Acute Toxicity Test (Embryo, Larval)",
    registrationFood: "CR (Tier III)",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "850.1075",
    bppd: "",
    name: "Fish Acute Toxicity Test: Freshwater",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "850.1950",
    bppd: "",
    name: "Simulated or Actual Field Testing for Aquatic Organisms",
    registrationFood: "CR (Tier III)",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "850.1075",
    bppd: "",
    name: "Fish Acute Toxicity Test: Marine",
    registrationFood: "CR (Tier III)",
    eupFood: "NR",
    nonFood: "NR",
  },

  { group: "Ecological Effects (Non-target Birds, Bees, Plants)" },
  {
    rd: "850.2100",
    bppd: "",
    name: "Avian Acute Oral Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "850.2200",
    bppd: "",
    name: "Avian Dietary Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "850.3040",
    bppd: "",
    name: "Field Testing for Pollinators",
    registrationFood: "CR (Tier III)",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "850.4100",
    bppd: "",
    name: "Terrestrial Plant Toxicity: Seedling Emergence",
    registrationFood: "R",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "850.4150",
    bppd: "",
    name: "Terrestrial Plant Toxicity: Vegetative Vigor",
    registrationFood: "R",
    eupFood: "NR",
    nonFood: "NR",
  },

  { group: "Mammalian Toxicology Data" },
  {
    rd: "870.1100",
    bppd: "",
    name: "Acute Oral Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.1200",
    bppd: "",
    name: "Acute Dermal Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.1300",
    bppd: "",
    name: "Acute Inhalation Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.2400",
    bppd: "",
    name: "Acute Eye Irritation",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.2500",
    bppd: "",
    name: "Acute Dermal Irritation",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.2600",
    bppd: "",
    name: "Skin Sensitization",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },

  { group: "Physical & Chemical Properties" },
  {
    rd: "830.6303",
    bppd: "",
    name: "Physical State",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.6315",
    bppd: "",
    name: "Flammability",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.6317",
    bppd: "",
    name: "Storage Stability",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.6319",
    bppd: "",
    name: "Miscibility",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.6320",
    bppd: "",
    name: "Corrosion Characteristics",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.7000",
    bppd: "",
    name: "pH",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.7100",
    bppd: "",
    name: "Viscocity",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },
  {
    rd: "830.7300",
    bppd: "",
    name: "Density / Relative Density / Bulk Density",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.7520",
    bppd: "",
    name: "Particle Size, Fiber Length, and Diameter Distribution",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "CR",
  },

  { group: "Residue Chemistry" },
  {
    rd: "860.1200",
    bppd: "",
    name: "Directions for Use",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.2400",
    name: "Magnitude of the Residue: Storage Stability Data",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.2600",
    name: "Magnitude of the Residue: Water, Fish, Potable Water, and Irrigated Crops",
    registrationFood: "CR",
    eupFood: "R",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.2500",
    name: "Magnitude of the Residue: Crop Field Trials (Plants)",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "860.1520",
    bppd: "",
    name: "Magnitude of the Residue: Processed Food/Feed",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "860.1550",
    bppd: "",
    name: "Proposed Tolerance",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "860.1560",
    bppd: "",
    name: "Reasonable Grounds in Support of the Petition",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
];

const microbialRows = [
  { group: "Confidential Microbiology" },
  {
    rd: "",
    bppd: "885.1400",
    name: "Analysis of Samples",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "",
    bppd: "885.1500",
    name: "Certification of Limits",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "",
    bppd: "885.1300",
    name: "Discussion of Formation of Unintentional Ingredients",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "",
    bppd: "885.1200",
    name: "Manufacturing Process",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "",
    bppd: "885.1100",
    name: "Product Identity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },

  { group: "Ecological Effects (Non-target Birds, Bees, Plants)" },
  {
    rd: "850.2500",
    bppd: "",
    name: "Simulated or Actual Field Testing",
    registrationFood: "CR (Tier IV)",
    eupFood: "NR",
    nonFood: "NR",
  },

  { group: "Mammalian Toxicology Data" },
  {
    rd: "870.1100",
    bppd: "",
    name: "Acute Oral Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.1200",
    bppd: "",
    name: "Acute Dermal Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.1300",
    bppd: "",
    name: "Acute Inhalation Toxicity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.2400",
    bppd: "",
    name: "Acute Eye Irritation",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "870.2500",
    bppd: "",
    name: "Acute Dermal Irritation",
    registrationFood: "R",
    eupFood: "NR",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.3400",
    name: "Hypersensitivity Incidents",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },

  { group: "Microbial: Tier 1" },
  {
    rd: "",
    bppd: "885.4300",
    name: "Nontarget Plant Testing",
    registrationFood: "CR",
    eupFood: "NR",
    nonFood: "NR",
  },

  { group: "Physical & Chemical Properties" },
  {
    rd: "830.6317",
    bppd: "",
    name: "Storage Stability",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.6319",
    bppd: "",
    name: "Miscibility",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.6320",
    bppd: "",
    name: "Corrosion Characteristics",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },
  {
    rd: "830.7100",
    bppd: "",
    name: "Viscocity",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "R",
  },

  { group: "Residue Chemistry" },
  {
    rd: "860.1200",
    bppd: "",
    name: "Directions for Use",
    registrationFood: "R",
    eupFood: "R",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.2400",
    name: "Magnitude of the Residue: Storage Stability Data",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.2600",
    name: "Magnitude of the Residue: Water, Fish, Potable Water, and Irrigated Crops",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.2550",
    name: "Magnitude of the Residue: Meat, Milk, Poultry, Eggs",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.2500",
    name: "Magnitude of the Residue: Crop Field Trials (Plants)",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.2100",
    name: "Chemical identity",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.2500",
    name: "Nature of the Residue in Animals",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
  {
    rd: "",
    bppd: "885.2200",
    name: "Nature of the Residue in Plants",
    registrationFood: "CR",
    eupFood: "CR",
    nonFood: "NR",
  },
];

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

function requirementClass(value) {
  if (value?.startsWith("R")) return "bg-[#fff2cc]";
  if (value?.startsWith("CR")) return "bg-[#cfe2f3]";
  return "bg-white";
}

function getTypeLink(type) {
  if (type === "Conventional") return externalLinks.conventionalRegistration;
  if (type === "Biochemical") return externalLinks.biopesticideRegistration;
  if (type === "Microbial") return externalLinks.biopesticideRegistration;
  return externalLinks.epaDataRequirements;
}

function getGroupLink(type, group) {
  if (group.includes("Applicator Exposure")) return externalLinks.exposure875;
  if (group.includes("Post-Application Exposure")) return externalLinks.exposure875;

  if (group.includes("Confidential Microbiology")) {
    return externalLinks.microbial885;
  }

  if (group.includes("Confidential Product Chemistry")) {
    return type === "Biochemical"
      ? externalLinks.biochemicals880
      : externalLinks.productProperties830;
  }

  if (group.includes("Physical & Chemical Properties")) {
    return externalLinks.productProperties830;
  }

  if (group.includes("Ecological Effects")) {
    return externalLinks.ecologicalEffects850;
  }

  if (group.includes("Environmental Fate")) {
    return externalLinks.environmentalFate835;
  }

  if (group.includes("Mammalian Toxicology")) {
    return externalLinks.healthEffects870;
  }

  if (group.includes("Microbial: Tier 1")) {
    return externalLinks.microbial885;
  }

  if (group.includes("Residue Chemistry")) {
    return type === "Microbial"
      ? externalLinks.microbial885
      : externalLinks.residueChemistry860;
  }

  if (group.includes("Spray Drift")) {
    return externalLinks.sprayDrift840;
  }

  return externalLinks.finalTestGuidelines;
}

function RequirementCell({ value }) {
  return (
    <td
      className={`border border-black px-1 py-1 align-middle text-[11px] leading-tight xl:px-1.5 xl:text-xs ${requirementClass(
        value
      )}`}
    >
      {value || ""}
    </td>
  );
}

function TableHeadingLink({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[#1155cc] underline underline-offset-2 ${className}`}
    >
      {children}
    </a>
  );
}

function RequirementTable({ type, rows }) {
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
          <TableHeadingLink href={externalLinks.epaDataRequirements}>
            Data requirements and test methods for pesticide products by type.
          </TableHeadingLink>
        </caption>

        <thead>
          <tr>
            <th
              colSpan="6"
              className="border border-black bg-white px-2 py-1.5 text-center text-[11px] font-bold xl:text-xs"
            >
              Adapted from EPA Data Requirements for Development and
              Registration of Pesticide End-Use Products (EPs) • Prepared by
              Cynthia Ann Smith of Conn &amp; Smith, Inc. • 1/31-25
            </th>
          </tr>

          <tr>
            <th
              colSpan="6"
              className="border border-black bg-white px-2 py-2 text-center text-lg font-bold xl:text-xl"
            >
              <TableHeadingLink href={getTypeLink(type)}>
                {type}
              </TableHeadingLink>
            </th>
          </tr>

          <tr>
            <th className="border border-black bg-white px-1 py-1.5 text-left text-[11px] font-bold xl:text-xs">
              RD -<br /> Registration <br /> Division
            </th>

            <th
              colSpan="2"
              className="border border-black bg-white px-1 py-1.5 text-left text-[11px] font-normal xl:text-xs"
            >
              <span className="font-bold">BPPD</span> - Biopesticides Division,
              unique tests for biopesticides, applicable to Biochemical and
              Microbial)
            </th>

            <th className="border border-black bg-white px-1 py-1.5 text-center text-xs font-bold xl:text-sm">
              REGISTRATION
            </th>

            <th
              colSpan="2"
              className="border border-black bg-white px-1 py-1.5 text-center text-xs font-bold xl:text-sm"
            >
              EXPERIMENTAL USE PERMIT
            </th>
          </tr>

          <tr>
            <th
              colSpan="2"
              className="border border-black bg-white px-1 py-1.5 text-center text-xs font-bold xl:text-sm"
            >
              Test Guideline <br /> Series #
            </th>

            <th className="border border-black bg-white px-1 py-1.5 text-left text-xs font-bold italic xl:text-sm">
              Required (R), Conditionally <br /> Required (CR), Not Required
              (NR)
            </th>

            <th className="border border-black bg-white px-1 py-1.5 text-left text-xs font-bold xl:text-sm">
              FOOD USE* <br /> (Tolerance <br /> Requirement)
            </th>

            <th className="border border-black bg-white px-1 py-1.5 text-left text-xs font-bold xl:text-sm">
              FOOD USE* (Tolerance <br /> Requirement)
            </th>

            <th className="border border-black bg-white px-1 py-1.5 text-left text-xs font-bold xl:text-sm">
              NON-FOOD <br /> USE
            </th>
          </tr>

          <tr>
            <th className="border border-black bg-white px-1 py-1 text-left text-xs font-bold xl:text-sm">
              RD
            </th>

            <th className="border border-black bg-white px-1 py-1 text-left text-xs font-bold xl:text-sm">
              BPPD
            </th>

            <th className="border border-black bg-white px-1 py-1 text-left text-xs font-bold xl:text-sm">
              TEST/GUIDLINE NAME
            </th>

            <th
              colSpan="3"
              className="border border-black bg-white px-1 py-1 text-center text-xs font-bold uppercase xl:text-sm"
            >
              <TableHeadingLink href={getTypeLink(type)}>
                {type}
              </TableHeadingLink>
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) =>
            row.group ? (
              <tr key={`${type}-${row.group}-${index}`}>
                <td
                  colSpan="6"
                  className="border border-black bg-[#e6e6e6] px-2 py-1.5 text-center text-xs font-bold xl:text-sm"
                >
                  <TableHeadingLink href={getGroupLink(type, row.group)}>
                    {row.group}
                  </TableHeadingLink>
                </td>
              </tr>
            ) : (
              <tr key={`${type}-${row.name}-${index}`}>
                <td className="border border-black bg-white px-1 py-1 align-middle text-right text-[11px] leading-tight xl:px-1.5 xl:text-xs">
                  {row.rd}
                </td>

                <td className="border border-black bg-white px-1 py-1 align-middle text-right text-[11px] leading-tight xl:px-1.5 xl:text-xs">
                  {row.bppd}
                </td>

                <td className="border border-black bg-white px-1 py-1 align-middle text-left text-[11px] leading-tight xl:px-1.5 xl:text-xs">
                  {row.name}
                </td>

                <RequirementCell value={row.registrationFood} />
                <RequirementCell value={row.eupFood} />
                <RequirementCell value={row.nonFood} />
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function ResearchRequirements() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `#${id}`);
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
        <span className="text-gray-800">
          Pesticide Registration Research Data Requirements
        </span>
      </div>

      {/* background image */}
<div className="relative text-white mt-4 h-60">
  <div className="absolute inset-0 bg-cover bg-center" />
  <div className="absolute inset-0 bg-black opacity-65 z-0" />

  {/* Content */}
  <div className="relative z-10 py-16 px-1 text-center mt-5 hover:scale-105 duration-300">
    <a
      href={externalLinks.epaDataRequirements}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-white no-underline hover:no-underline"
    >
      <h1 className="!text-4xl font-bold !mb-0 !mt-1 text-white">
        Pesticide Registration Research
      </h1>
      <h1 className="!text-4xl font-bold !mb-0 !mt-1 text-white">
        Data Requirements
      </h1>
    </a>
  </div>
</div>

      {/* scroll left side */}
      <div className="mt-10 flex flex-row gap-10">
        <div className="mt-10 w-56 shrink-0">
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

        <div className="min-w-0 flex-1">
          {/* overview section */}
          <div
            id="overview"
            className="mt-10 scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">Overview</h1>
            <p className="mb-8 text-lg">
              Individual research data requirements and EPA-approved tests for
              Conventional, Biochemical, and Microbial pesticide end-use
              products.
            </p>
          </div>

          {/* data requirements section */}
          <div
            id="data-requirements"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">
              Data requirements and test methods for pesticide products by type.
            </h1>

            <div className="mb-8 text-lg">
              <RequirementTable type="Conventional" rows={conventionalRows} />
              <RequirementTable type="Biochemical" rows={biochemicalRows} />
              <RequirementTable type="Microbial" rows={microbialRows} />

              <p className="mt-5 text-base font-bold leading-6 text-black">
                *Note: “FOOD USE” does not necessarily mean a pesticide product
                that will be used directly on food products. Pesticides used in
                such a manner where residues may collect (establishing the need
                for a tolerance) on food products or organisms harvested for food
                would be classified as “FOOD USE.”
              </p>
            </div>
          </div>

          {/* product performance section */}
          <div
            id="product-performance"
            className="scroll-mt-28 border-b-4 border-primary-lighter"
          >
            <h1 className="font-bold text-primary">Product Performance</h1>
            <p className="mb-8 text-lg">
              Efficacy Data (
              <ExternalLink href={externalLinks.productPerformance}>
                Series 810 - Product Performance Test Guidelines
              </ExternalLink>
              ) is required for all pesticide types and registration situations,
              but tests will vary depending on the product&apos;s intended performance
              as described in the label directions.
            </p>
          </div>

          {/* additional information section */}
          <div id="additional-information" className="scroll-mt-28">
            <h1 className="font-bold text-primary">Additional Information</h1>

            <div className="mb-8 text-lg">
              <ul className="ml-6 list-disc">
                <li>
                  For more information on the test guidelines, see the EPA&apos;s{" "}
                  <ExternalLink href={externalLinks.finalTestGuidelines}>
                    Final Test Guidelines for Pesticides and Toxic Substances
                  </ExternalLink>
                  .
                </li>

                <li className="mt-3">
                  For more information on the FIFRA registration process, see the{" "}
                  <Link
                    href="/pesticideRegistration"
                    className="text-primary text-underline"
                  >
                    Pesticide Registration
                  </Link>{" "}
                  page on this website.
                </li>

                <li className="mt-3">
                  For additional information about registration for individual
                  pesticide types, see the respective page(s) on this website.
                  <ul className="mt-3 ml-6 list-[circle]">
                    <li>
                      <ExternalLink href={externalLinks.conventionalRegistration}>
                        Conventional Pesticide Registration
                      </ExternalLink>
                    </li>

                    <li className="mt-3">
                      <ExternalLink href={externalLinks.biopesticideRegistration}>
                        Biopesticides Registration
                      </ExternalLink>
                    </li>

                    <li className="mt-3">
                      <ExternalLink href={externalLinks.antimicrobialRegistration}>
                        Antimicrobial Pesticide Registration
                      </ExternalLink>
                    </li>
                  </ul>
                </li>

                <li className="mt-3">
                  <ExternalLink href={externalLinks.preApplicationMeetings}>
                    Schedule a Pre-Registration Meeting
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}