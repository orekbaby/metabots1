import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LimitTrade from "@/components/metabots/Dashboard/tradeTabs/LimitTrade";
import Buy from "@/components/metabots/Dashboard/tradeTabs/Buy";
import Sell from "@/components/metabots/Dashboard/tradeTabs/Sell";
import CopyTrades from "@/components/metabots/Dashboard/tradeTabs/CopyTrades";
import Image from "next/image";

export default function TradeTabs() {
  return (
    <>
      <Tabs defaultValue="Buy" className="w-full">
        <TabsList className="bg-[#0C141F] w-full flex justify-between md:gap-10 lg:gap-10 mb-3 items-center md:justify-start lg:justify-start">
          <TabsTrigger
            className="w-1/4  md:w-[70px] lg:w-70px] font-semi-bold focus-visible:border focus-visible:bg-[#111827] data-[state=active]:bg-[#111827]  data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-xs lg:text-xs border-b-[#0D6EFD]  border-[#212E40]"
            value="Buy"
          >
            {" "}
            Buy
          </TabsTrigger>
          <TabsTrigger
            className=" bg-none w-1/4 md:w-[70px] lg:[w-70px] font-semi-bold focus-visible:border  focus-visible:bg-[#111827] data-[state=active]:bg-[#111827]  data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-xs lg:text-xs border-b-[#0D6EFD] border-[#212E40]"
            value="Sell"
          >
            Sell
          </TabsTrigger>
          {/* <TabsTrigger
            className=" bg-none w-1/4 md:w-[70px] lg:w-70px] font-semi-bold focus-visible:border  focus-visible:border-b-[#0D6EFD] data-[state=active]:border-b-[#0D6EFD]  data-[state=active]:text-[#0D6EFD] text-[#fff] text-[10px] md:text-xs lg:text-xs border-b-[#0D6EFD] border-none"
            value="CopyTrades"
          >
            Copy Trades
          </TabsTrigger> */}
          <TabsTrigger
            className="w-1/4 md:w-[70px] lg:w-70px] font-semi-bold focus-visible:border  focus-visible:bg-[#111827] data-[state=active]:bg-[#111827]  data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-xs lg:text-xs border-b-[#0D6EFD] border-[#212E40]"
            value="Limits"
          >
            Limits
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Buy">
          <Buy />
        </TabsContent>
        <TabsContent value="Sell">
          <Sell />
        </TabsContent>
        <TabsContent value="Limit">
          <CopyTrades />
        </TabsContent>
        <TabsContent value="CopyTrades">
          <CopyTrades />
        </TabsContent>
      </Tabs>
    </>
  );
}
