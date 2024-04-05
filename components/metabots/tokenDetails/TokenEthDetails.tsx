import React from "react";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { Button } from "@/components/ui/button";

import { FaTimes } from "react-icons/fa";

const TokenEthDetails = () => {
  return (
    <>
      <div className="flex gap-4 justify-center border-[#212E40] border-b-[1px]">
        <div className="flex items-center">
          <Image
            src="/etherum.png"
            alt="eth"
            width={37}
            height={37}
            className=""
          />
        </div>
        <div className="flex flex-1 flex-col gap-[8px] p-1">
          <div className="flex items-center gap-1">
            <h2 className="font-bold text-sm md:text-[16px] lg:text-[16px]">
              ETH
            </h2>
            <h2 className=" font-bold text-sm md:text-[16px] lg:text-[16px]">
              / USDT
            </h2>
            <MdOutlineContentCopy className="text-base" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <div className="flex gap-2 items-center">
                <p className="font-bold text-base">$0.23</p>
                <h3 className="font-normal text-[14px] text-[#6C757D]">
                  Etherum
                </h3>
                <p className="font-semi-bold text-base text-[#06C270]">
                  +1.41%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-1">
            <BiPencil className="text-white w-[18px]" />
            <MdDeleteOutline className="text-xs text-white w-[18px]" />
          </div>

          <div className="flex mb-16 md:mb-0 lg:mb-0 justify-center md:justify-start lg:justify-start gap-5 md:gap-3 lg:gap-3">
            <Button
              variant="outline"
              className="w-[83px] h-[24px] bg-[#0B0F16] border-[#0D6EFD] border-[1px] rounded-[4px] text-[#0D6EFD] py-[6px] px-[10px] font-normal text-[10px]"
            >
              View info
            </Button>
            <Button
              variant="outline"
              className="w-[83px] h-[24px] bg-[#0D6EFD] border-none rounded-[4px] text-[white] py-[6px] px-[10px] font-normal text-[10px]"
            >
              Auto-Buy
            </Button>
          </div>
          <FaTimes />
        </div>
      </div>
    </>
  );
};

export default TokenEthDetails;
