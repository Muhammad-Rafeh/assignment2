import React from "react";
import Section4ContentCard from "./Section4ContentCard";
const Section4 = () => {
  return (
    <div className="w-full bg-white overflow-hidden ">
      <div className="container mx-auto px-[3.75rem]">
        <div className="flex gap-x-8 py-28 flex-wrap">
          <Section4ContentCard />
          <Section4ContentCard />
        </div>
      </div>
    </div>
  );
};

export default Section4;