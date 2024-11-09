import React from "react";
import Section6Accordion from "./Section6Accordion";

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Section6 = () => {
  return (
    <div className="bg-gradient-to-r text-black font-poppins from-[#F0F4E9] to-[#DEF7EE] font-poppins w-full py-[1.875rem] mt-[5rem] mb-[8rem]">
      <div className="container mx-auto px-[3.75rem]">
        <div
          className="font-medium text-black text-[2.5rem]"
          style={{ lineHeight: "3.375rem", paddingBottom: "3rem" }}
        >
          Have question? Get answers
        </div>
        <Section6Accordion/>
      </div>
    </div>
  );
};

export default Section6;
