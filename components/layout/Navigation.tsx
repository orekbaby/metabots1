"use client";
import React, { useState, useEffect, useRef } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { Button } from "@/components/ui/button";

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
    <header className="pl-28 border-b-2 border-[#212E40] flex justify-end fixed top-0 left-0 items-center p-4 md:p-5 lg:p-2 bg-[#0B0F16] w-full z-40">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Button className="md:inline lg:inline bg-[#0D6EFD] rounded-md text-white mr-2 py-2 px-10 font-semibold text-[10px]">
            Log in
          </Button>
          <Button
            className="hidden md:inline lg:inline bg-[#0B0F16] rounded-md text-white mr-3 py-2 px-10 font-semibold text-[10px]"
            variant="outline"
          >
            Sign Up
          </Button>
          <div
            ref={menuRef}
            className="text-white ml-3 md:ml-6 lg:ml-6 inline text-[29px] h-[20px] md:hidden lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <TbMenuDeep />
          </div>
        </div>
      </div>
      {/* Menu contents */}
      {menuOpen && (
        <div className="md:hidden lg:hidden fixed bottom-0 left-0 w-full bg-[#0B0F16] py-3 px-4">
          <div className="flex justify-center gap-6">
            <MenuItem label="Referrals and Rewards" />
            <MenuItem label="Super User" />
            <MenuItem label="Docs" />
          </div>
        </div>
      )}
    </header>
  );
}
