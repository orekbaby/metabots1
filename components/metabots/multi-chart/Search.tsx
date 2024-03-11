"use client";
import React from "react";
import { useState } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";
const TVChartContainer = dynamic(
  () =>
    import("@/components/metabots/charts/TvChartContainer").then(
      (mod) => mod.TVChartContainer
    ),
  { ssr: false }
);

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScriptReady, setIsScriptReady] = useState(false);

  const handleSearch = () => {
    // Use the searchQuery value to perform search
    // For now, let's just log it
    console.log("Search query:", searchQuery);
  };
  return (
    <div className="h-[90%] w-full">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search term"
          className="border border-gray-300 px-3 py-2 rounded-md w-80 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>
      {/* <div className="h-[90%] w-full">
        <Script
          src="/static/datafeeds/udf/dist/bundle.js"
          strategy="lazyOnload"
          onReady={() => {
            setIsScriptReady(true);
          }}
        />
        {isScriptReady && <TVChartContainer {...defaultWidgetProps} />}
      </div> */}
    </div>
  );
};

export default Search;
