import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import KolCalls from "@/components/metabots/alphaHuntTabs/KolCalls";
import KolList from "@/components/metabots/alphaHuntTabs/KolList";

const KolCallsSnipingTabs = () => {
  return (
    <>
      <Tabs defaultValue="KolCalls" className="w-full">
        <TabsList className="flex mt-0 mb-0 items-center justify-start gap-2 md:gap-4 lg:gap-4">
          <TabsTrigger
            className="w-1/3 md:w-fit lg:w-fit px-5 md:px-2 lg:px-2 md:font-bold lg:font-bold focus-visible:bg-[#0A58CA] data-[state=active]:bg-[#0A58CA] data-[state=active]:text-white text-[12px] md:text-base lg:text-base gap-2 font-medium"
            value="KolCalls"
          >
            Kol Calls
          </TabsTrigger>
          <TabsTrigger
            className="w-1/3 md:w-fit lg:w-fit px-5 md:px-5 lg:px-5 font-medium md:font-bold lg:font-bold focus-visible:bg-[#0A58CA] data-[state=active]:bg-[#0A58CA] data-[state=active]:text-white  text-[12px] md:text-base lg:text-base border-[#0D6EFD]"
            value="kolList"
          >
            Kol List
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full h-full" value="KolCalls">
          <KolCalls />
        </TabsContent>
        <TabsContent className="w-full h-full" value="kolList">
          <KolList />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default KolCallsSnipingTabs;
