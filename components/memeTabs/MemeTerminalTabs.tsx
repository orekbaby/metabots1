"use client"
import React, { FC, useEffect, useRef, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image"
import PumpFunMoonShotScanner from '@/components/memeTabs/PumpFunMoonShotScanner';
import RaydiumScanner from '@/components/memeTabs/RaydiumScanner';
import { fetchPumpMoon, fetchRaydiumScanner, fetchTrendingPumpMoon } from '@/utils/apiCalls';
import {  LatestData } from '@/utils/types';
import All from './All';
import  solanaTrackerWebsocket  from "@/services/index"
import PositionTabs from '../positions/PositionTabs';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

import { filterMemeToken, filterMemeTokens } from '@/utils/filterHook';


const MemeTerminalTabs = () => {
  const [freshMinted, setFreshMinted] = useState<LatestData[]>([]);
  const [moon, setMoon] = useState<LatestData[]>([]);
  const [dexData, setDexData] = useState<LatestData[]>([]);
  const dispatch: AppDispatch = useDispatch();
  const [radyiumScanner, setRadyiumScanner] =useState<LatestData[]>([]);
  const dex = useSelector((state: RootState) => state.filters.dex);
  const fresh_minted = useSelector((state: RootState) => state.filters.fresh_minted);
  const soon_to_moon = useSelector((state: RootState) => state.filters.soon_to_moon);
  const [sucess, setSuccess] = useState<boolean>(false)


  const fetchInitialData = async () => {
    try {
      const data = await fetchPumpMoon();
     if (data.length ) {
      setSuccess(true)
     }
          if (data) {
               setFreshMinted(data.latestData || []); 
               setMoon(data.soonToMoonData || []);
               setDexData(data.newlyGraduatedData || []);
             
              } else {
               console.error("No data returned from API");
             }
           } catch (error) {
             console.error("Error fetching initial data:", error);
           }
         }


         const fetchDetails = async () => {
          try {
            const result = await fetchRaydiumScanner();
            // console.log("Result from fetchRaydiumScanner:", result); n
      
            if (result) {
             
              setRadyiumScanner(result?.newlyGraduatedData ?? []);
            } else {
              console.warn("No data available");
            }
          } catch (error) {
            console.error("Error fetching raydium scanner data:", error);
          }
        };

        

  useEffect (() => {
    fetchInitialData()
    fetchDetails();
      },[])

      
    useEffect(() => {
    solanaTrackerWebsocket
    const handleLatestTokensUpdated = (freshMinted: LatestData) => {
    
    const isValid = validateLatestData(freshMinted);
      if (isValid) {
        // console.log("--valid", freshMinted );
        setFreshMinted((prevData) => [...prevData, freshMinted]); // limit to 100
      } else {
        console.error("Invalid data structure", freshMinted);
      }
    };
  
    const handleGraduatingTokensUpdated = (moon: LatestData) => {
        const isValid = validateGraduatingData(moon);
      if (isValid) {
        console.log("--valid", moon);
        setMoon((prevData) => [...prevData, moon]); // limit to 100
      } else {
        console.error("Invalid data structure", moon);
      }
    };

    const handleGraduatedTokensUpdated = (dexData: LatestData) => {
      const isValid = validateGraduatedData(dexData);
      if (isValid) {
        console.log("--valid", dexData);
        setDexData((prevData) => [...prevData, dexData]); // limit to 100
      } else {
        console.error("Invalid data structure", dexData);
      }
    };
  

    const validateLatestData = (data: any) => {
      const filterParams = {
        liquidityProviderBurned: fresh_minted.burned,
        withSocialMediaAccount: fresh_minted.social,
        top10holdersPercentage: fresh_minted.top10,
        liquidity: {
          min: fresh_minted.minLiquidity,
          max: fresh_minted.maxLiquidity,
        },
        volume: { min: fresh_minted.minVolume, max: fresh_minted.maxVolume },
        marketCap: { min: fresh_minted.minMCap, max: fresh_minted.maxMCap },
        transactions: {
          min: fresh_minted.minTransactions,
          max: fresh_minted.maxTransactions,
        },
        buys: { min: fresh_minted.minBuys, max: fresh_minted.maxBuys },
        sells: { min: fresh_minted.minSells, max: fresh_minted.maxSells },
      };

      console.log({ filterParams, data });

      return filterMemeToken(data ?? [], filterParams);
      // return data.token && data.pools && data.events && data.risk;
    };

    const validateGraduatingData = (data: any) => {
      const filterParams = {
        liquidityProviderBurned: soon_to_moon.burned,
        withSocialMediaAccount: soon_to_moon.social,
        top10holdersPercentage: soon_to_moon.top10,
        liquidity: {
          min: soon_to_moon.minLiquidity,
          max: soon_to_moon.maxLiquidity,
        },
        volume: { min: soon_to_moon.minVolume, max: soon_to_moon.maxVolume },
        marketCap: { min: soon_to_moon.minMCap, max: soon_to_moon.maxMCap },
        transactions: {
          min: soon_to_moon.minTransactions,
          max: soon_to_moon.maxTransactions,
        },
        buys: { min: soon_to_moon.minBuys, max: soon_to_moon.maxBuys },
        sells: { min: soon_to_moon.minSells, max: soon_to_moon.maxSells },
      };

      // console.log({ filterParams, data });

      return filterMemeToken(data ?? [], filterParams);
      // return data.token && data.pools && data.events && data.risk;
    };


    const validateGraduatedData = (data: any) => {
      const filterParams = {
        liquidityProviderBurned: dex.burned,
        withSocialMediaAccount: dex.social,
        top10holdersPercentage: dex.top10,
        liquidity: {
          min: dex.minLiquidity,
          max: dex.maxLiquidity,
        },
        volume: { min: dex.minVolume, max: dex.maxVolume },
        marketCap: { min: dex.minMCap, max: dex.maxMCap },
        transactions: {
          min: dex.minTransactions,
          max: dex.maxTransactions,
        },
        buys: { min: dex.minBuys, max: dex.maxBuys },
        sells: { min: dex.minSells, max: dex.maxSells },
      };

      // console.log({ filterParams, data });

      return filterMemeToken(data ?? [], filterParams);
      // return data.token && data.pools && data.events && data.risk;
    };
    
    solanaTrackerWebsocket.emitter.on('latestTokensUpdated', handleLatestTokensUpdated);
    solanaTrackerWebsocket.emitter.on('graduatingTokensUpdated', handleGraduatingTokensUpdated);
    solanaTrackerWebsocket.emitter.on('graduatedTokensUpdated', handleGraduatedTokensUpdated);
  
    
    return () => {
      solanaTrackerWebsocket.emitter.off('latestTokensUpdated', handleLatestTokensUpdated);
      solanaTrackerWebsocket.emitter.off('graduatingTokensUpdated', handleGraduatingTokensUpdated);
      solanaTrackerWebsocket.emitter.off('graduatedTokensUpdated', handleGraduatedTokensUpdated);
    };
  }, [fresh_minted, soon_to_moon, dex]);

 

  useEffect (() => {
    if (sucess) {
      const freshMintedFilterParams = {
        liquidityProviderBurned: fresh_minted.burned,
        withSocialMediaAccount: fresh_minted.social,
        top10holdersPercentage: fresh_minted.top10,
        liquidity: {
          min: fresh_minted.minLiquidity,
          max: fresh_minted.maxLiquidity,
        },
        volume: { min: fresh_minted.minVolume, max: fresh_minted.maxVolume },
        marketCap: { min: fresh_minted.minMCap, max: fresh_minted.maxMCap },
        transactions: {
          min: fresh_minted.minTransactions,
          max: fresh_minted.maxTransactions,
        },
        buys: { min: fresh_minted.minBuys, max: fresh_minted.maxBuys },
        sells: { min: fresh_minted.minSells, max: fresh_minted.maxSells },
      };


      const soonToMoonFilterParams = {
        liquidityProviderBurned: soon_to_moon.burned,
        withSocialMediaAccount: soon_to_moon.social,
        top10holdersPercentage: soon_to_moon.top10,
        liquidity: {
          min: soon_to_moon.minLiquidity,
          max: soon_to_moon.maxLiquidity,
        },
        volume: { min: soon_to_moon.minVolume, max: soon_to_moon.maxVolume },
        marketCap: { min: soon_to_moon.minMCap, max: soon_to_moon.maxMCap },
        transactions: {
          min: soon_to_moon.minTransactions,
          max: soon_to_moon.maxTransactions,
        },
        buys: { min: soon_to_moon.minBuys, max: soon_to_moon.maxBuys },
        sells: { min: soon_to_moon.minSells, max: soon_to_moon.maxSells },
      };


      const dexDataFilterParams = {
        liquidityProviderBurned: dex.burned,
        withSocialMediaAccount: dex.social,
        top10holdersPercentage: dex.top10,
        liquidity: {
          min: dex.minLiquidity,
          max: dex.maxLiquidity,
        },
        volume: { min: dex.minVolume, max: dex.maxVolume },
        marketCap: { min: dex.minMCap, max: dex.maxMCap },
        transactions: {
          min: dex.minTransactions,
          max: dex.maxTransactions,
        },
        buys: { min: dex.minBuys, max: dex.maxBuys },
        sells: { min: dex.minSells, max: dex.maxSells },
      };
      
      const filteredLatest = filterMemeTokens(
        freshMinted,
        freshMintedFilterParams
       );

       setFreshMinted(filteredLatest)
       

      const filteredMoon = filterMemeTokens(
        moon,
        soonToMoonFilterParams,
      );

       setMoon(filteredMoon)

      const filteredDex= filterMemeTokens(
        dexData,
        dexDataFilterParams,
      );

     setDexData(filteredDex)
}

  },[])

  // console.log({freshMinted, moon, dexData})
  
  return (
    <>
      <Tabs
        defaultValue="MoonshotScanner"
        className="w-full md:bg-transparent
         lg:bg-transparent rounded-lg mt-5 md:mt-0 lg:mt-0 px-2"
      >
        <TabsList className="flex  h-[71px] mt-0 mb-0 items-center justify-between bg-[#0C141F] md:bg-transparent lg:bg-[#0A111B]  rounded-lg py-[6px] border-b-transparent md:py-0 lg:py-0 border-[#1A232F] border pr-6">
        <div className="flex justify-start items-start">
          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-white text-[#AEAEAE]
             text-[12px] md:text-sm lg:text-sm border-[#0D6EFD] gap-2 font-semibold"
            value="MoonshotScanner"
          >
            {" "}
            <div className="flex justify-between gap-1">
            <Image 
            src="/pill.png"
            className="border-[#0C141F] border"
            height={16}
            width={16}
            alt="pill"
            />

            <Image 
            src="/moon.png"
            className="border-[#0C141F] border"
            height={16}
            width={16}
            alt="moon"
            />

            </div>
            Pump.fun & Moonshot Scanner
           
          </TabsTrigger>
          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit flex justify-center gap-1 
            font-normal focus-visible:border-b-[2px] data-[state=active]:border-b-[2px]
             data-[state=active]:text-white text-[#AEAEAE] text-[12px] 
            md:text-sm
             lg:text-sm border-[#0D6EFD]"
            value="RaydiumScanner"
          >
            <Image 
            src="/raydium.png"
            className="border-[#0C141F] border"
            height={16}
            width={16}
            alt="pill"
            />

            Raydium Scanner
          </TabsTrigger>
          </div>
        <TabsTrigger className="relative"
        value="Positions"
        >
          <div
            className="w-fit md:w-fit rounded-lg lg:w-[108px] h-[34px] bg-[#17212F] flex justify-center 
         items-center font-medium text-white text-[12px] 
            md:text-sm
             lg:text-sm"
          >
        Positions
          </div>
          <div className="w-[18px] absolute top-[-10%] right-0 text-[10px] flex justify-center items-center h-[18px] rounded-full bg-[#E53535]">
            0
          </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full h-full" value="MoonshotScanner">
         <PumpFunMoonShotScanner freshMinted={freshMinted}
          moon={moon} dex={dexData}

           setFreshMinted={setFreshMinted} 
           setMoon={setMoon} setDexData={setDexData}/>
        </TabsContent>

        <TabsContent className="w-full h-[400px] overflow-y-auto scrollbar-hide" value="RaydiumScanner">
         <RaydiumScanner radyiumScanner={radyiumScanner}  />
        </TabsContent>

        <TabsContent className="w-full h-[400px] overflow-y-auto scrollbar-hide" value="Positions">
         <PositionTabs  />
        </TabsContent>
     
      </Tabs>
     
    </>
  )
}

export default MemeTerminalTabs