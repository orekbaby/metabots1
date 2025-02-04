"use client";
import React, { FC, useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image"
import Watchlist from '../metabots/Dashboard/Watchlist';
import Trending from './Trending';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button } from '../ui/button';
import { MdOutlineSettings } from "react-icons/md";
import All from './All';
import WatchList from './WatchList';
import NewPairs from './NewPairs';
import WatchListStar from './WatchListStar';
import { LatestData } from '@/utils/types';
import { TrendingData } from '@/utils/types'
import { fetchTrendingRaydium } from '@/utils/apiCalls'

interface RaydiumScannerProps {
  radyiumScanner:LatestData[] 
  
  }



const RaydiumScanner:FC<RaydiumScannerProps>= ({radyiumScanner}) => {
const [isOn, setIsOn] = useState(false);
const [trendingRaydium, setTrendingRaydium] =useState<TrendingData[]>([]);

 

  const toggle = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const result = await fetchTrendingRaydium();
        console.log("Result from fetchTrendingRaydium:", result); 
  
        if (result) {
          setTrendingRaydium(result?.trendingData ?? []);
        
        } else {
          console.warn("No data available");
        }
      } catch (error) {
        console.error("Error fetching trending raydium:", error);
      }
    };
    fetchTrending();
  }, []);

  // console.log({trendingRaydium})

  return (
    <>
    <Tabs
  defaultValue="NewPairs"
  className="w-full md:bg-transparent lg:bg-transparent rounded-lg mt-5 md:mt-0 lg:mt-0 px-2"
>
  <TabsList className="flex h-[71px] items-center justify-between
   gap-4 bg-[#0C141F] md:bg-transparent lg:bg-[#0A111B] rounded-lg py-[6px] border-b-transparent md:py-0 lg:py-0 border-[#1A232F] border pr-6">
    
   <div className="flex justify-start items-center gap-4">
    <TabsTrigger
      className="w-[81px] h-[29px] text-[#DBDBDC] text-[12px] md:text-sm lg:text-[13.2px] font-semibold rounded-[24px]
        data-[state=active]:bg-[#052759] data-[state=active]:border-[#084298] 
        bg-[#161F2C] data-[state=inactive]:bg-[#161F2C] border-[2px] border-transparent"
      value="NewPairs"
    >
      New Pairs
    </TabsTrigger>
    
   
    <TabsTrigger
      className="w-fit text-[#DBDBDC] text-[12px] md:text-sm lg:text-[13.2px] font-medium rounded-[24px]
        data-[state=active]:bg-[#052759] data-[state=active]:border-[#084298]
        bg-[#161F2C] data-[state=inactive]:bg-[#161F2C] border-[2px] border-transparent"
      value="Trending"
    >
      🔥 Trending
    </TabsTrigger>

  
   <WatchListStar/>
    </div>
    <div className="flex justify-end items-end">
      <div className="flex justify-center gap-4 items-center">
      <div className="flex gap-1 items-center justify-center">
        <p className="font-bold text-[15px] text-[#CACACA]">Automation</p>
        <HiOutlineExclamationCircle className='w-[16px] h-[16px] text-[#CACACA]' />
      </div>
      <div className="flex items-center gap-1.5">
      {/* Toggle Text */}
    

      {/* Toggle Button */}
      <div
        onClick={toggle}
        className={`relative w-[23.33px] h-[12.73px] p-[1.06px] cursor-pointer rounded-[6.36px] flex items-center 
          ${isOn ? 'bg-[#34C759]' : 'bg-[#1A1A1ACC] bg-opacity-80'} transition-colors duration-300`}
      >
        {/* Toggle Circle */}
        <div
          className={`w-[10.61px] h-[10.61px] bg-white rounded-full transition-transform duration-300
            ${isOn ? 'translate-x-[11px]' : 'translate-x-0'}`}
        ></div>
      </div>
      <span className="text-xs font-medium text-white">
        {isOn ? 'On' : 'Off'}
      </span>
    </div>
    <div className="flex items-center w-[153px] h-[39px]">
  <Button className="w-[98px] flex justify-center gap-1 items-center text-sm h-[39px] px-2 py-[11px] bg-[#212E40] text-white border-[#212E40] rounded-l-[8px] rounded-r-none">
    Fast Buy  
    <Image  
      width={14}
      height={14}
      alt="sol-img"
      src="/solanaLogo.svg"
    />
  </Button>
  <input
    className="text-xs w-[55px] h-[39px] py-[8px] px-[16px] bg-[#0C141F] text-[#212E40] border-[#212E40] border rounded-r-[8px] appearance-none focus:outline-none placeholder-opacity-100"
    type="text"
    placeholder="100"
    autoComplete="off"
    value=""
  />
</div>

<Button className="w-[137px] h-[36px] flex justify-center p-2 gap-2 items-center border-[#A6A6A6] border
font-medium text-sm text-[#E9E9E9]">
  <MdOutlineSettings className='w-[24px] h-[24px]' />
Trade Settings
</Button>
 </div>
 </div>
 
  </TabsList>
  <TabsContent className="w-full h-full overflow-x-hidden" value="NewPairs">
  <NewPairs radyiumScanner={radyiumScanner} />
  </TabsContent>

  <TabsContent className="w-full h-full" value="Trending">
    <Trending trendingRaydium={radyiumScanner}/>
  </TabsContent>

  <TabsContent className="w-full h-full" value="WatchList">
    <Watchlist/>
  </TabsContent>
</Tabs>
    </>
  )
}

export default RaydiumScanner