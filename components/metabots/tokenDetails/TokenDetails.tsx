import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { tokenDetails } from "@/utils/mockData";
const TokenDetails = () => {
  return (
    <>
      <div className="gap-4 hidden md:flex lg:flex flex-row mb-4 border-2 border-[#212E40] p-2 rounded-lg">
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
        {tokenDetails?.map((row, index) => (
          <div key={index} className="">
            {/* Second column */}
            <div className="col-span-1 flex flex-col gap-2 p-1">
              <h2 className="font-normal text-[10px] md:text-sm lg:text-sm text-[#6C757D]">
                {row.name}
              </h2>
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="flex gap-1 items-center">
                    <p className="font-medium md:font-bold lg:font-bold text-[14px] md:text-[18px] lg:text-[18px]">
                      {row.token}
                    </p>
                    <span className=" font-semibold text-[10px] text-[#06C270]">
                      {row.span}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Image (Fraud) */}
        <Image src="/scam.png " alt="" width={169} height={54} className="" />
      </div>
    </>
  );
};

export default TokenDetails;
