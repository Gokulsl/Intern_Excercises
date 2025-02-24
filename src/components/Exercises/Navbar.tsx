import React from "react";
import { Link } from "react-router-dom";
import Dropdownnew from "../common/Dropdownmenu";

interface DropdownOption {
  value: string;
  label: string;
  to: string;
}

const Navbar: React.FC = () => {
  const options: DropdownOption[] = [
    { value: "Flex", label: "Flex", to: "/flexplayground" },
    { value: "Api-fetch", label: "Api-fetch", to: "/listing" },
    { value: "Uicomponents", label: "Uicomponents", to: "/ui" },
    { value: "Login", label: "Login", to: "/login" },
    { value: "Weather", label: "Weather", to: "/weather" },
  ];

  return (
    <nav className="top-0 left-0 w-full flex items-center justify-between bg-gray-800 h-20 px-6 shadow-md">
      <div className="flex items-center">
        <h1 className="text-2xl text-white font-bold">
          <Link to="/">React Exercise</Link>
        </h1>
        <span className="text-3xl mx-3 text-slate-200">|</span>
        <div className="mx-5">
          <Dropdownnew 
            options={options} 
            className="bg-gray-200 text-black hover:bg-slate-100"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
