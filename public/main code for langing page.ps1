import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import FooterLandingPage from "@/components/metabots/FooterLandingPage";

export default function Home() {
  return (
    <main className="mt-24 md:mt-32 lg:mt-32">
      <div className="mx-auto w-full md:max-w-[1280px] lg:max-w-[1280px] px-5 md:px-4 lg:px-6">
        <div className=" flex justify-center flex-col md:flex-row lg:flex-row gap-10 md:gap-20 lg:gap-20 w-full mb-0 md:mb-28 lg:mb-28">
          <div className="w-full text-center md:text-left lg:text-left pt-5">
            <h1
              className="font-bold text-center md:text-left lg:text-left text-2xl md:text-[42.3px] lg:text-[42.3px] mb-8 w-[95%] md:w-full lg:w-full"
              style={{ lineHeight: "1.4" }}
            >
              Smart <span className="text-[#0D6EFD]">Trading Platform For</span>{" "}
              On-chain <span className="text-[#0D6EFD]">Traders</span>
            </h1>

            <p
              className=" w-full font-normal text-[12.5px] md:text-[18px] lg:text-[18px] mb-10 text-center md:text-left lg:text-left"
              style={{ lineHeight: "1.6" }}
            >
              Gain an unfair market advantage with our powerful set of DEX
              automation & on-chain copy trading tools.
            </p>

            <Button className="text-center justify-center md:justify-start lg:justify-start md:inline lg:inline w-36 h-10 bg-[#0D6EFD] rounded-lg text-white py-1 px-4 font-semibold text-[14px]">
              Get Started
            </Button>
          </div>
          {/* <Link href="/metabots"> Visit Metabot page</Link> */}
          <div className="w-full flex justify-center">
            <div className="max-w-[524px] w-full h-[310px]">
              <div className="relative w-full">
                <video
                  className="object-cover w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="https://res.cloudinary.com/dfzlrctza/video/upload/v1706626025/lxanu8irmmrtmo5ivpe4.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="text-center mb-5 justify-center items-center">
          <h1
            className="text-[24px] md:text-[35.3px] lg:text-[35.3px] font-bold text-[#F3BA2F] text-center mb-5  md:mb-10 lg:mb-10
"
          >
            What is Smart Trading?
          </h1>
          <p className="font-normal text-[11px] md:text-[20px] lg:text-[20px] w-full md:w-[85%] lg:w-[85%] mb-0 md:mb-40 lg:mb-40">
            Smart trading is an innovative approach to on-chain trading that
            utilises a powerful combination of automated strategies and deep
            analysis of on-chain activity to discover hidden data points needed
            to execute non-obvious market opportunities with greater efficiency
            and accuracy.
          </p>
        </div>
        {/* third section */}

        <h1 className="w-full md:w-full lg:w-full items-center text-center text-[24px] md:text-[45.3px] lg:text-[45.3px] font-bold mb-5 md:mb-20 lg:mb-20">
          Explore our Smart Trading Tools
        </h1>
        {/* this is where the mapping will start from */}

        <div className="justify-center flex flex-col md:flex-row lg:flex-row gap-10 md:gap-20 lg:gap-20 w-full mb-10 md:mb-20 lg:mb-20">
          <div className="w-full pt-5">
            <h3 className="text-center md:text-left lg:text-left font-normal text-sm md:text-[18px] lg:text-[18px] text-[#F3BA2F] mb-4 ">
              METABOTS
            </h3>
            <h2 className="text-center md:text-left lg:text-left text-[24px] md:text-[35.3px] lg:text-[35.3px] font-bold mb-4">
              Cross-Platform Automated Trading Tools.
            </h2>
            <p className="text-center md:text-left lg:text-left font-normal text-xs md:text-[18px] lg:text-[18px] mb-4 leading-[18px] md:leading-[27px] lg:leading-[27px]">
              Seamlessly perform automated transactions via our Smart Trading
              Web interface or Telegram bot.
            </p>
            <p className=" hidden md:flex lg:flex text-center md:text-left lg:text-left mb-5 md:mb-10 lg:mb-10 font-semibold text-base md:text-[24px] lg:text-[24px]">
              Try it now!
            </p>
            <div className="md:flex lg:flex hidden md:mb-0 lg:mb-0 justify-center md:justify-start lg:justify-start gap-5 md:gap-3 lg:gap-3">
              <Button className="w-[141px] h-[34px] md:w-44 md:h-10 lg:w-44 lg:h-10 bg-[#0D6EFD] rounded-md text-white py-2 px-4 font-normal md:font-medium lg:font-medium text-xs md:text-sm lg:text-sm">
                Metabots Web
              </Button>
              <Button
                variant="outline"
                className="w-[141px] h-[34px]md:w-44 md:h-10 lg:w-44 lg:h-10 bg-[#0B0F16] border-[#E7E7E7] border-2 rounded-md text-[#E7E7E7] py-2 px-4 font-normal md:font-medium lg:font-medium text-xs md:text-sm lg:text-sm"
              >
                Metabots Mobile
              </Button>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-full flex justify-center">
              <div className="max-w-[650px] w-full border-1 border-[#696969] rounded-[11px] mb-10 md:mb-20 lg:mb-20">
                <Image
                  src="/landing.png"
                  width={650}
                  height={320}
                  alt="landing-img"
                  className="object-cover w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* mobile stuff */}
            <p className="md:hidden lg:hidden text-center md:text-left lg:text-left font-semibold text-base md:text-[24px] lg:text-[24px] mb-10 md:mb:0 lg:mb:0">
              Try it now!
            </p>
            <div className="flex md:hidden lg:hidden md:mb-0 lg:mb-0 justify-center md:justify-start lg:justify-start gap-5 md:gap-3 lg:gap-3 mb-10">
              <Button className="w-[141px] h-[34px] md:w-44 md:h-10 lg:w-44 lg:h-10 bg-[#0D6EFD] rounded-md text-white py-2 px-4 font-normal md:font-medium lg:font-medium text-xs md:text-sm lg:text-sm">
                Metabots Web
              </Button>
              <Button
                variant="outline"
                className="w-[141px] h-[34px] md:w-44 md:h-10 lg:w-44 lg:h-10 bg-[#0B0F16] rounded-md text-white py-2 px-4 font-normal md:font-medium lg:font-medium text-xs md:text-sm lg:text-sm"
              >
                Metabots Mobile
              </Button>
            </div>
          </div>
        </div>

        {/* fourth section */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 md:gap-20 lg:gap-20 w-full justify-center">
          <div className="hidden md:block lg:block w-full mb-0 md:mb-28 lg:mb-28">
            <Image
              src="/interface.png"
              width={650}
              height={320}
              alt="interface-img"
              className="w-full md:w-auto h-auto rounded-xl"
            />
          </div>
          <div className="w-full md:pt-10 lg:pt-10">
            <h3 className="text-center md:text-left lg:text-left font-normal text-sm md:text-[18px] lg:text-[18px] text-[#F3BA2F] mb-4">
              COPY TRADING & WALLET ANALYSIS
            </h3>
            <h2 className="text-[24px] md:text-[35.3px] lg:text-[35.3px] font-bold mb-4 text-center md:text-left lg:text-left">
              Copy-Trade Smart Wallet Addresses
            </h2>
            <p className="font-normal text-xs md:text-[18px] lg:text-[18px] mb-10 md:mb-5 lg:mb-5 text-center items-center w-full md:text-left lg:text-left leading-[18px] md:leading-[27px] lg:leading-[27px]">
              Discover smart wallets and copy the trades of most profitable
              wallets by analysing their historical on-chain activities in a few
              clicks.
            </p>

            <div className="flex items-center justify-center text-center md:hidden lg:hidden w-auto mb-10 md:mb-0 lg:mb-0">
              <Image
                src="/copy1.png"
                width={650}
                height={650}
                alt="copy-img"
                className="max-w-[100%] h-auto"
              />
            </div>
            <div className="text-center md:text-left lg:text-left mb-4">
              <Button className="w-[141px] h-[34px] md:w-36 md:h-10 lg:w-36 lg:h-10 bg-[#0D6EFD] rounded-md text-white py-1 px-4 font-normal md:font-medium lg:font-medium text-xs md:text-sm lg:text-sm">
                In Progress
              </Button>
            </div>
          </div>
        </div>

        {/* fifth section */}
        <div className="w-full flex flex-col md:flex-row lg:flex-row gap-10 md:gap-20 lg:gap-20justify-center text-center mb-4 md:mb-0 lg:mb-0">
          <div className="w-full pt-10">
            <h3 className="text-center md:text-left lg:text-left font-normal text-sm md:text-[18px] lg:text-[18px] text-[#F3BA2F] mb-4">
              METAPOINTS AND REWARDS
            </h3>
            <h2 className="text-[24px] md:text-[35.3px] lg:text-[35.3px] font-bold mb-4 text-center md:text-left lg:text-left">
              Unlock Rewards with Our Referral Program!
            </h2>
            <p className="font-normal text-xs md:text-[18px] lg:text-[18px] mb-3 md:mb-5 lg:mb-5 text-center md:text-left lg:text-left leading-[18px] md:leading-[27px] lg:leading-[27px]">
              We believe in the power of community, and we&apos;re excited to
              offer you a unique opportunity to earn rewards while spreading the
              word about Metadapp
            </p>

            <div className="hidden md:flex lg:flex md:mb-0 lg:mb-0 justify-center md:justify-start lg:justify-start gap-5 md:gap-3 lg:gap-3">
              <Button className="w-[141px] h-[34px] md:w-36 md:h-10 lg:w-36 lg:h-10 bg-[#0D6EFD] rounded-md text-white py-1 px-2 font-normal md:font-medium lg:font-medium text-xs md:text-sm lg:text-sm">
                View Page
              </Button>
            </div>
          </div>
          <div className="w-full">
            <div className="hidden md:flex lg:flex w-full border-1 border-[#696969] rounded-xl mb-20 md:mb-28 lg:mb-28">
              <Image
                src="/rewards.png"
                width={650}
                height={320}
                alt="landing-img"
                className="w-full md:w-auto h-auto"
              />
            </div>
            <div className="md:hidden text-center justify-center items-center lg:hidden w-full">
              <Image
                src="/copy3.png"
                width={650}
                height={650}
                className="mx-w-[100%] h-auto"
                alt="landing-img"
              />
            </div>
          </div>
          <div className="flex md:hidden lg:hdden md:mb-0 lg:mb-0 justify-center md:justify-start lg:justify-start gap-5 md:gap-3 lg:gap-3">
            <Button className="w-[141px] h-[34px] md:w-44 md:h-10 lg:w-44 lg:h-10 bg-[#0D6EFD] rounded-md text-white py-2 px-4 font-normal md:font-medium lg:font-medium text-xs md:text-sm lg:text-sm">
              View Page
            </Button>
          </div>
        </div>

        {/* 6th section */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 md:gap-20 lg:gap-20 w-full justify-center">
          <div className="hidden md:flex lg:flex w-full">
            <Image
              src="/superuser.png"
              width={650}
              height={320}
              alt="interface-img]"
              className="w-full md:w-auto h-auto rounded-xl" // Adjusted width for mobile
            />
          </div>
          <div className="w-full pt-10">
            <h3 className="text-center md:text-left lg:text-left font-normal text-sm md:text-[18px] lg:text-[18px] text-[#F3BA2F] mb-4 ">
              Superuser!
            </h3>
            <h2 className="text-[24px] md:text-[35.3px] lg:text-[35.3px] font-bold mb-4 text-center md:text-left lg:text-left">
              Become A Metadapp Superuser
            </h2>
            <p className="md:w-full lg:w-full font-normal text-[11px] md:text-[18px] lg:text-[18px] mb-3 md:mb-5 lg:mb-5 text-center md:text-left lg:text-left leading-[18px] md:leading-[27px] lg:leading-[27px]">
              Super Users have special privileges to access exclusive features,
              experiemental functionalities, Airdrops & whitelist spots that are
              not available to regular users.
            </p>
          </div>
          {/* mobile super user image */}
          <div className="md:hidden text-center items-center justify-center lg:hidden w-full mb-10">
            <Image
              src="/copy2.png"
              width={650}
              height={650}
              alt="interface-img"
              className="max-w-[100%] h-auto" // Adjusted width for mobile
            />
          </div>
        </div>
      </div>
      {/* footer section */}
      <FooterLandingPage />
    </main>
  );
}
