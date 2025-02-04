"use client";
import React, { useState, useMemo, useEffect } from "react";
import {  FaRegCopy, FaGlobe, FaRegSquareCheck } from "react-icons/fa6";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useSelector } from "react-redux";
import Image from "next/image"
import { toast } from "@/hooks/use-toast";
import { fetchSolanaWalletBalance } from "@/utils/apiCalls";
import { FaAngleRight, FaCheckSquare, FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import { useWalletContext } from "@/context/WalletContext";
import { IoIosArrowDown } from "react-icons/io";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface Wallet {
  publicAddress: string;
  chain: "EVM" | "SOLANA";
  index:number;
}

interface User {
  token: string;
  wallet: Wallet[];
}

const YourWallet: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth) as { user: User | null };
  const solanaWallets = useMemo(() => {
    return user?.wallet.filter((wallet) => wallet.chain === "SOLANA") || [];
  }, [user?.wallet]);
  
  const { selectedWallet, balances, setSelectedWallet, fetchBalance } = useWalletContext();

  const selectedWalletBalance = useMemo(() => {
    if (selectedWallet?.publicAddress && balances[selectedWallet.publicAddress] !== undefined) {
      const balance = balances[selectedWallet.publicAddress];
      return balance === 0 ? "0.000000" : balance.toFixed(6);
    }
    return "Fetching...";
  }, [selectedWallet, balances]);

  const handleSelectWallet = async (wallet: Wallet) => {
    setSelectedWallet(wallet);
    if (!balances[wallet.publicAddress]) {
      await fetchBalance(wallet);
    }
    toast({
      description: `Wallet ${wallet.publicAddress.slice(0, 6)}...${wallet.publicAddress.slice(-4)} selected!`,
    });
  };

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address).then(() => {
      toast({
        variant: "default",
        description: "Wallet address copied to clipboard!",
      });
    });
  };

  return (
    <div className="bg-[#0C141F] border-transparent md:border lg:border md:border-[#212E40] lg:border-[#212E40] rounded-[8px] p-2 mt-2 w-full mb-3">
        <div className="flex justify-between items-center w-full">
            <div className="flex justify-center gap-2 items-center ">
              <h3 className="font-semibold md:font-bold lg:font-bold text-[10px] md:text-base lg:text-sm mb-2">
                Your Wallets
              </h3>
              <div className="pb-2">
              <div className="rounded-full w-[20px] h-[20px] flex justify-center items-center bg-[#0B0F16] border-[#112034] border">
                <Image
                  src="/solanaLogo.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="object-fit"
                />
              </div>
              </div>
            </div>
            <IoIosArrowDown />
          </div>
          <DropdownMenu>
  {/* Dropdown Menu Trigger */}
  <DropdownMenuTrigger className="cursor-pointer flex justify-between items-center border border-[#0D6EFD] bg-[#0A1019] w-full rounded-[4px] h-[50px] px-[10px] py-[6px]">
    {selectedWallet ? (
      <>
        <div className="gap-5 flex w-auto items-center">
          <div className="gap-2 flex items-center">
            <FaRegCheckSquare
              className={`text-[18px] ${selectedWallet ? "text-[#0D6EFD]" : "text-transparent"}`}
            />
            <div className="w-[26px] flex items-center text-center justify-center h-[26px] rounded-full bg-[#17212F] text-[#0D6EFD]">
              <p className="text-[8.38px] font-normal">
                {`W${solanaWallets.indexOf(selectedWallet) + 1}`}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-normal text-xs text-[#E0E0E0]">
              {`${selectedWallet.publicAddress.slice(0, 6)}....${selectedWallet.publicAddress.slice(-4)}`}
            </p>
            <p className="font-normal text-xs text-[#CED4DA]">
              {`${selectedWalletBalance} SOL`}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-3 p-1">
          <div className="flex gap-2 items-center">
            <FaRegCopy
              onClick={() => handleCopy(selectedWallet.publicAddress)}
              className="text-sm text-white cursor-pointer"
            />
            <FaGlobe className="text-sm text-white" />
          </div>
        </div>
      </>
    ) : (
      <></>
    )}
  </DropdownMenuTrigger>

  {/* Dropdown Menu Content */}
  <DropdownMenuContent className="bg-[#0A1019] border-none outline-0 w-full md:w-[400px] lg:w-[350px] h-[450px] overflow-y-auto scrollbar-hide rounded-[8px] p-4 hover:bg-transparent !important;
">
    {solanaWallets.map((wallet, index) => (
      <DropdownMenuItem
        key={index}
        onClick={() => handleSelectWallet(wallet)}
        className="cursor-pointer flex justify-between items-center border border-[#0D6EFD] bg-[#0A1019] w-full rounded-[4px] h-[50px] px-[10px] py-[6px] mb-2 hover:bg-transparent !important;
"
      >
        {/* Left section */}
        <div className="flex items-center gap-3">
          {selectedWallet?.publicAddress === wallet.publicAddress ? (
            <FaRegSquareCheck className="text-[#0D6EFD] text-[18px]" />
          ) : (
            <FaRegSquare className="text-[#0D6EFD] text-[18px]" />
          )}
          <div className="w-[26px] flex items-center justify-center h-[26px] rounded-full bg-[#17212F] text-[#0D6EFD]">
            <p className="text-[8.38px] font-normal">{`W${index + 1}`}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-normal text-xs text-[#E0E0E0]">
              {`${wallet.publicAddress.slice(0, 6)}....${wallet.publicAddress.slice(-4)}`}
            </p>
            <p className="font-normal text-xs text-[#CED4DA]">
              {balances[wallet.publicAddress] ? `${balances[wallet.publicAddress].toFixed(6)} SOL` : "******"}
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <FaRegCopy
            onClick={() => handleCopy(wallet.publicAddress)}
            className="text-sm text-white cursor-pointer"
          />
          <FaGlobe className="text-sm text-white" />
        </div>
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>


    </div>
  );
};

export default YourWallet;
