// Import necessary modules and components
import React from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Metabots from "@/components/metabots/Metabots";
import AlphaHuntTabs from "@/components/metabots/alphaHuntTabs/AlphaHuntTabs";
import Terminal from "@/components/metabots/terminal/Terminal";
// const Tabs = dynamic(() => import("@/components/metabots/Dashboard/Tabs"), {
//   ssr: false,
// });

// Define the Page component
interface PageProps {
  // Define any additional props specific to the Page component
}
const Page: React.FC<PageProps> = (props) => {
  // Example data (replace this with your actual data or fetch it)

  return (
    <>
      <div className="w-full flex pl-0 md:pl-2 lg:pl-2 mt-20 mb-5 s items-center gap-3 p-3 bg-transparent border-t border-[#212E40]">
        <Tabs defaultValue="SmartTradingTerminal" className="w-full">
          <TabsList className="flex justify-between mt-0 mb-0 items-center md:justify-start lg:justify-start">
            <TabsTrigger
              className="w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-semibold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD]
             text-white text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
              value="AboutMetabots"
            >
              {" "}
              About Metabots
            </TabsTrigger>
            <TabsTrigger
              className="w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-semibold focus-visible:border-b-[2px]  data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-sm lg:text-[14px] border-[#0D6EFD]"
              value="SmartTradingTerminal"
            >
              Smart Trading Terminal
            </TabsTrigger>
            <TabsTrigger
              className="w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-semibold focus-visible:border-b-[2px] data-[state=active]:border-b-[2px] data-[state=active]:text-[#0D6EFD] text-white text-[10px] md:text-sm lg:text-sm border-[#0D6EFD]"
              value="AlphaHunt"
            >
              Alpha Hunt
            </TabsTrigger>
          </TabsList>
          <TabsContent value="AboutMetabots">
            <Metabots />
          </TabsContent>

          <TabsContent value="SmartTradingTerminal">
            <Terminal />
          </TabsContent>
          <TabsContent value="AlphaHunt">
            <AlphaHuntTabs />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Page;
