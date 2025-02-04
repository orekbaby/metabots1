import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GoCopy } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { createWalletAPI } from "@/utils/apiCalls";
import { CreateWalletResponse, WalletData } from "@/utils/types";


const CreateWallet = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [privateKey, setPrivateKey] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  const handleCreateWallet = async () => {
    if (!user?.token) {
      console.error("User token is missing");
      return;
    }

    setIsLoading(true);
    try {
      const response = await createWalletAPI(user?.token);
      if (response.status && response.data) {
        const { address, decryptedPrivateKey } = response.data;
        setWalletAddress(address);
        setPrivateKey(decryptedPrivateKey);
      } else {
        console.error("Unexpected API response:", response);
      }
    } catch (error) {
      console.error("Failed to create wallet:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log({user})

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button
            onClick={handleCreateWallet}
            disabled={isLoading}
            className="bg-blue-500 border-[#212E40] rounded-2xl"
          >
            {isLoading ? "Creating Wallet..." : "Create Wallet"}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[35%] max-h-auto border-none rounded-[16px] p-3 border bg-[#0A1019] border-[#212E40]">
          <div className="flex justify-center items-center bg-[#0C1623] border-[#1A232F] rounded-lg outline-none flex-col gap-3">
            <h5 className="font-semibold">Wallet has been created</h5>
            <div className="flex items-center justify-center gap-1 w-[373px] border-[#1A232F] border rounded-[8px] py-3 px-2">
              <p className="font-medium text-[#DBDBDC] text-[13px]">
                {walletAddress}
              </p>
              <GoCopy
                className="text-[#DBDBDC]"
                onClick={() => navigator.clipboard.writeText(walletAddress)}
              />
            </div>
          </div>

          <div className="flex pt-5 justify-center rounded-lg items-center bg-[#0C1623] border-[#1A232F] outline-none flex-col gap-3">
            <h5 className="font-semibold text-sm text-center">
              Click here to view your Private Key
            </h5>
            <span className="text-[#B5B6B6] font-normal text-xs">
              Make sure to copy your private key and store it in a secure place
            </span>
            <Button className="bg-[#0D6EFD] w-[243px] h-[36px] text-[#DBDBDC] font-medium text-[13px]">
              View Private Key
            </Button>
            <div className="flex items-center justify-between gap-2 w-[373px] border-[#1A232F] border rounded-[8px] py-3 px-2">
  <p
    className="font-medium text-[#DBDBDC] text-[13px] w-[50%] overflow-hidden text-ellipsis whitespace-nowrap text-center"
    title={privateKey || "Loading..."} 
  >
    {privateKey || "Loading..."}
  </p>
  <GoCopy
    className="text-[#DBDBDC] cursor-pointer"
    onClick={() => {
      if (privateKey) {
        navigator.clipboard.writeText(privateKey);
        alert("Private key copied to clipboard!");
      } else {
        alert("No private key available to copy.");
      }
    }}
  />
</div>

            <Button className="bg-[#0D6EFD] w-[104px] h-[28px] text-[#DBDBDC] font-medium text-[13px]">
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateWallet;
