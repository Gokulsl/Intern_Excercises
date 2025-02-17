import React, { useState, useEffect } from "react";

const Listingfromapi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="overflow-y-auto h-screen">
      <div className="flex justify-around items-center bg-amber-200 flex-wrap">
        {data.map((c, index) =>
          index <=100  ? (
            <div key={index} className="m-3 border-2 border-black bg-gray-800 w-80 h-30">
              <div><h1 className="font-bold text-center text-white mt-2">{c.name.common}</h1></div>
              <div><p className="font-medium text-gray-500 text-center mt-2">{c.name.official}</p></div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Listingfromapi;
