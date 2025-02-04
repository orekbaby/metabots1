"use client";
import React, { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Chart from "../metabots/charts/Chart";
import PositionTabs from "../positions/PositionTabs";
import WatchListStar from "../memeTabs/WatchListStar";
import { ChartInformation, FetchDynamicTokenResponse } from "@/utils/types";

// const NewToken = dynamic(
//   () => import("@/components/metabots/Dashboard/NewToken"),
//   {
//     ssr: false,
//   }
// );

// const WatchList = dynamic(
//   () => import("@/components/metabots/Dashboard/Watchlist"),
//   {
//     ssr: false,
//   }
// );
interface ChartTabsProps {
  tokenAddressDynamic: FetchDynamicTokenResponse;
  chartData: any;
  isScriptReady:boolean
}

const ChartTabs:FC<ChartTabsProps> = ({tokenAddressDynamic, chartData, isScriptReady}) => {
  return (
    <>
      <Tabs defaultValue="Chart" className="w-full">
        <TabsList
          className="flex justify-between mt-0 mb-0 items-center 
        md:justify-start gap-4 px-4"
        >
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-0 lg:px-0 font-bold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-white text-[#6C757D] text-[10px] md:text-sm lg:text-base border-yellow-500"
            value="Chart"
          >
            {/* width: Fixed (21px)px; height: Hug (10.17px)px; padding: 1.08px 0px
            0px 0px; gap: 1.08px; border-radius: 4px 0px 0px 0px; opacity: 0px;{" "} */}
            Charts
          </TabsTrigger>

          <TabsTrigger
            className="relative w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-0 font-bold
             focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-white text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-yellow-500"
            value="Positions"
          >
             Positions
          </TabsTrigger>
          <TabsTrigger
            className="relative w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-0 
            font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px]
             data-[state=active]:text-[white] text-[#6C757D] text-[10px] md:text-sm lg:text-sm 
            border-yellow-500"
            value="Watchlist"
          >
            
            Watchlist
          </TabsTrigger>
        </TabsList>
        <TabsContent className="h-[331px] bg-[#0C141F]  py-3 w-full border-[0.94px] rounded-lg border-[#212E40]" value="Chart">
         <Chart tokenAddressDynamic={tokenAddressDynamic} />
        </TabsContent>
        <TabsContent value="Positions px-4">
        <PositionTabs/>
        </TabsContent>
        <TabsContent value="Watchlist px-4">
           <WatchListStar/>
        </TabsContent>
      </Tabs>
    </>

  );
}

export default ChartTabs