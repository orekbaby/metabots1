import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
const SellLimitOrder = () => {
  return (
    <>
      <div className="w-auto px-3 bg-[#0C141F] border-none">
        <div>
          <div className="bg-[#0C141F] flex justify-between">
            <h3 className="font-semi-bold text-sm mb-3">Name:Metacoin</h3>
            <p className="text-[#FFC107] text-xs">Settings</p>
          </div>
          <div className="bg-[#0C141F] flex justify-between mb-1">
            <p className="font-bold text-xs">Sell Amount</p>
            <p className="font-normal text-xs">Bal:0</p>
          </div>
          <div className="relative">
            <input
              className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] font-normal"
              type="text"
              placeholder="0.5"
            />
            <Button className="absolute top-2 right-0 w-[67px] md:w-[65px] lg:[65px]  h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-l-[6px] md:rounded-l-[8px] lg:rounded-l-[8px] text-sm">
              Token
            </Button>
          </div>
          <div className="flex justify-center md:justify-between lg:justify-between gap-6 items-center mb-3">
            <Button
              size="sm"
              className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-sm
               font-normal md:font-normal lg:font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px] w-[111.67px] h-[35px]"
            >
              25%
            </Button>
            <Button
              size="sm"
              className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-sm
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px] w-[111.67px] h-[35px]"
            >
              50%
            </Button>
            <Button
              size="sm"
              className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-sm
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px] w-[111.67px] h-[35px]"
            >
              75%
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <FaArrowDownLong className=" h-[30px] text-center" />
          </div>
          <div className="bg-[#0C141F] flex justify-between mt-0">
            <p className="font-bold text-xs">Receive</p>
            <p className="font-normal text-xs">Bal:3.904</p>
          </div>

          <div className="relative">
            <input
              className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
              type="text"
              placeholder="0.0"
            />
            <Button className="absolute top-2 right-0 w-[57px] md:w-[65px] lg:[65px] h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-l-[6px] md:rounded-l-[8px] lg:rounded-l-[8px] text-sm">
              ETH
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
    </>
  );
};

export default SellLimitOrder;
