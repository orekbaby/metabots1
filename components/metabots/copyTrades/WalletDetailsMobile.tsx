import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

import { Button } from "@/components/ui/button";
import { CiSettings } from "react-icons/ci";
const WalletDetailsMobile = () => {
  return (
    <>
      <div className="justify-between flex-col  pr-8 pl-2 flex md:hidden lg:hidden">
        <div className="flex gap-4 mb-5">
          <div className="flex items-center gap-1">
            <h2 className="font-bold text-xs md:text-[24px] lg:text-[24px]">
              ETH.BEN
            </h2>

            <MdOutlineContentCopy className=" text-base md:text-[24px] lg:text-[24px]" />
          </div>
          <div className="flex justify-center items-center">
            <h3 className="font-normal text-[9px] md:text-sm lg:text-sm">
              Wallet Balance:
            </h3>{" "}
            {""}
            <span className="font-bold text-base md:text-[27px] lg:text-[27px] text-[#FFC107]">
              $141,160,817.62
            </span>
            <p className="font-normal text-xs items-center border-b-2 border-[#212E40] hidden md:block lg:block">
              View balance history
            </p>
          </div>
        </div>

        <div className="flex justify-between mb-5">
          <div className="flex gap-4 justify-start">
            <Button
              variant="outline"
              className="flex items-center justify-center w-[98px] h-[22px] bg-[#0B0F16] border-[#FFC107] border-[1px] rounded-sm md:rounded-[8px] lg:rounded-[8px] text-[9px] md:text-sm lg:text-sm font-normal text-[#B3B5B8]md:hidden lg:hidden"
            >
              Add wallet to Track
            </Button>

            <Button
              variant="outline"
              className=" w-[59px] h-[22px] md:w-[112px] lg:w-[112px] md:h-[35px] lg:h-[35px] bg-[#0D6EFD] border-none text-[white] font-normal text-[9px] md:text-sm lg:text-sm rounded-[4px] md:rounded-lg lg:rounded-lg"
            >
              Copy Wallet
            </Button>
          </div>

          <div className="flex md:hidden lg:hidden justify-end gap-3">
            <div className="flex w-[20px] h-[20px] border-2 border-[#B5B6B6] rounded-[4px] justify-center items-center">
              <IoIosNotificationsOutline className="text-xs" />
            </div>
            <div className="w-[20px] h-[20px] flex border-2 border-[#B5B6B6] rounded-[4px] justify-center items-center top-10">
              <CiSettings className="text-xs" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletDetailsMobile;
