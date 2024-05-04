"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { smartTradeButtons } from "@/utils/mockData";
import { MdOutlineContentCopy } from "react-icons/md";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";
import { smartTradesTable } from "@/utils/mockData";

const SmartTradeUpdates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [checkedIndexes, setCheckedIndexes] = useState(
    new Array(smartTradeButtons.length).fill(true)
  );

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleCheckboxClick = (index: number) => {
    const newCheckedIndexes = [...checkedIndexes];
    newCheckedIndexes[index] = !newCheckedIndexes[index];
    setCheckedIndexes(newCheckedIndexes);
  };

  return (
    <>
      <div className="w-auto md:w-full lg:w-full items-center border-[#212E40] border-2 p-4 rounded-[12px]">
        <div className="flex flex-row md:flex-wrap lg:flex-wrap gap-4 w-full md:w-4/5 lg:w-4/5 mb-4 overflow-x-auto scrollbar-hide">
          {smartTradeButtons?.map((row, index: number) => (
            <div key={index} className="flex items-center basis-[20%]">
              <Button
                variant="outline"
                className={`font-normal gap-2 py-0 px-2 md:py-2 md:px-4 lg:py-2 lg:px-4 text-center text-[10px] md:text-base lg:text-base h-[28px] md:h-10 lg:h-10 rounded-[4px] md:rounded-md lg:rounded-md outline-none border-none ${
                  index === activeIndex
                    ? "bg-[#084298] hover:bg-[#084298]"
                    : "bg-[#17212F] hover:bg-[#084298] hover:text-white"
                } text-white`}
                onClick={() => handleButtonClick(index)}
              >
                {row.name}
                <div className="relative items-center">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    className={`appearance-none w-4 h-4 border-2 rounded items-center ${
                      index === activeIndex
                        ? "border-[#DBE9FF] hover:text-white"
                        : "border-[#084298]"
                    }`}
                    checked={checkedIndexes[index]}
                    onChange={() => handleCheckboxClick(index)}
                    style={{ cursor: "pointer" }}
                  />
                  {checkedIndexes[index] && (
                    <svg
                      className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3  h-3 pointer-events-none items-center ${
                        index === activeIndex
                          ? "text-[#DBE9FF] hover:text-white"
                          : "text-[#084298]"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </Button>
            </div>
          ))}
        </div>
        <hr className="border-[#212E40] p-1" />
        <div className="w-full h-[60vh] overflow-y-auto scrollbar-hide">
          <div className="flex justify-between border-2 rounded-lg border-[#212E40] mb-3 p-2">
            <h3 className="font-bold text-xs md:text-[16px] lg:text-base text-[#0D6EFD]">
              All
            </h3>
            <Button className=" w-[57px] h-[19px] md:w-[77px] md:h-[28px] lg:w-[77px] lg:h-[28px] bg-[#0D6EFD] text-white font-bold text-[9px] md:text-sm lg:text-sm">
              settings
            </Button>
          </div>

          <Table className="text-left w-full">
            <TableHeader>
              <TableRow className="border-none bg-[#080D14]">
                <TableHead className="w-[150px] font-bold text-[10px] md:text-xs lg:text-xs">
                  Time
                </TableHead>
                <TableHead className="w-[100px] font-semibold md:font-bold lg:font-bold text-[10px] md:text-xs lg:text-xs">
                  Trader
                </TableHead>
                <TableHead className="w-[150px] font-semibold md:font-bold lg:font-bold text-[10px] md:text-xs lg:text-xs">
                  Token
                </TableHead>
                <TableHead className="text-center md:text-left lg:text-left w-[150px] font-semibold md:font-bold lg:font-bold text-[10px] md:text-xs lg:text-xs">
                  Type/Price
                </TableHead>
                <TableHead className="text-center md:text-left lg:text-left w-[100px] font-semibold p-2 md:font-bold lg:font-bold text-[10px] md:text-xs lg:text-xs">
                  Amount/USD
                </TableHead>
                <TableHead className="w-[100px] font-semibold md:font-bold lg:font-boldtext-[10px] md:text-xs lg:text-xs pl-12">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {smartTradesTable?.map((row, index) => (
                <TableRow key={index} className="border-[#212E40]">
                  <TableCell className="flex items-center font-normal text-[7.59px] md:text-sm lg:text-sm">
                    <div className="w-[100px]">{row.time}</div>
                  </TableCell>
                  <TableCell className="">
                    <div className=" w-[100px] md:w-[200px] lg:w-[200px] gap-0">
                      <div className="flex gap-1 items-center">
                        <p className="font-semibold text-[6.5px] md:text-xs lg:text-xs">
                          {row.text1}
                        </p>{" "}
                        <MdOutlineContentCopy className=" text-[6.5px] md:text-xs lg:text-xs" />
                      </div>
                      <span
                        className="font-medium text-[6.5px] md:text-xs lg:text-xs rounded-md bg-[#8B85DF] pr-4"
                        style={{
                          backgroundColor:
                            index === 0 || index === 3 || index === 6
                              ? "#2A2845"
                              : index === 1 || index === 5
                              ? "#4F7E7A"
                              : "#467E9C",
                          color:
                            index === 0 || index === 3 || index === 6
                              ? "#8B85DF"
                              : index === 1 || index === 5
                              ? "#1C433F"
                              : "#203A47",
                        }}
                      >
                        {row.text2}
                      </span>{" "}
                      <div className=" flex gap-2">
                        <p className="text-[6.8px] md:text-sm lg:text-sm font-normal">
                          Win Rate:
                          <span
                            className="font-semibold text-[6.78px] md:text-[12.5px] lg:text-[12.5px] text-[#4CA244]"
                            style={{
                              color:
                                index === 1 || index === 5
                                  ? "#FFA500"
                                  : "#4CA244",
                            }}
                          >
                            {row.span1}
                          </span>
                        </p>
                        <p className="text-[6.5px] md:text-sm lg:text-smfont-normal">
                          P&L:
                          <span className="text-[#E63E3A] font-semibold text-[6.78px] md:text-[12.5px] lg:text-[12.5px]">
                            {row.span2}
                          </span>
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="">
                    <div className="w-[100px] md:w-[150px] lg:w-[150px]">
                      <div className="flex gap-1">
                        <Image
                          src={row.img}
                          width={18}
                          height={18}
                          alt="sol-img"
                        />
                        <h3 className="text-[7.89px] md:text-[14.5px] lg:text-[14.5px] font-medium">
                          SOLANA
                        </h3>
                      </div>
                      <p className="font-normal text-[8.78px] md:text-xs lg:text-xs">
                        {row.token}$1M{" "}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="w-[100px] text-center md:text-left lg:text-left flex flex-col pt-6 font-normal text-[7.59px] md:text-sm lg:text-sm">
                    {row.price.includes("BUY") ? (
                      <>
                        <span
                          className="font-bold text-[7.59px] md:text-sm lg:text-sm"
                          style={{ color: "#4CA244" }}
                        >
                          BUY
                        </span>
                        <span className="font-bold text-[7.59px] md:text-sm lg:text-sm">
                          {row.price.substring(3)}
                        </span>
                      </>
                    ) : row.price.includes("SELL") ? (
                      <>
                        <span
                          className="font-bold text-[7.59px] md:text-sm lg:text-sm"
                          style={{ color: "#E63E3A" }}
                        >
                          SELL
                        </span>
                        <span className="font-bold text-[7.59px] md:text-sm lg:text-sm">
                          {row.price.substring(4)}
                        </span>
                      </>
                    ) : (
                      row.price
                    )}
                    {row.priceValue}
                  </TableCell>

                  <TableCell className="font-normal text-center md:text-left lg:text-left text-[6.5px] md:text-sm lg:text-sm">
                    <div className="w-[150px] md:w-[100px] lg:w-[100px]">
                      <p className="font-bold text-[10px] md:text-sm lg:text-sm">
                        {row.amount1}
                      </p>
                      {row.amount2}
                    </div>
                  </TableCell>
                  <TableCell className="w-[100px] font-normal">
                    <Button className="text-center rounded-l md:rounded-[6px] lg:rounded-[6px] text-[9px] md:text-base lg:text-base bg-[#0D6EFD] w-[83px] h-[28px] md:w-[112px] md:h-[35px] lg:w-[112px] lg:h-[35px] p-1">
                      {row.button}
                    </Button>
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

export default SmartTradeUpdates;
