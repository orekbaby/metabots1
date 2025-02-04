"use client";
import React, { FC, useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { tableData } from '@/utils/mockData'
import { RiMenu5Fill } from 'react-icons/ri'
import Image from "next/image"
import { IoCopyOutline } from 'react-icons/io5'
import { FaCheck, FaTelegramPlane, FaTimes } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { AiOutlineGlobal } from 'react-icons/ai'
import { Button } from '../ui/button'
import { fetchRaydiumScanner } from '@/utils/apiCalls'
import { IoIosWarning } from 'react-icons/io'
import { LatestData } from '@/utils/types';

interface NewPairProps {
radyiumScanner:LatestData[] 
}


const NewPairs:FC<NewPairProps> = ({radyiumScanner}) => {

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

 

  

  return (
    <>
    <Table className="text-left overflow-x-hidden w-full">
 
  <TableHeader>
    <TableRow className='bg-[#0A1019] border-none outline-0 overflow-x-hidden'>
      <TableHead className=" text-left w-[100px] font-semibold text-[14.07px] text-[#6C757D]">TOKEN DETAILS</TableHead>
    
      <TableHead className=' text-left w-[100px] font-semibold text-[14.07px] text-[#6C757D]'>LIQUIDITY</TableHead>
      <TableHead className=' text-left  w-[70px] font-semibold text-[14.07px] text-[#6C757D]'>M.CAP</TableHead>
      <TableHead className='w-[100px] text-left  font-semibold text-[14.07px] text-[#6C757D]'>VOL</TableHead>
      <TableHead className=' text-left  w-[100px] font-semibold text-[14.07px] text-[#6C757D]'>TNXS</TableHead>
      
    <TableHead className='w-[150px] text-left  font-semibold text-[14.07px] text-[#6C757D]'>RISK ANALYSIS</TableHead>
      <TableHead className='w-[100px] pl-10 text-center font-semibold text-[14.07px] text-[#6C757D]'>ACTION</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody className='h-full w-full overflow-x-hidden'>
 
  {radyiumScanner?.map((item, index) => (
<TableRow key={index} className='border-none outline-0 '>
      <TableCell className=" text-left font-medium">
        <div className="w-[210px]">
      <div className="flex flex-col justify-between items-center gap-1"> 
        <div
       className=" grid grid-cols-[52px_1fr] items-center gap-4  pb-0 px-0 h-auto">
        
        
        {item?.token?.image ? (
          <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center'>

    <Image
      width={42}
      height={42}
      alt={item?.token?.name || 'Token'}
      className='rounded-full object-cover aspect-square object-fit'
      src={item?.token?.image}
    />
    </div>
  ) : (
    <div className='w-[80px] h-[80px] rounded-full bg-[#0A1019] border-white flex items-center justify-center text-white font-bold'>
      {item?.token?.name?.substring(0, 3).toUpperCase()}
    </div>
  )}
        
         <div className="grid grid-rows-2 gap-1">
         <div className="flex justify-between items-center">
  <div className="flex gap-1 items-center">
    
    <div className="flex items-center gap-1">
      <p className="text-[13px] font-medium text-[#E7E7E7]">{item?.token?.name ? item.token.name.substring(0, 4) : 'N/A'} </p>
      <IoCopyOutline className="text-xs text-[#DADBDD]" />
    </div>
   <div className="flex items-center gap-1">
      <span className="text-[13px] font-semibold text-[#B5B6B6]">/SOL</span>
      <IoCopyOutline className="text-xs text-[#DADBDD]" />
    </div>
   <p className="text-[#B5B6B6] italic text-[12px] font-normal">4 min</p>
  </div>
</div>

<div className="flex gap-2 items-center">
  {item?.token?.telegram || item?.token?.twitter || item?.token?.website ? (
    <div className="flex gap-2">
      {item?.token?.telegram ? (
        <a href={item.token.telegram} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-[#B5B6B6] flex justify-center items-center">
          <FaTelegramPlane className="w-[13px] h-[13px] text-[#E7E7E7]" />
        </a>
      ) : null}

      {item?.token?.twitter ? (
        <a href={item.token.twitter} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] rounded-full bg-[#B5B6B6] flex justify-center items-center">
          <FaXTwitter className="w-[13px] h-[13px] text-[#8D8D8D]" />
        </a>
      ) : null}

      {item?.token?.website ? (
        <a href={item.token.website} target="_blank" rel="noopener noreferrer" className="w-[18px] h-[18px] flex justify-center items-center">
          <AiOutlineGlobal className="w-[18px] h-[18px] text-[#E7E7E7]" />
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
  {/* ends here */}
  </div>
   </div>
  </div>
  </div>
      </TableCell>
      
       
      <TableCell className="text-left md:text-left lg:text-left">
        <div className="w-[150px]  pl-2 md:w-[100px] lg:w-[150px]">
        <div className="flex items-center gap-1">
                      <p className="font-medium text-[10px] md:text-sm lg:text-sm">
                      {formatNumber(item?.pools[0]?.liquidity?.usd)}<span className='font-medium text-[11px]'>(SOL) </span>
                      </p>
                      <span className='text-[#B5B6B6] font-medium text-[11px]'>/${formatNumber(item?.pools[0]?.liquidity?.usd)}</span>
                      </div>
                   </div>
         </TableCell>
       
      <TableCell className="text-center">
                    <div className="w-[150px] md:w-[100px] lg:w-[100px] pr-8">
                      <p className="font-medium text-[10px] md:text-sm lg:text-sm">
                      {formatNumber(item?.pools[0]?.marketCap?.quote)}
                     
                      </p>
                     <p className='font-normal text-[11px] text-[#B5B6B6]'>{formatNumber(item?.pools[0]?.marketCap?.usd)}</p>
                    </div>
                  </TableCell>
                  
      <TableCell className="text-left">
        <div className="w-[100px] pl-2">
          <p className='font-semibold text-sm'> {formatNumber(item?.pools[0]?.txns?.volume)}</p>
        </div>
      </TableCell>
      <TableCell className="text-left">
                    <div className="w-[150px] md:w-[100px] lg:w-[100px] pl-2">
                      <p className="font-semibold text-[10px] md:text-sm lg:text-sm">
                      {formatNumber(item?.pools[0]?.txns?.volume)}
                     </p>
                     <p className='font-medium text-[12.5px] text-[#B5B6B6]'> (<span className='text-[#00B466]'>{formatNumber(item?.pools[0]?.txns?.buys)}</span><span className='text-[#FF5C5C]'>/{formatNumber(item?.pools[0]?.txns?.sells)}</span>)</p>
                    </div>
                  </TableCell>
                
                 
                  <TableCell className="text-center">
  <div className="w-[250px]">
    <div className="flex justify-between">
   
      <div className="flex flex-col items-start">
      
        <div className="flex items-center gap-2">
          <div
            className={`${
              item?.pools[0]?.security?.mintAuthority === null
                ? "bg-[#00B466]"
                : "bg-[#FF5C5C]"
            } w-[20px] h-[20px] rounded-full flex justify-center items-center`}
          >
            {item?.pools[0]?.security?.mintAuthority === null ? (
              <FaCheck className="w-[13.33px] h-[13.33px] text-[#0d0d0d]" />
            ) : (
              <FaTimes className="w-[13.33px] h-[13.33px] text-[#0d0d0d]" />
            )}
          </div>
          <div className="flex flex-col items-start">
            <p className="font-normal text-[11.75px]">Mint Auth</p>
            <span className="font-normal text-[11.75px]">
              {item?.pools[0]?.security?.mintAuthority === null ? "Disabled" : "Enabled"}
            </span>
          </div>
        </div>

        {/* Row 2 - LP Burned */}
        <div className="flex items-center gap-2 pt-5">
          <div className="bg-[#00B466] w-[20px] h-[20px] rounded-full flex justify-center items-center">
            <FaCheck className="w-[13.33px] h-[13.33px] text-[#0d0d0d]" />
          </div>
          <p className="font-normal text-[11.75px]">LP Burned</p>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-start">
        {/* Row 1 - Freeze Auth */}
        <div className="flex items-center gap-2">
          <div
            className={`${
              item?.pools[0]?.security?.freezeAuthority === null
                ? "bg-[#00B466]"
                : "bg-[#FF5C5C]"
            } w-[20px] h-[20px] rounded-full flex justify-center items-center`}
          >
            {item?.pools[0]?.security?.freezeAuthority === null ? (
              <FaCheck className="w-[13.33px] h-[13.33px] text-[#0d0d0d]" />
            ) : (
              <FaTimes className="w-[13.33px] h-[13.33px] text-[#0d0d0d]" />
            )}
          </div>
          <div className="flex flex-col items-start">
            <p className="font-normal text-[11.75px]">Freeze Auth</p>
            <span className="font-normal text-[11.75px]">
              {item?.pools[0]?.security?.freezeAuthority === null ? "Disabled" : "Enabled"}
            </span>
          </div>
        </div>

        {/* Row 2 - Top 10 Holders */}
        <div className="flex items-center gap-2 pt-4">
          <div className="bg-[#FF5C5C] w-[20px] h-[20px] rounded-full flex justify-center items-center">
            <FaTimes className="w-[13.33px] h-[13.33px] text-[#0d0d0d]" />
          </div>
          <p className="font-normal text-[11.75px]">Top 10 Holders</p>
        </div>
      </div>
    </div>
  </div>
</TableCell>     


      <TableCell className="text-right pl-20">
        <div className="w-[100px]">
      <div className="flex items-center w-[109px] h-[36px]">
 
  <input
    className="text-xs w-[45px] h-[36px] py-[8px] px-[16px] bg-[#0C141F] text-[#212E40] border-[#212E40] border rounded-l-[8px] appearance-none focus:outline-none placeholder-opacity-100"
    type="text"
    placeholder="100"
    autoComplete="off"
    value=""
  />
   <Button className="w-[64px] flex justify-center gap-1 items-center text-sm h-[36px] px-2 py-[11px] bg-[#0A53BE] text-white border-[#22334B] rounded-r-[8px] rounded-l-none">
    Fast Buy  
   
  </Button>
</div>
</div>
</TableCell>
    </TableRow>
     ))}
    </TableBody>
</Table>
    </>
  )
}

export default NewPairs