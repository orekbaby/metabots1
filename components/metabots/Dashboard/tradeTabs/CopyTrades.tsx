import React from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CopyTrades = () => {
  return (
    <div className="p-2">
      {" "}
      <label className="font-bold text-xs" htmlFor="">
        input Address
      </label>
      <input
        className="mb-5 mt-2 text-xs w-full h-[38px] md:h-[43px] lg:h-[43px] py-[8px] px-[16px] bg-[#0C141F] text-[#212E40] border-[1px] border-[#212E40] rounded-[6px] md:rounded-[8px] lg:rounded-[8px]"
        type="text"
        placeholder="0x9c8bB8355629A72EB506D14B29BC3a9856107D21"
      />
      <div className="flex justify-between items-center">
        <div className="">
          <BsFillExclamationCircleFill />
        </div>
        <p className="font-normal text-xs">
          Use same Trade Settings as copied wallet
        </p>
        <Image
          className="resize-none"
          src="/check.png"
          alt="icon-pic"
          width={16}
          height={16}
        />
      </div>
      <div className="flex justify-end mt-5">
        <span className="font-normal text-xs text-[#FFC107] border-b-2px [#FFC107] border-[#FFC107]">
          Edit Trade settings
        </span>
      </div>
      <Button
        size="lg"
        className=" mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] bg-[#0D6EFD]
             text-white text-[14px] md:text-smlg:text-sm font-semibold leading-[23.8px]"
      >
        Update
      </Button>
    </div>
  );
};

export default CopyTrades;
