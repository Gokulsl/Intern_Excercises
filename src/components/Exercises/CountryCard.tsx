import React from "react";
interface NewCountry{
    name:string,
    flag:string,
    officialName:string

}

const CountryCard: React.FC<{ country: NewCountry }> = ({ country }) => (
    <div className="m-3 border-2 border-black bg-gray-800 w-80 h-[230px] p-3 rounded-lg">
      <div className="flex flex-col items-center justify-center">
        <img src={country.flag} alt="flag" className="h-32 rounded-lg" loading="lazy" />
        <h1 className="font-bold text-center text-white mt-2">{country.name}</h1>
        <p className="font-medium text-gray-300 text-center mt-2">{country.officialName}</p>
      </div>
    </div>
    );
  
  export default CountryCard;
  