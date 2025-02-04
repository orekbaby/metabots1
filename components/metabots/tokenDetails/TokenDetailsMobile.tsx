"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaAngleRight } from "react-icons/fa6";

const TradeTabs = dynamic(
  () => import("@/components/metabots/Dashboard/tradeTabs/TradeTabs"),
  {
    ssr: false,
  }
);

import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { tokenInfo } from "@/utils/mockData";
import YourWallet from "../Dashboard/YourWallet";

const PriceTabs = dynamic(
  () => import("@/components/metabots/Dashboard/latestTrades/PriceTabs"),
  {
    ssr: false,
  }
);

const Tabs = dynamic(() => import("@/components/metabots/Dashboard/Tabs"), {
  ssr: false,
});

const TokenDetailsMobile = () => {
  const [showTokenDetails, setShowTokenDetails] = useState(false);

  const toggleTokenDetails = () => {
    setShowTokenDetails((prev) => !prev);
  };

  // const toggleYourWallet = () => {
  //   setShowOtherContents(!showOtherContents);
  // };

  return (
    <>
      {/* visible to the screen show this contents */}
      <div className="mb-4 flex justify-between items-center md:hidden lg:hidden pl-3 md:pl-0 lg:pl-0 border-b md:border-none lg:border-none border-[#212E40] pb-3">
        <div
          className="flex md:hidden lg:hidden gap-1 items-center"
          onClick={toggleTokenDetails}
        >
          <h2 className="font-bold text-xs md:text-base lg:text-base text-[#0D6EFD]">
            Token Details
          </h2>
          <FaAngleRight />
        </div>
        {/* image within token details */}
        {showTokenDetails ? null : (
          <Image
            src="/scam-score.png"
            alt="fraud"
            width={141}
            height={40}
            className="md:hidden lg:"
          />
        )}
      </div>

      {/* eth/usdt contents */}
      {showTokenDetails && (
        <div className="flex justify-between items-center gap-10 px-3">
          {/* ETH/USDT content */}
          <div className="flex gap-4 flex-row">
            <div className="flex items-center">
              <Image
                src="/etherum.png"
                alt="eth"
                width={40}
                height={30}
                className=""
              />
            </div>
            <div className="flex flex-1 flex-col gap-[8px] p-1">
              <div className="flex items-center gap-1">
                <h2 className="font-bold text-xs md:text-[20px] lg:text-[20px]">
                  ETH
                </h2>
                <MdOutlineContentCopy className="text-base" />
                <h2 className="text-xs md:text-[20px] lg:text-[20px]">
                  / USDT
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <div className="flex gap-2 items-center">
                    <h3 className="font-normal text-xs md:font-[18px] lg:font-[18px]">
                      Etherum
                    </h3>
                    <IoMdNotificationsOutline className="text-[#0D6EFD] text-base md:text-[24px] lg:text-[24px]" />
                    <FaStar className="text-[#DBDBDC] text-base md:text-[22px] lg:text-[22px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* image within eth/usdt */}
          <Image
            src="/scam-sc.png"
            alt="fraud"
            width={169}
            height={54}
            className="items-center"
          />
        </div>
      )}

      {/* mapping contents */}
      {showTokenDetails && (
        <div className="grid grid-cols-3 w-full md:hidden lg:hidden mt-2 gap-3 mb-5 px-3">
          {tokenInfo?.map((row, index) => (
            <div key={index} className="">
              <h2 className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
                {row.title}
              </h2>
              <div className="">
                <div className="flex gap-1 items-center">
                  <p className="font-medium md:font-bold lg:font-bold text-[14px] md:text-[18px] lg:text-[18px]">
                    {row.value}
                  </p>
                  {row.subvalue && (
                    <span className="font-semibold text-[10px] text-[#06C270]">
                      {row.subvalue}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* the visiblity ends here */}

      {/* your wallet section and the trigger to hide and show the remaining contents */}

      <div className="flex-[25%] md:hidden lg:hidden">
        <div className="pl-4 pr-1">
          <YourWallet />
        </div>
        {/* tradetabs */}

        <div className="border-[#212E40] rounded-[8px] pl-4 pr-1 mt-0">
          {/* <TradeTabs /> */}
        </div>

        {/* tabs */}

        <div className="flex-[59%] border-[1px] h-[300px] overflow-x-auto scrollbar-hide border-[#212E40] p-2 rounded-[8px] mt-4 md:mt-0 lg:mt-0">
          <Tabs />
        </div>

        {/* pricetabs */}

        <div className="w-full border-[1px] border-[#212E40] p-2 rounded-[8px] mt-8 md:mt-2 lg:mt-2 h-[600px] overflow-x-auto scrollbar-hide">
          <PriceTabs />
        </div>
      </div>
    </>
  );
};

export default TokenDetailsMobile;
