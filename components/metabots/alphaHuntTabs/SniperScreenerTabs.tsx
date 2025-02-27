import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApeModeSniping from "./ApeModeSniping";
import KOLCallsSnipingTabs from "@/components/metabots/alphaHuntTabs/KolCallsSnipingTab";
const SniperScreenerTabs = () => {
  return (
    <>
      <Tabs
        defaultValue="ApeModeSniping"
        className="w-full border-b-2 bg-[#0C141F] md:bg-transparent
         lg:bg-transparent rounded-lg pl-2 pr-3 md:pl-0 lg:pl-0 mt-5 md:mt-0 lg:mt-0"
      >
        <TabsList className="flex mt-0 mb-0 items-center justify-between ">
          <TabsTrigger
            className=" w-full md:w-fit lg:w-fit px-5 md:px-2 lg:px-2 focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD] gap-2 font-medium"
            value="ApeModeSniping"
          >
            {" "}
            Ape Mode Sniping
          </TabsTrigger>
          <TabsTrigger
            className="w-full md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-medium  focus-visible:border-b-[2px] data-[state=active]:border-b-[2px]
             data-[state=active]:text-[#0D6EFD] text-[#6C757D] text-[10px] 
            md:text-sm
             lg:text-sm border-[#0D6EFD]"
            value="KOLCallsSniping"
          >
            KOL Calls Sniping
          </TabsTrigger>
        </TabsList>
        <TabsContent
          className="w-full h-auto overflow-y-hidden scrollbar-hide overflow-x-hidden"
          value="ApeModeSniping"
        >
          <ApeModeSniping />
        </TabsContent>

        <TabsContent className="w-full h-full" value="KOLCallsSniping">
          <KOLCallsSnipingTabs />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default SniperScreenerTabs;
