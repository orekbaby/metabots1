import React from "react";
import Image from "next/image";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import CopyTabs from "@/components/metabots/copyTrades/CopyTabs";
import YourWallet from "@/components/metabots/Dashboard/YourWallet";

const page = () => {
  return (
    <>
      <div className="pt-24 md:pt-20 lg:pt-20 h-auto md:h-[100vh] lg:h-[100vh] md:overflow-hidden lg:overflow-hidden">
        <div className="mx-auto w-full px-0">
          <div className="flex justify-between items-start pr-0 md:pr-2 lg:pr-2">
            <div className="flex justify-center gap-2 items-center">
              <h1 className="font-bold text-xs md:text-[27px] lg:text-[27px] pl-3 md:pl-0 lg:pl-0 text-left">
                Copy Trading & Wallet Analysis
              </h1>
              <BsFillExclamationCircleFill className="text-[#0D6EFD] text-base" />
            </div>
            <div className="hidden md:block lg:block">
              <YourWallet />
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
