import React from "react";
import { apeMode } from "@/utils/mockData";
import { Button } from "@/components/ui/button";
import { triggerSnipes } from "@/utils/mockData";
import { FaStar } from "react-icons/fa";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";

const ApeModeSniping = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-10">
          <div className=" w-full md:w-1/2 lg:w-1/2 parent-1 bg-[#0C141F] border-2 border-[#212E40] rounded-lg px-3 overflow-y-auto overflow-x-hidden scrollbar-hide h-auto md:h-[400px] lg:h-[400px]">
            <div className="flex justify-between mb-5 py-3 border-b-2 border-[#212E40]">
              <div className="flex gap-1 items-center">
                <h2 className="font-bold text-xs md:text-base lg:text-base">
                  New Token Feed
                </h2>
                <div className="bg-[#989898] w-2 h-2 rounded-full"></div>
              </div>
              <Button
                className="bg-[#0D6EFD] text-white rounded-l 
              font-bold text-[10px] md:text-xs lg:text-xs w-[115px] md:w-[126px] lg:w-[126px] h-[28px]"
              >
                Ape Mode Settings
              </Button>
            </div>
            <div className="overflow-y-auto overflow-x-hidden scrollbar-hide h-[300px]">
              {apeMode?.map((row, index) => (
                <div
                  key={index}
                  className="border-2 border-[#212E40] mb-5 rounded-[12px] px-3"
                >
                  <div className="flex gap-1 items-center pt-2">
                    <h2 className="font-semibold text-[10px] md:text-xs lg:text-xs text-[#FFC107]">
                      {row.listen}
                    </h2>
                    <Image
                      src="/Loader.png"
                      width={24}
                      height={24}
                      alt="loading=img"
                      className="w-[10px] md:w-[24px] lg:w-[24px]"
                    />
                  </div>
                  <div className="flex justify-center md:justify-between lg:justify-between ">
                    <div className="flex flex-col justify-start">
                      <div className="flex gap-4 justify-start mb-2 md:mb-0 lg:mb-0">
                        <div className="flex gap-1 items-center">
                          <FaStar className="text-xs" />
                          <div className="font-bold text-[10px] md:text-base lg:text-base">
                            {row.tokenName}
                          </div>
                        </div>
                        <p className="font-normal text-xs md:text-sm lg:text-sm">
                          {row.time}
                        </p>
                      </div>
                      <div className="flex gap-[62px] md:gap-[86px] lg:gap-[86px] mb-0 md:mb-1 lg:mb-1 ">
                        {" "}
                        <p className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
                          {row.price}
                        </p>
                        <p className="font-normal w-[80px] md:w-full lg:w-full text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
                          {row.scamScore}
                        </p>
                      </div>
                      <div className="flex gap-[48px] md:gap-[56px] lg:gap-[56px]">
                        <p className="font-semibold  text-xs md:text-[20px] lg:text-[20px] text-[#E7E7E7]">
                          {row.number}
                        </p>
                        <p className="font-semibold text-xs md:text-[20px] lg:text-[20px] text-[#FFA500]">
                          {row.percent}
                        </p>
                      </div>
                    </div>
                    {/* second column */}
                    <div className="flex flex-row md:flex-wrap lg:flex-wrap gap-16 md:gap-12 lg:gap-12">
                      {/* First column */}
                      <div className="w-full md:w-1/2 lg:w-1/4 flex justify-center mb-2 md:mb-6 lg:mb-6 gap-2">
                        <div className="flex flex-col gap-2">
                          <div>
                            <p className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
                              {row.liquidity}
                            </p>
                            <span className="text-[#E7E7E7] font-semibold md:font-bold lg:font-bold text-xs md:text-base lg:text-base">
                              {row.figure}
                            </span>
                          </div>
                          <div>
                            <p className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
                              {row.txns}
                            </p>
                            <span className="text-[#E7E7E7] font-semibold md:font-bold lg:font-bold text-xs md:text-base lg:text-base">
                              {row.fig}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Second column */}
                      <div className="w-full md:w-1/2 lg:w-1/4 flex justify-center  mb-2 md:mb-6 lg:mb-6 gap-2">
                        <div className="flex flex-col gap-2">
                          <div>
                            <p className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
                              {row.volume}
                            </p>
                            <span className="font-semibold md:font-bold lg:font-bold text-xs md:text-base lg:text-base">
                              {row.fig1}
                            </span>
                          </div>
                          <div>
                            <p className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
                              {row.fdv}
                            </p>
                            <span className="text-[#E7E7E7] font-semibold md:font-bold lg:font-bold text-xs md:text-base lg:text-base">
                              {row.fig2}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" w-full md:w-1/2 lg:w-1/2 parent-2 bg-[#0C141F] border-2 border-[#212E40] rounded-lg px-3 pt-3 h-[400px] overflow-y-auto overflow-x-hidden scrollbar-hide mb-24">
            <h2 className="font-bold text-xs md:text-base lg:text-base mb-3">
              Triggered Snipes
            </h2>
            <Table className="text-left h-auto w-full">
              <TableHeader>
                <TableRow className="border-none bg-[#0A1019]">
                  <TableHead className="w-[100px] font-bold md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-xs">
                    Token Name
                  </TableHead>
                  <TableHead className="font-bold md:font-bold text-center items-center lg:font-bold  text-[9px] md:text-[12px] lg:text-xs">
                    <div className="w-[100px] items-center">Price</div>
                  </TableHead>
                  <TableHead className="text-center items-center font-bold md:font-bold lg:font-bold  text-[9px] md:text-[12px] lg:text-xs">
                    <div className="w-[150px]">Scam Score</div>
                  </TableHead>
                  <TableHead className=" pr-2 md:pr-0 lg:pr-0 pl-0 text-center font-bold md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-xs">
                    <div className="w-[100px]">Status</div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {triggerSnipes?.map((row, index) => (
                  <TableRow
                    key={index}
                    className="border-[#212E40] overflow-x-hidden"
                  >
                    <TableCell className="w-[120px] md:w-[160px] lg:w-[160px] flex items-center font-normal text-[9px] md:text-sm lg:text-sm gap-1">
                      <Image
                        className="w-[16px] h-[16px] md:w-6 lg:w-6 md:h-6 lg:h-6"
                        src={row.img}
                        width={24}
                        height={24}
                        alt="weth-img"
                      />

                      {row.token}
                    </TableCell>

                    <TableCell
                      className="w-[200px] md:w-[100px] lg:w-[100px] text-center items-center  font-normal text-[9px]
               md:text-sm lg:text-sm "
                    >
                      {row.price}
                    </TableCell>

                    <TableCell className="w-[200px] md:w-[100px] lg:w-[100px] text-center items-center text-[#05AC32] font-normal text-[9px] md:text-sm lg:text-sm">
                      {row.scamScore}
                    </TableCell>
                    <TableCell className="w-[100px] text-right">
                      <div
                        className="w-[63px] md:w-[81px] lg:w-[81px]  h-[24px] md:h-[27px] lg:h-[27px]
              text-center text-white rounded-[4px] text-[9px] md:text-xs lg:text-xs font-semibold"
                      >
                        {row.status}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApeModeSniping;
