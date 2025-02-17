import React from "react";
import Dropdown from "./Dropdown";
const Navbar = () => {
  return (
    <nav className="top-0 left-0 w-full flex items-center justify-between bg-gray-400 h-20 px-6 shadow-md">
      <div className="flex items-center">
        <h1 className="text-2xl text-black font-bold">React Exercise</h1>
        <span className="text-3xl mx-3">|</span>
        {/* <p className="text-lg mt-1">A web app designed for understanding</p> */}
        <div className="mx-5"><Dropdown /></div>
      </div>
      <div className="nav-buttons flex">
        <button className="bg-slate-200 text-blue-800 font-medium cursor-pointer px-4 py-2 rounded mr-3 hover:bg-blue-100">
          Reset to defaults
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-600">
          View Markup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
