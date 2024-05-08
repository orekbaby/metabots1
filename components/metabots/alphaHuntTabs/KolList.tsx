import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { kolListMock } from "@/utils/mockData";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
const KolList = () => {
  return (
    <>
      <div className="w-full h-[50vh] overflow-y-auto mb-28 scrollbar-hide overflow-x-hidden">
        <h3 className="font-semibold text-[9px] md:text-xs lg:text-xs mb-5">
          Discover top Telegram channels for optimal copy trading{" "}
          <span className="text-[#FFC107] font-semibold text-xs border-b-2 border-[#FFC107]">
            here
          </span>
        </h3>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mb-5 md:mb-0 lg:mb-0">
          <div className="flex justify-start gap-4 items-center mb-5">
            <p className="font-semibold text-[9px] md:text-xs lg:text-xs text-[#E7E7E7]">
              Sort by:
            </p>
            <div className="flex  gap-6 md:gap-10 lg:gap-10 py-2 px-2 w-[130px] h-[25px] md:w-[170px]m lg:w-[170px] bg-[#17212F] rounded-lg border-2 border-[#212E40] items-center">
              <p className="font-semibold  text-[9px] md:text-xs lg:text-xs text-[#E7E7E7]">
                Number of Calls
              </p>
              <IoIosArrowDown />
            </div>
          </div>
          {/* second part */}
          <div className="flex justify-start md:justify-end lg:justify-end gap-2 md:gap-3 lg:gap-3">
            <div className="justify-center md:justify-between lg:justify-between flex w-[153px] md:w-[143px] lg:w-[143px] bg-[#17212F] border-2 border-[#212E40] h-[25px] px-3 rounded-lg items-center py-1">
              <p className="font-normal md:font-medium lg:font-medium  text-[#E7E7E7] text-[9px] md:text-xs lg:text-xs">
                1 Month
              </p>
              <div className="flex justify-end gap-3 items-center">
                <div className="flex w-[13px] h-[18px] rounded-l items-center justify-center"></div>
                <IoIosArrowDown />
              </div>
            </div>
            <div className="flex w-[125px] h-[25px] rounded-lg bg-[#17212F] border-2 text-center justify-center border-[#212E40] items-center">
              <p className="text-[#B5B6B6] text-[9px] md:text-xs lg:text-xs font-normal text-center">
                No of Calls
              </p>
            </div>
            <div className="flex w-[125px] h-[25px] rounded-lg bg-[#17212F] border-2 text-center justify-center border-[#212E40] items-center">
              <p className="text-[#B5B6B6] text-[9px] md:text-xs lg:text-xs font-normal  text-center">
                Rug pulls
              </p>
            </div>
            <div className="flex w-[125px] h-[25px] rounded-lg bg-[#17212F] border-2 text-center justify-center border-[#212E40] items-center">
              <p className="text-[#B5B6B6] text-[9px] md:text-xs lg:text-xs font-normal text-center">
                Hit rates
              </p>
            </div>
          </div>
        </div>
        {/* filter */}
        <div className=" w-fit md:w-[420px] lg:w-[420px]  h-[25px] md:h-[35px] lg:h-[35px] rounded-[500px] border-[#212E40] gap-2 md:gap-4 lg:gap-4 border-2 flex items-center mb-8 pr-4 md:pr-0 lg:pr-0 ">
          <div className="items-center bg-[#212E40] flex w-[48px] md:w-[68px] lg:w-[68px] h-[25px] md:h-[35px] lg:h-[35px] text-center rounded-l-[50px] px-2">
            <p className="font-bold text-[9px] md:text-xs lg:tet-xs">
              Filtered:
            </p>
          </div>
          <div className="">
            <p className="font-normal text-[9px] md:text-xs lg:tet-xs text-[#E7E7E7]">
              No of calls:{" "}
              <span className="font-semibold text-[9px] md:text-xs lg:tet-xs text-[#E7E7E7]">
                0-10
              </span>
            </p>{" "}
          </div>
          <div className="">
            <p className="font-normal text-[9px] md:text-xs lg:tet-xs text-[#E7E7E7]">
              Rug-Pulls:{" "}
              <span className="font-semibold text-[9px] md:text-xs lg:tet-xs text-[#E7E7E7]">
                10-50
              </span>
            </p>{" "}
          </div>
          <div className="">
            <p className="font-normal text-[9px] md:text-xs lg:tet-xs text-[#E7E7E7]">
              Hit Rate:{" "}
              <span className="font-semibold text-[9px] md:text-xs lg:tet-xs text-[#E7E7E7]">
                50 & Above
              </span>
            </p>{" "}
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-hidden w-full overflow-y-auto scrollbar-hide h-[400px]">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="border-none bg-[#0C141F]">
                <TableHead className="w-[150px] md:w-[150px] lg:w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
                  Channel
                </TableHead>
                <TableHead className="w-[100px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
                  Calls
                </TableHead>
                <TableHead className="w-[150px] md:w-[100px] lg:w-[100px] text-center font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
                  Hit rate
                </TableHead>

                <TableHead className=" w-[100px] text-left md:text-right lg:text-right font-normal p-2 md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
                  Winning Calls
                </TableHead>
                <TableHead className="font-normal md:font-bold lg:font-bold text-left md:text-right lg:text-right items-center text-[9px] md:text-[12px] lg:text-[12px] pr-4 pl-2 md:pl-2 lg:pl-2">
                  <div className="w-[100px] md:w-[150px] lg:w-[150px]">
                    Losing Calls
                  </div>
                </TableHead>
                <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-left md:text-center lg:text-center pl-4">
                  <div className="w-[100px]">Rug Pulls</div>
                </TableHead>
                <TableHead className="font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-left">
                  <div className="w-[100px]">Highest Returns</div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kolListMock?.map((row, index) => (
                <TableRow key={index} className="border-[#212E40]">
                  <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm">
                    <div className="w-[150px] md:w-[150px] lg:w-[150px]">
                      {row.channel}
                    </div>
                  </TableCell>
                  <TableCell className="w-[150px] font-medium text-[9px] md:text-sm lg:text-sm text-center">
                    <p className="text-[9px] md:text-sm lg:text-sm font-medium">
                      {row.calls}
                    </p>
                  </TableCell>
                  <TableCell className="font-normal text-[9px] md:text-xs lg:text-xs items-center text-center justify-center">
                    <div className="w-[150px] md:w-[100px] lg:w-[100px] pl-2 md:pl-0 lg:pl-0">
                      <p className="">
                        <span className="font-medium text-[10px] md:text-sm lg:text-sm">
                          {row.rate}
                        </span>{" "}
                        {""}
                        {row.hit}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold text-[8px] md:text-sm lg:text-sm text-left md:text-right lg:text-right">
                    <div className="w-[150px] pr-5">
                      <p className="font-medium text-sm">{row.winning}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-semi-bold text-[9px] md:text-sm lg:text-sm text-left md:text-right lg:text-center items-center justify-center">
                    <div className="w-[150px] pl-0 md:pl-6 lg:pl-6">
                      {row.losing}
                    </div>
                  </TableCell>
                  <TableCell className="font-normal text-[9px] md:text-xs lg:text-xs text-left md:text-center lg:text-center">
                    <div className="w-[150px]  pr-0 md:pr-12 lg:pr-12">
                      <p className="text-[#4CA244]">
                        <span className="font-semibold text-[10px] md:text-sm lg:text-sm text-white">
                          {row.num}
                        </span>
                        {""} {row.rugPulls}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="font-semi-bold text-[9px] md:text-sm lg:text-sm text-left text-[#4CA244]">
                    <div className="w-[150px]">{row.returns}</div>
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

export default KolList;
