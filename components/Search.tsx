import React, { FC, useState } from 'react';
import { FaRegStar, FaSearch, FaSpinner, FaTelegramPlane } from 'react-icons/fa';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { fetchTokenData } from '@/utils/apiCalls';
import { LatestData, TooltipData } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import { IoCopyOutline } from 'react-icons/io5';
import { IoIosWarning } from 'react-icons/io';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlinePeopleOutline } from 'react-icons/md';
import { Button } from './ui/button';
import { AiOutlineEye } from "react-icons/ai";
import { toast } from '@/hooks/use-toast';
import { useDispatch } from 'react-redux';
import { addToken } from '@/store/slices/watchListSlice';
interface SearchProps {
  
 
  fastBuyValue: string;
  setFastBuyValue: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setHoveredTokenAddress: React.Dispatch<React.SetStateAction<string>>;
  setHoveredDeployerAddress: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  
}


const Search:FC<SearchProps> = ({  fastBuyValue,  handleChange, setHoveredTokenAddress, setHoveredDeployerAddress, loading}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<LatestData[]>([]);
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
    const dispatch = useDispatch();
  // Update search term
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Fetch token data on search
  const handleSearch = async (address: string | null = searchTerm) => {
    if (!address) return; 
  
    try {
      const data = await fetchTokenData(address);
      if (data) {
        setSearchResults([data]);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      setSearchResults([]);
      console.error('Error fetching token data:', error);
    }
  };
  
  


  const formatPercentage = (percentage: number | null | undefined): string => {
    if (percentage == null || isNaN(percentage)) return 'N/A';
  
     const roundedPercentage = Math.round(percentage);
  
    return `${roundedPercentage}%`;
  };
  // Clear search term and results
  const handleClear = () => {
    setSearchTerm('');
    setSearchResults([]);
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

  const formatTimeDifference = (timestamp:number) => {
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
   }


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
  

  return (
    <div className="relative w-full">
      <Dialog>
        {/* Input trigger */}
        <DialogTrigger>
          <div className="relative w-full">
            <input
              type="text"
              // value={searchTerm}
              // onChange={handleSearchChange}
              placeholder="Search by Token address"
              className="w-full px-4 py-2 pr-10 border bg-[#0C1623] border-[#212E40] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              // onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
            />
            <FaSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              // onClick={handleSearch}
            />
          </div>
        </DialogTrigger>

        {/* Modal content */}
        <DialogContent className="bg-[#0C1623] border-[#212E40] max-w-[500px] h-auto">
          <div className="">
            {/* Input field in modal */}
             <div className="flex items-center justify-between w-full pb-3">
  {/* Left section: Search icon and input */}
  <div className="flex items-center gap-2  pb-2">
    <FaSearch className="text-gray-500 w-[24px] h-[24px]" />
    <input
  type="text"
  placeholder="Search by Token address"
  className="text-sm bg-transparent font-medium italic focus:outline-none focus:ring-0 flex-grow"
  value={searchTerm}
  onChange={handleSearchChange}
  onPaste={async (e) => {
    const pastedValue = e.clipboardData.getData('Text');
    setSearchTerm(pastedValue); 
    handleSearch(pastedValue); 
  }}
  onKeyUp={(e) => e.key === 'Enter' && handleSearch()} 
/>


  </div>

  {/* Clear button */}
  <button
    className=" bg-[#1B2B3C] font-medium text-sm text-white py-2 px-4 rounded-[8px]"
    onClick={handleClear}
  >
    Clear
  </button>
</div>

            
<div className="border-t border-b border-[#212E40] py-2">
  {searchResults?.length > 0 && searchResults[0]?.token ? (
    // This block renders when a token is searched
    <div className="flex justify-center items-center w-[123px] px-3 py-1 h-[40px] bg-[#0c1623] border border-[#22334B] rounded-2xl">
      {/* Token Image */}
      <div className=" flex justify-between gap-2 items-center">
      <div className="w-[20px] h-[20px] rounded-full bg-[#063172] border border-[#E7F1FF] flex items-center justify-center">
        {searchResults[0]?.token?.image ? (
          <Image
            width={20}
            height={20}
            alt={searchResults[0]?.token?.name || "Token"}
            className="rounded-full object-cover"
            src={searchResults[0]?.token?.image}
          />
        ) : (
          <div className="w-[20px] h-[20px] rounded-full bg-[#0A1019] text-white font-bold flex items-center justify-center">
            {searchResults[0]?.token?.name?.substring(0, 3).toUpperCase()}
          </div>
        )}
      </div>

      {/* Token Name and Symbol */}
      <div className="flex justify-center gap-1 items-center">
        <p className="text-sm font-bold">
          {searchResults[0]?.token?.name
            ? searchResults[0]?.token.name.substring(0, 4)
            : "N/A"}
        </p>
        <p className="font-bold text-base">
          (
          {searchResults[0]?.token?.symbol
            ? searchResults[0]?.token.symbol.substring(0, 4)
            : "N/A"}
          )
        </p>
      </div>
      </div>
    </div>
  ) : (
  
    <div className="flex justify-start pl-2 items-center w-[50px] h-[50px] border-white border rounded-2xl">
<div className="w-[30px] h-[30px] border-white border-2 rounded-full">
</div>
    </div>
  )}
</div>

        
            
{/* Display search results */}
            {searchResults.length > 0 ? (
              searchResults?.map((item, index) => (
                <div
        key={index}
        className="bg-[#0C141F] grid grid-cols-[72px_1fr] items-start gap-x-4 pt-2  px-3 border-[#1A232F] border w-full  h-[200px] overflow-y-auto scrollbar-hide pb-10 rounded-lg"
      >
      
        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center'>
  {item?.token?.image ? (
    <Image
      width={80}
      height={80}
      alt={item?.token?.name || 'Token'}
      className='rounded-full object-cover aspect-square object-fit'
      src={item?.token?.image}
    />
  ) : (
    <div className='w-[80px] h-[80px] rounded-full bg-[#0A1019] border-white flex items-center justify-center text-white font-bold'>
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
    <IoCopyOutline />
  </div>
  <p className="text-[#AEAEAE] text-[12px] font-normal">{formatTimeDifference(Number(item?.pools?.[0]?.createdAt))}</p>
</div>
</Link>
<div className="grid grid-cols-3 gap-4 mx-auto text-center">
             {/* Headings */}
             <div className="font-normal text-[8px] text-[#656565]">1M</div>
             <div className="font-normal text-[8px] text-[#656565]">5M</div>
             <div className="font-normal text-[8px] text-[#656565]">30M</div>
           
             {/* Values */}
             <div className={`text-[13px] font-semibold ${
      item?.events?.["1m"]?.priceChangePercentage > 0
        ? "text-green-500" // Green for positive values
        : "text-red-500" // Red for negative values
    }`}
  >
    {formatPercentage(item?.events?.["1m"]?.priceChangePercentage)}</div>
             <div className={`text-[13px] font-semibold ${
      item?.events?.["5m"]?.priceChangePercentage > 0
        ? "text-green-500" // Green for positive values
        : "text-red-500" // Red for negative values
    }`}
  >
    {formatPercentage(item?.events?.["5m"]?.priceChangePercentage)}</div>
             <div className={`text-[13px] font-semibold ${
      item?.events?.["5m"]?.priceChangePercentage > 0
        ? "text-green-500" // Green for positive values
        : "text-red-500" // Red for negative values
    }`}
  >
    {formatPercentage(item?.events?.["5m"]?.priceChangePercentage)}</div>
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
    ${item?.pools?.[0]?.marketCap?.usd ? formatNumber(item?.pools[0].marketCap.usd) : 'N/A'}
  </span>
</p>

<div className="flex gap-1 items-center">
  <p className="text-[10.98px] font-medium">
    Vol: 
    <span className='font-normal text-[10.98px] text-[#A7A7A7]'>
      {item?.pools?.[0]?.txns?.volume}
    </span>
  </p>
</div>
</div>

            </div>
             </div>
            


<div className="flex gap-2 items-center">
  {item?.token?.telegram || item?.token?.twitter || item?.token?.website ? (
    <div className="flex gap-2">
      {item?.token?.telegram ? (
        <a href={item?.token?.telegram} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-[#37ADF3] flex justify-center items-center">
          <FaTelegramPlane className="w-[13px] h-[13px] text-white" />
        </a>
      ) : null}

      {item?.token?.twitter ? (
        <a href={item?.token?.twitter} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-black flex justify-center items-center">
          <FaXTwitter className="w-[13px] h-[13px] text-[#8D8D8D]" />
        </a>
      ) : null}

      {item?.token?.website ? (
        <a href={item?.token?.website} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] flex justify-center items-center">
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
<div className="flex items-center w-full justify-end">
       <TooltipProvider>
           <Tooltip>
        <TooltipTrigger
          onMouseEnter={() => {
            if (item?.pools[0]?.tokenAddress && item?.pools[0]?.deployer) {
              setHoveredTokenAddress(item?.pools?.[0]?.tokenAddress);
              setHoveredDeployerAddress(item?.pools?.[0]?.deployer);
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
          <div className="w-full flex justify-between gap-4 items-center">
  {/* Left-aligned button */}
  <Button className="bg-[#0D6EFD] w-[111px] h-[26px] font-semibold text-[10px] rounded-[4px] px-2 py-1">
    View Chart & Trade
  </Button>

  {/* Right-aligned Fast Buy input and button */}
  <div className="flex items-center w-[85px] h-[29px] relative">
    <div className="relative w-[35px] h-full">
      <input
        className="text-xs w-full h-full pl-2 pr-2 bg-[#0C141F] text-[#E7E7E7] placeholder-text-[#FFFFFF] border-[#212E40] border rounded-l-[8px] appearance-none focus:outline-none placeholder-opacity-100"
        placeholder="5"
        autoComplete="off"
        value={fastBuyValue}
        onChange={handleChange}
      />
    </div>
    <Button className="w-[50px] flex justify-center items-center text-[11px] h-full px-4 py-[11px] bg-[#0A53BE] text-white border-[#22334B] rounded-r-[8px] rounded-l-none">
      Fast Buy
    </Button>
  </div>
</div>

</div>


))
            ) : (
              <div className="py-8 px-4 flex justify-center items-center text-sm font-medium">No Tokens found</div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Search;
