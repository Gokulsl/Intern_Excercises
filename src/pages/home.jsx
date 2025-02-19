import React from "react";
import "./home.css";
import Logo from "../assets/steinn labs logo.png";

const Home = () => {
  return (
    <div className="h-screen bg-orange-400 flex justify-center items-center">
      <div className="flex items-center gap-x-6 border-2 border-black px-10 py-6 bg-white shadow-lg rounded-lg">
        <img src={Logo} alt="Steinn Labs Logo" className="w-40 h-40" />
        <h1 className="text-4xl font-bold text-gray-800">Steinn Labs Exercises</h1>
      </div>
    </div>
  );
};

export default Home;
