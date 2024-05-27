import React from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { priceAlertsMock } from "@/utils/copyMockData3";

export default function Limits() {
  return (
    <>
      <Table className="text-left overflow-x-hidden w-full">
        <TableHeader>
          <TableRow className="border-none bg-[#0C141F] flex items-center pt-2">
            <TableHead className="text-left w-[120px] md:w-[150px] lg:w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Set Alert Date
            </TableHead>

            <TableHead className="text-center w-[50px] md:w-[80px] lg:w-[80px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Token
            </TableHead>

            <TableHead className="text-center  w-[120px] md:w-[150px] lg:w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px] pr-4 md:pr-4 lg:pr-8 ">
              Alert Price
            </TableHead>

            <TableHead className="text-left w-[120px] md:w-[150px] lg:w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Alert Price
            </TableHead>
            <TableHead className="text-left w-[120px] md:w-[150px] lg:w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Status
            </TableHead>

            <TableHead className="text-left w-[120px] md:w-[150px] lg:w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Alert Type
            </TableHead>

            <TableHead className="text-left w-[120px] md:w-[150px] lg:w-[150px] font-normal md:font-bold lg:font-bold text-[9px] md:text-[12px] lg:text-[12px]">
              Exp.Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {priceAlertsMock?.map((row, index) => (
            <TableRow key={index} className="border-none flex items-center">
              <TableCell className=" text-left w-[120px] md:w-[150px] lg:w-[150px] flex items-center font-normal text-[9px] md:text-xs lg:text-xs pl-4">
                {row.Date}
              </TableCell>
              <TableCell className="text-center w-[50px] md:w-[80px] lg:w-[80px] font-normal text-[9px] md:text-xs lg:text-xs pr-2 md:pr-4 lg:pr-4">
                {row.Token}
              </TableCell>
              <TableCell className="text-center w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-sm lg:text-sm flex gap-2 items-center  pl-8 md:pl-8 lg:pl-8">
                <span
                  className={`text-left lowercase ${
                    row.RaisesAbove === "rises above"
                      ? "text-[#06C270]"
                      : "text-[#FF3B3B]"
                  }`}
                >
                  {row.RaisesAbove}
                </span>
                <IoMdArrowDropdown
                  className={
                    row.RaisesAbove === "rises above"
                      ? "text-[#06C270]"
                      : "text-[#FF3B3B]"
                  }
                />
              </TableCell>

              <TableCell className=" text-left  w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-xs pl-4">
                {row.Status === "completed" ? (
                  <span className="text-[#06C270] text-left lowercase">
                    {" "}
                    {row.Status}
                  </span>
                ) : (
                  <span className="text-[#FFC107] text-left lowercase">
                    {row.Status}
                  </span>
                )}
              </TableCell>

              <TableCell className="text-left w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-xs pl-4">
                {row.AlertPrice}
              </TableCell>
              <TableCell className="text-left w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-xs pl-4">
                {row.AlertType}
              </TableCell>

              <TableCell className="text-left w-[120px] md:w-[150px] lg:w-[150px] font-normal text-[9px] md:text-xs lg:text-xs">
                {row.ExpDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
