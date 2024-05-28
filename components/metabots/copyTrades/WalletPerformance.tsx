import React from "react";

import TradeHistory from "@/components/metabots/copyTrades/TradeHistory";
import ProfitableTrades from "./ProfitableTrades";
import BiggestLosses from "./BiggestLosses";
import WalletPerformanceMobileTabs from "@/components/metabots/copyTrades/walletPerformanceMobileTabs";

export const WalletPerformance = () => {
  return (
    <>
      <div className=" bg-transparent md:bg-[#0C141F] lg:bg-[#0C141F] h-auto md:h-[650px] lg:h-[650px] w-full border-transparent  md:border md:border-[#212E40]  lg:border lg:border-[#212E40] mb-5 md:mb-0 lg:mb-0 mt-0 md:mt-2 lg:mt-2  pt-0 md:pt-2 lg:pt-2 pr-0 md:pr-4 rounded-md">
        <h2 className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-[18px] lg:text-[18px] mb-3 md:mb-8 lg:mb-10 pt-0 md:pt-2 lg:pt-2  pl-0 md:pl-5 lg:pl-5 px-3 text-[#E7E7E7]">
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
        <div className="ml-0 md:ml-2 lg:ml-3 w-full h-auto md:h-[560px] lg:h-[560px] border-transparent md:border md:border-[#212E40] lg:border lg:border-[#212E40] pt-4 pb-0 md:pb-2 lg:pb-2  px-0 md:px-3 lg:px-3">
          <div className="bg-[#17212F] py-2 pl-2 md:pl-3 lg:pl-3 pr-1 md:pr-0 lg:pr-0 rounded-[8px] w-full mb-5 md:mb-1 lg:mb-1">
            <p className="font-normal text-[9px] md:text-sm lg:text-sm  mb-[2px] md:mb-2 lg:mb-1">
              Win Rate:
            </p>

            <div className="w-full flex justify-start  mb-0 md:mb-1 lg:mb-1">
              <p className="text-[#FFC107] text-[10px] md:text-[24px] lg:text-[24px] font-bold">
                63.97%
              </p>
            </div>

            <div className="flex justify-start gap-2 md:gap-10 lg:gap-10 w-full">
              {/* ist item */}
              <div className="flex justify-center items-center gap-5">
                <p className="font-medium text-[8px] md:text-[12.5px] lg:text-[12.5px]">
                  Wins:{" "}
                  <span className="text-[8px] md:text-[12.5px] lg:text-[12.5px] font-medium text-[#4CA244]">
                    71
                  </span>{" "}
                  Loses:{" "}
                  <span className="text-[8px] md:text-[12.5px] lg:text-[12.5px] font-medium text-[#E63E3A]">
                    21
                  </span>
                </p>
              </div>

              <div className="flex justify-center items-center gap-1">
                <p className="font-normal text-[9px] md:text-sm lg:text-sm ">
                  Total Realized Gains:
                </p>

                <span className="text-[#4CA244] text-[10px] md:text-sm lg:text-sm font-semibold">
                  $57.90
                </span>
              </div>

              <div className="flex justify-center items-center gap-1">
                <p className="font-normal text-[9px] md:text-sm lg:text-sm">
                  Total Unrealized gains:
                </p>

                <span className="text-[#E63E3A] text-[10px] md:text-sm lg:text-sm font-semibold">
                  -$16.89
                </span>
              </div>

              <div className="justify-center items-center gap-1 hidden md:flex lg:flex">
                <p className="font-normal text-[9px] md:text-sm lg:text-sm">
                  Total Volume:
                </p>
                <span className="text-[#DBE9FF] text-[9px] md:text-sm lg:text-sm font-semibold">
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
            className="hidden md:grid lg:grid w-full grid-cols-1 text-center
           md:grid-cols-2 lg:grid-cols-2 md:gap-32 lg:gap-12 overflow-x-hidden"
          >
            {/* Positive Trades */}

            <div className="w-full hidden md:block lg:block">
              <div className="w-full flex justify-start items-center mb-3">
                <h4 className="mt-8 font-bold text-[9px] md:text-base lg:text-base">
                  Most Profitable Trades
                </h4>
              </div>
              <ProfitableTrades />
            </div>

            {/* Negative Trades */}

            <div className="w-full hidden md:block lg:block">
              <div className="flex justify-start items-center pl-2 mb-3">
                <h4 className="mt-8 font-bold text-[9px] md:text-base lg:text-base">
                  Biggest Losses
                </h4>
              </div>
              <BiggestLosses />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block lg:block mb-10 md:mb-20 lg:mb-20 px-5">
        <TradeHistory />
      </div> */}
    </>
  );
};
export default WalletPerformance;
