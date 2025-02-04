"use client"
import React, { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Multichart from "@/components/metabots/multi-chart/Multichart";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import YourWallet from "@/components/metabots/Dashboard/YourWallet";
import ChartTabs from "@/components/chartTabs/ChartTabs";
import { marqueeDetails, marqueeTokens } from "@/utils/mockData";
import Marquee from "react-fast-marquee";
import { FaFire } from "react-icons/fa";
import Image from "next/image"
import { ChartInformation, FetchDynamicTokenResponse, HoldersData, LatestData, LatestTradesResponse, TokenInfo, TransactionData, TrendingData } from "@/utils/types";
import { fetchFirstBuyers, fetchHolders, fetchLatestTrades, fetchTopTraders, fetchTrendingRaydium } from "@/utils/apiCalls";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";


const Tabs = dynamic(() => import("@/components/metabots/Dashboard/Tabs"), {
  ssr: false,
});

const Chart = dynamic(() => import("@/components/metabots/charts/Chart"), {
  ssr: false,
});

const TradeTabs = dynamic(
  () => import("@/components/metabots/Dashboard/tradeTabs/TradeTabs"),
  {
    ssr: false,
  }
);

const PriceTabs = dynamic(
  () => import("@/components/metabots/Dashboard/latestTrades/PriceTabs"),
  {
    ssr: false,
  }
);



const TokenDetails = dynamic(
  () => import("@/components/metabots/tokenDetails/TokenDetails"),
  {
    ssr: false,
  }
);

const TokenDetailsMobile = dynamic(
  () => import("@/components/metabots/tokenDetails/TokenDetailsMobile"),
  {
    ssr: false,
  }
);




interface TerminalProps {
  trendingRaydium: TrendingData[];
  tokenAddressDynamic: FetchDynamicTokenResponse;
  // latestTradesData?: LatestTradesResponse[];
  // firstBuyersData?: TransactionData[];
  chartData: ChartInformation;
  handleBuyButtonClick?: (tokenAddress: any) => void;
  fastBuyValue?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCopy?: (address: string) => void;
  formatTimeDifference?: (timestamp: number) => string;
  isScriptReady:boolean
 
}




const Terminal: React.FC<TerminalProps> = ({ trendingRaydium, isScriptReady, tokenAddressDynamic, handleBuyButtonClick, fastBuyValue, handleChange, handleCopy, formatTimeDifference, chartData
  
  // firstBuyersData, latestTradesData
 }) => {
  

  const router = useRouter();
  const params = useParams(); // Access route params
  const slug = params?.slug; // Extract 'slug' from params
  const tokenAddress = tokenAddressDynamic?.token?.mint;
  //  const [tokenAddressDynamic, setTokenAddressDynamic] = useState<FetchDynamicTokenResponse | null>(null);
  const [pageParam, setPageParam] = useState<string>(Date.now().toString()); 
  const [loading, setLoading] = useState(false);
  
  
  const { data: latestTradesData } = useQuery({
    queryKey: ['tradesLatestData', slug],
    queryFn: () => fetchLatestTrades(slug as string, pageParam),
    enabled: !!slug, 
  });
  
  console.log('Data fetched in useQuery:', latestTradesData);

  
    
  const { data: firstBuyersData,  isError } = useQuery({
    queryKey: ['firstbuyersData', slug],
    queryFn: () => fetchFirstBuyers(slug as string),
    enabled: !!slug,
  });
  
  
  console.log({firstBuyersData})
  
  const { data: holdersData } = useQuery({
    queryKey: ['holderData', slug],
    queryFn: () => fetchHolders(slug as string),
    enabled: !!slug, 
  });
  
  // console.log({holdersData})
    
  const { data: topTradersData } = useQuery({
    queryKey: ['topTraders', slug],
    queryFn: () => fetchTopTraders(slug as string),
    enabled: !!slug, 
  });
  
  // console.log({topTradersData})
  
  // const {
  //   data: chartData
    
  // } = useQuery({
  //   queryKey: ['chartInformation'],
  //   queryFn: () => fetchSolanaData(tokenAddress),
  // });


  const formatPercentage = (percentage: number | null | undefined): string => {
    if (percentage == null || isNaN(percentage)) return 'N/A';
  
     const roundedPercentage = Math.round(percentage);
  
    return `${roundedPercentage}%`;
  };

  return (
    <>
      <TokenDetailsMobile />
      <div className="flex">
      {/* Trending Header */}
      <div className="flex items-center gap-2 mb-2">
      🔥
        <h2 className="text-sm font-medium  text-[#E7E7E7]">Trending</h2>
      </div>

      {/* Marquee Section */}
      <Marquee className="py-2" pauseOnHover={true}>
        {trendingRaydium?.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5 text-white mr-8">
            <p className="text-sm font-normal text-[#B5B6B6]">#{index + 1}</p>
            {item?.token?.image ? (
              <Image
                width={14}
                height={14}
                alt={item?.token?.name || "Token"}
                className="rounded-full object-cover"
                src={item?.token?.image}
              />
            ) : (
              <div className="w-[14px] h-[14px] rounded-full bg-[#0A1019] flex items-center justify-center text-white font-bold">
                {item?.token?.name?.substring(0, 3).toUpperCase() ?? "N/A"}
              </div>
            )}
            <div className="flex flex-col">
              <p className="text-sm font-medium text-[#E7E7E7]">
                {item?.token?.name?.substring(0, 4) ?? "N/A"}
              </p>
             
            </div>
            <p className="text-sm font-normal text-[#B5B6B6]">
              {formatPercentage(item?.events?.["24h"]?.priceChangePercentage)}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
      <div className="hidden md:flex lg:flex items-center">
      
        <TokenDetails
         tokenAddressDynamic={tokenAddressDynamic}
         formatTimeDifference={formatTimeDifference}
         handleCopy={handleCopy}
         />
      </div>
      <div className="flex w-full gap-2">
        {/* Chat Section with 70% Width */}
        <div className="flex-[70%] flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="hidden md:inline lg:inline flex-[70%] mr-4">
              {/* <Dialog> */}
                {/* {/* <DialogTrigger>
                  <h2 className="font-semibold text-sm w-fit text-[#FFC107] my-2 border-b-[1px] border-[#FFC107]">
                    Multi-Chart
                  </h2> */}
                {/* </DialogTrigger>  */}
                {/* <DialogContent className="max-w-[95vw] max-h-[95vh] h-[95vh] w-[95vw] bg-[#0A1019] border border-slate-800 left-1/2 top-1/2 overflow-y-auto">
                  <Multichart />
                </DialogContent>
              </Dialog> */}

              {/* Pass the props to the Chart component */}
            
              <div className="h-[401px] bg-[#0C141F] w-full border-[0.94px] rounded-lg border-[#212E40]">
              <ChartTabs tokenAddressDynamic={tokenAddressDynamic} chartData={chartData} isScriptReady={isScriptReady}/>
              </div>
            </div>
            {/* Uncommented Tabs */}
            {/* <div className="h-[250px] md:h-[300px] lg:h-[291.7px] bg-[#0C141F] overflow-y-auto scrollbar-hide hidden md:inline lg:inline flex-[59%] border-[1px] border-[#212E40] rounded-[8px] mt-4 md:mt-4 lg:mt-2 pt-1">
              
            </div> */}
          </div>
        
          {/* PriceTabs Section */}
          <div className="hidden md:inline lg:inline h-auto w-full border-[1px] border-[#212E40] rounded-[8px] mt-4">
          <PriceTabs
   latestTradesData={latestTradesData}
  firstBuyersData={firstBuyersData as TransactionData[] | undefined ?? []}
  topTradersData={topTradersData as TransactionData[] | undefined ?? []}
  holdersData={holdersData as HoldersData | null} 
  isLoading={loading} 
  isError={isError} 
  tokenAddressDynamic={tokenAddressDynamic}
/>
      </div>
        </div>

        {/* Sidebar Section with 30% Width */}
        <div className="hidden md:inline lg:inline flex-[30%] w-full ml-2 pt-2">
          <YourWallet />
          <div className="border-[1px] border-[#212E40] rounded-[8px] mt-3">
            <TradeTabs fastBuyValue={fastBuyValue || ""} handleChange={handleChange || (() => {})} handleBuyButtonClick={handleBuyButtonClick || (() => {})} tokenAddressDynamic={tokenAddressDynamic} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
