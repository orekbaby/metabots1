"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { copyTradeStatus, fetchWalletAnalysis } from '@/utils/apiCalls';
import { storeWalletAnalysis, setLoading, clearLoading } from '@/store/slices/walletSlice';
import { RootState } from '@/store/index';
import { fetchUserProfile } from '@/store/slices/authSlice';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ImSpinner8 } from 'react-icons/im';

const CopyWallet = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletLabel, setWalletLabel] = useState('');
  const [expirationTime, setExpirationTime] = useState(72); 
  const [inputTrade, setInputTrade] = useState(0);
  const [isGreaterThan, setIsGreaterThan] = useState(true); 
  const [takeProfit, setTakeProfit] = useState(100); 
  const [maxTradesAllowed, setMaxTradesAllowed] = useState(5); 
  const [ethAmount, setEthAmount] = useState(0.1); 
  

  const dispatch = useDispatch();
 
  const { user } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state.wallet);
//  console.log("user" ,user)
 

  const isFormFilled = walletAddress !== '' && walletLabel !== '';

  const handleFetchWallet = async () => {
    try {
      if (!user?.token) {
        throw new Error('User token is missing');
      }
  
      // Set loading to true
      dispatch(setLoading());
  
      const res = await fetchWalletAnalysis(user?.token, walletAddress, walletLabel);
      console.log("API data received and stored:", res);
  
      
      dispatch(storeWalletAnalysis(res));
      dispatch(clearLoading());
  
     
      fetchUserProfile(user?.token);
    } catch (error) {
      console.error("API request failed:", error);
  
     
      dispatch(clearLoading());
    }
  };
  

 
const handleCopyTrade = async () => {
  try {
   
    if (!user?.token) {
      throw new Error('User token is missing');
    }

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

   
    console.log("CopyTrade Response:", res);
  } catch (error) {
    console.error('Error during CopyTrade:', error);
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
      {loading ? (
  <ImSpinner8 className="w-[60px] h-[60px] absolute top-[70%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 animate-spin-fast text-[#707070]" />
) : (
 <Accordion className="w-full border-none outline-0" type="single" collapsible>
      <AccordionItem className="w-full border-none" value="1">
        <AccordionTrigger className="flex items-center gap-10 pr-[10%]">
          <h3 className='font-semibold text-base'>Custom Parameters</h3>
        </AccordionTrigger>
        <AccordionContent>
          {/* Expiration Time */}
          <div className="">
            <h5 className='text-sm font-medium text-[#707070]'>Expiration Time</h5>
            <div className="flex justify-center md:justify-between gap-6 items-center mb-3 pt-3">
  {[24, 48, 72].map((hour) => (
    <Button
      key={hour}
      size="sm"
      className={`bg-[#161F2C] text-white text-xs font-normal py-2 px-4 rounded-[8px] w-[100px] h-[30px] 
        ${expirationTime === hour ? 'border-2 border-blue-500' : 'border border-transparent'} // Active border
      `}
      onClick={() => setExpirationTime(hour)}
    >
      {hour} Hours
    </Button>
  ))}
</div>

            {/* Input Fields */}
            <label className="font-normal text-sm text-[#707070]">Copy only when this user makes a trade</label>
            <div className="flex items-center mt-2 relative justify-center">
  <Button
    className="w-[57px] text-[10px] h-[38px] px-2 py-[11px] bg-[#212E40] text-[#CED4DA] border-[#212E40] rounded-r-[6px]"
    onClick={() => setIsGreaterThan(!isGreaterThan)}
  >
    {isGreaterThan ? 'Greater than' : 'Less than'}
  </Button>
  <input
    className="mb-5 text-xs w-full h-[38px] mt-5 py-[8px] px-[16px] bg-[#0C141F] text-[#212E40] border-[#212E40] border rounded-l-[6px]"
    type="number"
    placeholder="0"
    value={inputTrade === 0 ? '' : inputTrade} // Display empty if 0
    onChange={(e) => {
      const value = e.target.value;
      setInputTrade(value ? Number(value) : 0); // Convert to number or set to 0
    }}
  />
</div>

{/* Take Profit */}
<div className="flex items-center mt-2">
  <Button className="w-[80px] text-[10px] h-[38px] px-2 py-[11px] bg-[#212E40] text-[#CED4DA] border-[#212E40] rounded-l-[6px]">
    Sell at % profit
  </Button>
  <input
    className="mb-5 text-xs w-full h-[38px] py-[8px] mt-5 px-[16px] bg-[#0C141F] text-[#212E40] border-[#212E40] border rounded-r-[6px]"
    type="number"
    placeholder="100"
    value={takeProfit === 0 ? '' : takeProfit} // Display empty if 0
    onChange={(e) => {
      const value = e.target.value;
      setTakeProfit(value ? Number(value) : 0); // Convert to number or set to 0
    }}
  />
</div>



            {/* Max Trades Allowed */}
            <label className="font-normal text-sm" htmlFor="">
              Maximum Number of Trades Allowed
            </label>
            <div className="flex justify-center md:justify-between gap-6 items-center mb-3 pt-3">

            <input
  className="mb-5 text-xs w-1/2 h-[38px] py-[8px] mt-5 px-[16px] bg-[#0C141F] text-[#212E40] border-[#212E40] border rounded-r-[6px]"
  type="number" // Keep the type as "number"
  placeholder="5"
  value={maxTradesAllowed === 0 ? '' : maxTradesAllowed} // Display an empty string if maxTradesAllowed is 0
  onChange={(e) => {
    const value = e.target.value;

    if (value === '') {
      setMaxTradesAllowed(0); // Set to 0 if input is empty
    } else {
      const numValue = Number(value);
      if (!isNaN(numValue)) { // Only update state if the value is a valid number
        setMaxTradesAllowed(numValue);
      }
    }
  }}
/>
{[5, 10].map((num) => (
  <Button
    key={num}
    size="sm"
    className={`bg-[#161F2C] text-white text-xs font-normal py-2 px-4 rounded-[8px] w-[100px] h-[30px] 
      ${maxTradesAllowed === num ? 'border-2 border-blue-500' : 'border border-transparent'}  // Add border style
    `}
    onClick={() => setMaxTradesAllowed(num)} // Set as number
  >
    {num}
  </Button>
))}



            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    
      </Accordion>
      )}
      
      <label className="font-normal text-sm">Amount Of ETH To Spend From My Wallet</label>
<div className="relative mt-2">
  <input
    className="mb-5 text-xs w-full h-[38px] py-[8px] px-[16px] bg-[#0C141F] text-[#696A6C] border-[#17212F] rounded-[6px]"
    type="number"
    placeholder="0.1"
    value={ethAmount}
    onChange={(e) => setEthAmount(Number(e.target.value))}
  />
  <div className="flex justify-center md:justify-between gap-6 items-center mb-3 pt-3">
    {[0.2, 0.5, 0.1, 0.25].map((amount) => (
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



      <div className="flex justify-center items-center pt-5 gap-8">
      <Button
  disabled={!isFormFilled}
  variant="outline"
  className={`w-[59px] h-[22px] md:w-[112px] lg:w-[150px] md:h-[38px] lg:h-[35px] bg-[#0D6EFD] border-none text-white text-[9px] md:text-sm lg:text-base rounded-[4px] md:rounded-lg ${!isFormFilled ? 'opacity-50 cursor-not-allowed' : ''}`}
  onClick={handleCopyTrade}
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
