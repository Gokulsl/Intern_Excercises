import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";

interface dropDownProps {
  options: { label: string; to: string }[];
  disabled?: boolean;
  className?: string;
  value?: string;
  title?: string;
  onChange?: (option: string) => void;
}

const DropDownMenu = ({
  options,
  disabled = false,
  className = "",
  title = "Exercises",
}: dropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelection = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative rounded ${className}`}>
      <button
        className={`flex items-center justify-center gap-x-1.5 rounded px-3 py-2 font-semibold shadow-md border border-gray-300 text-slate-800 hover:bg-gray-100 transition ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          } ${className}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
      >
        {selectedOption}
        <ChevronDownIcon className="w-5 h-5 text-black mt-0.5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white border border-gray-200 shadow-lg">
          {options.map((option, index) => (
            <Link
              key={index}
              to={option.to}
              className="block px-5 py-4 text-gray-600 hover:bg-gray-100 hover:text-gray-700 transition"
              onClick={() => handleSelection(option.label)}
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
