"use client";
import React, { FC, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyTrading from "@/components/copyTrades/CopyTrading";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCopyTradesAsync } from '@/store/slices/copyTradeSlice';
import { AppDispatch, RootState } from '@/store';
import { BsFillExclamationCircleFill } from "react-icons/bs";
import SmartWalletTabs from "./copyTrades/SmartWalletTabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import CopyTradeTabs from "@/components/CopyTradeTabs";
import { fetchCopyTrade } from "@/utils/apiCalls";
import { CopyTradeData } from "@/utils/types";
import { toast } from "@/hooks/use-toast";
interface CopyTabsProps{
  handleCopy:any
  settingsData:any
}

const CopyTabs:FC<CopyTabsProps> = ({handleCopy, settingsData}) => {
  
  
  const { user } = useSelector((state: RootState) => state.auth);
  const { copyTradeData, status, error } = useSelector((state: RootState) => state.copyTrade);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (user?.token && user?._id) {
      dispatch(fetchCopyTradesAsync({ token: user.token, userId: user._id }));
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (status === 'failed' && error) {
      toast({
        description: error,
        variant: 'destructive',
      });
    }
  }, [status, error]);

  
// console.log("CopyTrade Response:", copyTradeData?.length);
//   console.log("CopyTab-copyTrade Response:", copyTradeData);
  return (
    <>
      <Tabs
        defaultValue="CopyTrade"
        className="w-full md:bg-transparent
         lg:bg-transparent rounded-lg mt-5 md:mt-0 lg:mt-0 px-2"
      >
        <TabsList className="flex  h-[71px] mt-0 mb-0 items-center justify-start bg-[#0C141F] md:bg-transparent lg:bg-[#0A111B]  rounded-lg py-[6px] border-b-transparent md:py-0 lg:py-0 border-[#1A232F] border">
        
          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#AEAEAE]
             text-[12px] md:text-sm lg:text-base border-[#0D6EFD] gap-2 font-semibold"
            value="CopyTrade"
          >
            {" "}
            Copy Trading & Analysis
            <BsFillExclamationCircleFill className="text-[#0D6EFD] text-base hidden md:block lg:block" />
          </TabsTrigger>
          <TabsTrigger
            className="w-fit md:w-fit lg:w-fit font-semibold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#AEAEAE] text-[12px] 
            md:text-sm
             lg:text-base border-[#0D6EFD]"
            value="SmartWalletExplorer"
          >
            Smart Wallet Explorer
          </TabsTrigger>

          <TabsTrigger
            className="hidden w-fit md:w-fit lg:w-fit font-medium focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-[#DADBDD] text-[12px] 
            md:text-sm
             lg:text-sm border-[#0D6EFD]"
            value="PreVettedTraders"
          >
            Pre Vetted Traders
          </TabsTrigger>


          <Dialog>
          <div className="flex justify-end ml-auto items-center cursor-pointer text-sm font-normal border-b 
          border-[#1A232F] text-[#E7E7E7] px-8">
        <DialogTrigger className="border-b border-b-[#1A232F]" >
          Copied Trades
        </DialogTrigger>
       
          <div className="flex items-center justify-center gap-2 mt-4 pb-8">
            <span className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
            <span className="text-white">{copyTradeData?.length}</span>
            </span>
            </div>
      
      </div>
      <DialogContent className="w-full max-w-[1000px] p-5 bg-[#0C1623] h-[400px] border-none">
        <div className="">
          <CopyTradeTabs copyTradeData={copyTradeData}
          handleCopy={handleCopy}
          settingsData={settingsData}
           
          />
          {/* Display the copied trades count with red text and a white circle */}
        
        </div>
      </DialogContent>
    </Dialog>

        </TabsList>
        <TabsContent className="w-full h-full" value="CopyTrade">
          <CopyTrading />
        </TabsContent>

        <TabsContent className="w-full h-full" value="SmartWalletExplorer">
          <SmartWalletTabs />
        </TabsContent>
        <TabsContent className="w-full h-full" value="PreVettedTraders">
          Details coming soon
        </TabsContent>
      </Tabs>
    </>
  );
}

export default CopyTabs;
