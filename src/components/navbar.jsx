import React from "react";
import Dropdown from "./dropdown";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="top-0 left-0 w-full flex items-center justify-between bg-gray-500 h-20 px-6 shadow-md">
      <div className="flex items-center">
        <h1 className="text-2xl text-black font-bold"><Link to='/'>React Exercise</Link></h1>
        <span className="text-3xl mx-3">|</span>
        {/* <p className="text-lg mt-1">A web app designed for understanding</p> */}
        <div className="mx-5"><Dropdown /></div>
      </div>
    </nav>
  );
};

export default Navbar;
