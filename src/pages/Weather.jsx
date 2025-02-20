import React, { useState } from "react";
import { Search, Droplets, Wind } from "lucide-react";
import WeatherImg from "../assets/weatherimg.png";
import Button from '../components/Button'
import Loading from '../components/Loading'
const Weather = () => {
  const [search, setSearch] = useState("");  
  const [city, setCity] = useState(null);  
  const [error, setError] = useState(null);
  const [load, setLoading] = useState(false);

  const generateReport = async () => {
    if (!search) {
        alert("Enter city");
        return }
    setLoading(true);

    setTimeout(async () => {
      try {
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8455ac0c51f3ccc8525657f3a56ce155&units=metric`
        );
        let result = await response.json();
        if (response.ok) {
          setCity(result);
          setError(null);
        } else {
          setError("City not found. Please try again.");
          setCity(null);
        }
      } catch (error) {
        setError("Failed to fetch data. Check your connection.");
        setCity(null);
      }
      setLoading(false);
    }, 1000);
  };

  return (
<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br  from-purple-600 to-purple-500 p-4">
<h1 className="text-4xl font-bold text-white mb-12">Know your city's Weather</h1>
      <div className="w-96 p-6 shadow-purple-950 shadow-2xl bg-black text-white rounded-xl">
        <div className="flex items-center space-x-2">
          <input
            type="search"
            placeholder="Enter city name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 w-full rounded-md bg-purple-200 text-black placeholder-gray-400"
          />
          <button 
            onClick={generateReport} 
            className="p-2 rounded-full bg-purple-900 text-white cursor-pointer hover:bg-purple-300 transition"
          >
            <Search size={24} />
          </button>
        </div>

        {error && <p className="text-red-400 text-center mt-2">{error}</p>}
        {load &&  <Loading size={"w-10 h-10"} className="my-4" color={"border-cyan-400"}/>}       
        {city && !load &&(
          <div>
            <img src={WeatherImg} alt="Weather Icon" className="w-53 h-37 mx-auto mt-6" />
            <div className="mt-4 text-center">
              <h1 className="text-2xl font-semibold my-2">{city.main.temp}°C</h1>
              <p className="capitalize text-gray-300 mb-3">{city.weather[0].description}</p>

              <div className="flex justify-between mt-4 px-6">
                <div className="flex flex-col items-center space-y-1">
                  <Droplets size={28} />
                  <h4 className="text-lg">{city.main.humidity}%</h4>
                  <p className="text-gray-400 text-sm mb-3">Humidity</p>
                </div>

                <div className="flex flex-col items-center space-y-1">
                  <Wind size={28} />
                  <h4 className="text-lg">{city.wind.speed} Km/hr</h4>
                  <p className="text-gray-400 text-sm mb-3">Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
