import React from "react";
import Image from "next/image";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import CopyTabs from "@/components/metabots/copyTrades/CopyTabs";
import YourWallet from "@/components/metabots/Dashboard/YourWallet";
import { TbBrandCoinbase } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="pt-24 md:pt-20 lg:pt-18 h-auto md:h-[100vh] lg:h-[100vh] md:overflow-hidden lg:overflow-hidden">
        <div className="mx-auto w-full px-0">
          <div className="flex justify-between items-start  pl-4 pr-0 md:pr-2 lg:pr-8">
            <div className="flex flex-col gap-5 items-center">
            <div className="flex justify-center gap-2 items-center">
              <div className="flex justify-start">
              <div className="flex justify-center items-center rounded-full w-[19.87px] h-[19.87px] bg-[#0052FF]">
            <TbBrandCoinbase className="w-[14.87px] h-[14.87px] text-white"/>
            </div>
            <div className="flex justify-center items-center rounded-full w-[19.87px] h-[19.87px] bg-white">
            <FaEthereum className="w-[14.87px] h-[14.87px] text-black"/>
            </div>
            <Image
            width={20.33}
            height={20.33}
            src="/blast.svg"
            className="rounded-full"
            alt=""
            />
            </div>
              
              <h1 className="font-bold text-xs md:text-[27px] lg:text-[24px] pl-3 md:pl-0 lg:pl-0 text-left">
                Copy Trading & Wallet Analysis
              </h1>
              <BsFillExclamationCircleFill className="text-[#0D6EFD] text-base" />
            </div>
            <p className="font-normal text-sm text-white leading-[23.8px]">Scan & copy any EVM wallet performance and trading activities.
            </p>
            </div>
            <div className=" w-full md:w-[392px] lg:w-[392px] h-[98px] hidden md:block lg:block">
              <YourWallet />
            </div>
          </div>

          <div className="w-full h-auto flex justify-start gap-4 border-b-0 md:border-b-2 md:border-[#101720] lg:border-b-2 lg:border-[#101720]">
            <CopyTabs />
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
