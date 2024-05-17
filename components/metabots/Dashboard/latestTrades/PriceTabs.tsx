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
      <Tabs defaultValue="TopTraders" className="w-full ">
        <TabsList className="flex justify-start mb-4 items-center md:justify-start lg:justify-start border-b-[1px] border-[#212E40]">
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[white] text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="TopTraders"
          >
            Top Traders
          </TabsTrigger>
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[white] text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="MarketTrades"
          >
            {" "}
            Market Trades
          </TabsTrigger>

          {/* <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[white] text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="Watchlist"
          >
            <div className="absolute top-0 right-5 flex items-center text-center justify-center w-[12px] h-[12px] py-[1.8px] rounded-full px-1 bg-[#FFC107]">
              <p className="text-[10px] font-bold text-[#0A1019] text-center">
                2
              </p>
            </div>
            Watchlist
          </TabsTrigger> */}
        </TabsList>
        <TabsContent value="MarketTrades">
          <PriceAlert />
        </TabsContent>
        <TabsContent value="TopTraders">
          <LatestTrades />
        </TabsContent>
        <TabsContent value="Watchlist">
          <LatestTrades />
        </TabsContent>
      </Tabs>
    </>
  );
}
