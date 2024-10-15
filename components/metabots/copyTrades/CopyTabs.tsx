import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyTrading from "@/components/metabots/copyTrades/CopyTrading";

import { BsFillExclamationCircleFill } from "react-icons/bs";
import SmartWalletTabs from "./SmartWalletTabs";
export default function Tab() {
  return (
    <>
      <Tabs
        defaultValue="CopyTrade"
        className="w-full md:bg-transparent
         lg:bg-transparent rounded-lg mt-5 md:mt-0 lg:mt-0 px-2"
      >
        <TabsList className="flex  h-[71px] mt-0 mb-0 items-center justify-start bg-[#0C141F] md:bg-transparent lg:bg-[#0A111B]  rounded-lg py-[6px] border-b-transparent md:py-0 lg:py-0 border-[#1A232F] border">
        
          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit font-medium focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#DADBDD]
             text-[12px] md:text-sm lg:text-sm border-[#0D6EFD] gap-2"
            value="CopyTrade"
          >
            {" "}
            Copy Trading
            <BsFillExclamationCircleFill className="text-[#0D6EFD] text-base hidden md:block lg:block" />
          </TabsTrigger>
          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit font-medium focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#DADBDD] text-[12px] 
            md:text-sm
             lg:text-sm border-[#0D6EFD]"
            value="SmartWalletExplorer"
          >
            Smart Wallet Explorer
          </TabsTrigger>

          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit font-medium focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#DADBDD] text-[12px] 
            md:text-sm
             lg:text-sm border-[#0D6EFD]"
            value="PreVettedTraders"
          >
            Pre Vetted Traders
          </TabsTrigger>
          <div className="flex justify-end ml-auto items-center text-sm font-normal border-b border-[#1A232F] text-[#E7E7E7] px-8">
          Copied Trades
          </div>

        </TabsList>
        <TabsContent className="w-full h-full" value="CopyTrade">
          <CopyTrading />
        </TabsContent>

        <TabsContent className="w-full h-full" value="SmartWalletExplorer">
          <SmartWalletTabs />
        </TabsContent>
        <TabsContent className="w-full h-full" value="PreVettedTraders">
          Details coming soon
        </TabsContent>
      </Tabs>
    </>
  );
}
