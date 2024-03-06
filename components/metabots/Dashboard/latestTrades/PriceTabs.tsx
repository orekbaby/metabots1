import dynamic from "next/dynamic";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const LatestTrades = dynamic(
  () => import("@/components/metabots/Dashboard/latestTrades/LatestTrades"),
  {
    ssr: false,
  }
);
const PriceAlert = dynamic(
  () => import("@/components/metabots/Dashboard/latestTrades/PriceAlert"),
  {
    ssr: false,
  }
);

export default function Tab() {
  return (
    <>
      <Tabs defaultValue="LatestTrades" className="w-full ">
        <TabsList className="flex justify-start mb-4 items-center md:justify-start lg:justify-start border-b-[1px] border-[#212E40]">
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="LatestTrades"
          >
            {" "}
            Latest Trades
          </TabsTrigger>

          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="PriceAlert"
          >
            Price Alert
          </TabsTrigger>
        </TabsList>
        <TabsContent value="PriceAlert">
          <PriceAlert />
        </TabsContent>
        <TabsContent value="LatestTrades">
          <LatestTrades />
        </TabsContent>
      </Tabs>
    </>
  );
}
