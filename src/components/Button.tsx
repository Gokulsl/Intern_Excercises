import React from "react";
import Loading from "./Loading";

type ButtonProps = {
  loading?: boolean;
  text?: string;
  type?: "button" | "submit" | "reset"; 
  variant?: "primary" | "secondary" | "outline" | "disabled"; 
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({
  loading = false,
  text,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
  children = "",
}:ButtonProps) => {

  const baseStyles = "rounded-lg font-medium transition duration-300 ease-in-out";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-base cursor-pointer",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 text-base cursor-pointer",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 px-4 py-2 text-base hover:text-white cursor-pointer",
    disabled: "bg-gray-200 text-gray-500 px-4 py-2 text-base cursor-not-allowed ",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mx-auto block ${baseStyles} ${variantStyles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {loading ? <Loading size="w-5 h-5" color="border-orange-200" /> : text || children}
    </button>
  );
};

export default Button;
