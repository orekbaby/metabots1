import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CiSettings } from "react-icons/ci";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const WalletDetails = () => {
  return (
    <>
      <div className="w-full pl-2 bg-[#0A1019] border-b-2 border-[#101720] mb-2 py-3">
        <div className="jusify-center gap-2 hidden md:flex lg:flex py-0 md:py-3 lg:py-3">
          <h2 className="font-normal text-base mb-2">Chains Supported:</h2>
          <div className="w-[20px] h-[20px] rounded-full bg-white flex justify-center items-center">
            <FaEthereum className="text-black text-sm" />
          </div>
        </div>

        <div className="justify-between flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-start pr-8 flex gap-4 md:gap-0 lg:gap-0">
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-12 md:text-[24px] lg:text-[24px]">
                ETH.BEN
              </h2>

              <MdOutlineContentCopy className=" md:text-[24px] lg:text-[24px]" />
            </div>
            <div className="flex justify-center items-center gap-3">
              <h3 className="font-normal text-[9px] md:text-sm lg:text-sm">
                Wallet Balance:{" "}
              </h3>{" "}
              <span className="font-bold text-base md:text-[27px] lg:text-[27px] text-[#FFC107]">
                $141,160,817.62
              </span>
              <p className="font-normal text-base items-center border-b-2 border-[#212E40] hidden md:block lg:block">
                View balance history
              </p>
            </div>
          </div>

          <div className=" items-center flex mb-0 justify-center md:justify-start lg:justify-start gap-3 md:gap-3 lg:gap-3">
            <Button
              variant="outline"
              className="flex items-center justify-center w-[98px] h-[22px] bg-[#0B0F16] border-[#FFC107] border-[1px] rounded-sm md:rounded-[8px] lg:rounded-[8px] text-[9px] md:text-sm lg:text-sm font-normal text-[#B3B5B8]md:hidden lg:hidden"
            >
              Add wallet to Track
            </Button>
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="outline"
                  className=" w-[59px] h-[22px] md:w-[112px] lg:w-[112px] md:h-[35px] lg:h-[35px] bg-[#0D6EFD] border-none text-[white] font-normal text-[9px] md:text-sm lg:text-sm rounded-[4px] md:rounded-lg lg:rounded-lg"
                >
                  Copy Wallet
                </Button>
              </DialogTrigger>
              <DialogContent className="w-1/2 p-5 bg-[#0C141F] border-none">
                no content yet
              </DialogContent>
            </Dialog>

            <div className="justify-end items-end gap-4 hidden">
              <div className="w-[20px] h-[20px] border-2 border-[#B5B6B6] rounded-[4px] justify-center items-center">
                <IoIosNotificationsOutline className="text-xs" />
              </div>
              <div className="w-[20px] h-[20px] border-2 border-[#B5B6B6] rounded-[4px] justify-center items-center top-10">
                <CiSettings className="text-xs" />
              </div>
            </div>
            <div className="hidden md:block lg:block">
              <Dialog>
                <DialogTrigger>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center w-[115px] h-[35px] bg-[#0B0F16] border-[#B3B5B8] border-[1px] rounded-[8px] text-sm font-normal text-[#B3B5B8]"
                  >
                    <IoIosNotificationsOutline
                      className="text-[24px] mr-1 text-[#B3B5B8]"
                      style={{ width: "24px" }}
                    />
                    <span className="">Set Alerts</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-1/2 p-5 bg-[#0C141F] border-none">
                  no content yet
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletDetails;
