import React from "react";
import { walletPerformamceNegative } from "@/utils/mockData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LossTradeDetails from "./LossTradeDetails";

const BiggestLosses = () => {
  return (
    <>
      <Accordion
        className="pr-0 w-full"
        type="single"
        collapsible
      >
        {walletPerformamceNegative.map((row) => (
          <AccordionItem
            key={row.id}
            className="w-full border-none mb-3 md:mb-5 lg:mb-5
             bg-[#161F2C] rounded-[8px] px-3"
            value={`item-${row.id}`}
          >
            <AccordionTrigger className="flex items-center gap-10 pr-[10%]">
              <div className="flex items-center justify-center gap-2">
                <Image
                  className="mr-2"
                  height={18}
                  width={18}
                  src={row.logo}
                  alt="logo"
                />
                <p className="text-[9px] md:text-xs lg:text-xs font-normal">
                  {row.name}
                </p>
              </div>
              <p className="text-[#E63E3A] font-bold text-xs md:text-base lg:text-base">
                {row.token}
              </p>
              <Button
                className="border-[#0D6EFD] border text-[8px] md:text-[10px] lg:text-[10px] px-4 py-2
               text-[#E7E7E7] rounded-[4px] font-semibold w-[60px] h-[26px]"
              >
                {row.button}
              </Button>
            </AccordionTrigger>
            <AccordionContent>
            <LossTradeDetails/>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default BiggestLosses;
