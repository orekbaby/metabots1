import React from 'react'
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from "@/components/ui/table";

import Image from "next/image"

interface PnlTableProps {
    pnlData: any; 
    loading:boolean;
}


const PnlTable: React.FC<PnlTableProps> = ({ pnlData, loading }) => {
  return (
    <>
    
    {loading ? (
        <div className="text-center w-full py-4">
          <p>Loading PnL Data...</p>
        </div>
      ) : (
        <Table className="w-full overflow-x-hidden">
          <TableHeader>
            <TableRow className="border-none bg-[#0C141F]">
              <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-left">
                Time
              </TableHead>
              <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
                Token
              </TableHead>
              <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
                Realized Gains
              </TableHead>
              <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="w-full h-[350px] overflow-y-auto scrollbar-hide">
            {pnlData?.length > 0 ? (
              pnlData.map((row: any, index: any) => (
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
                      <div className="flex gap-2 items-center text-white font-bold">
                        <p>Lion</p>
                        <p>LION</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
                    <p className="text-[#06c270]">Buy</p>
                  </TableCell>
                  <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
                    45.00
                  </TableCell>
                  <TableCell className="text-[9px] md:text-sm lg:text-sm text-center">
                    +$3.65
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <div className="text-center w-full flex flex-col gap-2 justify-center items-center absolute inset-0 font-semibold text-base">
                <p className="font-semibold text-[13px] text-[#B5B6B6]">
                  PnL card is currently empty
                </p>
                <span className="font-medium italic text-[13px] text-[#B5B6B6]">
                  Complete a transaction to start tracking your profit and loss
                  here!
                </span>
              </div>
            )}
          </TableBody>
        </Table>
      )}

    </>
  )
}

export default PnlTable