import React from "react";
import dynamic from "next/dynamic";
const InnerTabs = dynamic(
  () => import("@/components/metabots/dashboardTabs/InnerTab"),
  {
    ssr: false,
  }
);

export default function Trransactions() {
  return (
    <>
      <div className="w-full mb-4 flex justify-start md:justify-between lg:justify-between gap-10 ml-0 md:ml-4 lg:ml-4 text-xs font-semibold md:font-bold lg:font-bold">
        <InnerTabs />
      </div>
    </>
  );
}
