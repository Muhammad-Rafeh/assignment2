import React from "react";
import BlackButton from "./BlackButton";
const Section5Card = ({ singleButton = false }) => {
  return (
    <div className="flex p-4 rounded-3xl flex-col bg-gradient-to-r from-[#F0F4E9] to-[#DEF7EE] text-black font-poppins gap-y-4">
      <h3 className="font-medium text-[1.125rem]">Weight loss with a plan</h3>
      <div className="w-[23.25rem] h-[24.5rem] rounded-lg">
        <img
          src="/steroids.png"
          alt=""
          className="h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex w-full gap-x-1">
        <button className="flex w-full justify-center gap-x-2 items-center text-white bg-black py-3 px-6 rounded-3xl">
          <p className="text-[0.938rem] text-nowrap">Get Started</p>
        </button>
        {!singleButton && (
          <button className="flex w-full justify-center gap-x-2 items-center text-black border border-black  py-3 px-6 rounded-3xl">
            <p className="text-[0.938rem] text-nowrap">Learn More</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Section5Card;
