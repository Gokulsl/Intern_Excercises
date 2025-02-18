import React from "react";

const Dropdownmenu = ({ options, selected, onChange, disabled = false, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none disabled:opacity-50 ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className}`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdownmenu;
