import React from "react";

import TradeHistory from "@/components/metabots/copyTrades/TradeHistory";
import ProfitableTrades from "./ProfitableTrades";
import BiggestLosses from "./BiggestLosses";
import WalletPerformanceMobileTabs from "@/components/metabots/copyTrades/walletPerformanceMobileTabs";

export const WalletPerformance = () => {
  return (
    <>
      <div className="bg-[#0C141F] h-auto md:h-[650px] lg:h-[650px] w-full border-2 mb-5 md:mb-10 lg:mb-10 border-[#212E40] pt-2 pr-0 md:pr-4 rounded-md">
        <h2 className="font-bold text-xs md:text-[18px] lg:text-[18px] mb-8 pt-2 px-3">
          Wallet Performance
        </h2>
        <div className="flex justify-end">
          {/* <Select>
            <SelectTrigger className="w-fit bg-transparent gap-2 mb-3">
              <SelectValue placeholder="7 Days" />
            </SelectTrigger>
            <SelectContent className="w-[24px] text-white hover:text-black bg-[#060A0F] border-none outline-none">
              <SelectItem value="1">1M</SelectItem>
              <SelectItem value="3">3M</SelectItem>
              <SelectItem value="5">5M</SelectItem>
              <SelectItem value="15">15M</SelectItem>
              <SelectItem value="30">30M</SelectItem>
            </SelectContent>
          </Select> */}
        </div>
        <div className="ml-0 md:ml-2 lg:ml-2 w-full h-auto md:h-[555px] lg:h-[555px] border-[#212E40] border-2 pt-3 px-2">
          <div className="bg-[#17212F] py-3 px-3 rounded-[8px] w-full">
            <p className="font-normal text-[8px] md:text-sm lg:text-sm">
              Win Rate:
            </p>

            <div className="w-full flex justify-start gap-4 md:gap-10 lg:gap-10 mt-2">
              <p className="text-[#0D6EFD] text-xs md:text-[24px] lg:text-[24px] font-bold">
                63.97%
              </p>

              <div className="flex justify-center items-center gap-1">
                <p className="font-normal text-[8px] md:text-sm lg:text-sm ">
                  Total Realized Gains:
                </p>

                <span className="text-[#4CA244] text-[10px] md:text-sm lg:text-sm font-semibold">
                  $57.90
                </span>
              </div>

              <div className="flex justify-center items-center gap-1">
                <p className="font-normal text-[8px] md:text-sm lg:text-sm">
                  Total Unrealized gains:
                </p>

                <span className="text-[#E63E3A] text-[10px] md:text-sm lg:text-sm font-semibold">
                  -$16.89
                </span>
              </div>

              <div className="justify-center items-center gap-1 hidden md:flex lg:flex">
                <p className="font-normal  text-[8px] md:text-sm lg:text-sm">
                  Total Volume:
                </p>
                <span className="text-[#DBE9FF] text-[8px] md:text-sm lg:text-sm font-semibold">
                  $10k
                </span>
              </div>
            </div>
          </div>

          {/* wallet performance tabs mobile */}
          <div className="inline md:hidden lg:hidden">
            <WalletPerformanceMobileTabs />
          </div>
          <div
            className=" hidden md:grid lg:grid w-full grid-cols-1 text-center
           md:grid-cols-2 lg:grid-cols-2 md:gap-32 lg:gap-12 overflow-x-hidden"
          >
            {/* Positive Trades */}

            <div className="w-full hidden md:block lg:block">
              <div className="w-full flex justify-start items-center pl-2">
                <h4 className="mt-8 font-bold text-[9px] md:text-base lg:text-base">
                  Most Profitable Trades
                </h4>
              </div>
              <ProfitableTrades />
            </div>

            {/* Negative Trades */}

            <div className="w-full hidden md:block lg:block">
              <div className="flex justify-start items-center pl-2">
                <h4 className="mt-8 font-bold text-[9px] md:text-base lg:text-base">
                  Biggest Losses
                </h4>
              </div>
              <BiggestLosses />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:block mb-10 md:mb-20 lg:mb-20">
        <TradeHistory />
      </div>
    </>
  );
};
export default WalletPerformance;
