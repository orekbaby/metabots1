"use client";
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { copyTradeStatus, fetchWalletAnalysis } from '@/utils/apiCalls';
import { storeWalletAnalysis, setLoading, clearLoading } from '@/store/slices/walletSlice';
import { AppDispatch, RootState } from '@/store/index';
import { fetchUserProfile } from '@/store/slices/authSlice';
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { fetchCopyTrade } from "@/utils/apiCalls";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ImSpinner8 } from 'react-icons/im';
import { toast } from '@/hooks/use-toast';
import { fetchCopyTradesAsync } from '@/store/slices/copyTradeSlice';
import { useSearchParams } from "next/navigation";

const CopyWallet = () => {
  const searchParams = useSearchParams();
  const [walletAddress, setWalletAddress] = useState('');
  const [walletLabel, setWalletLabel] = useState('');
  const walletAddressParam = searchParams.get("address");
  const walletLabelParam = searchParams.get("label");
  const [expirationTime, setExpirationTime] = useState(72); 
  const [inputTrade, setInputTrade] = useState(0);
  const [isGreaterThan, setIsGreaterThan] = useState(true); 
  const [takeProfit, setTakeProfit] = useState(100); 
  const [maxTradesAllowed, setMaxTradesAllowed] = useState(5); 
  const [ethAmount, setEthAmount] = useState(0.2); 
  const dispatch: AppDispatch = useDispatch();
  const [copiedTradesCount, setCopiedTradesCount] = useState<number>(0);
  const { user, authToken } = useSelector((state: RootState) => state.auth);
  const isFormFilled = walletAddress.length >= 20 && walletLabel !== '';
  

  const handleFetchWallet = async () => {
    try {
      if (!user?.token) {
        throw new Error('User token is missing');
      }
  
  
      dispatch(setLoading());
  
      const res = await fetchWalletAnalysis(user?.token, walletAddress, walletLabel);
      // console.log("API data received and stored:", res);
  
      
      dispatch(storeWalletAnalysis(res));
      dispatch(clearLoading());
      if (authToken) { 
        dispatch(fetchUserProfile(authToken));
      }
     
    
    } catch (error) {
      console.error("API request failed:", error);
  
     
      dispatch(clearLoading());
    }
  };

  useEffect(() => {
    if (walletAddressParam) setWalletAddress(walletAddressParam);
    if (walletLabelParam) setWalletLabel(walletLabelParam);
  }, [walletAddressParam, walletLabelParam]);
  
  const handleCopyTrade = async () => {
    try {
      if (!user?.token) {
        throw new Error('User token is missing');
      }

      toast({
                description: (
                  <div className="flex items-center">
                   <ImSpinner8 className="w-[20px] h-[20px] animate-spin text-green-500 mr-2" />
                 <span>Processing your transaction...</span>
                 </div>
               ),
                duration: 5000, 
              });
  
      const expirationTimestamp = Date.now() + expirationTime * 60 * 60 * 1000; 
  
     
      const res = await copyTradeStatus(
        user?.token,
        walletAddress,
        walletLabel,
        ethAmount,
        isGreaterThan,
        inputTrade,
        takeProfit,
        walletAddress,
        maxTradesAllowed,
        expirationTimestamp
      );
  
      // console.log("CopyTrade Response:", res); 
  await dispatch(fetchCopyTradesAsync({ token: user?.token, userId: user._id }));
    } catch (error) {
      console.error('Error during CopyTrade:', error);
     
      toast({
        description: "Copy Trade Failed",
        variant: "destructive",
      });
    }
  };
 
  
  


  return (
    <div className="w-auto h-[499px] py-4 mt-5 bg-[#0C1623] border-[#1A232F] border px-4 rounded-[16px] overflow-y-auto scrollbar-hide pb-20">
      <div className="flex flex-col items-start">
        <label className="font-normal text-sm" htmlFor="wallet-address">
          Enter Wallet Address To Copy <span className="text-red-500">*</span>
        </label>
        <input
  id="wallet-address"
  className="mb-7 mt-2 text-xs w-full h-[50px] py-[8px] px-[16px] bg-[#17212F] text-[#696A6C] border border-[#212E40] rounded-[6px] font-normal"
  type="text"
  placeholder="871kxZi2PU4HoDB1iA1L9dyMbdJP6z4m3KUob...."
  value={walletAddress}
  onChange={(e) => setWalletAddress(e.target.value)}
  autoComplete="off"
/>


       
    <label className="font-normal text-sm" htmlFor="wallet-label">
      Add Wallet Label <span className="text-red-500">*</span>
        </label>
        <input
          id="wallet-label"
          className="mb-7 mt-2 text-xs w-full h-[50px] py-[8px] px-[16px] bg-[#17212F]  text-[#696A6C] border border-[#212E40] rounded-[6px]"
          type="text"
          placeholder="Enter wallet name"
          value={walletLabel}
          onChange={(e) => setWalletLabel(e.target.value)}
          autoComplete='off'
        />
      </div>
      
 <Accordion className="w-full border-none outline-0" type="single" collapsible>
      <AccordionItem className="w-full border-none" value="1">
        <AccordionTrigger className="flex bg-[#0C1420] h-[40px] w-[396px] items-center pl-3 gap-10 pr-[2%] rounded-lg">
          <h3 className='font-semibold text-base'>Custom Parameters</h3>
        </AccordionTrigger>
        <AccordionContent>
          {/* Expiration Time */}
          <div className="">
            <h5 className='text-xs font-normal pt-5 text-[#B5B6B6]'>Expiration Time</h5>
            <div className="flex justify-center md:justify-between gap-3 items-center mb-5 pt-3">
            {[24, 48, 72].map((hour) => (
          <Button
         key={hour}
         size="sm"
        className={`bg-[#161F2C] text-white text-base font-semi-bol py-2 px-4 rounded-[8px] w-[126px] h-[33px] 
        ${expirationTime === hour ? 'border-2 border-blue-500' : 'border border-transparent'} 
      `}
      onClick={() => setExpirationTime(hour)}
    >
      {hour} Hours
    </Button>
  ))}
</div>

            {/* Input Fields */}
            <label className="font-normal text-sm text-[#707070]">Copy only when this user makes a trade</label>
            <div className="flex items-center relative justify-center pt-2">
       <div className="relative">
    <div className="relative w-[120px] h-[34px]">
      <select
        value={isGreaterThan ? 'greater' : 'less'}
        onChange={(e) => setIsGreaterThan(e.target.value === 'greater')}
        className="block appearance-none w-full h-full text-sm font-medium bg-[#212E40] text-[#E7E7E7] border-[#212E40] px-2 py-[8px] pr-8 rounded-l-[8px] rounded-r-none cursor-pointer focus:outline-none leading-none"
      >
        <option value="greater">Greater than</option>
        <option value="less">Less than</option>
      </select>
      {/* Custom dropdown arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-[#E7E7E7]">
        <RiArrowDropDownLine className="text-base" />
      </div>
    </div>
  </div>

  <input
    className="text-xs w-full h-[38px] py-[8px] px-[16px] bg-[#0C141F] text-[#212E40] border-[#212E40] border rounded-r-[8px]"
    type="number"
    placeholder="0"
    value={inputTrade === 0 ? '' : inputTrade}
    onChange={(e) => {
      const value = e.target.value;
      setInputTrade(value ? Number(value) : 0);
    }}
    autoComplete="off"
  />
</div>



{/* Take Profit */}
<div className="flex items-center mt-2">
  <Button className="w-[105px] text-sm h-[34px] px-2 py-[11px] bg-[#212E40] text-[#CED4DA] border-[#212E40] rounded-l-[8px] rounded-r-none">
    Sell at % profit
  </Button>
  <input
    className="mb-5 text-xs w-full h-[38px] py-[8px] mt-5 px-[16px] bg-[#0C141F] text-[#212E40] border-[#212E40] border rounded-r-[8px]"
    type="number"
    placeholder="100"
    autoComplete='off'
    value={takeProfit === 0 ? '' : takeProfit} 
    onChange={(e) => {
      const value = e.target.value;
      setTakeProfit(value ? Number(value) : 0); 
    }}
  />
</div>



            {/* Max Trades Allowed */}
            <label className="font-medium text-sm text-[#E0E0E0]" htmlFor="">
              Maximum Number of Trades Allowed
            </label>
            <div className="flex justify-center md:justify-between gap-6 items-center mb-3 pt-3">

            <input
  className="mb-5 text-xs w-[103px] h-[32px] py-[8px] mt-5 px-[16px] bg-[#0C141F] 
  text-[#E0E0E0] border-[#212E40] border rounded-r-[6px]"
  type="number" 
  placeholder="5"
  value={maxTradesAllowed === 0 ? '' : maxTradesAllowed} 
  autoComplete='off'
  onChange={(e) => {
    const value = e.target.value;

    if (value === '') {
      setMaxTradesAllowed(0); 
    } else {
      const numValue = Number(value);
      if (!isNaN(numValue)) { 
        setMaxTradesAllowed(numValue);
      }
    }
  }}
/>
{[1, 3, 5].map((num) => (
  <Button
    key={num}
    size="sm"
    className={`bg-[#161F2C] flex gap-2 text-white text-xs font-normal py-2 px-4 rounded-[8px] w-[81px] h-[32px] 
      ${maxTradesAllowed === num ? 'border-2 border-blue-500' : 'border border-transparent'} 
    `}
    onClick={() => setMaxTradesAllowed(num)} 
  >
    {num}
    <Image
            width={10}
            height={10}
            src="/solanaLogo.svg"
            className="rounded-full"
            alt=""
            />
  </Button>
))}
      </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    
      </Accordion>
    
      
      <label className="font-normal text-sm">Amount Of ETH To Spend From My Wallet</label>
<div className="relative mt-2">
  <input
    className="mb-5 text-xs w-full h-[38px] py-[8px] px-[16px] bg-[#0C141F] text-[#696A6C] border-[#17212F] rounded-[6px]"
    type="number"
    placeholder="0.1"
    value={ethAmount}
    onChange={(e) => setEthAmount(Number(e.target.value))}
    autoComplete='off'
  />
  <div className="flex justify-center md:justify-between gap-6 items-center mb-3 pt-3">
    {[0.2, 0.5, 1, 1.5].map((amount) => (

      <Button
        key={amount}
        size="sm"
        className={`bg-[#161F2C] text-white text-xs font-normal py-2 px-4 rounded-[8px] w-[100px] h-[30px] 
          ${ethAmount === amount ? 'border-2 border-blue-500' : 'border border-transparent'}  // Active border
        `}
        onClick={() => setEthAmount(amount)}
      >
        {amount} ETH

      </Button>
    ))}
  </div>
</div>


<div className="flex  bg-[#0C1623] justify-start items-center pt-5 gap-8">
      <Button
  disabled={!isFormFilled}
  variant="outline"
  className={`w-[59px] h-[22px] md:w-[112px] lg:w-[150px] md:h-[38px] lg:h-[35px] bg-[#0D6EFD] border-none text-white text-[9px] md:text-sm lg:text-base rounded-[4px] md:rounded-lg ${!isFormFilled ? 'opacity-50 cursor-not-allowed' : ''}`}
  onClick={handleCopyTrade}
>
  Copy Trade
</Button>

        <Button
          disabled={!isFormFilled || user?.analysisQueries <= 0}
          onClick={handleFetchWallet}
          className={`bg-[#0d0d0d] border-white border text-white px-4 py-2 rounded-md ${!isFormFilled || user?.queriesLeft <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Analyze Wallet
        </Button>
      </div>
      
{user && (
 <div className="items-end flex justify-end pt-3 fixed bottom-0 right-[63%]">
     
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
