import React from "react";
import BlackButton from "./BlackButton";

const HeroSection = () => {
  return (
    <section
      className="font-poppins bg-gradient-to-r from-[#F0F4E9] to-[#DEF7EE] h-[100vh] max-h-[44.125rem]"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto relative flex flex-col h-full pl-[3.75rem]">
        <h1
          id="hero-heading"
          className="font-semibold text-[3.5rem] h-full flex items-end text-[#6B896E] z-[1]"
        >
          Weight Loss?{" "}
          <span className="text-black ml-3">we got you</span>
        </h1>
        <div className="h-full z-[1]">
          <p className="text-[1.625rem] text-black">
            Find treatments customized to your needs
          </p>
          <div className="pt-8">
            <BlackButton hasAnArrowIcon={true} buttonText="Find my treatment" />
          </div>
        </div>
        <img
          src="/heroimg.png"
          alt="A representative image of weight loss treatment options"
          className="h-[100vh] max-h-[44.125rem] absolute right-0 z-[0]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
