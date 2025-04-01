import React, {Suspense} from "react";
import Loading from "../common/Loading";
import { useQuery } from "@tanstack/react-query";
import { FixedSizeGrid as Grid } from "react-window";

const CountryCard = React.lazy(() => import("./CountryCard"));
interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
}
interface NewCountry{
  name:string,
  flag:string,
  officialName:string

}



const fetchData = async (): Promise<Country[]> => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }
  return res.json();
};


const ListingFromApi: React.FC = () => {
  const { data: countries = [], isLoading, error } = useQuery<Country[], Error, NewCountry[]>({
    queryKey: ["countries"],
    queryFn: fetchData,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    select: (data): NewCountry[] =>
      data.map((c) => ({
        name: c.name.common,
        flag: c.flags.svg,
        officialName: c.name.official,
      })),
    placeholderData: [],
  });

  if (isLoading) {
    return (
      <div className="flex justify-around h-160 items-center flex-wrap">
        <Loading size="w-20 h-20" color="border-orange-400" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-around h-160 items-center flex-wrap">
        <h1 className="text-white text-2xl">Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <div className="min-h-[658px] flex justify-center items-center bg-gradient-to-br from-purple-500 to-purple-700 py-6">
      <Grid
        height={600} 
        width={1220} 
        columnCount={3}
        columnWidth={400} 
        rowHeight={250} 
        rowCount={Math.ceil(countries.length / 3)} 
      >
        {({ columnIndex, rowIndex, style }) => {
          const index = rowIndex * 3 + columnIndex;
          if (index >= countries.length) return null;
          return (
            <div style={style}>
               <Suspense fallback={<Loading size="w-20 h-20" color="border-orange-400" />}>
              <CountryCard country={countries[index]} />
              </Suspense>
            </div>
          );
        }}
      </Grid>
    </div>
  );
};

export default React.memo(ListingFromApi);
