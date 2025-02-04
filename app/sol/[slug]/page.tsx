"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Use next/navigation for App Router
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Metabots from "@/components/metabots/Metabots";
import AlphaHuntTabs from "@/components/metabots/alphaHuntTabs/AlphaHuntTabs";
import Terminal from "@/components/metabots/terminal/Terminal";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { fetchTrendingRaydium, fetchDynamicTokenAddress, fetchLatestTrades, fetchTopTraders, fetchHolders, fetchFirstBuyers } from "@/utils/apiCalls";
import { FetchDynamicTokenResponse, LatestData,  LatestTradesResponse,  TradeToken,  TrendingData } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

const Page: React.FC = () => {
  const router = useRouter();
  const params = useParams(); // Access route params
  const slug = params?.slug; // Extract 'slug' from params
  const [trendingRaydium, setTrendingRaydium] = useState<TrendingData[]>([]);
  // const [tokenAddressDynamic, setTokenAddressDynamic] = useState<FetchDynamicTokenResponse | null>(null);
  const [pageParam, setPageParam] = useState<string>(Date.now().toString()); 
  const [loading, setLoading] = useState(false);
  // const [latestTradesData, setLatestTradesData] = useState<LatestTradesResponse | null>(null);



  useEffect(() => {
    // Fetch trending data, independent of slug
    const fetchTrendingData = async () => {
      try {
        const result = await fetchTrendingRaydium();
        setTrendingRaydium(result?.trendingData ?? []);
      } catch (error) {
        console.error("Error fetching trending raydium:", error);
      }
    };

    fetchTrendingData();
    const intervalId = setInterval(fetchTrendingData, 30000); 

    return () => clearInterval(intervalId); 
  }, []); 


  // useEffect(() => {
  //   const fetchTokenAddress = async () => {
  //     if (!slug) return; 
  //     try {
  //       setLoading(true);
  //       const result = await fetchDynamicTokenAddress(slug as string);
  //       setTokenAddressDynamic(result); 
  //     } catch (error) {
  //       console.error("Error fetching token data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchTokenAddress();
  // }, [slug]); 



  const {data: tokenAddressDynamic, isLoading: isTokenLoading, error: tokenError} = useQuery({
    queryKey: ['dynamicTokenAddress', slug],
    queryFn: () => fetchDynamicTokenAddress(slug as string),
    enabled: !!slug,
})




return (
    <div className="w-full flex pl-0 md:pl-2 lg:pl-2 mt-20 mb-5 items-center gap-3 p-3 bg-transparent border-t border-[#212E40]">
      <Tabs
        defaultValue="SmartTradingTerminal"
        className="w-full pl-0 md:pl-0 lg:pl-0"
      >
        <TabsList className="w-full flex lg:mt-0 mb-0 items-center justify-between md:justify-start lg:justify-start gap-0 md:gap-[16px] lg:gap-[16px] bg-[#0C141F] px-5 md:px-0 lg:px-0">
          <TabsTrigger
            className="w-fit pl-3 md:pl-0 lg:pl-0 font-medium md:font-semibold lg:font-semibold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#E7E7E7] text-[12px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="AboutMetabots"
          >
            About Metabots
          </TabsTrigger>
          <TabsTrigger
            className="flex items-center gap-1 w-fit px-0 font-medium md:font-semibold lg:font-semibold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#E7E7E7] text-[10px] md:text-sm lg:text-[14px] border-[#0D6EFD]"
            value="SmartTradingTerminal"
          >
            Smart Trading Terminal
            <BsFillExclamationCircleFill className="text-[#989898] text-xs" />
          </TabsTrigger>
          <TabsTrigger
            className="w-fit px-0 font-medium md:font-semibold lg:font-semibold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#E7E7E7] text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
            value="AlphaHunt"
          >
            Alpha Hunt
          </TabsTrigger>
        </TabsList>
        <TabsContent value="AboutMetabots">
          <Metabots />
        </TabsContent>
        <TabsContent value="SmartTradingTerminal">
          {loading ? (
            <p>Loading token info...</p>
          ) : tokenAddressDynamic   ? (
            <Terminal trendingRaydium={trendingRaydium} tokenAddressDynamic={tokenAddressDynamic}   />
          ) : (
            <p>No token info found for this address.</p>
          )}
        </TabsContent>
        <TabsContent value="AlphaHunt">
          <AlphaHuntTabs />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;