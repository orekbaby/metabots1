"use client"
import React, { useEffect, useState } from 'react';
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import { Button } from '@/components/ui/button';
import { modal } from '@/context/index';
import { useAccount, useDisconnect, useSignMessage } from 'wagmi';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/index"; 
import { connectWallet, logout, setError } from "@/store/slices/authSlice"; // import the actions
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

const ConnectWalletButton = () => {
  const { isConnected, address: publicAddress } = useAccount();
  const { disconnect } = useDisconnect();
  const dispatch = useDispatch<AppDispatch>();

  // Get state from Redux store
  const { user, error } = useSelector((state: RootState) => state.auth);

  const [isConnecting, setIsConnecting] = useState(false);
  
  const { toast } = useToast();
  const { signMessageAsync } = useSignMessage();

  useEffect(() => {
    if (isConnecting && isConnected && publicAddress) {
      dispatch(connectWallet({ address: publicAddress, signMessage: signMessageAsync }))
        .finally(() => setIsConnecting(false));
    }
  }, [isConnecting, isConnected, publicAddress, dispatch, signMessageAsync]);

  const handleConnectWallet = async (event: any) => {
    event.preventDefault();
    dispatch(setError("")); // Clear error state before connecting

    try {
      await modal.open({ view: 'Connect' });
      setIsConnecting(true);
    } catch (error) {
      dispatch(setError("Connection Declined"));
      disconnect();
      dispatch(logout());
      modal.close();
    }
  };

  const handleLogOut = () => {
    disconnect();
    dispatch(logout());
  };

  useEffect(() => {
    if (error) {
      toast({
        title: `${error}`,
        variant: "destructive",
      });
      disconnect();
      dispatch(logout());
      modal.close();
    }
  }, [error, disconnect, dispatch, toast, modal.close]);

  return (
    <>
      {user ? (
        <Dialog>
          <DialogTrigger>
            <Image src="/Deer.svg" alt="User Icon" width={32} height={32} className="rounded-full pt-2" />
          </DialogTrigger>
          <DialogContent className="bg-[#0a1019] max-w-[300px] h-auto outline-0 border-none py-4 px-3 rounded-md top-40 left-[85%] absolute shadow-lg">
            <div className="flex items-start justify-start flex-col gap-3 mb-3">
              <Image src="/Deer.svg" alt="User Icon" width={32} height={32} className="rounded-full" />
              <div className="text-white">
                <p className="text-sm font-medium">
                 { `${user?.publicAddress?.slice(0, 8)}...${user?.publicAddress?.slice(-8)}`}
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-left">
                <span className="bg-blue-500 border-blue-900 border-2 text-xs px-3 py-2 rounded-full">Normal User</span>
                <p className="text-white pt-5 font-medium text-sm">MetaPoints: <span className="text-yellow-500">0</span></p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm font-medium">Subscription: Beta</p>
                <div className="flex items-center justify-center bg-black text-xs w-auto px-1 py-2 rounded-full border-green-500 text-green-500 border-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium">Active Beta</span>
                </div>
              </div>
            </div>

            <Button className="mt-4 w-full bg-blue-500 text-white" onClick={handleLogOut}>
              Disconnect
            </Button>
          </DialogContent>
        </Dialog>
      ) : (
        <Button className='bg-blue-500' onClick={handleConnectWallet}>
          Connect Wallet
        </Button>
      )}
    </>
  );
};

export default ConnectWalletButton;