import React from "react";

type TextfieldProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Textfield = ({
  label ="",
  type = "text",
  placeholder = "",
  className = "",
  disabled = false,
  value = "",
  onChange = () => {},
}: TextfieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="text-md font-medium text-slate-300  mt-3">
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
