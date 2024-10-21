"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { fetchWalletAnalysis } from '@/utils/apiCalls';
import { storeWalletAnalysis } from '@/store/slices/walletSlice';
import { RootState } from '@/store/index';
import Cookies from 'js-cookie';
import { fetchUserProfile } from '@/store/slices/authSlice';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const CopyWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletLabel, setWalletLabel] = useState('');
 

  const dispatch = useDispatch();
 
  const { user } = useSelector((state: RootState) => state.auth);
//  console.log("user" ,user)
 

  const isFormFilled = walletAddress !== '' && walletLabel !== '';

  const handleFetchWallet = async () => {
    try {
     
      if (!user?.token) {
        throw new Error('User token is missing');
      }

      const res = await fetchWalletAnalysis(user?.token, walletAddress, walletLabel);
      // const res = await response.json();
      console.log("API data received and stored:", res);

      dispatch(storeWalletAnalysis(res));
       fetchUserProfile(user?.token);

    
} catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <div className="w-auto h-[499px] py-4 mt-5 bg-[#0C1623] border-[#1A232F] border px-4 rounded-[16px] overflow-y-auto scrollbar-hide pb-28">
      <div className="flex flex-col items-start">
        <label className="font-normal text-sm" htmlFor="wallet-address">
          Enter Wallet Address To Copy <span className="text-red-500">*</span>
        </label>
        <input
          id="wallet-address"
          className="mb-7 mt-2 text-xs w-[369px] h-[38px] py-[8px] px-[16px] bg-[#0C141F] text-[#696A6C] border border-[#212E40] rounded-[6px]"
          type="text"
          placeholder="871kxZi2PU4HoDB1iA1L9dyMbdJP6z4m3KUob...."
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />

        <label className="font-normal text-sm" htmlFor="wallet-label">
          Add Wallet Label <span className="text-red-500">*</span>
        </label>
        <input
          id="wallet-label"
          className="mb-7 mt-2 text-xs w-[369px] h-[38px] py-[8px] px-[16px] bg-[#0C141F] text-[#696A6C] border border-[#212E40] rounded-[6px]"
          type="text"
          placeholder="Enter wallet name"
          value={walletLabel}
          onChange={(e) => setWalletLabel(e.target.value)}
        />
      </div>
      <Accordion
        className="w-full border-none outline-0" type="single"   collapsible >
      <AccordionItem className="w-full border-none"
         value="1"
          >
            <AccordionTrigger className="flex items-center gap-10 pr-[10%]">
            <h3 className='font-semibold text-base'>
        Custom Parameters
          </h3>
          
            </AccordionTrigger>
            <AccordionContent>
          <div className="">
            <h5 className='text-sm font-medium text-[#707070]'>Expiration Time</h5>
            <div className="flex justify-center md:justify-between lg:justify-between gap-6 items-center mb-3 active:#0D6EFD pt-3">
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal md:font-normal lg:font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-2 md:py-2 lg:py-2 px-2 md:px-2 lg:px-4 rounded-[8px] w-[100px] h-[30px]"
          >
            24Hours
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-4 rounded-[8px]  w-[100px] h-[30px]"
          >
           48Hours
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-2 md:py-2 lg:py-2 px-2 md:px-2 lg:px-4 rounded-[8px]  w-[100px] h-[30px]"
          >
           72Hours
          </Button>
         
        </div>
        <label className="font-normal text-sm text-[#707070]" htmlFor="">
       Copy only when this user makes a trade
      </label>
      
       <div className="relative">
          <input
            className="mb-5 mt-2 text-xs md:text-base lg:text-base w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="1"
          />
          <Button className="absolute top-2 left-0 w-[57px] md:w-[65px] lg:[100px] text-[10px]  h-[38px] md:h-[43px] lg:h-[43px] px-2 py-[11px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px]">
            Less than
          </Button>
        </div>

        <div className="relative">
          <input
            className="mb-5 mt-2 text-[10px] md:text-base lg:text-base w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] pr-[32px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] text-left md:rounded-[8px] lg:rounded-[8px]"
            type="text"
            placeholder="1"
          />
          <Button className="absolute top-2 left-0 w-[80px] md:w-[65px] lg:w-[100px]  h-[38px] md:h-[43px] lg:h-[43px] px-2 text-left py-[11px] text-[10px] bg-[#212E40] text-[#CED4DA] border-[1px] border-[#212E40] rounded-r-[6px] md:rounded-r-[8px] lg:rounded-r-[8px]">
          Sell at % profit
          </Button>
        </div>
          </div>
            </AccordionContent>
          </AccordionItem>
    
      </Accordion>
      <label className="font-normal text-sm" htmlFor="">
            Amount Of ETH To Spend From My Wallet
      </label>
      <input
        className="mb-5 mt-2 text-xs w-[369px] h-[38px] md:h-[54px] lg:h-[54px] py-[8px] px-[16px] bg-[#0C141F] text-[#696A6C] border border-[#17212F] font-normal rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
        type="text"
        placeholder="0.0"
      />
      <div className="flex justify-center md:justify-between lg:justify-between gap-6 items-center mb-3 active:#0D6EFD">
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal md:font-normal lg:font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px] w-[80px] h-[24px]"
          >
            0.2ETH
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px]  w-[80px] h-[24px]"
          >
           0.5ETH
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px]  w-[80px] h-[24px]"
          >
           0.10ETH
          </Button>
          <Button
            size="sm"
            className="bg-[#161F2C] text-white text-xs md:text-sm lg:text-xs
               font-normal leading-[14.64px] md:leading-[20.8px] lg:leading-[20.8px] py-1 md:py-2 lg:py-2 px-2 md:px-2 lg:px-2 rounded-[8px]  w-[80px] h-[24px]"
          >
           0.25ETH
          </Button>
        </div>

      <div className="flex justify-center items-center pt-5 gap-8">
        <Button
          variant="outline"
          className="w-[59px] h-[22px] md:w-[112px] lg:w-[150px] md:h-[38px] lg:h-[35px] bg-[#0D6EFD] border-none text-[white] font-normal text-[9px] md:text-sm lg:text-base rounded-[4px] md:rounded-lg lg:rounded-lg"
        >
          Copy Trade
        </Button>

        <Button
          disabled={!isFormFilled || user?.queriesLeft <= 0}
          onClick={handleFetchWallet}
          className={`bg-[#0d0d0d] border-white border text-white px-4 py-2 rounded-md ${!isFormFilled || user?.queriesLeft <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Analyze Wallet
        </Button>
      </div>
{user && (
 <div className="items-end flex justify-end pt-3">
     
 {/* Display number of queries left */}
 <span className="flex items-center justify-center bg-transparent text-[#B5B6B6] text-[9px] md:text-sm lg:text-xs font-normal">
   {user?.analysisQueries <= 0 ? 0 : user?.analysisQueries}/5 Queries Left 
 </span>
</div>
)}
      </div>
  );
};

export default CopyWallet;
