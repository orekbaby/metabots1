import React from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WalletDetails from "@/components/metabots/copyTrades/WalletDetails";
import WalletPerformance from "@/components/metabots/copyTrades/WalletPerformance";

const WalletPerformanceTabs = () => {
  return (
    <>
      <div className="w-full bg-[#0A1019] border-2 border-[#101720] px-4 py-2 rounded-lg mb-1">
        <WalletDetails />
        <Tabs defaultValue="TradeAnalysis" className="w-full">
          <TabsList className="w-full bg-[#0C141F] flex items-center justify-between px-5">
            <div className="flex items-center w-fit">
              <TabsTrigger
                className="w-full border-b-2 border-transparent pb-1 font-medium data-[state=active]:border-b-[#FFC107] text-[#E7E7E7] text-[10px] md:text-sm lg:text-sm"
                value="TradeAnalysis"
              >
                Trade Analysis
              </TabsTrigger>
              <TabsTrigger
                className="w-full border-b-2 border-transparent pb-1 font-medium data-[state=active]:border-b-[#FFC107] text-[#E7E7E7] text-[10px] md:text-sm lg:text-sm"
                value="TopRelatedAddress"
              >
                {" "}
                Top Related Address
              </TabsTrigger>
            </div>
            <div className="w-fit font-normal text-sm pr-12">
              My Alerts & Copied Trade Settings
            </div>
          </TabsList>
          <TabsContent
            className="w-full h-[40vh] pl-2 pr-7 overflow-y-auto"
            value="TradeAnalysis"
          >
            <WalletPerformance />
          </TabsContent>
          <TabsContent className="w-full pl-2 pr-7" value="TopRelatedAddress">
            No data yet
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default WalletPerformanceTabs;
