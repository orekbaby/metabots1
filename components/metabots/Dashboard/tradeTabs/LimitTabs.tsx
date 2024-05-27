import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BuyLimitOrder from "@/components/metabots/Dashboard/tradeTabs/BuyLimitOrder";
import SellLimitOrder from "@/components/metabots/Dashboard/tradeTabs/SellLimitOrder";
const LimitTabs = () => {
  return (
    <>
      <Tabs defaultValue="BuyLimitOrder" className="w-full overflow-x-hidden">
        <TabsList
          className="w-full flex items-center justify-between md:justify-start lg:justify-start
         bg-[#212E40] px-1"
        >
          <TabsTrigger
            className="w-full md:w-fit lg:w-fit  font-semibold text-[10px] md:text-sm lg:text-sm ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#fff]"
            value="BuyLimitOrder"
          >
            Buy Limit Order
          </TabsTrigger>
          <TabsTrigger
            className="w-full md:w-fit lg:w-fit  font-semibold text-[10px] md:text-sm lg:text-sm ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#fff]"
            value="SellLimitOrder"
          >
            {" "}
            Sell Limit Order
          </TabsTrigger>

          {/* <TabsTrigger
            className="w-1/3 md:w-fit lg:w-fit px-5 md:px-8 lg:px-8 font-bold text-[10px] md:text-base lg:text-base ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#E7E7E7]"
            value={""}
          >
            {" "}
            Multi Chart
          </TabsTrigger>

          <TabsTrigger
            className="w-1/3 md:w-fit lg:w-fit px-5 md:px-8 lg:px-8 font-bold text-[10px] md:text-base lg:text-base ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] data-[state=active]:text-[#E7E7E7] text-[#E7E7E7]"
            value="TopTraders"
          >
            {" "}
            Top Traders
          </TabsTrigger> */}
        </TabsList>
        <TabsContent
          className="w-full h-auto md:h-[50vh] lg:h-full 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden"
          value="BuyLimitOrder"
        >
          <BuyLimitOrder />
        </TabsContent>
        <TabsContent
          className="w-full h-auto md:h-[50vh] lg:h-full 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden "
          value="SellLimitOrder"
        >
          <SellLimitOrder />
        </TabsContent>
        {/* <TabsContent
          className="w-full h-auto md:h-[50vh] lg:h-full 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden"
          value="MultiChart"
        >
          <Multichart />
        </TabsContent>
        <TabsContent
          className="w-full h-auto md:h-[50vh] lg:h-full 
            md:overflow-y-auto lg:overflow-y-auto scrollbar-hide overflow-x-hidden"
          value="TopTraders"
        >
          <ChartDetails />
        </TabsContent> */}
      </Tabs>
    </>
  );
};

export default LimitTabs;
