import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
const FooterNav = () => {
  return (
    <>
      <div className="bg-[#0B0F16] w-full h-[70px] fixed bottom-0 left-0 block md:hidden lg:hidden">
        <div className="flex justify-between p-6 items-center">
          <Link href="/metabots/1">
            <FaHome className="text-[24px]" />
          </Link>

          <Link href="/metabots/1">
            <Image
              src="/metabots.png"
              alt="Default Logo"
              width={24}
              height={24}
              className="items-center"
            />
          </Link>

          <Link href="/copyTrade">
            <Image
              src="/sockettrade.png"
              alt="Default Logo"
              width={24}
              height={24}
              className="items-center"
            />
          </Link>

          <Link href="">
            <Image
              src="/copytrade.png"
              alt="Default Logo"
              width={24}
              height={24}
              className="items-center"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FooterNav;
