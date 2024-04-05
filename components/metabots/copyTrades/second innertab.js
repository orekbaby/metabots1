import React from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WalletPerformance from "@/components/metabots/copyTrades/WalletPerformance";
const Limit = dynamic(
  () => import("@/components/metabots/dashboardTabs/Limit"),
  {
    ssr: false,
  }
);

export default function WalletPerformanceTabsTabs() {
  return (
    <Tabs defaultValue="TradeAnalysis" className="w-full">
      <TabsList className="w-2/4 flex justify-start gap-6 mt-0 mb-0 items-center">
        <TabsTrigger
          className=" w-1/4 md:w-[100px] lg:w-[50px] font-medium focus-visible:border  focus-visible:border-b-yellow-600 data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#E7E7E7] text-[10px] md:text-sm lg:text-sm border-b-[#FFC107]"
          value="TradeAnalysis"
        >
          {" "}
          Trade Analysis
        </TabsTrigger>
        <TabsTrigger
          className="text-center w-1/4 md:w-[100px] lg:w-[70px] font-medium focus-visible:border  focus-visible:border-b-yellow-600 data-[state=active]:border-b-yellow-600  data-[state=active]:text-yellow-600 text-[#E7E7E7] text-[10px] md:text-sm lg:text-sm"
          value="TopRelatedAddress"
        >
          Top Related Address
        </TabsTrigger>
      </TabsList>
      <TabsContent value="TradeAnalysis">
        <WalletPerformance />
      </TabsContent>
      <TabsContent value="TopRelatedAddress">
        <Limit />
      </TabsContent>
    </Tabs>
  );
}

{
  /* <div className="flex justify-between mb-2 bg-[#0C141F] border-2 border-[#212E40] pl-4 pr-12 py-3 rounded-md">
  <div className="flex justify-center items-center gap-4">
    <h3 className="font-normal text-[18px]">Trade Analysis</h3>
    <h3 className="font-normal text-[18px]">Top Related Address</h3>
  </div>
  <p className="font-normal text-sm text-[#E7E7E7] border-b-1 border-[#E7E7E7]">
    {" "}
    My Alerts & Copied Trade Settings
  </p>
</div>; */
}
