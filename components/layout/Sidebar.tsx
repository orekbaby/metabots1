"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { sideBar } from "@/utils/mockData"; // Assuming sideBar is correctly defined
import Link from "next/link";

export default function SideBar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="z-50 hidden md:block lg:block fixed">
      <div
        className={` absolute z-1 top-0 left-0 min-h-screen bg-[#0B0F16] py-3  transition-width duration-1000 px-4 bg shadow-md ${
          isHovered ? "w-72" : "w-16"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Logo */}
        <div>
          {isHovered ? (
            <Image
              src="/hoverlogo.png"
              alt="Hover Logo"
              width={150}
              height={43}
              className="mb-10"
            />
          ) : (
            <Image
              src="/Metadapplogo.png"
              alt="Default Logo"
              width={24}
              height={24}
              className="mb-10 items-center"
            />
          )}
        </div>

        <div
          className={`hidden md:flex lg:flex flex-col gap-10
         items-start border-[#101720] w-full `}
        >
          {sideBar
            .filter((data) => data.id === 0)
            .map((data) => (
              <Link
                className="flex items-center gap-3  p-2"
                href={data.link}
                prefetch={false}
                key={data.id}
              >
                <Image src={data.img} alt={data.alt} width={20} height={20} />

                <h2 className={`font-medium text-sm ${!isHovered && "hidden"}`}>
                  {data.name}
                </h2>
              </Link>
            ))}

          <div className="w-full h-auto flex flex-col  py-5 border-b-2 border-[#212E40]">
            <h3
              className={`mb-3 text-center text-xs ${
                !isHovered && "hidden"
              } text-[rgb(164,206,238)]`}
            >
              SMART TRADING TOOLS
            </h3>
            {sideBar
              .filter((data) => data.id === 1 || data.id === 2)
              .map((data) => (
                <Link
                  className="flex items-center gap-3  p-2"
                  href={data.link}
                  prefetch={false}
                  key={data.id}
                >
                  <Image src={data.img} alt={data.alt} width={20} height={20} />

                  <h2
                    className={`font-medium text-sm ${!isHovered && "hidden"}`}
                  >
                    {data.name}
                  </h2>
                </Link>
              ))}
          </div>

          <div className="w-full h-auto flex flex-col  py-5">
            {sideBar
              .filter((data) => data.id === 3 || data.id === 4)
              .map((data) => (
                <Link
                  className="flex items-center gap-3 mb-5 p-2"
                  href={data.link}
                  prefetch={false}
                  key={data.id}
                >
                  <Image src={data.img} alt={data.alt} width={20} height={20} />
                  <h2
                    className={`font-medium text-sm ${!isHovered && "hidden"}`}
                  >
                    {data.name}
                  </h2>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
