"use client"
import React, { FC, useEffect, useState } from 'react'
import { RiMenu5Fill } from 'react-icons/ri'
import Image from 'next/image'
import {IoCopyOutline } from "react-icons/io5";
import { Button } from '../ui/button';
import { FaRegStar, FaSpinner, FaTelegramPlane } from 'react-icons/fa';
import { MdOutlinePeopleOutline } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineGlobal } from "react-icons/ai";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { fetchTokenData, fetchTooltipData, fetchTradeData } from '@/utils/apiCalls';
import { IoIosWarning } from 'react-icons/io'
import { LatestData, TooltipData } from '@/utils/types'
import FreshMintedFilter from '../FreshMintedFilter'
import SoonToMoonFilter from '../SoonToMoonFilter';
import NewlyGraduatedDexFilter from '../NewlyGraduatedDexFilter';
import { useFastBuy } from "@/context/FastBuyContext";
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '@/store/slices/watchListSlice';
import { toast } from '@/hooks/use-toast';
import Link from 'next/link';
import { RootState } from '@/store';
import { useWalletContext } from '@/context/WalletContext';


interface AllProps{
  freshMinted:LatestData[];
  moon:LatestData[];
  dex:LatestData[];
  setFreshMinted: (data: LatestData[]) => void;
  setMoon: (data: LatestData[]) => void;
  setDexData: (data: LatestData[]) => void;
 
}

const All:FC<AllProps> = ({freshMinted, moon, dex, setFreshMinted, setMoon, setDexData}) => {
  const { selectedWallet, setSelectedWallet } = useWalletContext();
  const { user } = useSelector((state: RootState) => state.auth);
  const { fastBuyValue, setFastBuyValue } = useFastBuy();
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const [hoveredTokenAddress, setHoveredTokenAddress] = useState("");
  const [hoveredDeployerAddress, setHoveredDeployerAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFastBuyValue(event.target.value); 
  };

const formatNumber = (num: number | null | undefined): string => {
  if (num == null || isNaN(num) || typeof num !== 'number') return 'N/A'; 

  let formattedNum = num.toFixed(1);

  if (num >= 1_000_000) {
    formattedNum = (num / 1_000_000).toFixed(1) + 'M'; 
  } else if (num >= 1_000) {
    formattedNum = (num / 1_000).toFixed(1) + 'K'; 
  }

  return formattedNum;
};

const handleCopy = (tokenAddress:string) => {
  if (!tokenAddress) return; 
  navigator.clipboard.writeText(tokenAddress); 
  toast({
    title: "Copied to clipboard!",
    description: `Address: ${tokenAddress.slice(0, 6)}...${tokenAddress.slice(-4)}`,
  });
};

const handleBuyButtonClick = async (tokenAddress: string) => {
  const walletAddress = selectedWallet?.publicAddress; 
  const amount = fastBuyValue; 
  const userToken = user?.token; 

  if (!walletAddress) {
    console.error("Invalid walletAddress:", walletAddress);
    toast({
      title: "Trade Failed",
      description: "No wallet is selected or wallet address is invalid.",
      variant: "destructive",
    });
    return;
  }


  if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
    console.error("Invalid amount:", amount);
    toast({
      title: "Trade Failed",
      description: "Invalid trade amount entered.",
      variant: "destructive",
    });
    return;
  }
  
  try {
    const result = await fetchTradeData(tokenAddress, walletAddress, amount, userToken);
    console.log("Trade completed successfully:", result);
    toast({
      title: "Trade Success",
      description: "Trade executed successfully!",
    });
  } catch (error: any) {
    // Handle and display error
    let errorMessage = error.message || "An unknown error occurred.";
    try {
      const parsedError = JSON.parse(error.message);
      errorMessage = parsedError.message || errorMessage;
    } catch {
      // Ignore parsing errors
    }

    toast({
      title: "Trade Failed",
      description: `Error: ${errorMessage}`,
      variant: "destructive",
    });
    console.error("Failed to execute trade:", errorMessage);
  }
};






