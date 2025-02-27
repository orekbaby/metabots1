import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Multichart from "../multi-chart/Multichart";
import SmartMoneyTabs from "@/components/metabots/alphaHuntTabs/SmartMoneyTabs";
import SniperScreenerTabs from "@/components/metabots/alphaHuntTabs/SniperScreenerTabs";
import ChartDetails from "@/components/metabots/alphaHuntTabs/ChartDetails";
const AlphaHuntTabs = () => {
  return (
    <>
      <Tabs defaultValue="SniperScreener" className="w-full overflow-x-hidden">
        <TabsList className="w-full flex items-center justify-between md:justify-start lg:justify-start bg-[rgb(12,20,31)] px-1">
          <TabsTrigger
            className="w-full md:w-fit lg:w-fit px-5 md:px-8 lg:px-8 font-semibold text-[10px] md:text-sm lg:text-sm ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#6C757D]"
            value="SniperScreener"
          >
            Sniper Screener
          </TabsTrigger>
          <TabsTrigger
            className="w-full md:w-fit lg:w-fit px-5 md:px-8 lg:px-8 font-semibold text-[10px] md:text-sm lg:text-sm ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#6C757D]"
            value="SmartMoneyTokenPlays"
          >
            {" "}
            Smart Money Token Plays
          </TabsTrigger>

          {/* <TabsTrigger
            className="w-1/3 md:w-fit lg:w-fit px-5 md:px-8 lg:px-8 font-bold text-[10px] md:text-base lg:text-base ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#E7E7E7]"
            value={""}
          >
            {" "}
            Multi Chart
          </TabsTrigger>

          <TabsTrigger
            className="w-1/3 md:w-fit lg:w-fit px-5 md:px-8 lg:px-8 font-bold text-[10px] md:text-base lg:text-base ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#E7E7E7]"
            value="TopTraders"
          >
            {" "}
            Top Traders
          </TabsTrigger> */}
        </TabsList>
        <TabsContent
          className="w-full h-auto md:h-[50vh] lg:h-full 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden"
          value="SniperScreener"
        >
          {/* <SniperScreenerTabs /> */}
          Sniper screener content here
        </TabsContent>
        <TabsContent
          className="w-full h-auto md:h-[50vh] lg:h-full 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden "
          value="SmartMoneyTokenPlays"
        >
          <SmartMoneyTabs />
        </TabsContent>
        <TabsContent
          className="w-full h-auto md:h-[50vh] lg:h-full 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden"
          value="MultiChart"
        >
          <Multichart />
        </TabsContent>
        <TabsContent
          className="w-full h-auto md:h-[50vh] lg:h-full 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden"
          value="TopTraders"
        >
          <ChartDetails />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AlphaHuntTabs;
