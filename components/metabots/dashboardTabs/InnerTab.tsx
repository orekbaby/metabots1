import React from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Limit = dynamic(
  () => import("@/components/metabots/dashboardTabs/Limit"),
  {
    ssr: false,
  }
);

const All = dynamic(() => import("@/components/metabots/dashboardTabs/All"), {
  ssr: false,
});

const CopyTrades = dynamic(
  () => import("@/components/metabots/dashboardTabs/CopyTrades"),
  {
    ssr: false,
  }
);

export default function InnerTabs() {
  return (
    <Tabs defaultValue="All" className="w-full">
      <TabsList className="w-2/4 flex justify-start gap-6 mt-0 mb-0 items-center">
        <TabsTrigger
          className=" w-1/4 md:w-[100px] lg:w-[50px] font-medium focus-visible:border  focus-visible:border-b-yellow-600 data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#E7E7E7] text-[10px] md:text-sm lg:text-sm border-b-[#FFC107]"
          value="All"
        >
          {" "}
          All
        </TabsTrigger>
        <TabsTrigger
          className="text-center w-1/4 md:w-[100px] lg:w-[70px] font-medium focus-visible:border  focus-visible:border-b-yellow-600 data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#E7E7E7] text-[10px] md:text-sm lg:text-sm"
          value="Limit"
        >
          Limit
        </TabsTrigger>
        <TabsTrigger
          className="text-right w-1/4 md:w-[100px] lg:w-[70px] font-medium focus-visible:border  focus-visible:border-b-yellow-600 data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#E7E7E7] text-[10px] md:text-sm lg:text-sm"
          value="CopyTrades"
        >
          Copy Trades
        </TabsTrigger>
      </TabsList>
      <TabsContent value="All">
        <All />
      </TabsContent>
      <TabsContent value="Limit">
        <Limit />
      </TabsContent>
      <TabsContent value="CopyTrades">
        <CopyTrades />
      </TabsContent>
    </Tabs>
  );
}
