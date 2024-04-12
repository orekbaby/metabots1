import React from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WalletDetails from "@/components/metabots/copyTrades/WalletDetails";
import Image from "next/image";
import WalletPerformance from "@/components/metabots/copyTrades/WalletPerformance";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const WalletPerformanceTabs = () => {
  return (
    <>
      <div className="w-full bg-[#0A1019] border-2 border-[#101720] py-1 rounded-lg">
        <div className="border-[1px] border-[#212E40] rounded-[8px] p-2 block md:hidden mb-4 lg:hidden mt-4">
          <h3 className="font-semibold md:font-bold lg:font-bold text-xs md:text-base lg:text-base mb-2">
            Your Wallets
          </h3>
          <Image
            className="rounded-[8px]"
            src="/wallet.png"
            alt="fraud"
            width={376}
            height={50}
          />
        </div>
        {/* trending wallet mobile */}
        <div className="block md:hidden lg:hidden mt-3">
          <Image
            className="rounded-[8px] "
            src="/trending-wallet.png"
            alt="fraud"
            width={387}
            height={48}
          />
        </div>

        <WalletDetails />
        <Tabs
          defaultValue="TradeAnalysis"
          className="w-full px-1 pr-0 md:pr-4 lg:pr-4"
        >
          <TabsList className="w-full bg-[#0C141F] border-b-2 border-[#212E40] flex items-center justify-between  pl-2 h-[50px]">
            <div className="flex items-center w-fit">
              <TabsTrigger
                className="w-full border-b-2 border-transparent pb-1 md:font-medium lg:font-medium data-[state=active]:border-b-[#FFC107] text-[#E7E7E7] text-[12px] font-normal md:text-[18px] lg:text-[18px]"
                value="TradeAnalysis"
              >
                Trade Analysis
              </TabsTrigger>
              <TabsTrigger
                className="w-full border-b-2 border-transparent pb-1 font-medium data-[state=active]:border-b-[#FFC107] text-[#E7E7E7] text-[12px] md:text-[18px] lg:text-[18px]"
                value="TopRelatedAddress"
              >
                {" "}
                Top Related Address
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
            className="w-full h-[40vh] 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden
            "
            value="TradeAnalysis"
          >
            <WalletPerformance />
          </TabsContent>
          <TabsContent
            className="w-[100%] h-[40vh] overflow-y-auto scrolbar-hide"
            value="TopRelatedAddress"
          >
            No data yet
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default WalletPerformanceTabs;
