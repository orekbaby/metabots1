import React from "react";
import Image from "next/image";
const FooterLandingPage = () => {
  return (
    <div>
      <div className=" flex md:hidden lg:hidden w-full justify-center items-center absolute">
        <div className="bg-[rgb(18,18,18)] border-b-2 w-full h-[120px] border-[#262626] mb-28 md:mb-0 lg:mb-0">
          <h2 className="text-xs font-normal text-center text-[#EBEBEB] pt-8 pb-4">
            Join Our Community
          </h2>
          <div className="flex items-center justify-center gap-6 pb-10">
            <Image src="/twitter.png" width={20} height={20} alt="Twitter" />
            {/* <Image src="/discord.png" width={20} height={20} alt="Discord" /> */}
            <Image src="/telegram.png" width={20} height={20} alt="Telegram" />
            {/* <Image src="/linkedln.png" width={20} height={20} alt="LinkedIn" /> */}
          </div>
          <div
            className="absolute w-full border-white text-center
         items-center bg-[#121212] text-[#EBEBEB] text-[9px] font-normal py-4 "
          >
            © {new Date().getFullYear()} metadapp-All Rights Reserved.
          </div>
        </div>
      </div>

      <div className="hidden md:flex lg:flex w-full absolute">
        <div className="bg-[#121212] border-t-2 w-full h-[105px] rounded-l border-[#262626] pt-4 pb-8 pr-4">
          <div className="flex justify-start items-center">
            <p className="text-[18px] font-medium pl-12">Blog</p>
          </div>
          <div className="text-center text-white text-md font-medium flex justify-end  pr-32">
            © {new Date().getFullYear()} Metadapp-All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLandingPage;
