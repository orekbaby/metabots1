import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const YourWallet = () => {
  return (
    <>
      {" "}
      <div className="border-[1px] border-[#212E40] rounded-[8px] p-2  mt-2">
        {/* Title and Icon */}
        <div className="flex justify-between items-center w-full">
          <h3 className="font-semibold md:font-bold lg:font-bold text-xs md:text-base lg:text-base mb-1">
            Your Wallets
          </h3>
          <FaAngleRight />
        </div>

        {/* Wallet information */}
        <div className="flex gap-2 items-center border-2 border-[#0D6EFD] rounded-[8px]  pl-2">
          {/* Check icon and "W1" */}
          <div>
            <FaRegSquareCheck className="text-[#0D6EFD]" />
          </div>
          <div className="w-[26px] flex items-center justify-center text-xs font-normal h-[26px] rounded-full bg-[#17212F] text-[#0D6EFD]">
            W1
          </div>

          {/* First and Second Column */}
          <div className="flex flex-wrap justify-between">
            {/* First column */}
            <div className="flex flex-col gap-3 pr-0  md:pr-28 lg:pr-28 p-1">
              <p className="font-normal text-xs">0x9c8bB....6107D21</p>
              <div className="flex items-center">
                <div className="flex flex-col">
                  <p className="font-normal text-xs">0.000 ETH</p>
                </div>
              </div>
            </div>

            {/* Second column */}
            <div className="flex flex-col justify-end gap-3 p-1">
              <div className="flex gap-2 items-center">
                <FaRegCopy className="text-sm text-white" />
                <FaGlobe className="text-sm text-white" />
              </div>
              <div className="flex items-center">
                <div className="flex flex-col">
                  <p className="font-normal text-xs">TX: 1000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourWallet;
