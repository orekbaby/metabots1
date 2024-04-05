import React from "react";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
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
      <Table className="text-left overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F]">
            <TableHead className="w-[150px]">
              <Select>
                <SelectTrigger className="w-fit bg-transparent gap-2 mb-3">
                  <SelectValue placeholder="1H" />
                </SelectTrigger>
                <SelectContent className="w-[24px] text-white hover:text-black bg-[#060A0F] border-none outline-none">
                  <SelectItem value="1">1M</SelectItem>
                  <SelectItem value="3">3M</SelectItem>
                  <SelectItem value="5">5M</SelectItem>
                  <SelectItem value="15">15M</SelectItem>
                  <SelectItem value="30">30M</SelectItem>
                </SelectContent>
              </Select>
            </TableHead>
            <TableHead className=" w-[100px] font-semibold md:font-bold lg:font-bold text-[12px]">
              Token
            </TableHead>
            <TableHead className="w-[150px] font-semibold md:font-bold lg:font-bold text-[12px]">
              Type/Price
            </TableHead>
            <TableHead className=" w-[150px] font-semibold md:font-bold lg:font-bold text-[12px]">
              Amount/USD
            </TableHead>
            <TableHead className=" w-[100px] font-semibold p-2 md:font-bold lg:font-bold text-[12px]">
              Realized Profit
            </TableHead>
            <TableHead className=" w-[100px] font-semibold p-2 md:font-bold lg:font-bold text-[12px]">
              Realized Loss
            </TableHead>
            <TableHead className=" w-[200px] font-semibold md:font-bold lg:font-bold text-[12px]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tradeHistory?.map((row, index) => (
            <TableRow key={index} className="border-[#212E40]">
              <TableCell className="flex items-center font-normal text-[9px] md:text-sm lg:text-sm">
                {row.time}
              </TableCell>
              <TableCell className=" w-[150px] font-normal text-[9px] md:text-sm lg:text-sm">
                <div className=" flex gap-1">
                  <Image
                    src="/sol.png"
                    width={18}
                    height={18}
                    alt="sol-img"
                    className=""
                  />
                  <h3 className="font-medium text-sm">SOLANA </h3>
                </div>
                {row.token}
              </TableCell>
              <TableCell className="w-[100px] font-normal text-[9px] md:text-sm lg:text-sm">
                {row.price.includes("BUY") ? (
                  <>
                    <span style={{ color: "#4CA244" }}>BUY</span>
                    <span>{row.price.substring(3)}</span>
                  </>
                ) : (
                  row.price
                )}
              </TableCell>

              <TableCell className=" w-[150px] font-normal text-[9px] md:text-sm lg:text-sm">
                {row.amount}
              </TableCell>
              <TableCell className=" w-[150px] font-normal text-[9px] text-[#4CA244] md:text-sm lg:text-sm">
                {row.profit}
              </TableCell>
              <TableCell className="w-[150px] flex mt-2 items-center gap-1 font-normal text-[8px] md:text-sm lg:text-sm">
                {row.loss}
              </TableCell>
              <TableCell className="w-[200px] font-semi-bold text-[9px] md:text-sm lg:text-sm">
                <div className="text-center rounded-[6px] bg-[#0D6EFD] w-[110px] p-1">
                  {row.button}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