const handleStarClick = async (tokenAddress: string) => {
  if (!tokenAddress) {
    console.error("Invalid token address:", tokenAddress);
    return;
  }

  try {
    const data: LatestData = await fetchTokenData(tokenAddress);
    if (data && data.token && data.token.mint) { 
      dispatch(addToken(data)); 
      toast({
        description: 'Token added to Watchlist!',
      });
    } else {
      console.error("Fetched data does not have a valid token structure:", data);
      toast({
        description: 'Failed to add token to Watchlist. Invalid data received.',
        variant: 'destructive',
      });
    }
  } catch (error) {
    console.error('Error adding token to watchlist:', error);
    toast({
      description: 'An error occurred while adding the token to the Watchlist.',
      variant: 'destructive',
    });
  }
};





useEffect(() => {
  const getTooltipData = async () => {
    if (hoveredTokenAddress && hoveredDeployerAddress) {
      setLoading(true); 
      const data = await fetchTooltipData(hoveredTokenAddress, hoveredDeployerAddress);
      setTooltipData(data);
      setLoading(false); 
    }
  };

  getTooltipData();
}, [hoveredTokenAddress, hoveredDeployerAddress]);





const formatTimeDifference = (timestamp: number) => {
  const now = Date.now();
  const differenceInSeconds = Math.floor((now - timestamp) / 1000);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} secs ago`;
  } else if (differenceInSeconds < 3600) {
    const minutes = Math.floor(differenceInSeconds / 60);
    return `${minutes} minutes ago`;
  } else if (differenceInSeconds < 86400) {
    const hours = Math.floor(differenceInSeconds / 3600);
    return `${hours} hours ago`;
  } else {
    const days = Math.floor(differenceInSeconds / 86400);
    return `${days} days ago`;
  }
};

  const sortedFreshMinted = [...freshMinted]?.sort((a, b) => 
    Number(a?.pools?.[0]?.createdAt) - Number(b?.pools?.[0]?.createdAt)
  
  ).reverse();

  const sortedMoon = [...moon]?.sort((a, b) => 
    Number(a?.pools?.[0]?.lastUpdated) - Number(b?.pools?.[0]?.lastUpdated)
  
  ).reverse();


 const sortedDex = [...dex]?.sort((a, b) => 
    Number(a?.pools?.[0]?.lastUpdated) - Number(b?.pools?.[0]?.lastUpdated)
  
  ).reverse(); 
  
 
  console.log({freshMinted, sortedFreshMinted,})

  return (
    <>
      <div className="pt-5">
      <div className="flex justify-between gap-4">
      <div className="w-full md:w-1/3 h-[754px] overflow-y-auto scrollbar-hide bg-[#0C1623] border-2 border-[#1A232F] rounded-lg  text-white px-3" >
          <div className="bg-[#0C1420] h-[58px] border-b py-3 border-[#1A232F] flex justify-between items-center">
          <h2 className="text-sm font-bold mb-4 px-3 ">Fresh Minted</h2>
          <FreshMintedFilter freshMintedData={freshMinted} setFreshMinted={setFreshMinted} />
          </div>
         
          <div className="px-6 py-3 h-[350px] pb-20 overflow-y-auto scrollbar-hide">
  <div className="flex flex-col items-center gap-4"> 
  {sortedFreshMinted?.map((item, index) => (
      <div
        key={index}
        className="bg-[#0C141F] grid grid-cols-[72px_1fr] items-start gap-0 pt-2 pb-6 px-2 border-[#1A232F] border w-[345px] overflow-y-auto scrollbar-hide h-[160px] rounded-lg"
      >
      
        <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center'>
  {item?.token?.image ? (
    <Image
      width={50}
      height={50}
      alt={item?.token?.name || 'Token'}
      className='rounded-full object-cover aspect-square object-fit'
      src={item?.token?.image}
    />
  ) : (
    <div className='w-[50px] h-[50px] rounded-full bg-[#0A1019] border-white flex items-center justify-center text-white font-bold'>
      {item?.token?.name?.substring(0, 3).toUpperCase()}
    </div>
  )}
</div>
<div className="grid grid-rows-2 gap-4">
        <div className="flex justify-between items-center">
         
          <Link href={`/sol/${item?.token?.mint}`} prefetch={false}>
          <div className="flex gap-2 items-center">
  <p className="text-sm font-bold">
    {item?.token?.name ? item.token.name.substring(0, 4) : 'N/A'} 
  </p>
  <div className="flex gap-1 items-center">
    <p className="font-bold text-base">
      ({item?.token?.symbol ? item.token.symbol.substring(0, 4) : 'N/A'}) 
    </p>
    <IoCopyOutline  onClick={() => handleCopy(item?.token?.mint)} />
  </div>
  
  <p className="text-[#AEAEAE] text-[12px] font-normal">{formatTimeDifference(Number(item?.pools?.[0]?.createdAt))}</p>
</div>
</Link>
 <div className="flex items-center w-[85px] h-[29px] relative">
    <div className="relative w-[35px] h-full">
    {/* <Image  
      width={8}
      height={8}
      alt="sol-img"
      src="/solanaLogo.svg"
      className="absolute left-1.5 top-1/2 transform -translate-y-1/2"
    /> */}
    <input
      className="text-xs w-full h-full pl-2 bg-[#0C141F]  placeholder text-[#E7E7E7] border-[#212E40] border rounded-l-[8px] appearance-none focus:outline-none placeholder-opacity-100"
     placeholder="5"
      autoComplete="off"
      value={fastBuyValue}
      onChange={handleChange} 
    />
  </div>
  
  <Button className="w-[50px] flex justify-center items-center text-[11px] h-full px-4 py-[11px] bg-[#0A53BE] text-white border-[#22334B] rounded-r-[8px] rounded-l-none"  onClick={() => handleBuyButtonClick(item?.token?.mint)}>
    Fast Buy
  </Button>
    </div>
        </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
            <FaRegStar
            className='text-[#656565] w-[17.12px] h-[16.32px]'
            onClick={() => handleStarClick(item?.token?.mint)}
          />
            <p className="text-[10.98px] font-medium">
  MCap: 
  <span className='font-normal text-[10.98px] text-[#A7A7A7]'>
    ${formatNumber(item?.pools[0]?.marketCap?.usd)}
  </span>
</p>
<div className="flex gap-1 items-center">
  <p className="text-[10.98px] font-medium">
    Vol: 
    <span className='font-normal text-[10.98px] text-[#A7A7A7]'>
      {item?.pools[0]?.txns?.volume}
    </span>
  </p>
</div>
</div>
<div className="flex items-center w-full justify-end">
       <TooltipProvider>
           <Tooltip>
        <TooltipTrigger
          onMouseEnter={() => {
            if (item?.pools[0]?.tokenAddress && item?.pools[0]?.deployer) {
              setHoveredTokenAddress(item.pools[0].tokenAddress);
              setHoveredDeployerAddress(item.pools[0].deployer);
            }
          }}
        >
          <Button className="w-[112px] flex justify-center gap-1 items-center text-[11px] h-[19px] px-2 py-4 border-[#22334B] rounded-[24px] text-[#B5B6B6]">
            <MdOutlinePeopleOutline className="w-[18px] h-[18px] text-[#656565]" />
            <p className="border-b border-[#212E40]">Holder Analysis</p>
          </Button>
        </TooltipTrigger>
       
       <TooltipContent className="w-[270px] h-auto bg-[#0C1623] border-[#1A232F] p-4 rounded-md">
        {loading ? (
          <>
           <div className="w-[270px] h-[250px] bg-[#0C1623] border-[#1A232F] flex flex-col justify-center gap-2 items-center" >
      <h5 className="text-sm font-semibold text-white mb-1">Fetching Holder Analysis...</h5>
      <div className="flex justify-center items-center h-full">
        <FaSpinner className="animate-spin text-base" /> {/* Centered Spinner */}
        </div>
      </div>
         </>
          ) : (
            tooltipData && (
              <div className="flex flex-col space-y-1 text-xs text-white">
                <p className="font-medium text-[12px] text-[#B3B5B8] mb-2">
                  Top 10 holders own more than <span className='text-red-500'> {Math.round(tooltipData?.results?.devPercentage ?? 0)}%</span> of the total supply
                </p>
                <div className="flex items-center">
                  <span className="font-normal text-[10px] w-[140px]">Total number of holders:</span>
                  <span className="font-normal text-[10px]">{tooltipData?.results?.totalHolders}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-normal text-[10px] w-[140px]">Devs total holdings:</span>
                  <span className="text-green-500 text-[10px]">
  {Math.round(tooltipData?.results?.devPercentage ?? 0)}%
</span>

                </div>
                <div className="flex items-center">
                  <span className="font-normal text-[10px] w-[140px]">Largest Holder:</span>
                  <span className="text-red-500 text-[10px]">{tooltipData?.results?.top10Percentage.toFixed(4)}%</span>
                </div>
              </div>
            )
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
          </div>
            </div>
             </div>
        <div className="flex gap-3 items-center border-t border-[#1A232F] pt-4 pb-2">
         
          <div className="flex items-center gap-2">
  <div className="relative w-[72px] h-[9px] bg-[#1B2B3C] rounded-[24px] overflow-hidden">
  
    <div
      className="absolute left-0 top-0 h-full bg-[#0D6EFD] rounded-[24px]"
      style={{
        width: `${
          item?.token?.createdOn === "https://pump.fun"
            ? Math.min((item?.pools[0]?.marketCap?.usd / 69000) * 100, 100)
            : Math.min((item?.pools[0]?.marketCap?.quote / 500) * 100, 100)
        }%`
      }}
    ></div>
    
   
    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[7px] font-medium text-white">
      {
        item?.token?.createdOn === "https://pump.fun"
          ? `${Math.round(
              (item?.pools[0]?.marketCap?.usd / 69000) * 100 > 100
                ? 100
                : (item?.pools[0]?.marketCap?.usd / 69000) * 100
            )}%`
          : `${Math.round(
              (item?.pools[0]?.marketCap?.quote / 500) * 100 > 100
                ? 100
                : (item?.pools[0]?.marketCap?.quote / 500) * 100
            )}%`
      }
    </span>
  </div>
</div>


<div className="flex gap-2 items-center">
  {item?.token?.telegram || item?.token?.twitter || item?.token?.website ? (
    <div className="flex gap-2">
      {item?.token?.telegram ? (
        <a href={item.token.telegram} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-[#37ADF3] flex justify-center items-center">
          <FaTelegramPlane className="w-[13px] h-[13px] text-white" />
        </a>
      ) : null}

      {item?.token?.twitter ? (
        <a href={item.token.twitter} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-black flex justify-center items-center">
          <FaXTwitter className="w-[13px] h-[13px] text-[#8D8D8D]" />
        </a>
      ) : null}

      {item?.token?.website ? (
        <a href={item.token.website} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] flex justify-center items-center">
          <AiOutlineGlobal className="w-[18px] h-[18px] text-white" />
        </a>
      ) : null}
    </div>
  ) : (
    <div className="flex gap-2 items-center justify-center w-[100px]">
      <IoIosWarning className="text-[11px] text-[#FFCC00] w-[26px] h-[26px]" />
      <p className="font-medium text-[11px]">No Socials</p>
    </div>
  )}
</div>
</div>

</div>
))}
   </div>
  </div>
  </div>
   

<div className="w-full md:w-1/3 h-[754px] overflow-y-auto scrollbar-hide bg-[#0C1623] border-2 border-[#1A232F] rounded-lg  text-white px-3"
        >
          <div className="bg-[#0C1420] h-[58px] border-bpy-3 border-[#1A232F] flex justify-between items-center">
          <h2 className="text-sm font-bold mb-4 px-3 ">SOON-TO-MOON</h2>
         <SoonToMoonFilter moonData={moon} setMoon={setMoon} />
          </div>
          <div className="px-6 py-3 h-[350px] pb-20 overflow-y-auto scrollbar-hide">
  <div className="flex flex-col items-center gap-4"> 
    {sortedMoon?.map((item, index) => (
        <div
        key={index}
        className="bg-[#0C141F] grid grid-cols-[72px_1fr] items-start gap-0 pt-2 pb-6 px-2 border-[#1A232F] border w-[345px] overflow-y-auto scrollbar-hide h-[160px] rounded-lg"
      >
        {/* Image Column */}
        <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center'>
  {item?.token?.image ? (
    <Image
      width={50}
      height={50}
      alt={item?.token?.name || 'Token'}
      className='rounded-full object-cover'
      src={item?.token?.image}
    />
  ) : (
    <div className='w-[50px] h-[50px] rounded-full bg-[#0A1019] border-white flex items-center justify-center text-white font-bold'>
      {item?.token?.name?.substring(0, 3).toUpperCase()}
    </div>
  )}
</div>


        
        <div className="grid grid-rows-2 gap-4">
        
          <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
  <p className="text-sm font-bold">
    {item?.token?.name ? item.token.name.substring(0, 4) : 'N/A'} 
  </p>
  <div className="flex gap-1 items-center">
    <p className="font-bold text-base">
      ({item?.token?.symbol ? item.token.symbol.substring(0, 4) : 'N/A'}) 
    </p>
    <IoCopyOutline  onClick={() => handleCopy(item?.token?.mint)} />
  </div>
  <p className="text-[#AEAEAE] text-[12px] font-normal">{formatTimeDifference(item?.pools?.[0]?.lastUpdated)}</p>
</div>


<div className="flex items-center w-[85px] h-[29px] relative">
      <div className="relative w-[35px] h-full">
        
        <input
          className="text-xs w-full h-full pl-2 pr-2 bg-[#0C141F] text-[#E7E7E7]placeholder-text-[#FFFFFF] border-[#212E40] border rounded-l-[8px] appearance-none focus:outline-none placeholder-opacity-100"
          placeholder="5"
          autoComplete="off"
         value={fastBuyValue}
        onChange={handleChange}  
        />
      </div>
      <Button className="w-[50px] flex justify-center items-center text-[11px] h-full px-4 py-[11px] bg-[#0A53BE] text-white border-[#22334B] rounded-r-[8px] rounded-l-none" onClick={() => handleBuyButtonClick(item?.token?.mint)}>
        Fast Buy
      </Button>
    </div>

          </div>
        
          {/* Row 2 */}
          
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
            <FaRegStar
            className='text-[#656565] w-[17.12px] h-[16.32px] cursor pointer'
            onClick={() => handleStarClick(item?.token?.mint)}
          />
          {/* <FaStar className='text-white w-[17.12px] h-[16.32px]' /> */}
            <p className="text-[10.98px] font-medium">
  MCap: 
  <span className='font-normal text-[10.98px] text-[#A7A7A7]'>
    ${formatNumber(item?.pools[0]?.marketCap?.usd)}
  </span>
</p>
<div className="flex gap-1 items-center">
  <p className="text-[10.98px] font-medium">
    Vol: 
    <span className='font-normal text-[10.98px] text-[#A7A7A7]'>
      {formatNumber(item?.pools[0]?.txns?.volume)}
    </span>
  </p>
</div>
             </div>

            <div className="flex items-center w-full justify-end">
            <TooltipProvider>
  <Tooltip>
    <TooltipTrigger
      onMouseEnter={() => {
        if (item?.pools[0]?.tokenAddress && item?.pools[0]?.deployer) {
          setHoveredTokenAddress(item.pools[0].tokenAddress);
          setHoveredDeployerAddress(item.pools[0].deployer);
        }
      }}
    >
      <Button className="w-[112px] flex justify-center gap-1 items-center text-[11px] h-[19px] px-2 py-4 border-[#22334B] rounded-[24px] text-[#B5B6B6]">
        <MdOutlinePeopleOutline className="w-[18px] h-[18px] text-[#656565]" />
        <p className="border-b border-[#212E40]">Holder Analysis</p>
      </Button>
    </TooltipTrigger>
  
    <TooltipContent className="w-[270px] h-auto bg-[#0C1623] border-[#1A232F] p-4 rounded-md">
  {loading ? (
    <>
       <div className="w-[270px] h-auto bg-[#0C1623] border-[#1A232F] flex flex-col justify-center gap-2 items-center" >
      <h5 className="text-sm font-semibold text-white mb-1">Fetching Holder Analysis...</h5>
      <div className="flex justify-center items-center h-full">
        <FaSpinner className="animate-spin h-5 w-5" /> {/* Centered Spinner */}
        </div>
      </div>
    </>
  ) : (
    tooltipData && (
      <>
        <h5 className="text-sm font-semibold text-white mb-1">Top 10 Holders</h5>
        <p className="font-medium text-[12px] text-[#B3B5B8] mb-2">
          Top 10 holders own more than <span className="text-red-500">{Math.round(tooltipData?.results?.devPercentage ?? 0)}%</span> of the total supply
        </p>

        <div className="flex flex-col space-y-1 text-xs text-white">
          <div className="flex items-center">
            <span className="font-normal text-[10px] w-[140px]">Total number of holders:</span>
            <span className="font-normal text-[10px]">{tooltipData.results.totalHolders.toFixed(4)}%</span>
          </div>
          <div className="flex items-center">
            <span className="font-normal text-[10px] w-[140px]">Devs total holdings:</span>
            <span className="text-green-500 text-[10px]">{tooltipData.results.devPercentage.toFixed(4)}%</span>
          </div>
          <div className="flex items-center">
            <span className="font-normal text-[10px] w-[140px]">Largest Holder:</span>
            <span className="text-red-500 text-[10px]">{tooltipData.results.top10Percentage}%</span>
          </div>
        </div>
      </>
    )
  )}
</TooltipContent>

          
  </Tooltip>
</TooltipProvider>
              </div>
            </div>

           </div>
          {/* put it here */}
          <div className="flex gap-3 items-center border-t border-[#1A232F] pt-4 pb-2">
  <div className="flex items-center gap-2">
    <div className="relative w-[72px] h-[9px] bg-[#1B2B3C] rounded-[24px] overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-[10px] bg-[#0D6EFD] rounded-[24px]"></div>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[7px] font-medium text-white">
      <div className="flex items-center gap-2">
  <div className="relative w-[72px] h-[9px] bg-[#1B2B3C] rounded-[24px] overflow-hidden">
  
    <div
      className="absolute left-0 top-0 h-full bg-[#0D6EFD] rounded-[24px]"
      style={{
        width: `${
          item?.token?.createdOn === "https://pump.fun"
            ? Math.min((item?.pools[0]?.marketCap?.usd / 69000) * 100, 100)
            : Math.min((item?.pools[0]?.marketCap?.quote / 500) * 100, 100)
        }%`
      }}
    ></div>
    
   
    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[7px] font-medium text-white">
      {
        item?.token?.createdOn === "https://pump.fun"
          ? `${Math.round(
              (item?.pools[0]?.marketCap?.usd / 69000) * 100 > 100
                ? 100
                : (item?.pools[0]?.marketCap?.usd / 69000) * 100
            )}%`
          : `${Math.round(
              (item?.pools[0]?.marketCap?.quote / 500) * 100 > 100
                ? 100
                : (item?.pools[0]?.marketCap?.quote / 500) * 100
            )}%`
      }
    </span>
  </div>
</div>
      
      </span>
    </div>
  </div>

  <div className="flex gap-2 items-center">
  {item?.token?.telegram || item?.token?.twitter || item?.token?.website ? (
    <div className="flex gap-2">
      {item?.token?.telegram ? (
        <a href={item.token.telegram} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-[#37ADF3] flex justify-center items-center">
          <FaTelegramPlane className="w-[13px] h-[13px] text-white" />
        </a>
      ) : null}

      {item?.token?.twitter ? (
        <a href={item.token.twitter} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-black flex justify-center items-center">
          <FaXTwitter className="w-[13px] h-[13px] text-[#8D8D8D]" />
        </a>
      ) : null}

      {item?.token?.website ? (
        <a href={item.token.website} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] flex justify-center items-center">
          <AiOutlineGlobal className="w-[18px] h-[18px] text-white" />
        </a>
      ) : null}
    </div>
  ) : (
    <div className="flex gap-2 items-center justify-center w-[100px]">
      <IoIosWarning className="text-[11px] text-[#FFCC00] w-[26px] h-[26px]" />
      <p className="font-medium text-[11px]">No Socials</p>
    </div>
  )}
</div>
</div>

         
  </div>
      ))}
       </div>
        </div>
         </div>
         <div className="w-full md:w-1/3 h-[754px] overflow-y-auto scrollbar-hide bg-[#0C1623] border-2 border-[#1A232F] rounded-lg  text-white px-3"
        >
          <div className="bg-[#0C1420] h-[58px] border-bpy-3 border-[#1A232F] flex justify-between items-center">
          <h2 className="text-sm font-bold mb-4 px-3 ">NEWLY GRADUATED TO DEX </h2>
         <NewlyGraduatedDexFilter  dexData={dex} setDexData={setDexData}/>
          </div>
          <div className="px-6 py-3 h-[350px] pb-20 overflow-y-auto scrollbar-hide">
  <div className="flex flex-col items-center gap-4"> 

    {sortedDex?.map((item, index) => (
         <div
        key={index}
         className="bg-[#0C141F] grid grid-cols-[72px_1fr] items-start gap-0 pt-2 pb-6 px-2 border-[#1A232F] border w-[345px] overflow-y-auto scrollbar-hide h-[160px] rounded-lg"
      >
        {/* Image Column */}
        <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center'>
     {item?.token?.image ? (
    <Image
      width={50}
      height={50}
      alt={item?.token?.name || 'Token'}
      className='rounded-full object-cover'
      src={item?.token?.image}
    />
  ) : (
    <div className='w-[50px] h-[50px] rounded-full bg-[#0A1019] border-white flex items-center justify-center text-white font-bold'>
      {item?.token?.name?.substring(0, 3).toUpperCase()}
    </div>
  )}
</div>

<div className="grid grid-rows-2 gap-4">
<div className="flex justify-between items-center">
  <div className="flex gap-2 items-center">
  <p className="text-sm font-bold">
    {item?.token?.name ? item.token.name.substring(0, 4) : 'N/A'} 
  </p>
  <div className="flex gap-1 items-center">
    <p className="font-bold text-base">
      ({item?.token?.symbol ? item.token.symbol.substring(0, 4) : 'N/A'}) 
    </p>
    <IoCopyOutline  onClick={() => handleCopy(item?.token?.mint)} />
  </div>
  <p className="text-[#AEAEAE] text-[12px] font-normal">{formatTimeDifference(item?.pools?.[0]?.lastUpdated)}</p>
</div>

<div className="flex items-center w-[85px] h-[29px] relative">
    <div className="relative w-[35px] h-full">
    {/* <Image  
      width={8}
      height={8}
      alt="sol-img"
      src="/solanaLogo.svg"
      className="absolute left-1.5 top-1/2 transform -translate-y-1/2"
    /> */}
    <input
      className="text-xs w-full h-full pl-2 pr-2 bg-[#0C141F] text-[#E7E7E7] placeholder border-[#212E40] border rounded-l-[8px] appearance-none focus:outline-none placeholder-opacity-100"
     placeholder="5"
      autoComplete="off"
      value={fastBuyValue}
        onChange={handleChange} 
    />
  </div>
  <Button className="w-[50px] flex justify-center items-center text-[11px] h-full px-4 py-[11px] bg-[#0A53BE] text-white border-[#22334B] rounded-r-[8px] rounded-l-none" onClick={() => handleBuyButtonClick(item?.token?.mint)}>
    Fast Buy
  </Button>
</div>

 </div>
         <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
            <FaRegStar
            className='text-[#656565] w-[17.12px] h-[16.32px]'
            onClick={() => handleStarClick(item?.token?.mint)}
          />
            <p className="text-[10.98px] font-medium">
  MCap: 
  <span className='font-normal text-[10.98px] text-[#A7A7A7]'>
    ${formatNumber(item?.pools[0]?.marketCap?.usd)}
  </span>
</p>
<div className="flex gap-1 items-center">
  <p className="text-[10.98px] font-medium">
    Vol: 
    <span className='font-normal text-[10.98px] text-[#A7A7A7]'>
      {formatNumber(item?.pools[0]?.txns?.volume)}
    </span>
  </p>
</div>
             </div>

            <div className="flex items-center w-full justify-end">
            <TooltipProvider>
  <Tooltip>
    <TooltipTrigger
      onMouseEnter={() => {
        if (item?.pools[0]?.tokenAddress && item?.pools[0]?.deployer) {
          setHoveredTokenAddress(item.pools[0].tokenAddress);
          setHoveredDeployerAddress(item.pools[0].deployer);
        }
      }}
    >
      <Button className="w-[112px] flex justify-center gap-1 items-center text-[11px] h-[19px] px-2 py-4 border-[#22334B] rounded-[24px] text-[#B5B6B6]">
        <MdOutlinePeopleOutline className="w-[18px] h-[18px] text-[#656565]" />
        <p className="border-b border-[#212E40]">Holder Analysis</p>
      </Button>
    </TooltipTrigger>
   
    <TooltipContent className="w-[270px] h-auto bg-[#0C1623] border-[#1A232F] p-4 rounded-md">
  {loading ? (
    <>
    <div className="w-[270px] h-[250px] bg-[#0C1623] border-[#1A232F] flex flex-col justify-center gap-2 items-center" >
      <h5 className="text-sm font-semibold text-white mb-1">Fetching Holder Analysis...</h5>
      <div className="flex justify-center items-center h-full">
        <FaSpinner className="animate-spin text-base" /> {/* Centered Spinner */}
        </div>
      </div>
    </>
  ) : (
    <>
      <h5 className="text-sm font-semibold text-white mb-1">Top 10 Holders</h5>
      <p className="font-medium text-[12px] text-[#B3B5B8] mb-2">
        Top 10 holders own more than <span className="text-red-500">{Math.round(tooltipData?.results?.devPercentage ?? 0)}%%</span> of the total supply
      </p>
      {tooltipData && (
        <div className="flex flex-col space-y-1 text-xs text-white">
          <div className="flex items-center">
            <span className="font-normal text-[10px] w-[140px]">Total number of holders:</span>
            <span className="font-normal text-[10px]">{tooltipData.results.totalHolders}</span>
          </div>
          <div className="flex items-center">
            <span className="font-normal text-[10px] w-[140px]">Devs total holdings:</span>
            <span className="text-green-500 text-[10px]">{tooltipData.results.devPercentage.toFixed(4)}%</span>
          </div>
          <div className="flex items-center">
            <span className="font-normal text-[10px] w-[140px]">Largest Holder:</span>
            <span className="text-red-500 text-[10px]">{tooltipData.results.top10Percentage.toFixed(4)}%</span>
          </div>
        </div>
      )}
    </>
  )}
</TooltipContent>

         
  </Tooltip>
</TooltipProvider>
              </div>
            </div>
 
           </div>
          {/* put it here */}
          <div className="flex gap-3 items-center border-t border-[#1A232F] pt-4 pb-2">
  <div className="flex items-center gap-2">
    <div className="relative w-[72px] h-[9px] bg-[#1B2B3C] rounded-[24px] overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-[10px] bg-[#0D6EFD] rounded-[24px]"></div>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[7px] font-medium text-white">
      
      <div className="flex items-center gap-2">
  <div className="relative w-[72px] h-[9px] bg-[#1B2B3C] rounded-[24px] overflow-hidden">
  
    <div
      className="absolute left-0 top-0 h-full bg-[#0D6EFD] rounded-[24px]"
      style={{
        width: `${
          item?.token?.createdOn === "https://pump.fun"
            ? Math.min((item?.pools[0]?.marketCap?.usd / 69000) * 100, 100)
            : Math.min((item?.pools[0]?.marketCap?.quote / 500) * 100, 100)
        }%`
      }}
    ></div>
    
   
    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[7px] font-medium text-white">
      {
        item?.token?.createdOn === "https://pump.fun"
          ? `${Math.round(
              (item?.pools[0]?.marketCap?.usd / 69000) * 100 > 100
                ? 100
                : (item?.pools[0]?.marketCap?.usd / 69000) * 100
            )}%`
          : `${Math.round(
              (item?.pools[0]?.marketCap?.quote / 500) * 100 > 100
                ? 100
                : (item?.pools[0]?.marketCap?.quote / 500) * 100
            )}%`
      }
    </span>
  </div>
</div>
      </span>
    </div>
  </div>

  <div className="flex gap-2 items-center">
  {item?.token?.telegram || item?.token?.twitter  ? (
    <div className="flex gap-2">
      {item?.token?.telegram ? (
        <a href={item.token.telegram} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-[#37ADF3] flex justify-center items-center">
          <FaTelegramPlane className="w-[13px] h-[13px] text-white" />
        </a>
      ) : null}

      {item?.token?.twitter ? (
        <a href={item.token.twitter} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-black flex justify-center items-center">
          <FaXTwitter className="w-[13px] h-[13px] text-[#8D8D8D]" />
        </a>
      ) : null}
</div>
  ) : (
    <div className="flex gap-2 items-center justify-center w-[100px]">
      <IoIosWarning className="text-[11px] text-[#FFCC00] w-[26px] h-[26px]" />
      <p className="font-medium text-[11px]">No Socials</p>
    </div>
  )}
</div>
</div>

         
  </div>
      ))}
    </div>
    </div>
     </div>
    </div>
      </div>
    </>
  )
}

export default All