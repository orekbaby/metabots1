import dynamic from "next/dynamic";
import React from "react";

const Metabots = dynamic(() => import("@/components/metabots/Metabots"), {
  ssr: false,
});
const page = () => {
  return (
    <div>
      {" "}
      <Metabots />
    </div>
  );
};

export default page;
