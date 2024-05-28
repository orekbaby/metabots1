import React from "react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tradeHistory } from "@/utils/mockData";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export default function Limit() {
  return (
    <>
      <Table className="overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F]">
            <TableHead className="w-[150px]">
              <Select>
                <SelectTrigger className="w-fit bg-transparent gap-2 mb-3">
                  <SelectValue placeholder="1H" />
                </SelectTrigger>
                <SelectContent className="w-[16px] text-white hover:text-black  border-none outline-none">
                  <SelectItem value="1">1M</SelectItem>
                  <SelectItem value="3">3M</SelectItem>
                  <SelectItem value="5">5M</SelectItem>
                  <SelectItem value="15">15M</SelectItem>
                  <SelectItem value="30">30M</SelectItem>
                </SelectContent>
              </Select>
            </TableHead>
            <TableHead className="w-[100px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] text-center">
              Token
            </TableHead>
            <TableHead className="w-[150px] text-center font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Type/Price
            </TableHead>
            <TableHead className=" w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Amount/USD
            </TableHead>
            <TableHead className="font-normal p-2 md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              <div className="w-[100px]">Realized Profit</div>
            </TableHead>
            <TableHead className=" w-[100px] font-normal p-2 md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Realized Loss
            </TableHead>
            <TableHead className="font-normal text-left md:text-center lg:text-center md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              <div className="w-[100px]">Action</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tradeHistory?.map((row, index) => (
            <TableRow key={index} className="border-[#212E40]">
              <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm pl-4 md:pr-4 lg:pr-4">
                <div className="w-[100px]">{row.time}</div>
              </TableCell>
              <TableCell className=" font-normal text-[9px] md:text-sm lg:text-sm text-center">
                <div className="w-[100px] md:w-[150px] lg:w-[150px] text-center pl-2 md:pl-4 lg:pl-4 ">
                  <div className=" flex gap-1 text-left pl-3">
                    <Image
                      src="/sol.png"
                      width={18}
                      height={18}
                      alt="sol-img"
                      className=""
                    />
                    <h3 className="font-medium text-[9px] md:text-sm lg:text-sm">
                      SOLANA{" "}
                    </h3>
                  </div>
                  <p className="text-[9px] md:text-xs lg:text-xs font-normal">
                    {row.token}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-center font-normal text-[9px] md:text-sm lg:text-sm pl-6">
                <div className="w-[150px] md:w-[100px] lg:w-[100px]">
                  {row.price.includes("BUY") ? (
                    <>
                      <span style={{ color: "#4CA244" }}>BUY</span>
                      <span>{row.price.substring(3)}</span>
                    </>
                  ) : (
                    row.price
                  )}
                </div>
              </TableCell>

              <TableCell className="font-normal text-[9px] md:text-sm lg:text-sm pl-4">
                <div className="w-[100px]">{row.amount}</div>
              </TableCell>
              <TableCell className="font-normal text-[9px] text-[#4CA244] md:text-sm lg:text-sm">
                <div className="w-[100px]">{row.profit}</div>
              </TableCell>
              <TableCell className=" flex mt-2 items-center gap-1 font-normal text-[8px] md:text-sm lg:text-sm">
                <div className="w-[100px]">{row.loss}</div>
              </TableCell>
              <TableCell className="font-semi-bold  text-[9px] md:text-sm lg:text-sm pr-4">
                <div className="w-[100px]">
                  <div className="text-right rounded-[6px] bg-[#0D6EFD] w-[73px] md:w-[110px] lg:w-[110px] p-1">
                    {row.button}
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
