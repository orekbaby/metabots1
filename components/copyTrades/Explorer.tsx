import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { explorer } from "@/utils/mockData";
import ExplorerTable from "@/components/copyTrades/ExplorerTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Explorer = () => {
  return (
    <>
      {/* first row */}
      <div className="w-full overflow-y-auto scrollbar-hide overflow-x-hidden h-auto border-[rgb(33,46,64)] border-2 p-2 rounded-md">
        <h3 className="font-bold text-[12px] md:text-base lg:text-base mb-5">
          Curated Smart Trader Lists
        </h3>
        <hr className="border-b mb-4 border-[#212E40]" />
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-12 w-full h-full md:h-[50vh] lg:h-[50vh] md:overflow-y-auto lg:overflow-y-auto md:scrollbar-hide lg:scrollbar-hide mb-0 md:mb-24 lg:mb-24">
          <div className="flex-col md:flex-row lg:flex-row w-full h-auto flex items-center gap-5 md:gap-5 lg:gap-5  px-0 md:px-3 lg:px-3 ">
            {/* first table */}

            <div className="bg-[#0A1019] rounded-lg w-full h-60 overflow-y-auto overflow-x-hidden scrollbar-hide">
              <div className="flex justify-between px-4 items-center">
                <div className="flex items-center gap-3">
                  <p className="font-semi-bold text-[9px] md:text-sm lg:text-sm">
                    Most Profitable Wallets
                  </p>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#0D6EFD]"></div>
                </div>
                <Select>
                  <SelectTrigger className="w-fit bg-transparent gap-2 mb-3">
                    <SelectValue
                      className="text-[7px] font-medium md:text-[12px] lg:text-xs"
                      placeholder="7Days"
                    />
                  </SelectTrigger>
                  <SelectContent className="w-[9px] text-white hover:text-[#17212F]  border-none outline-none">
                    <SelectItem value="1">1M</SelectItem>
                    <SelectItem value="3">3M</SelectItem>
                    <SelectItem value="5">5M</SelectItem>
                    <SelectItem value="15">15M</SelectItem>
                    <SelectItem value="30">30M</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <ExplorerTable />
            </div>
            {/* 2nd table */}
            <hr className="border-b mb-4 border-[#212E40]" />
            <div className="bg-[#0A1019] rounded-lg w-full h-60 overflow-y-auto scrollbar-hide">
              <div className="flex justify-between px-4 items-center">
                <div className="flex items-center gap-3">
                  <p className="font-semi-bold  text-[9px] md:text-sm lg:text-sm">
                    Win Rates
                  </p>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#0D6EFD]"></div>
                </div>
                <Select>
                  <SelectTrigger className="w-fit bg-transparent gap-2 mb-3">
                    <SelectValue placeholder="7Days" />
                  </SelectTrigger>
                  <SelectContent className="w-[9px] text-white hover:text-[#17212F]  border-none outline-none">
                    <SelectItem value="1">1M</SelectItem>
                    <SelectItem value="3">3M</SelectItem>
                    <SelectItem value="5">5M</SelectItem>
                    <SelectItem value="15">15M</SelectItem>
                    <SelectItem value="30">30M</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Table className="text-left overflow-x-hidden w-full">
                <TableHeader>
                  <TableRow className="border-none bg-[#0C141F]">
                    <TableHead className="font-bold md:font-bold lg:font-bold text-[9px] md:text-xs lg:text-xs">
                      <div className="w-[100px]">Address</div>
                    </TableHead>
                    <TableHead className=" text-center font-bold md:font-bold lg:font-bold text-[9px] md:text-xs lg:text-xs">
                      <div className="w-[100px]">Win Rate</div>
                    </TableHead>
                    <TableHead className="font-bold md:font-bold lg:font-bold text-[9px] md:text-xs lg:text-xs">
                      <div className="w-[100px] ">Realized Profit</div>
                    </TableHead>
                    <TableHead className=" w-[100px] font-bold md:font-bold lg:font-bold text-[9px] md:text-xs lg:text-xs">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {explorer?.map((row, index) => (
                    <TableRow key={index} className="border-[#212E40]">
                      <TableCell className="w-[150px] md:w-full lg:w-full flex items-center font-normal text-[9px] md:text-sm lg:text-sm pl-4">
                        {row.address}
                      </TableCell>

                      <TableCell className=" text-center pl-4">
                        <div className="w-[100px]">
                          <p className="items-center justify-center  text-[#FFC107] font-bold text-[9px] md:text-sm lg:text-sm">
                            {row.winRate}
                          </p>
                          <div className="flex items-center justify-center gap-2">
                            <p className="font-medium text-[7px] md:text-[10px] lg:text-[10px]">
                              Wins{" "}
                              <span className="font-medium text-[6.5px] md:text-[10px] lg:text-[10px] text-[#4CA244]">
                                {row.col1}
                              </span>
                            </p>{" "}
                            <p className="font-medium text-[7px] md:text-[10px] lg:text-[10px]">
                              loses{" "}
                              <span className="font-medium text-[6.5px] md:text-[10px] lg:text-[10px] text-[#A52A27]">
                                {row.col2}
                              </span>
                            </p>{" "}
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className="text-[#05AC32] font-normal text-[9px] text-left md:text-center lg:text-center md:text-sm lg:text-sm pl-4  ">
                        <div className="w-[100px]">{row.profit}</div>
                      </TableCell>
                      <TableCell className="pl-4">
                        <div className="w-[100px]">
                          <Button className=" w-[63px] h-[24px] md:w-[81px] lg:w-[81px] text-center md:h-[27px] lg:h-[27px] bg-[#084298] text-[#fff] rounded-[4px] text-[9px] md:text-xs lg:text-xs font-semibold ">
                            {row.button}
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/*Second row */}
          <div className="flex-col md:flex-row lg:flex-row w-full h-auto flex items-center gap-5 mb-10 md:mb-16 lg:mb-16 lg:gap-5">
            {/* third table */}
            <div className="bg-[#0A1019] w-full h-60 overflow-y-auto scrollbar-hide rounded-lg">
              <div className="flex justify-between px-4 items-center">
                <div className="flex items-center gap-3">
                  <p className="font-semi-bold text-[9px] md:text-sm lg:text-sm">
                    Most Profitable Wallets
                  </p>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#0D6EFD]"></div>
                </div>
                <Select>
                  <SelectTrigger className="w-fit bg-transparent gap-2 mb-3">
                    <SelectValue
                      className="text-[7px] font-medium md:text-[12px] lg:text-xs"
                      placeholder="7Days"
                    />
                  </SelectTrigger>
                  <SelectContent className="w-[9px] text-white hover:text-[#17212F]  border-none outline-none">
                    <SelectItem value="1">1M</SelectItem>
                    <SelectItem value="3">3M</SelectItem>
                    <SelectItem value="5">5M</SelectItem>
                    <SelectItem value="15">15M</SelectItem>
                    <SelectItem value="30">30M</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <ExplorerTable />
            </div>

            {/* fourth table */}

            <hr className="border-b mb-4 border-[#212E40]" />
            <div className="bg-[#0A1019] w-full h-60 rounded-lg overflow-y-auto scrollbar-hide">
              <div className="flex justify-between px-4 items-center">
                <div className="flex items-center gap-3">
                  <p className="font-semi-bold  text-[9px] md:text-sm lg:text-sm">
                    Win Rates
                  </p>
                  <div className="w-[12px] h-[12px] rounded-full bg-[#0D6EFD]"></div>
                </div>
                <Select>
                  <SelectTrigger className="w-fit bg-transparent gap-2 mb-3">
                    <SelectValue placeholder="7Days" />
                  </SelectTrigger>
                  <SelectContent className="w-[9px] text-white hover:text-[#17212F]  border-none outline-none">
                    <SelectItem value="1">1M</SelectItem>
                    <SelectItem value="3">3M</SelectItem>
                    <SelectItem value="5">5M</SelectItem>
                    <SelectItem value="15">15M</SelectItem>
                    <SelectItem value="30">30M</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <ExplorerTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explorer;
