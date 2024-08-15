import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import LargestBrands from "./LargestBrands/LargestBrands";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import ServicesSection from "./Services/Services";

const HomePage = () => {
  return (
    <div className="p-6">
      <HeroSection />
      <LargestBrands />
      <WhoWeAre />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
