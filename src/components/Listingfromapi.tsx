import React, { useState, useEffect } from "react";
import Loading from "./Loading";

interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
}

const Listingfromapi: React.FC = () => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data: Country[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-around pt-6 pb-6 items-center bg-gradient-to-br from-purple-500 to-purple-700 flex-wrap">
        {loading && (
          <div className="flex justify-around h-160 items-center flex-wrap">
            <Loading size="w-20 h-20" color="border-orange-400" />
          </div>)}

          {!loading && (data.map((c, index)  => index <100 ?(
            <div key={index} className="m-3 border-2 border-black bg-gray-800 w-80 h-30 p-3 rounded-lg">
              <h1 className="font-bold text-center text-white mt-2">{c.name.common}</h1>
              <p className="font-medium text-gray-300 text-center mt-2">{c.name.official}</p>
            </div>
          ):null)
        )}
      </div>
    </div>
  );
};

export default Listingfromapi;
