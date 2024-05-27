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
      <TabsList className="w-fit flex justify-between mt-0 mb-0 items-center">
        <TabsTrigger
          className="w-full md:w-[100px] lg:w-fit font-medium focus-visible:border  focus-visible:border-b-yellow-600  data-[state=active]:border-b-yellow-600 data-[state=active]:text-yellow-600 text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-b-[#FFC107]"
          value="All"
        >
          {" "}
          Order History
        </TabsTrigger>
        <TabsTrigger
          className="text-center w-full md:w-[100px] lg:w-fit font-medium focus-visible:border  focus-visible:border-b-yellow-600  data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#6C757D] text-[10px] md:text-sm lg:text-sm"
          value="Limit"
        >
          Limit
        </TabsTrigger>
        <TabsTrigger
          className="text-right w-full md:w-[100px] lg:w-fit font-medium focus-visible:border  focus-visible:border-b-yellow-600  data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#6C757D] text-[10px] md:text-sm lg:text-sm"
          value="CopyTrades"
        >
          copy Trades
        </TabsTrigger>
      </TabsList>
      <TabsContent className="" value="All">
        <All />
      </TabsContent>
      <TabsContent className="" value="Limit">
        <Limit />
      </TabsContent>
      <TabsContent className="" value="CopyTrades">
        <CopyTrades />
      </TabsContent>
    </Tabs>
  );
}
