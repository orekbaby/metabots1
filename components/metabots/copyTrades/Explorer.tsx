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
import ExplorerTable from "@/components/metabots/copyTrades/ExplorerTable";
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
      {/* first table */}
      <div className=" flex flex-col gap-16 w-full h-full overflow-y-auto scrollbar-hide">
        <div className=" w-full h-auto flex items-center gap-16">
          <div className="w-full md:w-1/2 lg:w-1/2 h-auto border-[rgb(33,46,64)] border-2 p-2 rounded-md">
            <h3 className="font-bold text-[12px] md:text-base lg:text-base mb-5">
              Curated Smart Trader Lists
            </h3>
            <hr className="border-b-1 mb-4 border-[#212E40]" />
            <div className="bg-[#0A1019] w-full h-60 overflow-y-auto scrollbar-hide">
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
          </div>

          {/* 2nd table */}

          <div className="w-full md:w-1/2 lg:w-1/2 h-auto border-[#212E40] border-2 p-2 rounded-md">
            <h3 className="font-boldtext-[12px] md:text-base lg:text-base mb-5">
              Curated Smart Trader Lists
            </h3>
            <hr className="border-b-1 mb-4 border-[#212E40]" />
            <div className="bg-[#0A1019] w-full h-60 overflow-y-auto scrollbar-hide">
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
                      <TableCell className="w-[150px] md:w-full lg:w-full flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
                        {row.address}
                      </TableCell>

                      <TableCell className="p-1 text-center">
                        <div className="w-[100px]">
                          <p className="items-center justify-center pl-3 text-[#FFC107] font-bold text-[9px] md:text-sm lg:text-sm">
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

                      <TableCell className="text-[#05AC32] font-normal text-[9px] md:text-sm lg:text-sm">
                        <div className="w-[100px]">{row.profit}</div>
                      </TableCell>
                      <TableCell className="p-1">
                        <div className="w-[100px]">
                          <Button className=" w-[63px] h-[24px] md:w-[81px] lg:w-[81px] text-center md:h-[27px] lg:h-[27px] bg-[#084298] text-white rounded-[4px] text-[9px] md:text-xs lg:text-xs font-semibold">
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
        </div>
        {/* third table */}
        <div className="flex items-center gap-16 w-full h-auto">
          <div className="w-1/2 h-72 border-[#212E40] border-2 p-2 rounded-md overflow-y-auto scrollbar-hide">
            <h3 className="font-bold text-base mb-5">
              Curated Smart Trader Lists
            </h3>
            <hr className="border-b-1 mb-4 border-[#212E40]" />
            <div className="bg-[#0A1019]">
              <div className="flex justify-between px-4 items-center">
                <div className="flex items-center gap-3">
                  <p className="font-semi-bold text-sm">100xers</p>
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

          {/* fourth table */}
          <div className="w-1/2 h-72 border-[#212E40] border-2 p-2 rounded-md overflow-y-auto scrollbar-hide">
            <h3 className="font-bold text-base mb-5">
              Curated Smart Trader Lists
            </h3>
            <hr className="border-b-1 mb-4 border-[#212E40]" />
            <div className="bg-[#0A1019]">
              <div className="flex justify-between px-4 items-center">
                <div className="flex items-center gap-3">
                  <p className="font-semi-bold text-sm">50xers</p>
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
