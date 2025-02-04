import dynamic from "next/dynamic";
import React, { FC, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchFirstBuyers, fetchHolders, fetchLatestTrades, fetchTopTraders } from "@/utils/apiCalls";
import { FetchDynamicTokenResponse, HoldersData, LatestTradesResponse, TransactionData, } from "@/utils/types";
import FirstBuyers from "../FirstBuyers";
import TopTraders from "../TopTraders";
import Holders from "../Holders";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import solanaTrackerWebsocket from "@/services";

dayjs.extend(relativeTime);

const LatestTrades = dynamic(
  () => import("@/components/metabots/Dashboard/latestTrades/LatestTrades"),
  {
    ssr: false,
  }
);




// Consumer for Latest Trades API

interface PriceTabsProps {
  latestTradesData: any;
  tokenAddressDynamic: FetchDynamicTokenResponse;
  firstBuyersData: TransactionData[] | null;
  topTradersData: TransactionData[] | null;
  holdersData: HoldersData | null;
  isLoading: boolean;
  isError: boolean;
}




const PriceTabs:FC<PriceTabsProps> = ({latestTradesData, isLoading, firstBuyersData, isError, topTradersData, holdersData, tokenAddressDynamic }) => {
  useEffect(() => {
    const room = `transaction:${latestTradesData?.pools?.[0]?.tokenAddress}:${latestTradesData?.pools?.[0]?.poolId}`;

    solanaTrackerWebsocket.subscribeToTokenTrades(room);

    const handleUpdateQueryCache = (updatedTrade: any) => {
      latestTradesData((prevData: any) => ({
        ...prevData,
        trades: [updatedTrade, ...(prevData?.trades || [])],
      }));
    };

    solanaTrackerWebsocket.emitter.on(`${room}:id`, handleUpdateQueryCache);

    return () => {
      solanaTrackerWebsocket.subscribeToTokenTrades(room);
      solanaTrackerWebsocket.emitter.off(`${room}:id`, handleUpdateQueryCache);
    };
  }, []);
  
  return (
    <>
      <Tabs defaultValue="LatestTrades" className="w-full ">
        <TabsList className="flex justify-start mb-2 items-center md:justify-start lg:justify-start border-b-[1px] border-[#212E40]">
          <TabsTrigger
            className="w-1/3 md:w-fit lg:w-fit font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[white] text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="LatestTrades"
          >
         Latest Trades
          </TabsTrigger>
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[white] text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="TopTraders"
          >
            {" "}
           Top Traders
          </TabsTrigger>

           <TabsTrigger
            className="w-1/3 md:w-fit lg:w-fit font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[white] text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="Holders"
          >
         Holders
          </TabsTrigger>
          <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[white] text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="Buyers"
          >
            {" "}
          First Buyers
          </TabsTrigger>

          {/* <TabsTrigger
            className=" w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-bold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[white] text-[#6C757D] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="Watchlist"
          >
            <div className="absolute top-0 right-5 flex items-center text-center justify-center w-[12px] h-[12px] py-[1.8px] rounded-full px-1 bg-[#FFC107]">
              <p className="text-[10px] font-bold text-[#0A1019] text-center">
                2
              </p>
            </div>
            Watchlist
          </TabsTrigger> */}
        </TabsList>
        
        <TabsContent className="h-[300px] overflow-y-auto scrollbar-hide" value="LatestTrades">
        <LatestTrades latestTradesData={latestTradesData} loading={isLoading} dayjs={dayjs} />
  
      </TabsContent>

        <TabsContent
          className="h-[300px] overflow-y-auto scrollbar-hide"
          value="TopTraders"
        >
         
       <TopTraders topTradersData={topTradersData} loading={isLoading} tokenAddressDynamic={tokenAddressDynamic}/>
       </TabsContent>
        <TabsContent
          className="h-[300px] overflow-y-auto scrollbar-hide"
          value="Buyers">
       <FirstBuyers firstBuyersData={firstBuyersData} loading={isLoading} tokenAddressDynamic={tokenAddressDynamic}/>
       </TabsContent>
        
        <TabsContent
          className="h-[300px] overflow-y-auto scrollbar-hide"
          value="Holders"
        >
      
    <Holders holdersData={holdersData} loading={isLoading} tokenAddressDynamic={tokenAddressDynamic} />

        </TabsContent>
      </Tabs>
    </>
  );

}

export default PriceTabs