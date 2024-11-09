import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-[55]">
      <div className="bg-gradient-to-r font-poppins h-[100px] container px-[3.75rem] mx-auto w-full">
        <nav
          className="py-5 flex justify-between w-full"
          style={{
            fontWeight: 500,
            lineHeight: "19.12px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          <div className="flex gap-x-4 text-[14px]">
            {/* Logo section */}
            <div>
              <svg
                width="65"
                height="65"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.000152588"
                  width="56"
                  height="56"
                  rx="8"
                  fill="white"
                  fillOpacity="0.5"
                />
                <rect
                  x="0.500153"
                  y="0.5"
                  width="55"
                  height="55"
                  rx="7.5"
                  stroke="#B9D3BA"
                  strokeOpacity="0.5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0002 25C12.0002 24.4696 12.2109 23.9609 12.5859 23.5858C12.961 23.2107 13.4697 23 14.0002 23H34.6162C35.1466 23 35.6553 23.2107 36.0304 23.5858C36.4054 23.9609 36.6162 24.4696 36.6162 25C36.6162 25.5304 36.4054 26.0391 36.0304 26.4142C35.6553 26.7893 35.1466 27 34.6162 27H14.0002C13.4697 27 12.961 26.7893 12.5859 26.4142C12.2109 26.0391 12.0002 25.5304 12.0002 25ZM12.0002 17C12.0002 16.4696 12.2109 15.9609 12.5859 15.5858C12.961 15.2107 13.4697 15 14.0002 15H42.0002C42.5306 15 43.0393 15.2107 43.4144 15.5858C43.7894 15.9609 44.0002 16.4696 44.0002 17C44.0002 17.5304 43.7894 18.0391 43.4144 18.4142C43.0393 18.7893 42.5306 19 42.0002 19H14.0002C13.4697 19 12.961 18.7893 12.5859 18.4142C12.2109 18.0391 12.0002 17.5304 12.0002 17ZM12.0002 33C12.0002 32.4696 12.2109 31.9609 12.5859 31.5858C12.961 31.2107 13.4697 31 14.0002 31H42.0002C42.5306 31 43.0393 31.2107 43.4144 31.5858C43.7894 31.9609 44.0002 32.4696 44.0002 33C44.0002 33.5304 43.7894 34.0391 43.4144 34.4142C43.0393 34.7893 42.5306 35 42.0002 35H14.0002C13.4697 35 12.961 34.7893 12.5859 34.4142C12.2109 34.0391 12.0002 33.5304 12.0002 33ZM12.0002 41C12.0002 40.4696 12.2109 39.9609 12.5859 39.5858C12.961 39.2107 13.4697 39 14.0002 39H34.6162C35.1466 39 35.6553 39.2107 36.0304 39.5858C36.4054 39.9609 36.6162 40.4696 36.6162 41C36.6162 41.5304 36.4054 42.0391 36.0304 42.4142C35.6553 42.7893 35.1466 43 34.6162 43H14.0002C13.4697 43 12.961 42.7893 12.5859 42.4142C12.2109 42.0391 12.0002 41.5304 12.0002 41Z"
                  fill="#010203"
                />
              </svg>
            </div>
            {/* Navigation buttons */}
            <div className="flex bg-white/50 rounded-[8px]">
              <button className="bg-black text-white py-[23px] px-[19px] rounded-[8px] ">
                For Men
              </button>
              <div className="flex text-black py-[19px]">
                <button className="px-[24px] border-r-[3px] border-black flex items-center">
                  For Women
                </button>
                <button className="pl-[36px] pr-[46px] flex items-center">
                  Kits
                </button>
              </div>
            </div>
          </div>
          {/* Sign Up button */}
          <button className="bg-black text-white py-[23px] px-[46px] rounded-[8px] font-bold">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
