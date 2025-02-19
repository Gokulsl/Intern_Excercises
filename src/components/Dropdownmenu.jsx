import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";

const Dropdownmenu = ({ options, disabled = false, className = "" , title=""}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative rounded ${className}`}>
      <button
        className={`flex w-full justify-center gap-x-1.5 rounded px-3 text-slate-900 py-2 font-semibold shadow-md ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer "
        } ${className}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        {title}
        <ChevronDownIcon className="mr-1 w-5 h-5 text-black mt-0.5" />
      </button>
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded bg-white border-2 border-gray-200 shadow-lg transition-opacity-10"
        >
            {options.map((option, index) => (
              <h1 key={index} value={option.value} role="menuitem" className="block px-4 py-2 text-md text-black hover:bg-gray-100 hover:text-gray-600">
                <Link
                  to={option.to}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {option.label}
                </Link>
              </h1>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdownmenu;
