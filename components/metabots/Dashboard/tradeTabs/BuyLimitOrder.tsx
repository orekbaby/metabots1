import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const BuyLimitOrder = () => {
  return (
    <>
      <div className="w-auto p-3 md:p-4 lg:p-4 bg-[#0C141F] border-none mb-4">
        <div>
          <div className="bg-[#0C141F] flex justify-end">
            <p className="text-[#FFC107] font-normal text-xs border-b-[1px] border-[#FFC107]">
              Settings
            </p>
          </div>
          <div className="flex flex-col">
            <div className=" flex justify-between">
              <p className="font-bold text-sm">pay</p>
              <p className="font-bold text-sm">price</p>
            </div>

            <div className="relative">
              <input
                className="mb-2 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
                type="text"
                placeholder="0.5"
              />
              <Button className=" font-semibold text-xs absolute top-2 right-0 w-[57px] md:w-[65px] lg:[65px]  h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px]">
                ETH
              </Button>
            </div>

            <div className="flex items-center justify-center">
              <FaArrowDownLong className=" h-[30px] text-center" />
            </div>
            <div className="bg-[#0C141F] flex justify-between">
              <p className="font-bold text-xs">Receive</p>
              <p className="font-normal text-xs">Bal:00</p>
            </div>
            <div className="relative">
              <input
                className="mb-5 mt-2 text-xs md:text-sm lg:text-sm w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] font-normal text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
                type="text"
                placeholder="0x9c8bB8355629A72EB506D14B29BC3a985"
              />
              <Button className="absolute top-2 right-0 w-[67px] md:w-[65px] lg:[65px]  h-[38px] md:h-[43px] lg:h-[43px] px-4 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px] font-semibold text-xs">
                Token
              </Button>
            </div>

            {/* <div className="flex justify-between">
          <p className="font-semibold text-sm ">Add Take profit & Stop loss</p>
          <input className="bg-transparent " type="checkbox" name="" id="" />
        </div> */}

            <Button
              size="lg"
              className=" mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] 
             text-white text-[14px] md:text-base lg:text-base font-semibold leading-[23.8px] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary  bg-[#06C270] transition ease-in-out delay-150 hover:border-2 hover:bg-[#0B0F16] duration-300 dark:hover:bg-[#0B0F16]"
            >
              Auto Buy
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyLimitOrder;
