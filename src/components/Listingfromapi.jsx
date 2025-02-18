import React, { useState, useEffect } from "react";

const Listingfromapi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(console.error("Error"));
  }, []);

  return (
    <div >
      <div className="flex justify-around pt-6 pb-6 items-center bg-purple-400 flex-wrap">
        {!data[0] ?(<div className="flex justify-around h-160 items-center flex-wrap"><p className="text-3xl">Loading</p></div>):
        (data.map((c, index) =>
          index < 100  ? (
            <div key={index} className="m-3 border-2 border-black bg-gray-800 w-80 h-30">
              <div><h1 className="font-bold text-center text-white mt-2">{c.name.common}</h1></div>
              <div><p className="font-medium text-gray-500 text-center mt-2">{c.name.official}</p></div>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
};

export default Listingfromapi;
