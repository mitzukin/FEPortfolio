import React from "react";
import HeroSection from "./HeroSection";
import ToolsSection from "./ToolsSection";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <div>
        <div className="absolute top-96  gradient inset-0 blur-[200px] md:blur-[300px] "></div>
        <div className="absolute h-[300px]  gradient-2 inset-0 "></div>

        <HeroSection />
        <ToolsSection />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
