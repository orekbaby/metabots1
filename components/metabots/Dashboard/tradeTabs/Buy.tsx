import React from "react";

import { Button } from "@/components/ui/button";

export default function Buy() {
  return (
    <div className="w-auto p-8 bg-[#0C141F] border-none mb-4">
      <div>
        <div className="bg-[#0C141F] flex justify-between">
          <p className="font-bold text-xs">pay</p>
          <p className="text-[#FFC107] font-normal text-xs border-b-[1px] border-[#FFC107]">
            Settings
          </p>
        </div>
        <div className="relative">
          <input
            className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="0.5"
          />
          <Button className=" font-semibold text-xs absolute top-2 right-0 w-[57px] md:w-[65px] lg:[65px]  h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px]">
            ETH
          </Button>
        </div>
        <div className="bg-[#0C141F] flex justify-between">
          <p className="font-bold text-xs">Receive</p>
          <p className="font-normal text-xs">Bal:00</p>
        </div>
        <div className="relative">
          <input
            className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="8452"
          />
          <Button className="absolute top-2 right-0 w-[57px] md:w-[65px] lg:[65px]  h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px] font-semibold text-xs">
            MVC
          </Button>
        </div>

        <Button
          size="lg"
          className=" mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] bg-[#06C270]
             text-white text-[14px] md:text-base lg:text-base font-semibold leading-[23.8px]"
        >
          Auto Buy
        </Button>
      </div>
    </div>
  );
}
