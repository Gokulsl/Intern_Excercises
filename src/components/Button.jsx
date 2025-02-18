import React from "react";

const Button = ({ text, onClick, type = "button", variant = "primary", disabled = false, className = "" }) => {
  const baseStyles = "rounded-lg font-medium transition duration-300 ease-in-out";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-base cursor-pointer",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 text-base cursor-pointer",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 px-4 py-2 text-base hover:text-white cursor-pointer",
    danger: "bg-red-600 text-white hover:bg-red-700 cursor-pointer",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
