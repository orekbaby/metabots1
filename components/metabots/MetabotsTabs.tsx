"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MetabotsTabs = () => {
  const pathName = usePathname();
  const userId = 1;

  return (
    <div className="w-full flex pl-0 md:pl-2 lg:pl-2 mt-20 mb-5 items-center gap-3 p-3 bg-[#0C141F] border-t border-[#212E40]">
      <p className="text-sm font-semi-bold cursor-pointer">
        <Link
          className={`relative before:absolute before:left-0 before:bottom-[-20%] before:w-[100%] before:h-[2px]  text-[10px] md:text-base lg:text-base ${
            pathName === "/metabots"
              ? "before:bg-[#0D6EFD] text-[#0D6EFD]"
              : "before:bg-transparent text-white"
          }`}
          href="/metabots"
        >
          About Metabots
        </Link>
      </p>
      <p className="text-sm font-semi-bold cursor-pointer">
        <Link
          className={`relative before:absolute before:left-0 before:bottom-[-20%] before:w-[100%] before:h-[2px] text-[10px] md:text-base lg:text-base ${
            pathName === "/metabots/1"
              ? "before:bg-[#0D6EFD] text-[#0D6EFD]"
              : "before:bg-transparent text-white"
          }`}
          href={`/metabots/${userId}`}
        >
          Smart Trading Terminal
        </Link>
      </p>
      <p className="text-sm font-semi-bold cursor-pointer">
        <Link
          className={`relative before:absolute before:left-0 before:bottom-[-20%] before:w-[100%] before:h-[2px] text-[10px] md:text-base lg:text-base ${
            pathName === "/alphaHunt"
              ? "before:bg-[#0D6EFD] text-[#0D6EFD]"
              : "before:bg-transparent text-white"
          }`}
          href="/alphaHunt"
        >
          Alpha Hunt
        </Link>
      </p>
    </div>
  );
};

export default MetabotsTabs;
