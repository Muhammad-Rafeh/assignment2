import React from "react";

const Section2 = () => {
  const cardData = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/52cc/546c/977fdd0395ae19c990fac4b1fd8a408b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DFmeQNJMTW9UQ0aof~--La-pXvtsgTiHxVh5Z2FRp47pWEQvYrAMqoZ5JBA4MK7eApckL4FvBt8OkrEFXo35nBV5pgA2~FGQVT-iM1qcZ~LXx6PI~AIBYPZo3MGt-uko-UhE2WNAQRQYncV1XGQnn4EzzvD2GyuYtIigWqRypmVyGuieOVrm3X8kj~481YAWBaQnkJ42rYRpzJE4hHvI15uGZ6KQNcrfWpgTblU-aV1y1iEZynKcMVfSoW2jqfj34bTQCW1lwAcBGbB4moLTXVZgp~GrWIJX3C~iGIBHQOP486tPO2f5V3VOCapKmQZzh1ErxdKzsgJ2mpgl7xtXkA__",
      title: "Weight Loss",
      description: "Regrown and active",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/52cc/546c/977fdd0395ae19c990fac4b1fd8a408b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DFmeQNJMTW9UQ0aof~--La-pXvtsgTiHxVh5Z2FRp47pWEQvYrAMqoZ5JBA4MK7eApckL4FvBt8OkrEFXo35nBV5pgA2~FGQVT-iM1qcZ~LXx6PI~AIBYPZo3MGt-uko-UhE2WNAQRQYncV1XGQnn4EzzvD2GyuYtIigWqRypmVyGuieOVrm3X8kj~481YAWBaQnkJ42rYRpzJE4hHvI15uGZ6KQNcrfWpgTblU-aV1y1iEZynKcMVfSoW2jqfj34bTQCW1lwAcBGbB4moLTXVZgp~GrWIJX3C~iGIBHQOP486tPO2f5V3VOCapKmQZzh1ErxdKzsgJ2mpgl7xtXkA__",
      title: "Regrow Hair",
      description: "Feel confident and active",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/52cc/546c/977fdd0395ae19c990fac4b1fd8a408b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DFmeQNJMTW9UQ0aof~--La-pXvtsgTiHxVh5Z2FRp47pWEQvYrAMqoZ5JBA4MK7eApckL4FvBt8OkrEFXo35nBV5pgA2~FGQVT-iM1qcZ~LXx6PI~AIBYPZo3MGt-uko-UhE2WNAQRQYncV1XGQnn4EzzvD2GyuYtIigWqRypmVyGuieOVrm3X8kj~481YAWBaQnkJ42rYRpzJE4hHvI15uGZ6KQNcrfWpgTblU-aV1y1iEZynKcMVfSoW2jqfj34bTQCW1lwAcBGbB4moLTXVZgp~GrWIJX3C~iGIBHQOP486tPO2f5V3VOCapKmQZzh1ErxdKzsgJ2mpgl7xtXkA__",
      title: "Weight Loss",
      description: "Regrown and active",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/52cc/546c/977fdd0395ae19c990fac4b1fd8a408b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DFmeQNJMTW9UQ0aof~--La-pXvtsgTiHxVh5Z2FRp47pWEQvYrAMqoZ5JBA4MK7eApckL4FvBt8OkrEFXo35nBV5pgA2~FGQVT-iM1qcZ~LXx6PI~AIBYPZo3MGt-uko-UhE2WNAQRQYncV1XGQnn4EzzvD2GyuYtIigWqRypmVyGuieOVrm3X8kj~481YAWBaQnkJ42rYRpzJE4hHvI15uGZ6KQNcrfWpgTblU-aV1y1iEZynKcMVfSoW2jqfj34bTQCW1lwAcBGbB4moLTXVZgp~GrWIJX3C~iGIBHQOP486tPO2f5V3VOCapKmQZzh1ErxdKzsgJ2mpgl7xtXkA__",
      title: "Regrow Hair",
      description: "Feel confident and active",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/52cc/546c/977fdd0395ae19c990fac4b1fd8a408b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DFmeQNJMTW9UQ0aof~--La-pXvtsgTiHxVh5Z2FRp47pWEQvYrAMqoZ5JBA4MK7eApckL4FvBt8OkrEFXo35nBV5pgA2~FGQVT-iM1qcZ~LXx6PI~AIBYPZo3MGt-uko-UhE2WNAQRQYncV1XGQnn4EzzvD2GyuYtIigWqRypmVyGuieOVrm3X8kj~481YAWBaQnkJ42rYRpzJE4hHvI15uGZ6KQNcrfWpgTblU-aV1y1iEZynKcMVfSoW2jqfj34bTQCW1lwAcBGbB4moLTXVZgp~GrWIJX3C~iGIBHQOP486tPO2f5V3VOCapKmQZzh1ErxdKzsgJ2mpgl7xtXkA__",
      title: "Weight Loss",
      description: "Regrown and active",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/52cc/546c/977fdd0395ae19c990fac4b1fd8a408b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DFmeQNJMTW9UQ0aof~--La-pXvtsgTiHxVh5Z2FRp47pWEQvYrAMqoZ5JBA4MK7eApckL4FvBt8OkrEFXo35nBV5pgA2~FGQVT-iM1qcZ~LXx6PI~AIBYPZo3MGt-uko-UhE2WNAQRQYncV1XGQnn4EzzvD2GyuYtIigWqRypmVyGuieOVrm3X8kj~481YAWBaQnkJ42rYRpzJE4hHvI15uGZ6KQNcrfWpgTblU-aV1y1iEZynKcMVfSoW2jqfj34bTQCW1lwAcBGbB4moLTXVZgp~GrWIJX3C~iGIBHQOP486tPO2f5V3VOCapKmQZzh1ErxdKzsgJ2mpgl7xtXkA__",
      title: "Regrow Hair",
      description: "Feel confident and active",
    },
    // Add more cards as needed
  ];

  return (
    <div className="bg-gradient-to-r from-[#F0F4E9] to-[#DEF7EE] font-poppins w-full py-[1.875rem]">
      <div className="container mx-auto px-[3.75rem]">
        <div
          className="font-medium text-black text-[2.5rem]"
          style={{ lineHeight: "3.375rem" }}
        >
          Hers is healthcare
          <br />
          that feels like self-care
        </div>

        {/* Cards Section */}
        <div className="mt-2 flex justify-between flex-wrap w-full gap-x-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-[12.25rem] h-[15.1875rem] rounded-[2.5rem] shadow-md relative mt-4"
            >
              {/* RX Circle */}
              <div
                className="absolute bg-[#FFFFFF] text-black text-[0.75rem] pt-[0.125rem] pl-[0.125rem] font-bold rounded-full flex items-center justify-center"
                style={{
                  width: "1.4375rem",
                  height: "1.375rem",
                  top: "8.125rem",
                  left: "11rem",
                  transform: "translateX(-50%)",
                }}
              >
                Rx
              </div>

              {/* Card Image */}
              <div>
                <img
                  style={{
                    height: "8.6875rem",
                    width: "12.1875rem",
                    borderTopRightRadius: "0.5rem",
                    borderTopLeftRadius: "0.5rem",
                  }}
                  src={card.image}
                  alt={card.title}
                />
              </div>

              {/* Card Content */}
              <div
                className="bg-white p-[0.625rem]"
                style={{
                  borderBottomRightRadius: "0.5rem",
                  borderBottomLeftRadius: "0.5rem",
                }}
              >
                <div className="w-[10.9375rem] h-[5.1875rem] flex flex-col justify-between">
                  <div className="font-bold text-[0.875rem] text-black">
                    {card.title}
                  </div>
                  <div className="font-normal text-[0.625rem] text-black">
                    {card.description}
                  </div>
                  <button className="bg-white py-[0.5rem] px-[0.4375rem] rounded-[3.4375rem] border text-black text-[0.75rem] font-semibold">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div
            className="w-[12.25rem] h-[0.1rem] rounded-[2.5rem] bg-transparent my-0 py-0"
          ></div>
          <div
            className="w-[12.25rem] h-[0.1rem] rounded-[2.5rem] bg-transparent my-0 py-0"
            ></div>
          <div
            className="w-[12.25rem] h-[0.1rem] rounded-[2.5rem] bg-transparent my-0 py-0"
            ></div>
          <div
            className="w-[12.25rem] h-[0.1rem] rounded-[2.5rem] bg-transparent my-0 py-0"
            ></div>
          <div
            className="w-[12.25rem] h-[0.1rem] rounded-[2.5rem] bg-transparent my-0 py-0"
            ></div>
          <div
            className="w-[12.25rem] h-[0.1rem] rounded-[2.5rem] bg-transparent my-0 py-0"
            ></div>
          <div
            className="w-[12.25rem] h-[0.1rem] rounded-[2.5rem] bg-transparent my-0 py-0"
            ></div>
          <div
            className="w-[12.25rem] h-[0.1rem] rounded-[2.5rem] bg-transparent my-0 py-0"
            ></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
