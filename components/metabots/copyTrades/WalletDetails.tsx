import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { Button } from "@/components/ui/button";
const WalletDetails = () => {
  return (
    <>
      <div className="w-full pl-2 pr-7">
        <div className="flex jusify-center gap-2">
          <h2 className="font-normal text-base mb-2">Chains Supported:</h2>
          <div className="w-[20px] h-[20px] rounded-full bg-white flex justify-center items-center">
            <FaEthereum className="text-black text-sm" />
          </div>
        </div>

        <div className="flex justify-between items-center pr-12">
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-sm md:text-[16px] lg:text-[16px]">
                ETH.BEN
              </h2>

              <MdOutlineContentCopy className="text-base" />
            </div>
            <div className="flex justify-center items-center gap-3">
              <h3 className="font-normal text-sm text-[14px]">
                Wallet Balance:{" "}
              </h3>{" "}
              <span className="font-bold text-[27px] text-[#FFC107]">
                $141,160,817.62
              </span>
              <p className="font-normal text-sm items-center border-b-2 border-[#212E40]">
                View balance history
              </p>
            </div>
          </div>

          <div className="flex mb-16 md:mb-0 lg:mb-0 justify-center md:justify-start lg:justify-start gap-5 md:gap-3 lg:gap-3">
            <Button
              variant="outline"
              className="w-[83px] h-[24px] bg-[#0D6EFD] border-none rounded-[4px] text-[white] py-[6px] px-[14px] font-normal text-[10px]"
            >
              Copy Wallet
            </Button>
            <div className="">
              <Button
                variant="outline"
                className="flex items-center justify-center w-[83px] h-[24px] bg-[#0B0F16] border-[#B3B5B8] border-[1px] rounded-[4px] text-[#B3B5B8] py-[6px] px-[14px] font-normal text-[10px]"
              >
                <IoIosNotificationsOutline
                  className="text-[24px] mr-1 text-[#B3B5B8]"
                  style={{ width: "24px" }}
                />
                <span>Set Alerts</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletDetails;
