import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

export default function Sell() {
  return (
    <div className="w-auto p-5 bg-[#0C141F] border-none">
      <div>
        <div className="bg-[#0C141F] flex justify-between">
          <h3 className="font-semi-bold text-sm mb-2">Name:Metacoin</h3>
          <p className="text-[#FFC107] text-xs">Settings</p>
        </div>
        <div className="bg-[#0C141F] flex justify-between mb-2">
          <p className="font-bold text-xs">Sell Amount</p>
          <p className="font-normal text-xs">Bal:0</p>
        </div>
        <div className="relative">
          <input
            className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="0.5"
          />
          <Button className="absolute top-2 right-0 w-[57px] md:w-[65px] lg:[65px]  h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px] text-sm">
            ETH
          </Button>
        </div>
        <div className="flex justify-center md:justify-between lg:justify-between gap-6 items-center">
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-sm
               font-normal md:font-normal lg:font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-2 md:py-3 lg:py-3 px-5 md:px-5 lg:px-5 rounded-[8px]"
          >
            25%
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-sm
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-2  md:py-3 lg:py-3 px-5 md:px-5 lg:px-5 rounded-[8px]"
          >
            50%
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-sm
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-2 md:py-3 lg:py-3 px-5 md:px-5 lg:px-5 rounded-[8px]"
          >
            75%
          </Button>
        </div>
        <div className="bg-[#0C141F] flex justify-between mt-12">
          <p className="font-bold text-xs">Receive</p>
          <p className="font-normal text-xs">Bal:00</p>
        </div>
        {/* <div className="flex justify-center absolute">
          <FaArrowDownLong />
        </div> */}
        <div className="relative">
          <input
            className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="8452"
          />
          <Button className="absolute top-2 right-0 w-[57px] md:w-[65px] lg:[65px] h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px] text-sm">
            MVC
          </Button>
        </div>

        <Button
          size="lg"
          className="mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] bg-[#FF3B3B]
             text-white text-[14px] md:text-base lg:text-base font-semibold leading-[23.8px]"
        >
          Auto Sell
        </Button>
      </div>
    </div>
  );
}
