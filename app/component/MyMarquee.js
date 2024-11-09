import Marquee from "react-fast-marquee";

const marqueeItems = [
  "Discreet packaging and direct delivery",
  "Free shipping for all prescriptions",
  "Love",
  "Discreet packaging and direct delivery",
  "Free shipping for all prescriptions",
  "Love",
  "Discreet packaging and direct delivery",
  "Free shipping for all prescriptions",
  "Love",
  "Discreet packaging and direct delivery",
  "Free shipping for all prescriptions",
  "Love",
  "Discreet packaging and direct delivery",
  "Free shipping for all prescriptions",
  "Love",
  "Discreet packaging and direct delivery",
  "Free shipping for all prescriptions",
  "Love",
];

const MyMarquee = () => {
  return (
    <div className="w-full bg-[#F5F6F5] ">
      <Marquee>
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex font-poppins gap-x-2 items-center text-white py-3 px-6 rounded-3xl  text-black"
          >
            <img src="/Star 1.png" alt="" />
            <p className="text-[0.938rem] text-black text-2xl">{item}</p>
            
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MyMarquee;
