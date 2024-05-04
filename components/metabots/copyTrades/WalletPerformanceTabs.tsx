"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TradingHistory from "@/components/metabots/copyTrades/TradingHistory";
import YourWallet from "@/components/metabots/Dashboard/YourWallet";
import WalletPerformance from "@/components/metabots/copyTrades/WalletPerformance";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WalletDetails from "@/components/metabots/copyTrades/WalletDetails";
import WalletDetailsMobile from "@/components/metabots/copyTrades/WalletDetailsMobile";
import { marqueeTokens } from "@/utils/mockData";
import { marqueeDetails } from "@/utils/mockData";
import TradeHistory from "./TradeHistory";

const WalletPerformanceTabs = () => {
  const [selectedOption, setSelectedOption] = useState("trending");

  const handleSelectChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div className="w-full border-2 border-[#101720] py-1 rounded-lg">
        <div className="block md:hidden lg:hidden">
          <YourWallet />
        </div>
        {/* trending wallet mobile  */}
        <div className="block md:hidden lg:hidden my-3">
          <div className="flex bg-[#17212F] h-auto w-full  rounded-l-[50px]">
            <div className="font-normal py-2 block text-[10px] bg-[#212E40] w-1/3 h-auto text-center rounded-l-[50px]">
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="bg-[#212E40] text-[9px] font-normal outline-none"
              >
                <option className="w-fit" value="trending">
                  Trending Wallets
                </option>
                <option className="w-fit" value="walletList">
                  My Wallet List
                </option>
              </select>
            </div>
            <Marquee className="py-2" pauseOnHover={true}>
              {selectedOption === "trending" &&
                marqueeTokens?.map((row, index) => (
                  <p
                    key={index}
                    className={`font-normal ${
                      index === 0 ? "text-[#F5841F]" : "default-color"
                    } text-[9px] mr-3`}
                  >
                    {row.name}
                  </p>
                ))}
              {selectedOption === "walletList" &&
                marqueeDetails?.map((row, index) => (
                  <p
                    key={index}
                    className={`font-normal ${
                      index === 0 ? "text-[#F5841F]" : "default-color"
                    } text-[9px] mr-3`}
                  >
                    {row.name}
                  </p>
                ))}
            </Marquee>
          </div>
        </div>
        <div className="hidden md:block lg:block">
          {" "}
          <WalletDetails />{" "}
        </div>
        <div className="inline md:hidden lg:hidden">
          <WalletDetailsMobile />
        </div>
        <Tabs
          defaultValue="TradeAnalysis"
          className="w-full px-1 md:px-0 lg:px-0 pr-0 bg-[#0C141F] border-none md:border-b-2 lg:border-b-2 border-[#212E40]"
        >
          <TabsList className="w-full flex items-center justify-between  pl-2 h-[50px]">
            <div className="flex items-center w-fit">
              <TabsTrigger
                className="w-full border-b-2 border-transparent pb-1 md:font-medium lg:font-medium data-[state=active]:border-b-[#FFC107] text-[#E7E7E7] text-[12px] font-normal md:text-[18px] lg:text-[18px]"
                value="TradeAnalysis"
              >
                Trade Analysis
              </TabsTrigger>

              <TabsTrigger
                className=" hidden md:block lg:block w-full border-b-2 border-transparent pb-1 md:font-medium lg:font-medium data-[state=active]:border-b-[#FFC107] text-[#E7E7E7] text-[12px] font-normal md:text-[18px] lg:text-[18px]"
                value="TopRelatedAddress"
              >
                Top Related Address
              </TabsTrigger>

              <TabsTrigger
                className="w-fit nline md:hidden lg:hidden border-b-2 border-transparent pb-1 font-medium data-[state=active]:border-b-[#FFC107] text-[#E7E7E7] text-[12px] md:text-[18px] lg:text-[18px]"
                value="TradeHistory"
              >
                {" "}
                Trade History
              </TabsTrigger>
            </div>
            <Dialog>
              <DialogTrigger>
                <div className="w-fit font-normal text-sm pr-12 hidden md:block lg:block">
                  My Alerts & Copied Trade Settings
                </div>
              </DialogTrigger>
              <DialogContent className="w-1/2 p-5 bg-[#0C141F] border-none">
                no content yet
              </DialogContent>
            </Dialog>
          </TabsList>
          <TabsContent
            className="w-full h-auto md:h-[40vh] lg:h-[40vh] 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden"
            value="TradeAnalysis"
          >
            <WalletPerformance />
          </TabsContent>
          <TabsContent
            className="hidden md:flex lg:flex w-full h-auto md:h-[40vh] lg:h-[40vh] 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden"
            value="TopRelatedAddress"
          >
            No data yet
          </TabsContent>

          <TabsContent
            className="inline md:hidden lg:hidden w-full h-auto md:h-[40vh] lg:h-[40vh] overflow-y-auto scrolbar-hide"
            value="TradeHistory"
          >
            <TradingHistory />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default WalletPerformanceTabs;
