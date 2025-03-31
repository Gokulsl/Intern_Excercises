import React from "react";
import Loading from "../common/Loading";
import { useQuery } from "@tanstack/react-query";

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
}

interface NewCountry {
  name: string;
  flag: string;
  officialName: string;
}

const fetchData = async (): Promise<Country[]> => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }
  return res.json();
};

const CountryCard: React.FC<{ country: NewCountry }> = ({ country }) => (
  <div className="m-3 border-2 border-black bg-gray-800 w-80 h-[230px] p-3 rounded-lg">
    <div className="flex flex-col items-center justify-center">
      <img src={country.flag} alt="flag" className="h-32 rounded-lg" loading="lazy" />
      <h1 className="font-bold text-center text-white mt-2">{country.name}</h1>
      <p className="font-medium text-gray-300 text-center mt-2">{country.officialName}</p>
    </div>
  </div>
);

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

  return (
    <div>
      <div className="flex justify-around pt-6 pb-6 items-center bg-gradient-to-br from-purple-500 to-purple-700 flex-wrap">
        {isLoading && (
          <div className="flex justify-around h-160 items-center flex-wrap">
            <Loading size="w-20 h-20" color="border-orange-400" />
          </div>
        )}

        {error && (
          <div className="flex justify-around h-160 items-center flex-wrap">
            <h1 className="text-white text-2xl">Error: {error.message}</h1>
          </div>
        )}

        {!isLoading && !error && countries.map((c, index) =>
           <CountryCard key={index} country={c} />
           )}
      </div>
    </div>
  );
};

export default React.memo(ListingFromApi);
