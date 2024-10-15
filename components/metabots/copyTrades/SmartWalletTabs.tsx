import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SmartTradeUpdates from "@/components/metabots/copyTrades/SmartTradeUpdates";
import Explorer from "@/components/metabots/copyTrades/Explorer";
import WalletDetails from "@/components/metabots/copyTrades/WalletDetails";

const SmartWalletTabs = () => {
  return (
    <>
      <Tabs defaultValue="Explorer" className="w-full">
        <TabsList className="w-fit flex items-center justify-between">
         
          <TabsTrigger
            className="w-fit border-b-2 border-transparent font-medium text-[#ffff] text-[10px] md:text-base lg:text-base data-[state=active]:text-[#0D6EFD]"
            value="Explorer"
          >
            {" "}
            Explorer
          </TabsTrigger>
          <TabsTrigger
            className="w-fit border-b-2 border-transparent font-medium
                data-[state=active]:text-[#0D6EFD] text-white text-[10px]
                 md:text-base lg:text-base"
            value="SmartTradeUpdates"
          >
            Smart Trade Updates
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="w-full h-[400px] md:h-auto lg:h-auto overflow-y-auto scrollbar-hide"
          value="SmartTradeUpdates"
        >
          <SmartTradeUpdates />
        </TabsContent>
        <TabsContent
          className="w-full h-[400px] md:h-auto lg:h-auto overflow-y-auto scrollbar-hide "
          value="Explorer"
        >
          <Explorer />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SmartWalletTabs;
