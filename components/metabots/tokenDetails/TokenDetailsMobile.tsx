"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const TradeTabs = dynamic(
  () => import("@/components/metabots/Dashboard/tradeTabs/TradeTabs"),
  {
    ssr: false,
  }
);

import {
  MdOutlineContentCopy,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { tokenInfo } from "@/utils/mockData";

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
  const [showOtherContents, setShowOtherContents] = useState(false);

  const toggleTokenDetails = () => {
    setShowTokenDetails((prev) => !prev);
  };

  const toggleYourWallet = () => {
    setShowOtherContents(!showOtherContents);
  };

  return (
    <>
      {/* visible to the screen show this contents */}
      <div className="mb-4 flex justify-between items-center md:hidden lg:hidden">
        <div
          className="flex md:hidden lg:hidden gap-2 items-center"
          onClick={toggleTokenDetails}
        >
          <h2 className="font-bold text-base text-[#0D6EFD]">Token Details</h2>
          <MdOutlineKeyboardArrowDown />
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
        <div className="flex justify-between items-center gap-10">
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
        <div className="grid grid-cols-3 w-full md:hidden lg:hidden mt-2 gap-3 mb-5">
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
        <div
          className="border-[1px] border-[#212E40] rounded-[8px] p-2"
          onClick={toggleYourWallet}
        >
          <h3 className="font-bold text-xs md:text-base lg:text-base mb-2">
            Your Wallets
          </h3>
          <Image
            className="rounded-[8px]"
            src="/fraud.png"
            alt="fraud"
            width={346}
            height={50}
          />
        </div>
        {/* tradetabs */}
        {showOtherContents && (
          <div className="border-[1px] border-[#212E40] rounded-[8px] p-2 mt-8">
            <TradeTabs />
          </div>
        )}
        {/* tabs */}
        {showOtherContents && (
          <div className="flex-[59%] border-[1px] border-[#212E40] p-2 rounded-[8px] mt-4 md:mt-0 lg:mt-0">
            <Tabs />
          </div>
        )}
        {/* pricetabs */}
        {showOtherContents && (
          <div className="w-full border-[1px] border-[#212E40] p-2 rounded-[8px] mt-2">
            <PriceTabs />
          </div>
        )}
      </div>
    </>
  );
};

export default TokenDetailsMobile;
