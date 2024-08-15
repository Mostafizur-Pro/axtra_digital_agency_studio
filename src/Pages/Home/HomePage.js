import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import LargestBrands from "./LargestBrands/LargestBrands";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import ServicesSection from "./Services/Services";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";

const HomePage = () => {
  return (
    <div className="p-6">
      <HeroSection />
      <LargestBrands />
      <WhoWeAre />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection
       />
    </div>
  );
};

export default HomePage;
