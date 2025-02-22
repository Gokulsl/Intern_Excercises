import React from "react";
import "./home.css";
// import Background from "../assets/background.avif";

const Home : React.FC = () => {
  return (
    
<div
  className="h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center relative"
  style={{ backgroundImage: `url('src/assets/background.avif')` }}
>

   
    <div className="relative flex items-center gap-x-6 border border-gray-700 px-12 py-10 bg-purple-300 bg-opacity-80 shadow-2xl rounded-2xl z-10">
      <h1 className="text-4xl text-gray-900 font-extrabold">Steinn Labs Exercises</h1>
    </div>
  </div>
  );
};

export default Home;
