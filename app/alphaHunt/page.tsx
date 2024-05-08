import React from "react";
import AlphaHuntTabs from "@/components/metabots/alphaHuntTabs/AlphaHuntTabs";

const page = () => {
  return (
    <>
      <div className=" h-auto md:h-[100vh] lg:h-[100vh] overflow-y-auto scrollbar-hide overflow-x-hidden">
        <AlphaHuntTabs />
      </div>
    </>
  );
};

export default page;
