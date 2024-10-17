"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import YourWallet from "@/components/metabots/Dashboard/YourWallet";
import WalletPerformance from "@/components/metabots/copyTrades/WalletPerformance";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WalletDetails from "@/components/metabots/copyTrades/WalletDetails";
import WalletDetailsMobile from "@/components/metabots/copyTrades/WalletDetailsMobile";
import { marqueeTokens } from "@/utils/mockData";
import { marqueeDetails } from "@/utils/mockData";
import TradeHistory from "@/components/metabots/copyTrades/TradeHistory";
import TransactionHistory from "./metabots/copyTrades/TransactionHistory";
import EvmDetails from "./metabots/copyTrades/EvmDetails";

const WalletPerformanceTabs = () => {
  const [selectedOption, setSelectedOption] = useState("trending");

  const handleSelectChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div
        className="w-full border-none md:border-2 md:border-[#101720] lg:border-2
       lg:border-[#101720] py-1 rounded-lg mt-2"
      >
        <div className="block md:hidden lg:hidden text-center px-1">
          <YourWallet />
        </div>
        {/* trending wallet mobile  */}
        <div className="block md:hidden lg:hidden my-5">
          <div className="flex bg-[#0C141F] h-auto w-full rounded-l-[50px] pl-2">
            <div
              className="font-normal py-2 block text-[10px] bg-[#0C141F] w-1/3 h-auto
             text-center rounded-l-[50px]"
            >
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="bg-[#17212F] text-[9px] rounded-l-[50px] font-normal outline-none py-1 px-[3px]"
              >
                <option
                  className="w-fit font-normal text-[9px]
                  "
                  value="trending"
                >
                  Trending Wallets
                </option>
                <option
                  className="w-fit font-normal text-[9px]"
                  value="walletList"
                >
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
       
        <div className="block md:hidden lg:hidden">
          <WalletDetailsMobile />
        </div>
        <Tabs
          defaultValue="WalletAnalysis"
          className="w-full px-1 md:px-0 lg:px-0 pr-0 border-none md:border-b-2 lg:border-b-2 border-[#212E40]"
        >
          <TabsList
            className="w-full flex items-center border-none md:border-b-2 lg:border-b-2 border-[#212E40] gap-6 md:gap-0 lg:gap-0 justify-between pl-0 md:pl-6 lg:pl-6 h-[40px] md:h-[50px] lg:h-[50px]
           bg-[#0C141F] px-0 md:px-0 lg:px-6"
          >
                       <div className="w-fit flex items-center ">
              <TabsTrigger
                className="border-b-2 border-transparent py-3 data-[state=active]:bg-[#084298]
                 data-[state=active]:text-[white] text-[#B5B6B6]
                  text-[10px] font-normal md:text-base lg:text-sm w-[158px] h-[26px] p-[10px]"
                value="WalletAnalysis"
              >
                Wallet Analysis
              </TabsTrigger>

              <TabsTrigger
                className="border-b-2 border-transparent py-3
                 data-[state=active]:bg-[#084298] data-[state=active]:text-[white]
                  text-[#B5B6B6] text-[10px]
                 font-normal md:text-base lg:text-sm  w-[158px] h-[26px] p-[10px]"
                value="TransactionHistory"
              >
              Transaction History
              </TabsTrigger>

                </div>
          
          </TabsList>
         
          <TabsContent
            className="w-full h-auto md:h-[40vh] lg:h-[80vh] 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden"
            value="WalletAnalysis"
          >
            <WalletPerformance />
          </TabsContent>
         

          <TabsContent
            className="w-full h-auto md:h-[40vh] lg:h-[25vh]
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden mb-5 md:mb-0 lg:mb-0"
            value="TransactionHistory"
          >
            <TransactionHistory />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default WalletPerformanceTabs;
