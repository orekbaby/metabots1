import React from 'react'
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from "@/components/ui/table";
import { copyLossWallet, copyTableWallet, explorer } from '@/utils/mockData';
import { Button } from "@/components/ui/button";

const CopyWalletTable = () => {

return (
    <>
   <Table className="text-left h-auto w-full overflow-x-hidden">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F] overflow-x-hidden">
            <TableHead className="w-[70px] font-semibold text-[10px]">
           Time
            </TableHead>
            <TableHead
              className="text-center
             items-center font-semibold text-[10px]"
            >
              <div className="w-[50px] items-center">Type</div>
            </TableHead>
            <TableHead className="text-left font-semibold text-[10px]">
              <div className="w-[50px] pr-2">Amount</div>
            </TableHead>
            <TableHead className="pr-4 md:pr-0 lg:pr-0 pl-0 md:pl-2 lg:pl-4 text-center md:text-left lg:text-left font-semibold text-[10px]">
              <div className="w-[50px]">Price</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {copyLossWallet?.map((row, index) => (
            <TableRow key={index} className="border-[#212E40]">
              <TableCell className="w-[70px]  flex items-center font-normal text-[10px] pl-4">
                {row.time}
              </TableCell>

              <TableCell
  className={`w-[50px] text-center items-center text-[#05AC32] font-semibold text-[10px]  pt-0 md:pt-4 lg:pt-4 pr-5 md:pr-4 lg:pr-4 ${
    index === 0 || index === 2 || index === 3
      ? 'text-[#FF3B3B]' 
      : index === 1
      ? 'text-[#4CA244]' 
      : '' 
  }`}
>
  {row.type}
</TableCell>


              <TableCell className="w-[50px] items-start text-left  pl-4 flex flex-col">
                <p className='text-[#05AC32] font-semibold text-[10px]'>{row.amount}</p>
                <p className='text-white font-semibold text-[10px]'>{row.amount2}</p>
              </TableCell>
              <TableCell className="w-[50px] text-left">
                <p
                  className="
                  text text-white font-normal text-[9.41px]"
                >
                  {row.price}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default CopyWalletTable