import React from "react";
import Image from "next/image";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import CopyTabs from "@/components/metabots/copyTrades/CopyTabs";
import TradingHistory from "@/components/metabots/copyTrades/TradingHistory";

const page = () => {
  return (
    <>
      <div className="pt-24 md:pt-20 lg:pt-20 h-auto md:h-[100vh] lg:h-[100vh] md:overflow-hidden lg:overflow-hidden">
        <div className="mx-auto w-full px-0 md:px-2 lg:px-2">
          <div className="flex justify-between items-start pr-0 md:pr-2 lg:pr-2">
            <div className="flex justify-center gap-2 items-center">
              <h1 className="font-bold text-xs md:text-[27px] lg:text-[27px] pl-3 md:pl-0 lg:pl-0 text-left">
                Copy Trading & Wallet Analysis
              </h1>
              <BsFillExclamationCircleFill className="text-[#0D6EFD] text-base" />
            </div>
            <div className="border-[1px] border-[#212E40] rounded-[8px] p-2 hidden md:block lg:block">
              <h3 className="font-semibold md:font-bold lg:font-bold text-xs md:text-base lg:text-base">
                Your Wallets
              </h3>
              <Image
                className="rounded-[8px]"
                src="/wallet.png"
                alt="fraud"
                width={376}
                height={50}
              />
            </div>
          </div>

          <div className="w-full h-auto flex justify-start gap-4 border-b-2 border-[#101720]">
            <CopyTabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
