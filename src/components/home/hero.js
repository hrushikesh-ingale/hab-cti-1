"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/hero.jpg",
    label: "WELCOME",
    description: [
      "A collection of HAB control regulations and permitting information to help users navigate algaecide use in marine and freshwater",
    ],
  },
  {
    image: "/hero2.jpg",
    label: "WHAT WE DO",
    tag: "US HAB CTRL",
    title: "What We Do",
    description: [
      "The US HAB CTRL helps simplify the regulatory process around harmful algal bloom (HAB) control.",
      "We make it easier for researchers, agencies, and industry stakeholders to understand permitting requirements, reduce delays and uncertainties early in development, and access information on safe, approved products - all in one place.",
    ],
  },
  {
    image: "/hero3.jpg",
    label: "WHY IT MATTERS",
    tag: "US HAB CTRL",
    title: "Why It Matters",
    description: [
      "By improving transparency and clarity in the permitting process, the HAB control supports faster, safer, and more informed decision-making.",
      "This reduces time, costs, and confusion for industries and researchers working on HAB solutions.",
    ],
  },
  {
    image: "/hero4.jpg",
    label: "WHAT WE SUPPORT",
    tag: "US HAB CTRL",
    title: "What We Support",
    description: [
      "We aim to help users make informed decisions about HAB control by sharing guidance on when and how approved products may be used.",
      "While the platform doesn't claim to cover everything, it provides a strong starting point rooted in current best practices and available regulatory insights.",
    ],
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <div className="px-20 py-4 tracking-wide">
      <div className="relative text-white h-85 rounded-lg overflow-hidden">
        {slides.map((s, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out ${index === activeSlide ? "slide-active" : ""}`}
            style={{
              backgroundImage: `url('${s.image}')`,
              transform: `translateX(${(index - activeSlide) * 100}%)`,
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10 z-10" />

        {/* Welcome slide */}
        {activeSlide === 0 && (
          <div className="relative z-10 py-10 px-1 text-center mb-6">
            <p className="text-[#78a529] text-l font-bold mt-5">WELCOME TO</p>
            <div className="font-bold text-xl leading-tight relative w-fit mx-auto after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent">
              <h1 className="!mb-0">Harmful Algal Bloom Control</h1>
              <h1 className="!mt-2">Technologies & Regulatory Logistics</h1>
            </div>
            <div className="text-l text-gray-200 max-w-xl mx-auto whitespace-nowrap">
              <p>
                A collection of HAB control regulations and permitting
                information to help
              </p>
              <p>users navigate algaecide use in marine and freshwater</p>
            </div>
          </div>
        )}

        {/* Other slides */}
        {activeSlide !== 0 && (
          <div className="relative z-10 py-8 px-8 mb-6">
            <p className="text-[#78a529] font-bold text-sm">{slide.tag}</p>
            <h1 className="font-bold !mt-1 !mb-3">{slide.title}</h1>
            {slide.description.map((paragraph, i) => (
              <p
                key={i}
                className={`text-gray-200 max-w-sm text-sm ${i > 0 ? "mt-3" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Slide indicators */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center gap-4 px-8 py-4">
          {slides.map((s, index) => (
            <div key={index} className="flex flex-col items-start flex-1 gap-1">
              <p
                className={`text-xs font-bold transition-opacity duration-800 ${activeSlide === index ? "opacity-100" : "opacity-0"}`}
              >
                {s.label}
              </p>
              <button
                onClick={() => setActiveSlide(index)}
                className={`w-full rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === index
                    ? "bg-white h-1"
                    : "bg-white opacity-40 h-0.5 hover:opacity-80 hover:h-1"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
