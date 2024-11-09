import React from "react";

const BlackButton = ({hasAnArrowIcon, buttonText}) => {
  return(
    <button className="flex gap-x-2 items-center text-white bg-black py-3 px-6 rounded-3xl">
      <p className="text-[0.938rem] text-nowrap">{buttonText}</p>
      {hasAnArrowIcon && <img src="/ic-fill-arrow-right.png" alt="" />}
    </button>
  )
}

export default BlackButton