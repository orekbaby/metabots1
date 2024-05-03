"use client";
import React, { useState } from "react";
import Chart from "@/components/metabots/alphaHuntTabs/lightChart/Chart";
import {
  accumulatedTokens,
  freshWallet,
  smartWalletList,
} from "@/utils/mockData";
import { TableRow, TableCell } from "@/components/ui/table";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MdOutlineContentCopy } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";

const AccumulatedTokenTable = () => {
  interface Item {
    token: string;
    img: string;
  }
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const yourDataArray: Item[] = [
    /* Your array of data */
  ];
  return (
    <>
      {accumulatedTokens?.map((row, index) => (
        <TableRow key={index} className="border-[#212E40]">
          <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
            <div className="w-[150px] md:w-[100px] lg:w-[100px] flex gap-2 relative">
              <div
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex gap-1">
                  {hoveredItem === index && (
                    <div className="absolute top-0 left-0 z-10">
                      <div className="w-full h-auto md:w-4/5 md:h-[800px] lg:w-4/5 lg:h-[800px] bg-[#0A1019] mb-3 px-2">
                        <div className="flex flex-row mb-2 md:mb-4 lg:mb-4">
                          <div className="flex items-center gap-2">
                            <Image
                              width={28}
                              height={28}
                              alt="eth"
                              src="/Eth.png"
                              className="w-[16px] h-[16px] md:w-[28px] md:h-[28px] lg:w-[28px] lg:h-[28px] items-center"
                            />
                            <div className="flex gap-1 items-center mr-2 md:mr-4 lg:mr-4">
                              <h3 className="font-semibold text-xs md:text-[16px] lg:text-[16px]">
                                WETH
                              </h3>
                              <MdOutlineContentCopy className="text-xs md:text-[14.5px] lg:text-[12.4px]" />
                            </div>
                          </div>

                          {/* second column */}
                          {freshWallet?.map((row, index) => (
                            <div key={index} className="">
                              <div className="col-span-1 flex flex-col gap-3 p-1">
                                <h2 className="font-normal text-[8px] md:text-[10px] lg:text-[12px] text-[#6C757D]">
                                  {row.name}
                                </h2>

                                <div className="flex items-center">
                                  <div className="flex flex-col">
                                    <div className="flex gap-1 items-center">
                                      <p
                                        className={`text-xs md:text-[17px] lg:text-[17px] ${
                                          index === 0
                                            ? "font-bold"
                                            : index === 1
                                            ? "font-normal"
                                            : index === 2
                                            ? "font-medium text-[#06C270]"
                                            : "font-medium #FFC107"
                                        }`}
                                      >
                                        {row.token}
                                      </p>
                                      <span
                                        className={`font-medium text-[9px] ${
                                          index === 0
                                            ? "font-semibold text-[14.56px] text-[#06C270]"
                                            : index === 1
                                            ? "font-normal text-[12.3px] text-[#FFC107]"
                                            : index === 2
                                            ? ""
                                            : " "
                                        }
                                       md:text-[12px] lg:text-xs text-[#06C270]`}
                                      >
                                        {row.span}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          <div className="hidden md:block lg:block items-end justify-end pt-4 pl-4">
                            <Button className="border-2 border-[#0D6EFD] w-[105.57px] h-[29.12px] rounded-[0.8px]">
                              Analyse Token
                            </Button>
                          </div>
                        </div>
                        <div className="inline md:hidden lg:hidden items-end justify-end pb-4 ">
                          <Button className="border-2 border-[#0D6EFD] w-[105.57px] h-[29.12px] rounded-[0.8px]">
                            Analyse Token
                          </Button>
                        </div>

                        <div className="text-center flex items-center justify-center mr-60">
                          <Chart />
                        </div>
                      </div>
                    </div>
                  )}
                  {row.token}
                  <Image
                    src={row.img}
                    alt="img"
                    width={20}
                    height={20}
                    className=""
                  />
                </div>
              </div>
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
