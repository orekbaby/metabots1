import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger1,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FooterLandingPage = dynamic(
  () => import("@/components/metabots/FooterLandingPage"),
  {
    ssr: false,
  }
);

import { Button } from "@/components/ui/button";
import { accordionData } from "@/utils/mockData";

const Metabots = () => {
  return (
    <div className="pl-[8px] h-auto mt-5 md:mt-0 lg:mt-0">
      <div className=" w-full mb-20 md:mb-36 lg:mb-36">
        {" "}
        <div className="flex flex-col md:flex-row lg:flex-row justify-center px-1  md:px-0 lg:px-0">
          <div className="">
            <h1 className="font-black text-[24px] md:text-[45.3px] lg:text-[45px] w-full text-left md:text-left lg:text-left mb-4 leading-[40px] md:leading-[40px] lg:leading-[62px]">
              Ultra-fast Automation tools to Supercharge your DEX trading
              Activities.
            </h1>
            <p className="font-normal md:font-medium lg:font-medium text-sm md:text-[18px] lg:text-[18px] w-full mb-8 md:mb-0 lg:mb-8 md:w-[70%] lg:w-[80%] text-left md:text-left lg:text-left leading-[1.5rem] md:leading-[1.75rem] lg:leading-[1.75rem]">
              Metabots has cross-platform access via our Web terminal interface
              & Telegram bot.
            </p>
            <h2 className="font-bold text-[24px] text-center md:text-left lg:text-left mb-8 md:mb-10 lg:mb-10">
              Get Started
            </h2>
            <div className="flex mb-16 md:mb-0 lg:mb-0 justify-center md:justify-start lg:justify-start gap-5 md:gap-3 lg:gap-3">
              <Button className="w-[163px] md:w-[180px] lg:w-[180px] bg-[#0D6EFD] rounded-[8px] text-white py-3 px-5 font-semibold text-base hover:bg-[#0D6EFD] duration-300 dark:hover:bg-[#0D6EFD]">
                Metabots Web
              </Button>
              <Button
                variant="outline"
                className="w-[163px] md:w-[180px] lg:w-[180px] bg-[#0B0F16] border-[#0D6EFD] border-2 rounded-[8px] text-[#0D6EFD] py-3 px-5 font-semibold text-base ring-offset-[#0D6EFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-[#0D6EFD] bg-button transition ease-in-out delay-150 hover:border-2 hover:bg-[#0B0F16] duration-300 dark:hover:bg-[#0B0F16] dark:hover:text-[#0D6EFD] hover:text-[#0D6EFD] "
              >
                Metabots Telegram
              </Button>
            </div>
          </div>
          <div className="w-full">
            <Image
              className="mr-48"
              src="/chart.png"
              alt="chart-pic"
              width={703}
              height={425}
            />
          </div>
        </div>
      </div>
      <div className="w-full block md:hidden lg:hidden mb-10  md:px-0 lg:px-0">
        <h2 className=" text-center font-semibold text-[20px] text-[#0A53BE] mb-3">
          Features
        </h2>
        <h3 className="w-full font-bold text-[27px] text-center mb-5">
          Explore Amazing feature of Metabots
        </h3>
        <p className="w-full font-normal text-[18px] leading-8 text-center text-[#B4D2FE]">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="flex flex-col md:flex-row pr-0 md:pr-10 lg:pr-10 lg:flex-row justify-between gap-10  md:gap-10 lg:gap-10 w-full h-auto mb-10 md:mb-36 lg:mb-36  md:px-0 lg:px-0">
        <div className="w-full md:w-[60%] lg:w-[60%] px-4 h-auto md:h-[1200px] lg:h-[1100px]  flex flex-col gap-10 md:gap-10 lg:gap-10 justify-between items-center">
          <div className="bg-[#17212F] w-full h-auto md:h-[750px] lg:h-[750px] md:px-9 lg:px-9 pt-6 md:pt-10 lg:pt-10 pb-0 rounded-lg">
            <h3 className="font-bold text-left text-[24px] md:text-[36px] lg:text-[36px] text-[#0D6EFD] mb-8 md:mb-5 lg:mb-5 px-4 md:px-0 lg:px-0">
              Cross-Platform Access
            </h3>
            <p className="font-normal text-left w-full text-[#E7F1FF] text-base md:text-[20px] mb-5 md:mb-0 lg:mb-5 lg:text-[18px] leading-[2rem] md:leading-[2rem] lg:leading-[2rem] px-4 md:px-0 lg:px-0">
              Experience lightning-fast Automated trades Via the Smart Trading
              terminal on Web or via the Mobile Telegram Bot with unmatched
              convenience.
            </p>
            <Image
              className="rounded-[12.69] max-w-[100%]"
              src="/metabotBanner.png"
              alt="container-pic"
              width={580}
              height={502}
            />
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full h-auto gap-10 md:gap-10 lg:gap-10 px-0 md:px-0 lg:px-0">
            <div className=" bg-[#05A660] w-full md:w-1/2 lg:w-1/2 h-auto md:h-[450px] lg:h-[400px] pt-[25px] md:pt-[40px] lg:pt-[50px] pb-[30px] md:pb-[110px] lg:pb-[90px] px-[22px]  md:px-0 lg:px-4 rounded-lg">
              <h3 className="font-bold text-[24px] md:text-[32.3px] lg:text-[35px] mb-7 md:mb-5 lg:mb-5">
                Fail-Safe Protection:{" "}
              </h3>
              <p className=" font-normal md:font-medium lg:font-medium text-base md:text-[22px] lg:text-[22px] leading-[1.7rem] md:leading-[2rem] lg:leading-[2rem] ">
                Simulates your transactions under the hood to protect you from
                wasting gas fees on transactions that are predicted to fail.
              </p>
            </div>

            <div
              className="bg-[#1B2B3C] w-full md:w-1/2 lg:w-1/2 h-auto md:h-[450px] lg:h-[400px]
              px-[22px] pt-[20px] rounded-lg pb-[20px]"
            >
              <h3 className="font-semibold md:font-bold lg:font-bold text-[30px] md:text-[35px] lg:text-[40px] mb-7 md:mb-5 lg:mb-5">
                Meta scam score
              </h3>
              <p className="font-medium text-base md:text-[22px] lg:text-[22px] leading-[2rem] mt-0">
                Use our Meta scam score rating to weed out obvious and avoidable
                scams & rug pulls.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%] lg:w-[40%] h-auto md:h-[1000px] lg:h-[1200px] flex flex-col gap-10 md:gap-10 lg:gap-10justify-between items-center px-4 md:px-0 lg:x-0">
          <div className="w-full h-auto md:h-[300px] lg:h-[280px] rounded-lg px-6 pt-4 md:pt-8 lg:pt-8 pb-4 md:pb-8 lg:pb-8 bg-[#0D6EFD]">
            <h3 className=" text-[24px] md:text-[32.3px] lg:text-[32.3px] font-bold leading-[45.89px] mb-5">
              Private Transactions:
            </h3>
            <p className="font-medium text-base md:text-[22px] lg:text-[22px] leading-[2rem] mt-0">
              Safeguard your transactions against sandwich attacks and front
              running bots.
            </p>
          </div>

          <div className=" flex flex-col w-full relative h-auto md:h-[800px] lg:h-[810px] rounded-lg justify-between pt-6 bg-[#FFC107] mt-0 overflow-hidden">
            <div className="px-5">
              <h3 className="font-bold text-[24px] md:text-[32.5px] lg:text-[32.5px] leading-[35px] md:leading-[40px] lg:leading-[40px] mb-7">
                Limit orders, Apemode sniping & More:
              </h3>
              <p className="font-normal md:font-medium lg:font-medium text-[20px] lg:text-[22px] leading-[1.75rem] md:leading-[2rem] lg:leading-[2rem] md:mt-0 lg:mt-0 mb-10 md:mb-5 lg:mb-5">
                Powerful tools to give you the competitive edge across devices
              </p>
            </div>
            <div className="">
              <Image
                className="hidden md:block lg:block"
                src="/image-slant.png"
                alt="iphone"
                width={580}
                height={580}
              />

              <Image
                className="block md:hidden lg:hidden "
                src="/iphoneMobile.png"
                alt="iphone"
                width={387.34}
                height={764.04}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex lg:flex flex-col mr-0 md:mr-10 lg:mr-10 md:flex-row lg:flex-row justify-between items-center mb-10 md:mb-36 lg:mb-36 bg-[#0B1E3A] pt-5 pb-20 px-10 rounded-2xl">
        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center items-center">
          <Image
            className="px-20"
            src="/content1.png"
            alt="content-pic"
            width={567}
            height={512}
          />
        </div>

        <div className=" w-full md:w-1/2 lg:w-1/2">
          <h4 className="font-bold text-[24px] md:text-[30px] lg:text-3xl text-[#FFC107] mb-4 mt-0 md:mt-20 lg:mt-20">
            Earn 20% in Cash bonus and Meta points for referring your friends
          </h4>
          <p className="font-normal  text-base md:text-[18px] lg:text-[18px] mb-5 ">
            For every successful Metabots trade you perform you&apos;ll earn
            Metapoints.
          </p>

          <div className="flex gap-2 items-center justify-center">
            <div className="max-w-[100%]">
              <Image
                className="resize-none"
                src="/check.png"
                alt="icon-pic"
                width={32}
                height={32}
              />
            </div>
            <p className="text-base leading-[1.75rem] md:text-[18px] lg:text-[18px] font-normal">
              The more Metapoints you earn, the more exclusive perks and
              airdrops you&apos;ll be eligible for.
            </p>
          </div>

          <div className="flex gap-2 items-center justify-center mt-5">
            <div className="">
              <Image
                className="resize-none"
                src="/check.png"
                alt="icon-pics"
                width={32}
                height={32}
              />
            </div>
            <p className="text-base md:text-[18px] lg:text-[18px] font-normal leading-[1.75rem]">
              You&apos;ll also earn a 20% cash bonus from the fees we make from
              your friends whenever they use Metabots to trade on our platform.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-10 md:mb-36 lg:mb-42 md:px-0 lg:px-0">
        <h5 className="font-medium md:font-semibold lg:font-semibold mb-2 text-base text-[#0A53BE]">
          Testimonials
        </h5>
        <p className="font-medium px-8 md:font-semibold text-center w-full text-[27px] md:text-[32px] lg:text-[32px] mb-3">
          What people think about us
        </p>
        <span className="leading-[1.75rem] px-2 font-normal text-[18px] md:text-[20px] lg:text-[20px] mb-4 md:mb-12 lg:mb-12 text-[#B4D2FE]">
          Here&apos;s what people have to say about their experience with us.
        </span>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-4 md:gap-10 lg:gap-10 px-6 md:px-0 lg:px-0 mt-10 md:mt-20 lg:mt-20">
          <div
            className="flex flex-col text-center items-center
           justify-between bg-white w-full md:w-[300.81px] h-[250.85px] rounded-[10.11px] px-1 py-[20.22px] mb-0 md:mb-12 lg:mb-12"
          >
            <div className="mb-3 md:mb-0">
              <Image
                className="resize-none text-white"
                src="/X.png"
                alt="icon-pic"
                width={31.24}
                height={28.23}
              />
            </div>
            <p className="font-medium text-[12.64px] text-[#101828]">
              Can&apos;t believe how much time and effort Metabots saves me on
              @Uniswap trading! Super fast transactions, embedded analytics, and
              scam prevention parameters are just amazing. My profits are
              through the roof! 🚀🤖 #Metabots #CryptoTrading&quot;
            </p>
            <span className="font-semibold text-xs text-[#101828]">
              ~ @CryptoProMax087
            </span>
          </div>

          <div className="flex flex-col text-center items-center justify-between bg-white w-full md:w-[300.81px] h-[250.85px] rounded-[10.11px] px-1 py-[20.22px]">
            <div className="mb-3 md:mb-0">
              <Image
                className="resize-none text-white"
                src="/X.png"
                alt="icon-pic"
                width={31.24}
                height={28.23}
              />
            </div>
            <p className="font-medium text-[12.64px] text-[#101828]">
              Can&apos;t believe how much time and effort Metabots saves me on
              @Uniswap trading! Super fast transactions, embedded analytics, and
              scam prevention parameters are just amazing. My profits are
              through the roof! 🚀🤖 #Metabots #CryptoTrading&quot;
            </p>

            <span className="font-semibold text-xs text-[#101828]">
              ~ @CryptoProMax087
            </span>
          </div>

          <div className="flex flex-col text-center items-center justify-between bg-white w-full md:w-[300.81px] h-[250.85px] rounded-[10.11px] px-1 py-[20.22px]">
            <div className="mb-3 md:mb-0">
              <Image
                className="resize-none text-white"
                src="/X.png"
                alt="icon-pic"
                width={31.24}
                height={28.23}
              />
            </div>
            <p className="font-medium text-[12.64px] text-[#101828]">
              Can&apos;t believe how much time and effort Metabots saves me on
              @Uniswap trading! Super fast transactions, embedded analytics, and
              scam prevention parameters are just amazing. My profits are
              through the roof! 🚀🤖 #Metabots #CryptoTrading&quot;
            </p>
            <span className="font-semibold text-xs text-[#101828]">
              ~ @CryptoProMax087
            </span>
          </div>
        </div>

        <div className=" mb-16 md:mb-36 lg:mb-48 px-2 md:px-0 lg:px-0">
          <h5 className="font-black text-[27px] md:text-[40px] lg:text-[40px] text-[#0A53BE] mt-10 md:mt-20 lg:mt-20 text-center leading-[40px] md:leading-[45px] lg:leading-[45px]">
            Frequently asked questions
          </h5>
          <p
            className="font-normal text-[20px] mt-4 text-center mb-10 text-[#B4D2FE]
           md:text-[#EFEDED] lg:text-[#EFEDED]"
          >
            Everything you need to know about our market making bot service.
          </p>
          <div className="mx-auto max-w-screen-lg w-full md:w-[70%] lg:w-[70%]">
            {accordionData?.map((row, index) => (
              <div key={index} className="">
                <Accordion className="" type="single" collapsible>
                  <AccordionItem className="border-none" value={row.value}>
                    <AccordionTrigger1 className="font-medium text-lg border-b-[1px] border-[#212E40] text-left">
                      {row.trigger}
                    </AccordionTrigger1>
                    <AccordionContent className="text-left text-[#EFEDED] font-normal text-base mt-3">
                      {row.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[100%] bg-[#212E40] py-8 rounded-2xl mb-24 md:mb-28 lg:mb-28">
          <h5 className=" font-medium md:font-semi-bold lg:font-semibold text-base md:text-[20px] lg:text-[20px] text-[#E7F1FF] text-center">
            Still have questions?
          </h5>

          <p className="font-normal text-[18px] leading-[1.7rem] mt-4 mb-4 text-[#EFDEFD]">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>
          <Button
            className="w-fit mt-5 bg-[#0D6EFD] rounded-lg text-white py-2 px-10
           md:px-20 lg:px-20 font-semibold text-sm hover:bg-[#0D6EFD] duration-300 dark:hover:bg-[#0D6EFD]"
          >
            Talk to our team
          </Button>
        </div>
        <FooterLandingPage />
      </div>
    </div>
  );
};

export default Metabots;
