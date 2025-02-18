import React from "react";

const Checkbox = ({ name, label, checked, onChange, disabled = false, className = "" }) => {
  return (
    <div>
      <label
        className={`flex items-center space-x-2 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      >
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="w-5 h-5 accent-blue-600 border-blue-300 rounded focus:ring-blue-400"
        />
        <span className="text-gray-800">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
