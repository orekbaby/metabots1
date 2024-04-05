import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  walletPerformamcePositive,
  walletPerformamceNegative,
} from "@/utils/mockData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TradingHistory from "@/components/metabots/copyTrades/TradingHistory";
import WalletPerformanceTabs from "@/components/metabots/copyTrades/WalletPerformanceTabs";

export const WalletPerformance = () => {
  return (
    <>
      <div className="border-b-2 bg-[#0C141F] border-[#212E40] py-2 rounded-md">
        <h2 className="font-bold text-[18px] mb-3">Wallet Performance</h2>
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

        <div className="flex">
          <div className="bg-[#17212F] p-2 rounded-[8px] w-[1020px]">
            <p className="font-normal text-[8px] md:text-sm lg:text-sm">
              Win Rate:
            </p>

            <div className="w-full flex justify-start gap-4 md:gap-10 lg:gap-10 mt-2">
              <p className="text-[#0D6EFD] text-sm md:text-[24px] lg:text-[24px] font-bold">
                63.97%
              </p>

              <div className="flex justify-center items-center gap-1">
                <p className="font-normal text-[8px] md:text-sm lg:text-sm ">
                  Total Realized Gains:
                </p>

                <span className="text-[#4CA244] text-[8px] md:text-sm lg:text-sm font-semibold">
                  $57.90
                </span>
              </div>

              <div className="flex justify-center items-center gap-1">
                <p className="font-normal text-[8px] md:text-sm lg:text-sm">
                  Total Unrealized gains:
                </p>

                <span className="text-[#E63E3A] text-[8px] md:text-sm lg:text-sm font-semibold">
                  -$16.89
                </span>
              </div>

              <div className="flex justify-center items-center gap-1">
                <p className="font-normal  text-[8px] md:text-sm lg:text-sm">
                  Total Volume:
                </p>
                <span className="#DBE9FF  text-[8px] md:text-sm lg:text-sm font-semibold">
                  $10k
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-2 md:gap-6 lg:gap-6">
          {/* Positive Trades */}

          <div className="w-full">
            <div className="w-full flex justify-start items-center pl-2">
              <h4 className="mt-8 font-bold text-[9px] md:text-base lg:text-base">
                Most Profitable Trades
              </h4>
            </div>
            <Accordion className="my-4 w-[500px]" type="single" collapsible>
              {walletPerformamcePositive.map((row) => (
                <AccordionItem
                  key={row.id}
                  className="w-full border-none mb-6 bg-[#161F2C] rounded-[8px] px-6"
                  value={`item-${row.id}`}
                >
                  <AccordionTrigger className="flex items-center gap-6 pr-[10%]">
                    <div className="flex items-center justify-center gap-2">
                      <Image
                        className="mr-2"
                        height={24}
                        width={24}
                        src={row.logo}
                        alt="logo"
                      />
                      <p className="text-[9px] md:text-xs lg:text-xs font-normal">
                        {row.name}
                      </p>
                    </div>
                    <p className="text-[#4CA244] font-bold text-xs md:text-base lg:text-base">
                      {row.token}
                    </p>
                    <Button className="bg-[#017B46] text-[8px] md:text-[10px] lg:text-[10px] px-6 text-white rounded-[8px]">
                      {row.button}
                    </Button>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Negative Trades */}

          <div className="w-full">
            <div className="flex justify-start items-center pl-2">
              <h4 className="mt-8 font-bold text-[9px] md:text-base lg:text-base">
                Biggest Losses
              </h4>
            </div>
            <Accordion
              className="my-4 pr-8 w-[500px]"
              type="single"
              collapsible
            >
              {walletPerformamceNegative.map((row) => (
                <AccordionItem
                  key={row.id}
                  className="w-full border-none mb-6 bg-[#161F2C] rounded-[8px] px-3"
                  value={`item-${row.id}`}
                >
                  <AccordionTrigger className="flex items-center gap-6 pr-[10%]">
                    <div className="flex items-center justify-center gap-2">
                      <Image
                        className="mr-2"
                        height={24}
                        width={24}
                        src={row.logo}
                        alt="logo"
                      />
                      <p className="text-[9px] md:text-xs lg:text-xs font-normal">
                        {row.name}
                      </p>
                    </div>
                    <p className="text-[#E63E3A] font-bold text-xs md:text-base lg:text-base">
                      {row.token}
                    </p>
                    <Button className="bg-[#017B46] text-[8px] md:text-[10px] lg:text-[10px] px-6 text-white rounded-[8px]">
                      {row.button}
                    </Button>
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-[18px] font-bold">Trade History</h3>
        <div className=" w-full flex justify-end px-20  ">
          <Select>
            <SelectTrigger className="w-fit bg-transparent gap-2 mb-3">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent className="w-[24px] text-white hover:text-black bg-[#060A0F] border-none outline-none">
              <SelectItem value="1">1M</SelectItem>
              <SelectItem value="3">3M</SelectItem>
              <SelectItem value="5">5M</SelectItem>
              <SelectItem value="15">15M</SelectItem>
              <SelectItem value="30">30M</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <TradingHistory />
      </div>
    </>
  );
};
export default WalletPerformance;
