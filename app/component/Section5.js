import React from "react";
import Section5Card from "./Section5Card";
const Section5 = () => {
  return (
    <div className="w-full bg-white font-poppins oveflow-hidden">
      <div className="mx-auto container pl-[3.75rem]">
        <h2 className="font-semibold text-[#0D0E0D] text-[2.5rem] pb-4">
          Weight
        </h2>

        <div
          className="flex gap-x-6 overflow-x-auto"
          style={{
            sOverflowStyle: "none", // Internet Explorer 10+
            scrollbarWidth: "none", // Firefox
            WebkitScrollbar: { display: "none" },
          }}
        >
          <Section5Card singleButton={true} />
          <Section5Card />
          <Section5Card />
          <Section5Card />
          <Section5Card />
          <Section5Card />
        </div>
      </div>
      <div className="h-[6rem]"></div>
    </div>
  );
};

export default Section5;
