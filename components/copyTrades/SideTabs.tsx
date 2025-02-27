import React from "react";
import { Button } from "@/components/ui/button";
import { MdFormatListBulleted } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";

const SideTabs = () => {
  const sideTabs = [
    {
      name: "My Wallet Lists",
      img: MdFormatListBulleted,
    },

    {
      name: "ETH.BADDO",
      img: MdOutlineDeleteOutline,
    },

    {
      name: "ETH.BOT",
      img: MdOutlineDeleteOutline,
    },

    {
      name: "ETH.LORD",
      img: MdOutlineDeleteOutline,
    },

    {
      name: "TOKEN.BULL",
      img: MdOutlineDeleteOutline,
    },

    {
      name: "COIN.EXP",
      img: MdOutlineDeleteOutline,
    },

    {
      id: "6",
      name: "PROF FX",
      img: MdOutlineDeleteOutline,
    },
  ];

  const lowerTab = [
    {
      name: "Trending Smart Wallets",
      img: "",
    },

    {
      name: "ETH.BEN",
      img: "",
    },

    {
      name: "MACHI BIG BROTHER",
      img: "",
    },

    {
      name: "PEPE COIN DEPLOYER",
      img: "",
    },

    {
      img: "",
      name: "PROFITABLE MEME COIN TRADER",
    },

    {
      img: "",
      name: "JUSTIN SUN",
    },
  ];

  return (
    <>
      <div className="w-full h-auto bg-[#0C141F] border-[#212E40] border-r-2 py-10 mb-5 hidden md:block lg:block">
        <div className="px-3 w-full h-auto">
          <div className=" h-[65px] text-center items-center">
            <Button className=" w-[160px] h-[40px]font-normal text-xs rounded-lg variant=outline border-[1.2px] border-[#FFC107]">
              Add Wallet To Track
            </Button>
          </div>
          <hr className="border-[#212E40] p-2" />{" "}
          <div className="overflow-y-auto scrollbar-hide h-[45vh] pl-5">
            {sideTabs?.map((row, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-5"
              >
                <h3
                  key={row.id}
                  className={`font-normal ${
                    index === 0
                      ? "text-sm text-[#ffff]"
                      : "text-xs text-[#B5B6B6]"
                  } ${index === 1 ? "text-[#F5841F]" : ""}`}
                >
                  {row.name}
                </h3>

                {React.createElement(row.img, {
                  size: row.name === "My Wallet Lists" ? "24" : "16",
                })}
              </div>
            ))}

            {/* Add a horizontal line to separate sideTabs and lowerTabs */}
            <div style={{ marginTop: "50px" }}>
              {" "}
              {/* Add margin-top for lowerTabs */}
              <hr className="border-[#212E40] p-2" />{" "}
              {lowerTab?.map((row, index) => (
                <div key={index} className="flex justify-between mb-5">
                  <h3
                    className={`font-normal text-[#B5B6B6] ${
                      index === 0
                        ? "text-sm text-[#ffff]"
                        : "text-xs text-[#B5B6B6]"
                    }`}
                  >
                    {row.name}
                  </h3>
                  <h3 className="font-normal text-white">
                  {row.name === "Trending Smart Wallets" && "🔥"}{" "}
                  </h3>
                  {/* Display emoji only for "Trending Smart Wallets" */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideTabs;
