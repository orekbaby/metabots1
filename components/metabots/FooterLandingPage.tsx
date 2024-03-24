import React from "react";
import Image from "next/image";
const FooterLandingPage = () => {
  return (
    <div>
      <div className="md:hidden lg:hidden w-full">
        <div className="bg-[#121212] border-b w-[407px] h-[120px] border-[#262626]">
          <h2 className="text-xs text-center text-[#EBEBEB] pt-8 pb-4">
            Join Our Community
          </h2>
          <div className="flex items-center justify-center gap-6 pb-10">
            <Image src="/twitter.png" width={20} height={20} alt="Twitter" />
            <Image src="/discord.png" width={20} height={20} alt="Discord" />
            <Image src="/telegram.png" width={20} height={20} alt="Telegram" />
            <Image src="/linkedln.png" width={20} height={20} alt="LinkedIn" />
          </div>
        </div>
        <div className="bg-[#121212] w-[407px] border-white text-center text-[#EBEBEB] text-[9px] font-normal py-4">
          © {new Date().getFullYear()} metadapp-All Rights Reserved.
        </div>
      </div>

      <div className="hidden md:flex lg:flex w-full mt-20">
        <div className="bg-[#121212] border-b w-full h-[70px] border-[#262626] p-4">
          <div className="flex justify-between items-center">
            <p className="text-[18px] font-medium">Blog</p>
            <div className="bg-[#121212]text-center text-[#EBEBEB] text-xs font-normal">
              © {new Date().getFullYear()} metadapp-All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLandingPage;
