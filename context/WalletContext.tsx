import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "@/hooks/use-toast";
import { fetchSolanaWalletBalance } from "@/utils/apiCalls";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface Wallet {
  publicAddress: string;
  chain: "EVM" | "SOLANA";
  index:number;
}

interface WalletContextType {
  selectedWallet: Wallet | null;
  balances: Record<string, number>;
  setSelectedWallet: (wallet: Wallet) => void;
  fetchBalance: (wallet: Wallet) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [balances, setBalances] = useState<Record<string, number>>({});

  // Fetch balance for a wallet
  const fetchBalance = async (wallet: Wallet) => {
    if (!user?.token || balances[wallet.publicAddress] !== undefined) return;

    try {
      const walletBalance = await fetchSolanaWalletBalance(user.token, wallet.publicAddress);
      setBalances((prev) => ({
        ...prev,
        [wallet.publicAddress]: walletBalance.data,
      }));
    } catch (error) {
      console.error("Error fetching wallet balance:", error);
      toast({
        variant: "destructive",
        description: "Failed to fetch wallet balance. Please try again later.",
      });
    }
  };

  // Set default wallet and fetch its balance
  useEffect(() => {
    if (user?.wallet?.length > 0) {
      const defaultWallet = user.wallet.find((wallet:any) => wallet.chain === "SOLANA") || user.wallet[0];
      setSelectedWallet(defaultWallet);
      fetchBalance(defaultWallet);
    }
  }, [user?.wallet]);

  return (
    <WalletContext.Provider value={{ selectedWallet, balances, setSelectedWallet, fetchBalance }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWalletContext must be used within a WalletProvider");
  }
  return context;
};
