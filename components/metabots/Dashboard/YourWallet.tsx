import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";

const YourWallet = () => {
  return (
    <>
      {" "}
      <div className="bg-[#0C141F] border-transparent md:border lg:border md:border-[#212E40] lg:border-[#212E40] rounded-[8px] p-2 mt-2  md:mt-0 lg:mt-0 w-full mb-3 md:mb-10 lg:mb-10">
        {/* Title and Icon */}
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center gap-2 items-center ">
            <h3 className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-base lg:text-sm mb-2">
              Your Wallets
            </h3>
            <div className="pb-2">
              <Image
                src="/Eth.png"
                alt=""
                width={14}
                height={14}
                className="object-fit"
              />
            </div>
          </div>
          <FaAngleRight />
        </div>

        {/* Wallet information */}
        <div
          className="flex justify-between items-center border
         border-[#0D6EFD] bg-[#0A1019]w-full rounded-[4px] h-[50px] px-[10px] py-[6px]"
        >
          <div className=" gap-5 flex w-auto items-center">
            {/* Check icon and "W1" */}
            <div className="gap-2 flex items-center">
              <div>
                <FaRegSquareCheck className="text-[#0D6EFD] text-[18px]" />
              </div>
              <div className="w-[26px] flex items-center text-center justify-center  h-[26px] rounded-full bg-[#17212F] text-[#0D6EFD] object-cover">
                <p className="text-[8.38px] font-normal text-center">W1</p>
              </div>
            </div>
            {/* First and Second Column */} {/* Removed gap-[96px] */}
            {/* First column */}
            <div className="flex flex-col gap-3 ">
              {" "}
              {/* Added flex-grow here */}
              <p className="font-normal text-xs text-[#E0E0E0]">
                0x9c8bB....6107D21
              </p>
              <div className="flex items-center">
                <div className="flex flex-col">
                  <p className="font-normal text-xs">0.000 ETH</p>
                </div>
              </div>
            </div>
          </div>
          {/* Second column */}
          <div className="flex flex-col justify-end gap-3  p-1">
            <div className="flex gap-2 items-center">
              <FaRegCopy className="text-sm text-white" />
              <FaGlobe className="text-sm text-white" />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <p className="font-normal text-xs text-[#CED4DA]">TX: 1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourWallet;
