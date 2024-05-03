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
        className="w-full border-b-2 bg-[#0C141F] md:bg-transparent
         lg:bg-transparent rounded-lg pl-2 pr-3 md:pl-0 lg:pl-0 mt-5 md:mt-0 lg:mt-0"
      >
        <TabsList className="flex mt-0 mb-0 items-center justify-start">
          <TabsTrigger
            className=" w-1/2 md:w-fit lg:w-fit px-5 md:px-2 lg:px-2 md:font-bold lg:font-bold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[12px] md:text-base lg:text-base border-[#0D6EFD] gap-2 font-medium"
            value="CopyTrade"
          >
            {" "}
            Copy Trading
            <BsFillExclamationCircleFill className="text-[#0D6EFD] text-base" />
          </TabsTrigger>
          <TabsTrigger
            className="w-1/2 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-medium md:font-bold lg:font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[12px] 
            md:text-base
             lg:text-base border-[#0D6EFD]"
            value="SmartWalletExplorer"
          >
            Smart Wallet Explorer
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full h-full" value="CopyTrade">
          <CopyTrading />
        </TabsContent>

        <TabsContent className="w-full h-full" value="SmartWalletExplorer">
          <SmartWalletTabs />
        </TabsContent>
      </Tabs>
    </>
  );
}
