import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccumulatedTokens from "@/components/metabots/alphaHuntTabs/AccumulatedTokens";
import TokenFreshWallet from "@/components/metabots/alphaHuntTabs/TokenFreshWallet";
const SmartMoneyTabs = () => {
  return (
    <>
      <Tabs
        defaultValue="MostAccumulatedTokens"
        className="w-full border-b-2 bg-[#0C141F] md:bg-transparent
         lg:bg-transparent rounded-lg pl-2 pr-3 md:pl-0 lg:pl-0 mt-5 md:mt-0 lg:mt-0"
      >
        <TabsList className="flex mt-0 mb-0 items-center justify-between md:justify-start lg:justify-start gap-0 md:gap-2 lg:gap-2 px-2 md:px-0 lg:px-0">
          <TabsTrigger
            className=" w-full md:w-fit lg:w-fit px-5 md:px-2 lg:px-2 md:font-semibold lg:font-semibold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#6C757D] text-[9px] md:text-sm lg:text-sm border-[#0D6EFD] gap-2 font-medium"
            value="MostAccumulatedTokens"
          >
            {" "}
            Most Accumulated Tokens
          </TabsTrigger>
          <TabsTrigger
            className="w-full md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-medium md:font-semibold lg:font-semibold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#6C757D] text-[9px] 
            md:text-sm
             lg:text-sm border-[#0D6EFD]"
            value="MostAccumulatedTokenFreshWallet"
          >
            Most Accumulated Token Fresh Wallet
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="w-full h-full pt-5"
          value="MostAccumulatedTokens"
        >
          <AccumulatedTokens />
        </TabsContent>

        <TabsContent
          className="w-full h-full"
          value="MostAccumulatedTokenFreshWallet"
        >
          <TokenFreshWallet />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SmartMoneyTabs;
