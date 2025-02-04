// import { FiltersState } from "@/store/slices/filtersSlice";

// export const filterPumpMoonData = (data: any[], filters: FiltersState) => {
//   const { checkFilters, inputFilters } = filters;

//   return data.filter((item) => {
//     const meetsCheckFilters =
//       (!checkFilters.lpBurn || item.lpBurn > 0) &&
//       (!checkFilters.top10Holders || item.results?.top10Percentage < 15) &&
//       (!checkFilters.socialMedia || item.twitter || item.telegram);

//     const meetsInputFilters = Object.keys(inputFilters).every((key) => {
//       const filter = inputFilters[key as keyof typeof inputFilters];
//       return item[key] >= filter.min && item[key] <= filter.max;
//     });

//     return meetsCheckFilters && meetsInputFilters;
//   });
// };
