import React, { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Buy from "@/components/metabots/Dashboard/tradeTabs/Buy";
import Sell from "@/components/metabots/Dashboard/tradeTabs/Sell";
import CopyTrades from "@/components/metabots/Dashboard/tradeTabs/CopyTrades";
import Image from "next/image";
import LimitTabs from "@/components/metabots/Dashboard/tradeTabs/LimitTabs";
import { FetchDynamicTokenResponse } from "@/utils/types";
interface TradeTabsProps {
tokenAddressDynamic: FetchDynamicTokenResponse;
  handleBuyButtonClick: (tokenAddress: any) => void;
  fastBuyValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
}
const TradeTabs:FC<TradeTabsProps> = ({handleBuyButtonClick, fastBuyValue, handleChange, tokenAddressDynamic }) => {
  return (
    <>
      <Tabs
        defaultValue="Buy"
        className="w-full border rounded-lg border-[#212E40] "
      >
        <TabsList className="w-full flex justify-between items-center border-b border-[#212E40]">
          <TabsTrigger
            className="w-full h-auto font-semi-bold focus-visible:border
             focus-visible:bg-[#0C141F] data-[state=active]:bg-[#0C141F] data-[state=active]:text-[#0D6EFD]
             text-white text-[12px] md:text-base lg:text-base border-r border-[#212E40]"
            value="Buy"
          >
            {" "}
            Buy
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-auto font-semi-bold focus-visible:border focus-visible:bg-[#0C141F]
             data-[state=active]:bg-[#0C141F] data-[state=active]:text-[#0D6EFD] text-white text-[12px] md:text-base lg:text-base  border-[#212E40]"
            value="Sell"
          >
            Sell
          </TabsTrigger>
          {/* <TabsTrigger
            className="w-full font-semi-bold h-auto focus-visible:border focus-visible:bg-[#0C141F]
             data-[state=active]:bg-[#0C141F] data-[state=active]:text-[#0D6EFD] text-white text-[12px] md:text-base lg:text-base border-[#212E40]"
            value="CopyTrades"
          >
            Copy Trades
          </TabsTrigger> */}
          <TabsTrigger
            className="w-full font-semi-bold 
            focus-visible:border focus-visible:bg-[#0C141F] data-[state=active]:bg-[#0C141F]
             border-[#212E40] 
              data-[state=active]:text-[#0D6EFD] text-white text-[12px] md:text-base lg:text-base"
            value="Limits"
          >
            Limits
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Buy">
          <Buy tokenAddressDynamic={tokenAddressDynamic} />
        </TabsContent>
        <TabsContent value="Sell">
          <Sell tokenAddressDynamic={tokenAddressDynamic} />
        </TabsContent>
        <TabsContent value="Limits">
          <LimitTabs tokenAddressDynamic={tokenAddressDynamic} />
        </TabsContent>
        <TabsContent value="CopyTrades">
          <CopyTrades />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default TradeTabs
