import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const WalletDetails = () => {
  return (
    <>
      <div className="w-full pl-8 bg-[#0A1019] border-b-2 border-[#101720] mb-2 py-4">
        <div className="flex justify-between items-center">  
          <div className="text-sm font-medium ">Folakemi</div>
      <div className="items-center flex mb-0 justify-end gap-3">
      
            <Button
            className="flex items-center justify-center bg-transparent outline-0 norder-none text-[#B5B6B6] text-[9px] md:text-sm lg:text-xs font-normal "
            >
            5/5 Queries Available
            </Button>
            <Dialog>
              <DialogTrigger>
                <Button
                 
                  className="text-[#B5B6B6] outline-0 border-none bg-transparent font-normal text-[9px] md:text-xs lg:text-[10px] w-[67px] h-[24px] bg-[#17212F] rounded-[4.7px] px-1"
                >
                 Last 30 days
                </Button>
              </DialogTrigger>
              <DialogContent className="w-1/2 p-5 bg-[#0C141F] border-none">
                no content yet
              </DialogContent>
            </Dialog>
        </div>
        </div>
        <div className="justify-between flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-start pr-8 flex gap-4 md:gap-0 lg:gap-0">
          <div className="flex justify-center gap-4">
           <h2 className="font-normal text-xs md:text-[20px] leading-[27.2px] lg:text-[16px]">
              Wallet Balance:
              </h2>
        <div className="flex justify-center items-center gap-3">
              <h3 className="font-bold text-[9px] md:text-base lg:text-[20px] text-[#4CA244]">
        $6,890
              </h3>
              <span className="font-bold text-base md:text-[24px] lg:text-xs text-white">
              46.09800 SOL
              </span>
              {/* <p className="font-normal text-base items-center border-b-2 border-[#212E40] hidden md:block lg:block">
                View balance history
              </p> */}
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default WalletDetails;
