import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ImSpinner } from "react-icons/im";
interface TokenDataArray {
  name: string;
  pair: string;
  address: string;
  token0: string;
  token1: string;
}

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState<TokenDataArray[] | null>(null); // Change initial state to null
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsVisible(false);
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = () => {
    setIsVisible(true);
    if (!searchData) {
      // Check if searchData is null
      fetchData("USDT");
    }
  };

  const fetchData = async (searchTerm: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://tradeviewer.metadapp.com/chart-api/autocomplete_search?search_term=${searchTerm}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_TRADEVIEWER_API as string,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setSearchData(data.result);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative max-w-md w-full mx-auto"
      ref={inputRef}
      onClick={handleInputChange}
    >
      <CiSearch className="text-[24px] absolute top-2 left-2 cursor-pointer text-gray-500" />
      <form action="">
        <input
          type="search"
          className="w-full px-10 py-2 border border-gray-600 background-transparent rounded-md focus:outline-none focus:border-blue-500 text-black"
          placeholder="Search for a token address or name"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            if (e.target.value) {
              fetchData(e.target.value);
            } else {
              setSearchData([]);
            }
          }}
        />
      </form>

      {!loading && searchData && searchData.length === 0 && (
        <div className="flex justify-center items-center w-full h-full">
          <p className="text-center text-base">No results found</p>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <ImSpinner className="h-20 w-20 animate-spin text-red-500" />
        </div>
      ) : (
        searchData?.map((data, index) => (
          <div key={index} className="w-full h-full bg-red-500">
            {/* <p>{data.pair}</p> */}
            <p>fuck you</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchComponent;
