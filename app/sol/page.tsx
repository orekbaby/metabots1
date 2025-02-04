"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import YourWallet from "@/components/metabots/Dashboard/YourWallet";
import MemeTerminalTabs from "@/components/memeTabs/MemeTerminalTabs";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import ConnectWalletButton from "@/components/ConnectWalletButton";
import CreateWallet from "@/components/CreateWallet";

const Page = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  
  

  const solanaWallets = useMemo(() => {
    return user?.wallet.filter((wallet: any) => wallet.chain === "SOLANA") || [];
  }, [user?.wallet]);

  const isWalletVisible = useSelector((state: RootState) => state.walletVisibility.isWalletVisible);

  return (
    <div className="relative pt-24 md:pt-20 lg:pt-18 h-auto md:h-[100vh] lg:h-[100vh] md:overflow-hidden lg:overflow-hidden">
      {!user ? (
        <div className="w-full h-[100vh] flex-col flex items-center justify-center pt-60 fixed top-0 left-0 right-0 z-30">
          <p className="pb-5 text-[20px] font-semibold">
            Kindly connect your wallet to view this page 😊
          </p>
          <ConnectWalletButton />
        </div>
      ) : !solanaWallets.length ? (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center pt-60 fixed top-0 left-0 right-0 z-30">
          <p className="pb-5 text-[20px] font-semibold">
            Click the button below to create your Solana wallet 😊
          </p>
          <CreateWallet />
        </div>
      ) : (
        <div className="mx-auto w-full px-4 pb-40">
          <div className="flex justify-between items-start">
            <h1 className="font-bold text-xs md:text-[27px] lg:text-[24px] text-[#DBE9FF]">
              Meme Terminal
            </h1>

            {/* Right section with Wallet */}
           <div className={`ml-auto w-[300px] md:w-[350px] h-[98px] mb-5 ${isWalletVisible ? 'block' : 'hidden'} md:block lg:block`}>
        {isWalletVisible && <YourWallet />}
      </div>
          </div>
          <div className="w-full h-auto flex justify-start gap-4 border-b-0 md:border-b-2 border-[#101720]">
            <MemeTerminalTabs />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
