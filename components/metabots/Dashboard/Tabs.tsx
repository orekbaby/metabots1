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
        <TabsList className="flex justify-between mt-0 mb-0 items-center md:justify-start lg:justify-start">
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="Transactions"
          >
            {" "}
            Transactions
          </TabsTrigger>
          <TabsTrigger
            className="w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="NewTokens"
          >
            New Tokens
          </TabsTrigger>
          <TabsTrigger
            className="w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="Watchlist"
          >
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
