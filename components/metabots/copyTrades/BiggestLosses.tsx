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

const BiggestLosses = () => {
  return (
    <>
      <Accordion
        className="pr-0  w-full md:w-[510px] lg:w-[510px]"
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
            <AccordionTrigger className="flex items-center gap-6 pr-[10%]">
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
              <Button className="bg-[#017B46] text-[8px] md:text-[10px] lg:text-[10px] px-6 text-white rounded-[8px] w-[48px] h-[26px]">
                {row.button}
              </Button>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default BiggestLosses;
