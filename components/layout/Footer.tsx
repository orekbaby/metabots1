import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto w-[80%]  bg-[#121212] flex flex-col md:flex-row lg:flex-row justify-between p-4 ">
      <p className="font-normal text-[10px] md:text-[18px] lg:text-[18px] mb-2">
        About Us Blog
      </p>
      <div className="flex gap-2 justify-center">
        <span className="font-normal text-[10px] md:text-[18px] lg:text-[18px]">
          2023 ©
        </span>
        <p className="font-normal text-[10px] md:text-[18px] lg:text-[18px]">
          metadapp - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
