import React from "react";
import Image from "next/image";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import CopyTabs from "@/components/CopyTabs"
import YourWallet from "@/components/metabots/Dashboard/YourWallet";
import { TbBrandCoinbase } from "react-icons/tb";
import { FaEthereum } from "react-icons/fa";

const page = () => {
  const handleCopy = {
    
  }
  return (
    <>
      <div className="pt-24 md:pt-20 lg:pt-18 h-auto md:h-[100vh] lg:h-[100vh] md:overflow-hidden lg:overflow-hidden">
        <div className="mx-auto w-full px-4">
        <div className="flex justify-between items-start">
  {/* Left section with image and Copy Trading */}
  <div className="flex flex-col gap-3 items-start">
    <div className="flex items-center gap-3">
      {/* Image Container */}
      <div className="flex items-center justify-center rounded-full w-[42px] h-[42px] bg-[#0B0F16] border-[2.1px] border-[#112034]">
        <Image
          width={21}
          height={21}
          src="/solanaLogo.svg"
          className="rounded-full"
          alt="Solana Logo"
        />
      </div>
      {/* Heading */}
      <h1 className="font-bold text-xs md:text-[27px] lg:text-[24px] text-[#DBE9FF] text-left">
        Copy Trading
      </h1>
    </div>
    {/* Subtitle */}
    <p className="font-normal text-sm text-white leading-[23.8px] pl-6">
      Scan & copy any Solana wallet performance and trading activities.
    </p>
  </div>

  {/* Right section with Wallet */}
  <div className="ml-auto w-full md:w-[392px] lg:w-[392px] h-[98px] hidden md:block lg:block">
    <YourWallet />
  </div>
</div>


          <div className="w-full h-auto flex justify-start gap-4 border-b-0 md:border-b-2 md:border-[#101720] lg:border-b-2 lg:border-[#101720]">
            <CopyTabs handleCopy={handleCopy} settingsData={undefined}              />
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
