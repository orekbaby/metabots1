import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Chart from "@/components/metabots/alphaHuntTabs/lightChart/Chart";
import { freshWallet } from "@/utils/mockData";
import Image from "next/image";
const chartDetails = () => {
  return (
    <>
      <div className=" hidden md:block lg:block bg-[#0A1019] px-2 w-full h-full  text-[#6C757D]">
        <div className="flex flex-row mb-2 md:mb-4 lg:mb-4">
          <div className="flex items-center gap-2">
            <Image
              width={28}
              height={28}
              alt="eth"
              src="/Eth.png"
              className="w-[16px] h-[16px] md:w-[28px] md:h-[28px] lg:w-[28px] lg:h-[28px] items-center"
            />
            <div className="flex gap-1 items-center mr-2 md:mr-4 lg:mr-4">
              <h3 className="font-semibold text-xs md:text-[16px] lg:text-[16px] text-[#6C757D]">
                WETH
              </h3>
              <MdOutlineContentCopy className="text-xs md:text-[14.5px] lg:text-[12.4px]" />
            </div>
          </div>

          {/* second column */}
          {freshWallet?.map((row, index) => (
            <div key={index} className="">
              <div className="col-span-1 flex flex-col gap-3 p-1">
                <h2 className="font-normal text-[8px] md:text-[10px] lg:text-[12px] text-[#6C757D]">
                  {row.name}
                </h2>

                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex gap-1 items-center">
                      <p
                        className={`text-xs md:text-[17px] lg:text-[17px] ${
                          index === 0
                            ? "font-bold"
                            : index === 1
                            ? "font-normal"
                            : index === 2
                            ? "font-medium text-[#06C270]"
                            : "font-medium #FFC107"
                        }`}
                      >
                        {row.token}
                      </p>
                      <span
                        className={`font-medium text-[9px] ${
                          index === 0
                            ? "font-semibold text-[14.56px] text-[#06C270]"
                            : index === 1
                            ? "font-normal text-[12.3px] text-[#FFC107]"
                            : index === 2
                            ? ""
                            : " "
                        }
                                       md:text-[12px] lg:text-xs text-[#06C270]`}
                      >
                        {row.span}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="hidden md:block lg:block items-end justify-end pt-4 pl-4">
            <Button className="border-2 border-[#0D6EFD] w-[105.57px] h-[29.12px] rounded-[0.8px]">
              Analyse Token
            </Button>
          </div>
        </div>
        <div className="inline md:hidden lg:hidden items-end justify-end pb-4 ">
          <Button className="border-2 border-[#0D6EFD] w-[105.57px] h-[29.12px] rounded-[0.8px]">
            Analyse Token
          </Button>
        </div>

        <div className="text-center flex items-center justify-center mr-[100px]">
          <Chart />
        </div>
      </div>
    </>
  );
};

export default chartDetails;
