"use client";
import React from "react";
import { accumulatedTokens, smartWalletList } from "@/utils/mockData";
import { TableRow, TableCell } from "@/components/ui/table";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ChartDetails from "@/components/metabots/alphaHuntTabs/ChartDetails";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SpaceIcon } from "lucide-react";

const AccumulatedTokenTable = () => {
  return (
    <>
      {accumulatedTokens?.map((row, index) => (
        <TableRow key={index} className="border-[#212E40] overflow-x-hidden">
          <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
            <div className="w-[100px] md:w-[100px] lg:w-[100px] flex gap-2 relative">
              {/* tooltip content */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <div className="flex gap-3 items-center">
                      {row.token}
                      <Image
                        src={row.img}
                        alt="img"
                        width={20}
                        height={20}
                        className="w-[16px]  md:w-[20px] lg:w-[20px] max-w-[100%] h-auto"
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
          <TableCell className="font-normal text-[9px] md:text-base lg:text-base text-center md:text-right lg:text-right">
            <div className="w-[100px] md:w-[350px] lg:w-[350px]">
              <p className="">
                {row.smartWallet} {""} {""}
                <Dialog>
                  <DialogTrigger>
                    <span className="hidden md:block lg:block text-[9px] md:text-base lg:text-base font-normal text-[#FFC107] border-b-2 border-[#FFC107]">
                      {row.details}
                    </span>
                    <span className=" block md:hidden lg:hidden w-fit bg-[#0D6EFD] rounded-[8px] text-white py-1 px-1 font-normal text-[10px] text-center">
                      {row.details}
                    </span>
                  </DialogTrigger>
                  <DialogContent
                    className="max-w-auto w-full px-8 md:w-full lg:w-full
                   bg-[#0C141F] border-none rounded-lg"
                  >
                    <div className=" w-full md:w-full lg:w-full h-[400px] md:h-[400px] lg:h-[400px] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
                      <div
                        className="w-full bg-[#0A1019]
                       border-b-[#212E40] mb-5 py-2 h-[45px] px-2"
                      >
                        <p className="font-bold text-xs">
                          List of Wallet Addresses in Smart Money Token Plays
                        </p>
                      </div>
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
          <TableCell className="font-normal text-[9px] md:text-base lg:text-base text-[#05A660]">
            <div className="w-[100px] md:w-[200px] lg:w-[200px] text-left md:text-right lg:text-right pr-4 md:pr-2 lg:pr-2">
              {row.netInflow}
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default AccumulatedTokenTable;
