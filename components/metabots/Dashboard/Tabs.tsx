import dynamic from "next/dynamic";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NewToken = dynamic(
  () => import("@/components/metabots/Dashboard/NewToken"),
  {
    ssr: false,
  }
);

const WatchList = dynamic(
  () => import("@/components/metabots/Dashboard/Watchlist"),
  {
    ssr: false,
  }
);

const InnerTabs = dynamic(() => import("../dashboardTabs/InnerTab"), {
  ssr: false,
});

export default function Tab() {
  return (
    <>
      <Tabs defaultValue="Transactions" className="w-full">
        <TabsList
          className="flex justify-between mt-0 mb-0 items-center 
        md:justify-start lg:justify-start gap-[12px] px-2"
        >
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-0 lg:px-0 font-bold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-white text-[#6C757D] text-[10px] md:text-sm lg:text-base border-[#0D6EFD]"
            value="Transactions"
          >
            {/* width: Fixed (21px)px; height: Hug (10.17px)px; padding: 1.08px 0px
            0px 0px; gap: 1.08px; border-radius: 4px 0px 0px 0px; opacity: 0px;{" "} */}
            Orders
          </TabsTrigger>

          <TabsTrigger
            className="relative w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-0 font-bold
             focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-white text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="NewTokens"
          >
            <div className="absolute top-0 left-16 flex items-center text-center justify-center w-[31px] h-[10.17px] py-[1.8px] rounded-[4px]  px-1 bg-[#FF3434]">
              <p className="text-[6px] font-bold text-white text-center">Hot</p>
            </div>
            New Tokens
          </TabsTrigger>
          <TabsTrigger
            className="relative w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-0 
            font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px]
             data-[state=active]:text-[white] text-[#6C757D] text-[10px] md:text-sm lg:text-sm 
             border-[#0D6EFD]"
            value="Watchlist"
          >
            <div className="absolute top-0 left-14 flex items-center text-center justify-center w-[12px] h-[12px] py-[1.8px] rounded-full px-1 bg-[#FFC107]">
              <p className="text-[10px] font-bold text-[#0A1019] text-center">
                2
              </p>
            </div>
            Watchlist
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Transactions">
          <InnerTabs />
        </TabsContent>
        <TabsContent value="NewTokens">
          <NewToken />
        </TabsContent>
        <TabsContent value="Watchlist">
          <WatchList />
        </TabsContent>
      </Tabs>
    </>
  );
}
