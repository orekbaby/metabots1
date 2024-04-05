import React from "react";
import Image from "next/image";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import CopyTabs from "@/components/metabots/copyTrades/CopyTabs";
import { WalletPerformance } from "@/components/metabots/copyTrades/WalletPerformance";

const Page = () => {
  return (
    <div className="mt-24 md:mt-20 lg:mt-20">
      <div className="mx-auto w-full md:max-w-[1280px] lg:max-w-[1280px] px-5 md:px-2 lg:px-2">
        <div className="flex justify-between">
          <div className="flex justify-center gap-2 items-center">
            <h1 className="font-bold text-[24px] text-center md:text-left lg:text-left">
              Copy Trading & Wallet Analysis
            </h1>
            <BsFillExclamationCircleFill className="text-[#0D6EFD] text-base" />
          </div>
          <div className="border-[1px] border-[#212E40] rounded-[8px] p-2">
            <h3 className="font-bold text-xs md:text-base lg:text-base mb-2">
              Your Wallets
            </h3>
            <Image
              className="rounded-[8px]"
              src="/wallet.png"
              alt="fraud"
              width={346}
              height={50}
            />
          </div>
        </div>
        <div className="flex justify-start gap-4 border-b-2 border-[#101720]">
          {/* Sidebar */}
          <div className="w-1/5">{/* Sidebar content */}</div>

          {/* Main Content */}
          <div className="w-3/5">
            {/* Main content here */}
            <CopyTabs />
          </div>
        </div>

        {/* Additional Container */}
        <div className="mt-8">
          {/* Additional container content */}
          <div className="mx-auto w-full md:max-w-[1280px] lg:max-w-[1280px] px-5 md:px-2 lg:px-2">
            {/* Content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
