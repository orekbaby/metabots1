"use client";
import React, { FC, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { LatestData } from "@/utils/types";
import { useDispatch } from "react-redux";
import { removeToken } from "@/store/slices/watchListSlice";
import { toast } from "@/hooks/use-toast";

interface WatchListMemeProps {
  watchListData: LatestData[];
}

const WatchListMeme: FC<WatchListMemeProps> = ({ watchListData }) => {
  const [watchListedData, setWatchListedtData] = useState(watchListData || []);
  
  const dispatch = useDispatch();
  useEffect(() => {
   
    setWatchListedtData(watchListData || []);
  }, [watchListData]);

  console.log({ watchListData });

  const formatNumber = (num: number | null | undefined): string => {
    if (num == null || isNaN(num) || typeof num !== "number") return "N/A";

    let formattedNum = num.toFixed(1);

    if (num >= 1_000_000) {
      formattedNum = (num / 1_000_000).toFixed(1) + "M";
    } else if (num >= 1_000) {
      formattedNum = (num / 1_000).toFixed(1) + "K";
    }

    return formattedNum;
  };

  const handleRemoveStarClick = async (tokenAddress: string) => {
    if (!tokenAddress) {
      console.error("Invalid token address:", tokenAddress);
      return;
    }
  
    try {
      // Dispatch action to remove the token from the watchlist
      dispatch(removeToken(tokenAddress));
  
      // Show toast notification
      toast({
        description: 'You have removed this token from the watchlist.',
      });
    } catch (error) {
      console.error('Error removing token from watchlist:', error);
      toast({
        description: 'An error occurred while removing the token from the Watchlist.',
        variant: 'destructive',
      });
    }
  };
  

  return (
    <div>
      <div className="p-3 border-b border-[#1A232F]">
        <h4 className="font-bold text-base text-[#e7e7e7]">My WatchList</h4>
      </div>
      <Table className="overflow-x-hidden w-full">
        <TableHeader className=''>
          <TableRow className="border-none bg-[#0A1019]">
            <TableHead className="font-normal w-[100px] md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[14.07px] text-left">
             TOKEN
            </TableHead>
            <TableHead className="text-center w-[100px] md:text-left lg:text-left font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[14.07px]">
            M.CAP
            </TableHead>
            <TableHead className="font-normal w-[100px] text-left md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[14.07px]">
            LIQUIDITY
            </TableHead>
            <TableHead className="font-normal w-[100px] text-left md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[14.07px]">
            VOLUME
            </TableHead>
            <TableHead className="font-normal w-[100px] text-left md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[14.07px]">
           BUY PRICE
            </TableHead>
            <TableHead className="font-normal w-[100px] text-center md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[14.07px]">
          ACTION
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='w-full h-full'>
          {watchListedData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No tokens in the watchlist
              </TableCell>
            </TableRow>
          ) : (
            watchListedData.map((item, index) => {
             
              if (!item.token) {
                console.error("Missing token data:", item); 
                return null; 
              }
              return (
                <TableRow className="border-none putline-0" key={index}>
                <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
                <div className=" w-[150px]">
                <div className="flex justify-start gap-2 items-center">
                    {item.token?.image ? (
                      <Image
                        src={item.token.image}
                        alt={item.token.name || "Token Image"}
                        width={40}
                        height={40}
                         className='rounded-full object-cover aspect-square object-fit'
                      />
                    
                    ) : (
                      <div>No Image</div> 
                    )}
                   {item?.token?.name?.substring(0, 3).toUpperCase()}
                    </div>
                 </div>
                  </TableCell>
                  <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm text-left">
                  <div className=" w-[100px] text-left pl-2">
                    {formatNumber(item.pools[0]?.marketCap?.usd)}
                 </div>
                  </TableCell>
                  <TableCell className=" font-normal text-[9px] md:text-sm lg:text-sm">
                  <div className="w-[100px] pl-2 ">
                    {formatNumber(item.pools[0]?.liquidity?.usd)}
                 </div>
                  </TableCell>
                  
                  <TableCell className=" font-normal text-[9px] md:text-sm lg:text-sm">
                  <div className="w-[100px] pl-2">
                   {formatNumber(item.pools[0]?.txns?.volume)}
                    </div>
                    </TableCell>
                    <TableCell className=" text-[9px] md:text-sm lg:text-sm">
          <div className="w-[130px] font-normal pl-2">
                    {item.pools[0]?.txns?.buys}
                    </div>
                    </TableCell>
                    <TableCell className="text-left font-normal  text-[9px] md:text-sm lg:text-sm">
          <div className="w-[100px] text-left ">
          <div className="flex items-center w-[90px] h-[28px] relative">
          <Button className="w-[54px] flex justify-center gap-1 items-center text-xs h-[28px] px-2 py-[11px] bg-[#0A53BE] text-white border-[#22334B] rounded-l-[8px] rounded-r-none">
   Fast Buy  
  
    </Button>
       <input
   className="text-xs w-[76px] h-[28px] py-[8px] px-[16px] bg-[#0C141F] text-[#212E40] border-[#212E40] border rounded-r-[8px] appearance-none focus:outline-none placeholder-opacity-100"
   type="text"
    autoComplete="off"
   value="10"
    />
    <FaStar
  className='w-[12px] cursor-pointer h-[14px] text-[#CECECE] absolute right-[-10%] top-1/2 transform -translate-y-1/2'
  onClick={() => handleRemoveStarClick(item?.token?.mint)}
/>

    
      </div>
        </div>
        </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default WatchListMeme;
