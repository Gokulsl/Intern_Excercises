import React from "react";

const Textfield = ({
  label,
  type = "text",
  placeholder = "",
  className = "",
  disabled = false,
  value = "",
  onChange = () => {},
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        id={label}
        type={type}
        className={`w-60 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-text"
        } ${className}`}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Textfield;
