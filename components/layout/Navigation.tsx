import React from "react";
import { TbMenuDeep } from "react-icons/tb";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <header
      className=" pl-28 border-b-2 border-[#212E40] flex justify-end fixed top-0 left-0 items-center p-4 
    md:p-5 lg:p-2 bg-[#0B0F16] w-full z-40"
    >
      <div className="flex justify between">
        <div className="flex items-center">
          <Button className="hidden md:inline lg:inline bg-[#0D6EFD] rounded-md text-white mr-2 py-2 px-10 font-semibold text-[10px]">
            Sign Up
          </Button>
          <TbMenuDeep className=" text-white ml-3 md:ml-6 lg:ml-6 inline text-[29px] h-[20px] md:hidden lg:hidden" />
        </div>
      </div>
    </header>
  );
}
