import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfitableTrades from "./ProfitableTrades";
import BiggestLosses from "./BiggestLosses";
const walletPerformanceMobileTabs = () => {
  return (
    <>
      <Tabs
        defaultValue="MostProfitableTrades"
        className="w-full px-1 md:px-0 lg:px-0 pr-0 bg-[#0C141F] border-none md:border-b-2 lg:border-b-2 border-[#212E40]"
      >
        <TabsList className="w-full flex items-center justify-between h-[50px]">
          <div className="flex items-center w-full justify-between">
            <TabsTrigger
              className="w-full pb-1 md:font-medium lg:font-medium data-[state=active]:bg-[#084298] text-[#E7E7E7] text-[12px] font-normal md:text-[18px] lg:text-[18px] rounded-s"
              value="MostProfitableTrades"
            >
              Most Profitable Trades
            </TabsTrigger>
            <TabsTrigger
              className="w-full border-b-2 border-transparent pb-1 font-medium data-[state=active]:bg-[#084298] text-[#E7E7E7] text-[12px] md:text-[18px] lg:text-[18px] rounded-s"
              value="BiggestLosses"
            >
              {" "}
              Biggest Losses
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent
          className="w-full h-auto md:h-[40vh] lg:h-[40vh] 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden px-1"
          value="MostProfitableTrades"
        >
          <ProfitableTrades />
        </TabsContent>
        <TabsContent
          className="w-full h-auto md:h-[40vh] lg:h-[40vh] overflow-y-auto scrolbar-hide px-1"
          value="BiggestLosses"
        >
          <BiggestLosses />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default walletPerformanceMobileTabs;
