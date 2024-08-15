import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import LargestBrands from "./LargestBrands/LargestBrands";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import ServicesSection from "./Services/Services";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import WorkflowSection from "./WorkflowSection/WorkflowSection";
import PriceSection from "./PriceSection/PriceSection";
import BlogSection from "./BlogSection/BlogSection";

const HomePage = () => {
  return (
    <div className="p-6">
      <HeroSection />
      <LargestBrands />
      <WhoWeAre />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      {/* <WorkflowSection /> */}
      <PriceSection />
      <BlogSection />
    </div>
  );
};

export default HomePage;
