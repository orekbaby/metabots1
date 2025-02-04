"use client";
import React, { useState, useEffect, useRef, FC, useMemo } from "react";
import { TbMenuDeep } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineAccountBalanceWallet, MdOutlineNotificationsNone } from "react-icons/md";
import ConnectWalletButton from "../ConnectWalletButton";
import Search from "../Search";
import { useDispatch } from "react-redux";
import { toggleWalletVisibility } from "@/store/slices/walletVisibilitySlice"
import { useWalletContext } from "@/context/WalletContext";


interface NavigationProps {
  fastBuyValue?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setHoveredTokenAddress?: React.Dispatch<React.SetStateAction<string>>;
  setHoveredDeployerAddress?: React.Dispatch<React.SetStateAction<string>>;
  loading?: boolean;
  setFastBuyValue?: React.Dispatch<React.SetStateAction<string>>;
}


const Navigation:FC<NavigationProps> = ({fastBuyValue, handleChange, setHoveredTokenAddress, setHoveredDeployerAddress, loading,  setFastBuyValue  }) => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { selectedWallet, balances } = useWalletContext();
  const dispatch = useDispatch();

  const selectedWalletBalance = useMemo(() => {
    if (selectedWallet?.publicAddress && balances[selectedWallet.publicAddress] !== undefined) {
      const balance = balances[selectedWallet.publicAddress];
      return balance === 0 ? "0.000000" : balance.toFixed(6);
    }
    return "Fetching...";
  }, [selectedWallet, balances]);
  
  const handleToggleWalletVisibility = () => {
    dispatch(toggleWalletVisibility());
  };

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
    <header className="px-2 md:pl-28 lg:pl-28 p-3 border-b-2 border-[#212E40] flex justify-between items-center fixed top-0 left-0 w-full z-40 bg-[#0B0F16]">
      {/* Left Section */}
      <div className="flex items-center">
        <Image
          src="/Metadapplogo.png"
          alt="Default Logo"
          width={32}
          height={32}
          className="block md:hidden lg:hidden"
        />
        <div className="bg-[#4CA244] md:hidden lg:hidden flex items-center justify-center rounded-[2.19px] p-[5.47px] w-[34.94px] h-[13.13px]">
          <p className="font-bold text-[7.66px] leading-[13.02px]">BETA</p>
        </div>
      </div>

      {/* Centered Search Box */}
      <div className="flex-1 flex justify-center items-center">
        <div className="hidden md:flex lg:flex items-center gap-8 justify-center">
        <Search
  fastBuyValue={fastBuyValue || ""}
  setFastBuyValue={setFastBuyValue || (() => {})}
  handleChange={handleChange || (() => {})}
  setHoveredTokenAddress={setHoveredTokenAddress || (() => {})}
  setHoveredDeployerAddress={setHoveredDeployerAddress || (() => {})}
  loading={loading || false}
/>

        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 justify-end px-6 cursor-pointer" onClick={handleToggleWalletVisibility}>
      <div>
        <div>
         <div
          className="flex justify-center items-center text-[#CED4DA] gap-1 cursor-pointer"
            >
              <MdOutlineAccountBalanceWallet className="text-[#6C757D]" />
              <div className="flex items-center gap-1">
                <div className="rounded-full w-[20px] h-[20px] flex justify-center items-center bg-[#0B0F16] border-[#112034] border">
                  <Image src="/solanaLogo.svg" alt="Solana logo" width={10} height={10} />
                </div>
                <p className="font-normal text-xs text-[#CED4DA]">
                {`${selectedWalletBalance} SOL`}
                </p>
              </div>
            </div>
               
          </div>
        </div>

        <div>
          <ConnectWalletButton />
        </div>

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
};

export default Navigation;