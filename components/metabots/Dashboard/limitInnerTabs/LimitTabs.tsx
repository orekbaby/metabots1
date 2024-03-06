import dynamic from "next/dynamic";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const BuyOrder = dynamic(
  () => import("@/components/metabots/Dashboard/limitInnerTabs/BuyOrder"),
  {
    ssr: false,
  }
);

const SellOrder = dynamic(
  () => import("@/components/metabots/Dashboard/limitInnerTabs/SellOrder"),
  {
    ssr: false,
  }
);

export default function LimitTabs() {
  return (
    <>
      <Tabs defaultValue="BuyOrder" className="w-full">
        <TabsList className="flex justify-between bg-[#161F2C] mb-10 items-center md:justify-start lg:justify-start">
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-10 lg:px-10 font-bold text-[10px] md:text-base lg:text-base ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#E7E7E7]"
            value="BuyOrder"
          >
            {" "}
            Buy Order
          </TabsTrigger>
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-10 lg:px-10 font-bold ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298]  data-[state=active]:text-[#E7E7E7] text-[#E7E7E7] text-[10px] md:text-base lg:text-base"
            value="SellOrder"
          >
            Sell Order
          </TabsTrigger>
        </TabsList>
        <TabsContent value="BuyOrder">
          <BuyOrder />
        </TabsContent>
        <TabsContent value="SellOrder">
          <SellOrder />
        </TabsContent>
      </Tabs>
    </>
  );
}
