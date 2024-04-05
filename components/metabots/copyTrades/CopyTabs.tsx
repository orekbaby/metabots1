import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyTrading from "@/components/metabots/copyTrades/CopyTrading";
import SmartWalletExplorer from "@/components/metabots/copyTrades/SmartWalletExplorer";
import { BsFillExclamationCircleFill } from "react-icons/bs";
export default function Tab() {
  return (
    <>
      <div className=" border-b-2 border-[#101720]">
        <Tabs defaultValue="CopyTrade" className="w-full">
          <TabsList className="flex justify-between mt-0 mb-0 items-center md:justify-start lg:justify-start ">
            <TabsTrigger
              className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-base lg:text-base border-[#0D6EFD] gap-2"
              value="CopyTrade"
            >
              {" "}
              Copy Trading
              <BsFillExclamationCircleFill className="text-[#0D6EFD] text-base" />
            </TabsTrigger>
            <TabsTrigger
              className="w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[10px] 
            md:text-base
             lg:text-base border-[#0D6EFD]"
              value="SmartWalletExplorer"
            >
              Smart Wallet Explore
            </TabsTrigger>
          </TabsList>
          <TabsContent value="CopyTrade">
            <CopyTrading />
          </TabsContent>
          <TabsContent value="SmartWalletExplorer">
            <SmartWalletExplorer />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
