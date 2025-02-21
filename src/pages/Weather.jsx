import React, { useState } from "react";
import { Search, Droplets, Wind } from "lucide-react";
import WeatherImg from "../assets/weatherimg.png";
import Loading from "../components/Loading";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [load, setLoading] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  const generateReport = async () => {
    if (!search.trim()) {
      alert("Enter city name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8455ac0c51f3ccc8525657f3a56ce155&units=metric`
      );
      const result = await response.json();

      if (response.ok) {
        setCity(result);
        setShowWeather(true);
      } else {
        setCity(null);
        setShowWeather(false);
        setError("City not found. Please try again.");
      }
    } catch (error) {
      setError("Failed to fetch data. Check your connection.");
      setCity(null);
      setShowWeather(false);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-purple-500 p-4">
      <div className="w-96 p-6 min-h-[438px] shadow-purple-950 shadow-2xl bg-black text-white rounded-xl">
        {/* Search Input */}
        <div className="flex items-center space-x-2">
          <input
            type="search"
            placeholder="Enter city name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 w-full rounded-md bg-purple-200 text-black placeholder-gray-700"
          />
          <button
            onClick={generateReport}
            className="p-2 rounded-full bg-purple-900 text-white cursor-pointer hover:bg-purple-300 transition"
          >
            <Search size={24} />
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-400 text-center mt-2">{error}</p>}

        {/* Loading Component */}
        {load && <Loading size="w-18 h-18" className="mt-30" color="border-cyan-400" />}

        {/* Default Weather Prompt */}
        {!showWeather && !city && !load && (
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-violet-400 mt-8 drop-shadow-lg tracking-wide animate-pulse">Know your city's Weather</h1>
            <img src={WeatherImg} alt="Weather Icon" className="w-65 h-45 mx-auto mt-10" />
          </div>
        )}

        {/* Weather Data */}
        {showWeather && city && !load && (
          <div className="mt-4 text-center">
            <img src={WeatherImg} alt="Weather Icon" className="w-50 h-40 mx-auto mt-4" />
            <h1 className="text-2xl font-semibold my-2">{city.main.temp}°C</h1>
            <p className="capitalize text-gray-300">{city.weather[0].description}</p>

            <div className="flex justify-between mt-4 px-6">
              <div className="flex flex-col items-center space-y-1">
                <Droplets size={28} />
                <h4 className="text-lg">{city.main.humidity}%</h4>
                <p className="text-gray-400 text-sm">Humidity</p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <Wind size={28} />
                <h4 className="text-lg">{city.wind.speed} Km/hr</h4>
                <p className="text-gray-400 text-sm">Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
