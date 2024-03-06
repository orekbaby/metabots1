import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const TokenDetails = () => {
  return (
    <>
      <div className="gap-4 hidden md:flex lg:flex flex-row mb-4">
        {/* First column */}
        <div className="flex gap-4 flex-row">
          <div className="flex items-center">
            <Image
              src="/etherum.png"
              alt="eth"
              width={48}
              height={48}
              className=""
            />
          </div>
          <div className="flex flex-1 flex-col gap-[8px] p-1">
            <div className="flex items-center gap-1">
              <h2 className="font-bold text-sm md:text-[20px] lg:text-[20px]">
                ETH
              </h2>
              <MdOutlineContentCopy className="text-base" />
              <h2 className="text-sm md:text-[20px] lg:text-[20px]">/ USDT</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="flex gap-2 items-center">
                  <h3 className="font-normal text-[18px]">Etherum</h3>
                  <IoMdNotificationsOutline className="text-[#0D6EFD] text-[24px]" />
                  <FaStar className="text-[#DBDBDC] text-[22px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="col-span-1 flex flex-col gap-2 p-1">
          <h2 className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
            Price (USD)
          </h2>
          <div className="flex items-center">
            <div className="flex flex-col">
              <div className="flex gap-1 items-center">
                <p className="font-medium md:font-bold lg:font-bold text-[14px] md:text-[18px] lg:text-[18px]">
                  $0.23
                </p>
                <span className=" font-semibold text-[10px] text-[#06C270]">
                  +1.41%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Third column */}
        <div className="col-span-1 flex flex-col gap-2 p-1">
          <h2 className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
            24H Volume (USD)
          </h2>
          <div className="flex items-center">
            <div className="flex flex-col font-medium md:font-bold lg:font-bold text-[14px] md:text-[18px] lg:text-[18px]">
              $61,234,872
            </div>
          </div>
        </div>

        {/* Fourth column */}
        <div className="col-span-1 flex flex-col gap-2 p-1">
          <h2 className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
            Total Liquidity
          </h2>
          <div className="flex items-center">
            <div className="flex flex-col font-medium md:font-bold lg:font-bold text-[14px] md:text-[18px] lg:text-[18px]">
              $86,789,172
            </div>
          </div>
        </div>

        {/* Fifth column */}
        <div className="col-span-1 flex flex-col gap-2 p-1">
          <h2 className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
            Market Cap
          </h2>
          <div className="flex items-center">
            <div className="flex flex-col font-medium md:font-bold lg:font-bold text-[14px] md:text-[18px] lg:text-[18px]">
              $3,157,783,174
            </div>
          </div>
        </div>

        {/* Sixth column */}
        <div className="col-span-1 flex flex-col gap-2 p-1">
          <h2 className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
            Token Holders
          </h2>
          <div className="flex items-center">
            <div className="font-medium md:font-bold lg:font-bold text-[14px] md:text-[18px] lg:text-[18px] flex flex-col">
              2145
            </div>
          </div>
        </div>

        {/* Image (Fraud) */}
        <Image
          src="/scam-sc.png "
          alt="fraud"
          width={169}
          height={54}
          className=""
        />
      </div>
    </>
  );
};

export default TokenDetails;
