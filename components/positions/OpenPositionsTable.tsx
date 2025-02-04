import React from 'react'
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from "@/components/ui/table";
import { tableData } from '@/utils/';
import Image from "next/image"
import { MdDeleteOutline } from 'react-icons/md';

interface OpenPositionsTableProps {
  openPositionsData: any; 
}

const OpenPositionsTable: React.FC<OpenPositionsTableProps> = ({ openPositionsData }) => {
  return (
    <>
     <Table className="w-full overflow-x-hidden">
  <TableHeader>
    <TableRow className="border-none bg-[#0C141F]">
      <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-left">
        Token
      </TableHead>
      <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
        Type
      </TableHead>
      <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
      AMT Of Token ($)
Exec. Price

      </TableHead>
      <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
      EXP Time

      </TableHead>
      <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
      Status
      </TableHead>
    </TableRow>
  </TableHeader>

  <TableBody className="w-full h-[350px] overflow-y-auto scrollbar-hide">
  {openPositionsData?.length > 0 ? (
      openPositionsData.map((row:any, index:any) => (
        <TableRow key={index} className="border-b border-[#212E40]">
          <TableCell className="flex items-center text-[9px] md:text-sm lg:text-sm">
            <div className="flex items-center gap-2 w-full">
              <Image
                width={42}
                height={42}
                alt="img"
                className="rounded-full object-cover"
                src="/lion2.png"
              />
              <div className=" flex gap-2 items-center text-white font-bold">
                <p>Lion</p>
                <p>LION</p>
              </div>
            </div>
          </TableCell>
          <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
            <p className="text-[#06c270]">Take Profit</p>
          </TableCell>
          <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
            45.00
          </TableCell>
          <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
          $42.78/$3.5M
          </TableCell>
          <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
            <div className="flex items-center gap-2 #FF3B3B"></div>
            Pending
            <MdDeleteOutline className=' w-[14px] h-[14px] text-[#FF3B3B]' />
          </TableCell>
        </TableRow>
      ))
    ) : (
      <div className="text-center w-full flex justify-center items-center absolute inset-0 font-semibold text-base">
        No Data Found
      </div>
    )}
  </TableBody>
</Table>

    </>
  )
}

export default OpenPositionsTable