"use client";
import React, { useState, useEffect, useRef } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineNotificationsNone } from "react-icons/md";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  interface MenuItemProps {
    label: string;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
    return <div className="text-white text-sm font-semibold">{label}</div>;
  };

  return (
    <header className="px-2 md:pl-28 lg:pl-28 p-3 border-b-2 border-[#212E40] flex justify-between fixed top-0 left-0 items-center md:p-2 lg:p-2 bg-[#0B0F16] w-full z-40">
      {/* Left */}
      <div className="flex">
        <Image
          src="/Metadapplogo.png"
          alt="Default Logo"
          width={32}
          height={32}
          className="items-center block md:hidden lg:hidden"
        />
        <div className="bg-[#4CA244] md:hidden lg:hidden flex items-center justify-center rounded-[2.19px] p-[5.47px] w-[34.94px] h-[13.13px]">
          <p className="font-bold text-[7.66px] leading-[13.02px] ">BETA</p>
        </div>
        <div className="hidden md:flex lg:flex items-center gap-8 justify-start">
          <Link href="/superUser" className="">
            <h3 className="text-base font-normal hover:underline hover:underline-offset-4">
              Become a Super User 🔥
            </h3>
          </Link>
          <Link href="/metadappDocs" className="">
            <p className="text-base font-normal hover:underline hover:underline-offset-4">
              Docs
            </p>
          </Link>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center gap-6 justify-end">
        <MdOutlineNotificationsNone className="text-[27px] hidden md:block lg:block" />
        <button
          className="bg-[#0D6EFD] items-center justify-center rounded-md text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white bg-button transition ease-in-out delay-150 hover:border-2 hover:bg-[#0B0F16] duration-300 dark:hover:bg-[#0B0F16] h-10 px-4 w-28 py-1"
          value="Log In"
        >
          {" "}
          Log In{" "}
        </button>

        <div
          ref={menuRef}
          className="text-white ml-3 md:ml-6 lg:ml-6 inline text-[32px] h-[20px] md:hidden lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <TbMenuDeep />
        </div>
      </div>
      {/* Menu contents */}
      {menuOpen && (
        <div className="md:hidden lg:hidden fixed top-[75px] right-1 w-3/6 bg-[#17212F] py-8 px-4">
          <div className="flex flex-col justify-center gap-6 text-sm font-nrmal ">
            <Link href="/referrals&Rewards">
              <MenuItem label="Referrals & Rewards" />
            </Link>
            <Link href="/superUser">
              <MenuItem label="Super User" />
            </Link>
            <Link href="/metadappDocs">
              <MenuItem label="Docs" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
