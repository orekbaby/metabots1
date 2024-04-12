"use client";
import React, { useState, useEffect, useRef } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Type annotation for menuRef

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Type annotation for event
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Type assertion for event.target
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
    <header
      className="px-2 md:pl-28 lg:pl-28 p-3 border-b-2 border-[#212E40] flex justify-between md:justify-end lg:justify-end fixed top-0 left-0 items-center 
  md:p-5 lg:p-2 bg-[#0B0F16] w-full z-40"
    >
      <Image
        src="/Metadapplogo.png"
        alt="Default Logo"
        width={32}
        height={32}
        className="items-center block  md:hidden lg:hidden"
      />

      <div className="flex justify-between md:justify-end lg:justify-end">
        <div className="flex items-center">
          <Button className="md:inline lg:inline bg-[#0D6EFD] rounded-md text-white mr-2 py-2 px-6 md:py-2 md:px-7 lg:py-2 lg:px-8 font-semibold text-[10px]">
            Log in
          </Button>
          <Button
            className="hidden md:inline lg:inline bg-[#0B0F16] rounded-md text-white mr-3 py-2 px-8 font-semibold text-[10px]"
            variant="outline"
          >
            Sign Up
          </Button>
          <div
            ref={menuRef}
            className="text-white ml-3 md:ml-6 lg:ml-6 inline text-[32px] h-[20px] md:hidden lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <TbMenuDeep />
          </div>
        </div>
      </div>
      {/* Menu contents */}
      {menuOpen && (
        <div className="md:hidden lg:hidden fixed top-[75px] right-1 w-3/6 bg-[#17212F] py-8 px-4">
          <div className="flex flex-col justify-center gap-6 text-sm font-medium ">
            <Link href="/referrals&Rewards">
              <MenuItem label="Referrals & Rewards" />
            </Link>
            <Link href="/superUser">
              {" "}
              <MenuItem label="Super User" />
            </Link>
            <Link href="/metadappDocs">
              {" "}
              <MenuItem label="Docs" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
