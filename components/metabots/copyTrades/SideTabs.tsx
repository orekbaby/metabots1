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
      <div className="w-full h-full bg-[#0C141F] py-6 px-2 mb-5">
        <div className="text-center items-center mb-5">
          <Button className="variant=outline border-2 border-[#FFC107]">
            Add Wallet To Track
          </Button>
        </div>
        <div className="w-full h-[45vh] overflow-y-auto">
          {sideTabs?.map((row, index) => (
            <div key={index} className="flex justify-between items-center mb-5">
              <h3
                key={row.id}
                className={`font-normal ${
                  index === 0
                    ? "text-sm text-[#B5B6B6]"
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
                    index === 0 ? "text-sm" : "text-xs"
                  }`}
                >
                  {row.name}
                </h3>
                {row.name === "Trending Smart Wallets" && "🔥"}{" "}
                {/* Display emoji only for "Trending Smart Wallets" */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideTabs;
