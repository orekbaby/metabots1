import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { kolCalls } from "@/utils/mockData";
import { LuClock } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const KolCalls = () => {
  return (
    <>
      <div className="w-full h-auto overflow-y-auto mb-28 scrollbar-hide overflow-x-hidden">
        <div className="flex justify-end md:justify-end lg:justify-end items-center text-center mb-2 first-letter:md:mb-5 lg:mb-5">
          <p className="w-[107px] h-[29px] text-center font-medium text-[10px] md:text-sm lg:text-sm pt-1 bg-[#0A58CA] text-[#E7E7E7]">
            Manual
          </p>
          <p className="w-[100px] h-[29px] text-center font-normal text-[10px] md:text-sm lg:text-sm pt-1 bg-[#1B2B3C] text-[#E7E7E7]">
            Automatic
          </p>
        </div>
        <div className="items-center justify-between flex mb-5">
          <div className="hidden md:flex lg:flex justify-start gap-4 h-[35px] font-semibold text-[9px]md:text-xs lg:text-xs text-[#E7E7E7] border-2 rounded-[500px] border-[#212E40] pr-5 ">
            <div
              className="w-full md:w-[117px] h-[27px] lg:w-[117px] bg-[#212E40] 
            text-center items-center pt-1"
            >
              <h3 className="text-center font-bold text-[9px]md:text-xs lg:text-xs">
                Hot Contracts 🔥
              </h3>
            </div>
            <div className="flex justify-center gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                #1 PEPE
              </p>
              <IoMdArrowDropup />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                #1 PEPE
              </p>
              <IoMdArrowDropdown />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                #3 LAYI
              </p>
              <IoMdArrowDropup />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                #4 BSCS
              </p>
              <IoMdArrowDropup />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                #5 VISION
              </p>
              <IoMdArrowDropup />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                #6 GRAM
              </p>
              <IoMdArrowDropup />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                #7 HORIZON{" "}
              </p>
              <IoMdArrowDropup />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                #8 DEFA
              </p>
              <IoMdArrowDropdown />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                #9 DEXL{" "}
              </p>
              <IoMdArrowDropup />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                {" "}
                #10 MIKY{" "}
              </p>
              <IoMdArrowDropdown />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                {" "}
                #11 EXFIL
              </p>
              <IoMdArrowDropdown />
            </div>
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-[9px]md:text-xs lg:text-xs">
                {" "}
                #11 EXFIL
              </p>
              <IoMdArrowDropdown />
            </div>
          </div>
          <div className="hidden md:flex lg:flex justify-center">
            <div className="h-[35px] flex w-[35px] rounded-lg border-2 border-[#212E40] items-center justify-center ">
              <FaStar className="text-base md:text-[24px] lg:text-[24px] items-center text-center" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex lg:flex justify-between mb-5">
          <div className="flex justify-start gap-4 items-center">
            <p className="font-semibold text-[9px]md:text-xs lg:text-xs text-[#E7E7E7]">
              Sort by:
            </p>
            <div className="flex gap-10 py-2 px-2 w-[170px] h-[25px] bg-[#17212F] border-2 border-[#212E40] items-center">
              <p className="font-semibold text-xs text-[#E7E7E7]">
                Number of Calls
              </p>
              <IoIosArrowDown />
            </div>
          </div>
          {/* second part */}
          <div className="flex justify-end gap-3">
            <div className="justify-between flex w-[143px] bg-[#17212F] border-2 border-[#212E40] h-[25px] px-3 rounded-lg items-center py-1">
              <p className="font-semibold text-xs">Status</p>
              <div className="flex justify-end gap-4 items-center">
                <div className="flex w-[13px] h-[18px] rounded-l items-center justify-center">
                  <span className="font-semibold text-sm">3</span>
                </div>
                <IoIosArrowDown />
              </div>
            </div>
            <div className="flex w-[125px] h-[25px] rounded-lg bg-[#17212F] border-2 text-center justify-center border-[#212E40] items-center">
              <p className="text-[#B5B6B6] text-xs font-normal text-center">
                Liquidity Range
              </p>
            </div>
            <div className="flex w-[125px] h-[25px] rounded-lg bg-[#17212F] border-2 text-center justify-center border-[#212E40] items-center">
              <p className="text-[#B5B6B6] text-xs font-normal text-center">
                Market-cap Range
              </p>
            </div>
            <div className="flex w-[125px] h-[25px] rounded-lg bg-[#17212F] border-2 text-center justify-center border-[#212E40] items-center">
              <p className="text-[#B5B6B6] text-xs font-normal text-center">
                Channels
              </p>
            </div>
          </div>
        </div>
        <div className="w-[322px] h-[35px] rounded-[500px] border-[#212E40] gap-3 border-2 flex items-center mb-8">
          <div className="items-center bg-[#212E40] flex w-[68px] h-[35px] text-center rounded-l-[50px] px-2">
            <p className="font-bold text-xs">Filtered:</p>
          </div>
          <p className="font-medium text-xs">Launched</p>
          <p className="font-medium text-xs">Not Launched</p>
          <p className="font-medium text-xs">Rug-pills</p>
        </div>

        {/* table */}
        <div className="overflow-x-hidden overflow-auto scrollbar-hide h-[400px]">
          <Table className="w-full md:mb-60 lg:mb-60">
            <TableHeader>
              <TableRow className="border-none bg-[#0C141F]">
                <TableHead className="w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
                  Channel
                </TableHead>
                <TableHead className="w-[100px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
                  Call
                </TableHead>
                <TableHead className="w-[150px] text-center  font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
                  Pair
                </TableHead>
                <TableHead className=" w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
                  Price/MC
                </TableHead>
                <TableHead className="font-normal p-2 md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
                  <div className="w-[100px]">Total/Liquidity</div>
                </TableHead>
                <TableHead className=" w-[100px] text-center font-normal p-2 md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] ">
                  Pool/Amount
                </TableHead>
                <TableHead className="font-normal md:font-bold lg:font-bold text-center items-center justify-center flex text-[9px] md:text-[12px] lg:text-[12px]">
                  <div className="w-[100px] ">Scam Score</div>
                </TableHead>
                <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
                  <div className="w-[100px] text-center">Status</div>
                </TableHead>
                <TableHead className="font-normal md:font-bold text-center lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
                  <div className="w-[100px] text-center">Action</div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kolCalls?.map((row, index) => (
                <TableRow key={index} className="border-[#212E40]">
                  <TableCell className="font-bold text-[9px] md:text-sm lg:text-sm">
                    <div className="w-[100px]">{row.channel}</div>
                  </TableCell>
                  <TableCell className=" font-normal text-[9px] md:text-sm lg:text-sm">
                    <div className="w-[100px]">
                      <p className="text-[9px] md:text-sm lg:text-sm font-medium text-center">
                        <span className="font-semibold text-[9px] md:text-sm lg:text-sm">
                          {row.num}
                        </span>{" "}
                        {row.call}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="font-bold text-[9px] md:text-sm lg:text-sm items-center justify-center">
                    <div className="w-[100px] flex text-right justify-center items-center">
                      {row.pair}
                    </div>
                  </TableCell>

                  <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm w-[100px]">
                    <div className="w-[100px]">
                      <div className="flex gap-1">
                        <span className="font-medium text-[9px] md:text-sm lg:text-sm text-[#B5B6B6]">
                          P:
                        </span>{" "}
                        <p className="font-medium text-[9px] md:text-sm lg:text-sm">
                          {row.price}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <span className="font-medium text-[9px] md:text-sm lg:text-sm text-[#B5B6B6]">
                          MC:
                        </span>{" "}
                        <p className="font-medium text-[9px] md:text-sm lg:text-sm">
                          {row.mc}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className=" w-[100px] font-normal text-[9px] text-[#4CA244] md:text-sm lg:text-sm">
                    <div className="flex gap-1">
                      <span className="font-medium text-[9px] md:text-sm lg:text-sm text-[#B5B6B6]">
                        Start:
                      </span>{" "}
                      <p className="font-medium text-[9px] md:text-sm lg:text-sm">
                        {row.total}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <span className="font-medium text-[9px] md:text-sm lg:text-sm text-[#B5B6B6]">
                        Now:
                      </span>
                      <p className="font-medium text-[9px] md:text-sm lg:text-sm">
                        {row.liq}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] font-semibold text-[8px] md:text-sm lg:text-sm text-center">
                    {row.pool}
                    <div className=" justify-center flex gap-1 items-center">
                      <LuClock className=" text-[9px] md:text-sm lg:text-sm" />{" "}
                      <p className="font-medium text-[9px] md:text-sm lg:text-sm">
                        {row.amount}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="font-semi-bold text-[9px] md:text-base lg:text-base text-center items-center justify-center">
                    <div className="w-[150px] ">{row.scamScore}</div>
                  </TableCell>
                  <TableCell className="w-[100px] font-medium text-[9px] md:text-xs lg:text-xs pr-2 justify-start items-start text-left">
                    <div className=" flex justify-center items-center bg-[#1B2B3C] w-[98px] h-[24px] rounded-l border-2 border-[#212E40] text-[#E7E7E7] pb-[2px] text-center">
                      {row.status}
                    </div>
                  </TableCell>
                  <TableCell className=" w-[100px] font-semi-bold text-[9px] md:text-sm lg:text-sm">
                    <div className="flex gap-3 items-center">
                      <div className="">
                        <FaStar className="text-center w-[24px] h-[24px] text-white" />
                      </div>
                      <div className="flex justify-center items-center w-[24px] h-[24px] rounded-full bg-white">
                        <FaTelegramPlane className="text-center w-[15px] text-black" />
                      </div>
                      <div className="flex justify-center items-center w-[24px] h-[24px] rounded-full bg-white">
                        <FaXTwitter className="text-center w-[15px] text-black" />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default KolCalls;
