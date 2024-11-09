import React from "react";
import BlackButton from "./BlackButton";
const Section4ContentCard = () => {
  return (
    <div className="text-[#3E3E3E] my-4 font-poppins flex-1 min-w-[35.25rem] flex bg-gradient-to-r from-[#F0F4E9] to-[#DEF7EE] rounded-[1.875rem]">
      <img src="/section4_dropper.png" alt="Product dropper" />
      <div className="px-2 pl-8 flex flex-col justify-center">
        <h2 className="text-[2rem] font-medium">
          Thicker, fuller hair
          <br />
          starts here
        </h2>
        <p className="py-2 font-light text-lg">
          Personalized treatments made with
          <br />
          Rx ingredients and supplements.
        </p>
        <div className="w-fit">
          <BlackButton hasAnArrowIcon={false} buttonText="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Section4ContentCard;
