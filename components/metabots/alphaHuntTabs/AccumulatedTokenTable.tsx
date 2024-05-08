"use client";
import React from "react";
import { accumulatedTokens, smartWalletList } from "@/utils/mockData";
import { TableRow, TableCell } from "@/components/ui/table";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ChartDetails from "@/components/metabots/alphaHuntTabs/ChartDetails";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AccumulatedTokenTable = () => {
  return (
    <>
      {accumulatedTokens?.map((row, index) => (
        <TableRow key={index} className="border-[#212E40]">
          <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
            <div className="w-[150px] md:w-[100px] lg:w-[100px] flex gap-2 relative">
              {/* tooltip content */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <div className="flex gap-1 items-center">
                      {row.token}
                      <Image
                        src={row.img}
                        alt="img"
                        width={20}
                        height={20}
                        className="w-[16px] h-[16px] md:w-[20px] lg:w-[20px]"
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="w-[700px] h-[400px] bg-transparent border-none hidden md:block lg:block">
                    <div className="">
                      <ChartDetails />
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </TableCell>
          <TableCell className="font-normal text-[9px] md:text-[18px] lg:text-[18px] text-center md:text-right lg:text-right">
            <div className="w-[200px] md:w-[350px] lg:w-[350px]">
              <p className="">
                {row.smartWallet} {""}
                <Dialog>
                  <DialogTrigger>
                    <span className="text-[9px] md:text-base lg:text-base font-normal text-[#FFC107] border-b-2 border-[#FFC107]">
                      {row.details}
                    </span>
                  </DialogTrigger>
                  <DialogContent className="w-[70%] md:w-full lg:w-full bg-[#0C141F] border-none rounded-lg">
                    <div className=" w-full md:w-full lg:w-full  h-[200px] overflow-y-auto scrollbar-hide overflow-x-hidden">
                      {smartWalletList?.map((row, index) => (
                        <div
                          key={index}
                          className="flex flex-col mb-3 border-b-2 border-[#212E40]"
                        >
                          <p className="font-bold text-sm md:text-base lg:text-base">
                            {row.superboy}
                          </p>
                          <span className="font-normal text-xs md:text-sm lg:text-sm text-[#E7E7E7]">
                            {row.address}
                          </span>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </p>
            </div>
          </TableCell>
          <TableCell className="font-medium text-[9px] md:text-[18px] lg:text-[18px] text-[#05A660]">
            <div className="w-[150px] md:w-[20px] lg:w-[200px] text-right pr-0 md:pr-2 lg:pr-2">
              {row.netInflow}
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default AccumulatedTokenTable;
