import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
});

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { accordionData } from "@/utils/mockData";

const Metabots = () => {
  return (
    <div className="pl-[8px]">
      <div className=" w-full mb-20 md:mb-36 lg:mb-36">
        {" "}
        <div className="flex flex-col md:flex-row lg:flex-row justify-center">
          <div className="">
            <h1 className="font-bold text-[24px] md:text-[45.3px] lg:text-[45.3px] w-full md:w-[85%] lg:w-[85%] text-center md:text-left lg:text-left mb-4">
              Ultra-fast Automation tools to Supercharge your DEX trading
              Activities.
            </h1>
            <p className="font-normal text-sm md:text-[18px] lg:text-[18px] w-full mb-8 md:mb-0 lg:mb-4 md:w-[70%] lg:w-[70%] text-center md:text-left lg:text-left">
              Metabots has cross-platform access via our Web terminal interface
              & Telegram bot.
            </p>
            <h2 className="font-bold text-[24px] text-center md:text-left lg:text-left mb-4">
              Get Started
            </h2>
            <div className="flex mb-16 md:mb-0 lg:mb-0 justify-center md:justify-start lg:justify-start gap-5 md:gap-3 lg:gap-3">
              <Button className="w-[163px] md:w-[180px] lg:w-[180px] bg-[#0D6EFD] rounded-[8px] text-white py-3 px-5 font-semibold text-base">
                Metabots Web
              </Button>
              <Button
                variant="outline"
                className="w-[163px] md:w-[180px] lg:w-[180px] bg-[#0B0F16] border-[#0D6EFD] border-2 rounded-[8px] text-[#0D6EFD] py-3 px-5 font-semibold text-base"
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
      <div className="w-full block md:hidden lg:hidden mb-10">
        <h2 className=" text-center font-semibold text-[20px] text-[#0A53BE] mb-3">
          Features
        </h2>
        <h3 className="font-bold text-[20px] text-center mb-3">
          Explore Amazing feature of Metabots
        </h3>
        <p className="font-normal text-[16px] text-center">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="flex flex-col md:flex-row pr-0 md:pr-10 lg:pr-10 lg:flex-row justify-between gap-10 w-full h-auto mb-36">
        <div className="w-full md:w-[60%] lg:w-[60%] h-auto md:h-[1000px] lg:h-[1100px]  flex flex-col gap-10 justify-between items-center">
          <div className="bg-[#17212F] w-full h-auto md:h-[750px] lg:h-[700px] px-9 pt-10 pb-0 rounded-[24px]">
            <h3 className="font-bold text-[24px] md:text-[36px] lg:text-[36px] text-[#0D6EFD] mb-3">
              Cross-Platform Access
            </h3>
            <p className="font-normal text-base md:text-[20px] lg:text-[20px] mb-5 md:mb-0 lg:mb-5">
              Experience lightning-fast Automated trades Via the Smart Trading
              terminal on Web or via the Mobile Telegram Bot with unmatched
              convenience.
            </p>
            <Image
              className="rounded-[12.69]"
              src="/metabotBanner.png"
              alt="container-pic"
              width={520}
              height={502}
            />
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full h-auto gap-10">
            <div className=" bg-[#05A660] w-full md:w-1/2 lg:w-1/2 h-auto md:h-[450px] lg:h-[400px] pt-[60px] pb-[100px] px-5 rounded-[24px]">
              <h3 className="font-bold text-[24px] md:text-[32.3px] lg:text-[32.3px] mb-4 md:mb-0 lg:mb-0">
                Fail-Safe Protection{" "}
              </h3>
              <p className=" font-normal md:font-medium lg:font-medium text-base md:text-[22px] lg:text-[22px]">
                Ensure seamless transactions with Fail-Safe Selling. Test your
                sales beforehand to prevent potential hiccups.
              </p>
            </div>

            <div className="bg-[#1B2B3C] w-full md:w-1/2 lg:w-1/2 h-auto md:h-[450px] lg:h-[400px] py-[141px] px-[22px] rounded-[24px]">
              <h3 className=" font-semibold md:font-bold lg:font-bold text-[30px] md:text-[35px] lg:text-[35px]">
                Meta scam score
              </h3>
              <p className="font-medium text-base md:text-[22px] lg:text-[22px] mt-4 md:mt-0 lg:mt-0">
                Use our Meta scam score rating to weed out obvious and avoidable
                scams & rug pulls.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%] lg:w-[40%] h-auto md:h-[1000px] lg:h-[1100px] flex flex-col gap-10 justify-between items-center">
          <div className="w-full h-auto md:h-[400px] lg:h-[350px] rounded-[24px] px-6 pt-8 pb-8 bg-[#0D6EFD]">
            <h3 className=" text-[24px] md:text-[32.3px] lg:text-[32.3px] font-bold leading-[45.89px]">
              Private Mode: Shield Your Transactions
            </h3>
            <p className="font-medium text-base md:text-[18px] lg:text-[18px] mt-2 md:mt-0 lg:mt-0">
              Protect your trades with Private Mode. Safeguard against sandwich
              attacks and keep your transactions confidential.
            </p>
          </div>

          <div className="w-full relative h-auto md:h-[800px] lg:h-[750px] rounded-[24px] px-6 pt-6 bg-[#FFC107] mt-0">
            <h3 className="font-bold text-[24px] md:text-[32.5px] lg:text-[32.5px]">
              Mirror Sniper: Emulate Pro Traders
            </h3>
            <p className=" font-normal md:font-medium lg:font-medium text-[20px] mt-3 md:mt-0 lg:mt-0">
              Harness the power of Mirror Sniper to emulate pro traders and
              whales. Replicate their successful strategies effortlessly.
            </p>

            <Image
              className=" hidden md:block lg:block absolute left-0 bottom-0"
              src="/iphone2.png"
              alt="iphone"
              width={387.34}
              height={764.04}
            />

            <Image
              className=" block md:hidden lg:hidden mt-5"
              src="/iphoneMobile.png"
              alt="iphone"
              width={387.34}
              height={764.04}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mr-0 md:mr-10 lg:mr-10 md:flex-row lg:flex-row justify-between items-center mb-36 bg-[#0B1E3A] py-5 px-10 rounded-[32px]">
        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center items-center">
          <Image
            className=""
            src="/content1.png"
            alt="content-pic"
            width={567}
            height={512}
          />
        </div>

        <div className=" w-full md:w-1/2 lg:w-1/2">
          <h4 className="font-semi-bold text-[24px] md:text-[30px] lg:text-[30px] text-[#FFC107] mb-4 mt-20">
            Earn 20% in Cash bonus and Meta points for referring your friends
          </h4>
          <p className="font-normal  text-base md:text-[18px] lg:text-[18px] mb-4">
            For every successful Metabots trade you perform you&apos;ll earn
            Metapoints.
          </p>

          <div className="flex gap-2 items-center justify-center">
            <div className="">
              <Image
                className="resize-none"
                src="/check.png"
                alt="icon-pic"
                width={24}
                height={24}
              />
            </div>
            <p className="text-base md:text-[18px] lg:text-[18px] font-normal">
              The more Metapoints you earn, the more exclusive perks and
              airdrops you&apos;ll be eligible for.
            </p>
          </div>

          <div className="flex gap-2 items-center justify-center mt-4">
            <div className="">
              <Image
                className="resize-none"
                src="/check.png"
                alt="icon-pics"
                width={24}
                height={24}
              />
            </div>
            <p className="text-base md:text-[18px] lg:text-[18px] font-normal">
              The more Metapoints you earn, the more exclusive perks and
              airdrops you&apos;ll be eligible for.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-36">
        <h5 className="font-semibold mb-2 text-base text-[#0A53BE]">
          Testimonials
        </h5>
        <p className="font-semibold text-[27px] md:text-[32px] lg:text-[32px] mb-3">
          What people think about us
        </p>
        <span className="font-normal text-[18px] md:text-[20px] lg:text-[20px] mb-12">
          Here&apos;s what people have to say about their experience with us.
        </span>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-6 mt-12">
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
            <span className="font-semibold text-xs text-[#101828] mt-3">
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

            <span className="font-semibold text-xs text-[#101828] mt-3">
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
            <span className="font-semibold text-xs text-[#101828] mt-3">
              ~ @CryptoProMax087
            </span>
          </div>
        </div>

        <div className="mb-36">
          <h5 className="font-bold  text-[27px] md:text-[40px] lg:text-[40px] text-[#0A53BE] mt-20 text-center">
            Frequently asked questions
          </h5>
          <p className="font-normal text-[20px] mt-4 text-center mb-10">
            Everything you need to know about our market making bot service.
          </p>
          <div className="mx-auto max-w-screen-lg w-full md:w-[70%] lg:w-[70%]">
            {accordionData?.map((row, index) => (
              <div key={index} className="">
                <Accordion className="" type="single" collapsible>
                  <AccordionItem className="border-none" value={row.value}>
                    <AccordionTrigger className="font-semibold text-[18px] border-b-[1px] border-[#212E40] text-left">
                      {row.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="text-left font-normal text-base mt-3">
                      {row.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
        <div className=" mb-30 w-full md:w-[60%] lg:w-[60%] mx-auto bg-[#212E40] p-[15px] rounded-[8px]">
          <h5 className="font-semi-bold text-[20px] text-[#E7F1FF] text-center">
            Still have questions?
          </h5>
          {/* width: Hug (143px) height: Hug (48px) gap: 12px width: Hug (143px)
          height: Hug (48px) padding: 12px, 20px, 12px, 20px border-radius: 8px
          border: 1px gap: 8px */}
          <p className="font-normal text-[16px] mt-4">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>
          <Button className="w-[143px] mt-5 bg-[#0D6EFD] rounded-[8px] text-white py-3 px-5 font-semibold text-sm">
            Chat support
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Metabots;
