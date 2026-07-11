import React from "react";
import { FaArrowRight } from "react-icons/fa";
import heroImg from "/heroImg.png";
import MainText from "../HeroSection/MainText";
import Services from "../HeroSection/Services";
import HeroImg from "../HeroSection/HeroImg";
import Category from "./Category";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex flex-col items-center gap-12 px-6 py-10 lg:flex-row lg:gap-16 lg:py-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <MainText />
        </div>

        {/* Right Image */}
        <div className="flex w-full h-full justify-center lg:w-1/2">
          <HeroImg />
        </div>
      </div>

      {/* Services */}
      <div className="mx-auto max-w-7xl px-6 pb-10 lg:-mt-16">
        <Services />
      </div>
    </div>
  );
};

export default HeroSection;
