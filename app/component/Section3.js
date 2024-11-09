import React from "react";
import BlackButton from "./BlackButton";
const Section3 = () => {
  return (
    <div
      className="w-full h-[100vh] max-h-[43.25rem] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://s3-alpha-sig.figma.com/img/87b7/2196/958f3520a66f8fd4723d8ae340c57f8e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k-P9wrDWJXeGlROCqueCps7Ve8MZOgKFdyz3Xr70wax5arBEDQkMtzeLQTOwbK8UHw2wqOvOYCuIHCaa5dal474Jax-WA26HaDCvhk8d4xuEY-zNkwimMaaIlqPqG2fYDM30tLVT6JVV5h2iKwW0D81zqGinxjP5DLkbCxRWsY11DS0bZuoa9If2qaCHYIVF~7V6kfpUOJ6FgME9UUok4TKpSfXj~PXIjUvjPZldwk2JxvvUsWkSx4Ovnqf5m64MX1bjr1aqBLHZcB~FQvfPt20X5kNvsVA5hSAvJjI9o3ZzFhLN8SGGRF7tYZhVMVbj16W5NT1VBbXPVBflrTbi8A__")`,
      }}
    >
      <div className="w-full bg-gradient-to-r from-black/70 to-transparent h-[100vh] max-h-[43.25rem]">
        <div className="relative h-full  font-poppins container mx-auto  px-[3.75rem]  pl-[8rem]">
          <div className="h-full flex justify-center flex-col">
            <div
              style={{ lineHeight: "43.7px" }}
              className="text-[32px] font-medium"
            >
              Lose weight and keep
              <br /> it off with GLP-1s
            </div>
            <div
              style={{ lineHeight: "24.5px" }}
              className="text-[18px] mt-3 font-normal"
            >
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Scelerisque duis ultrices sollicitudin
              <br /> aliquam sem. Scelerisque duis ultrices sollicitudin{" "}
            </div>
            <div className="w-fit py-6">
              <BlackButton
                hasAnArrowIcon={true}
                buttonText="Find my treatment"
              />
            </div>
            <div className="border-2 border-white bg-white/20 p-5 px-10 w-fit rounded-xl">
              <img src="/downGreenStat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
