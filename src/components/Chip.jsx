import React from "react";
import { X } from "lucide-react";

const Chip = ({ label, onRemove, color = "blue", className = "" }) => {
  const chipColors = {
    blue: "bg-blue-100 text-blue-800 border-blue-300",
    purple: "bg-purple-200 text-purple-800 border-purple-300",
    red: "bg-red-100 text-red-800 border-red-300",
    green: "bg-green-100 text-green-800 border-green-300",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-300",
    gray: "bg-gray-100 text-gray-800 border-gray-300",
  };

  return (
    <div
      className={`flex items-center px-3 ms-4 py-1 m-1 border rounded-full text-sm font-medium ${chipColors[color]} ${className}`}
    >
      <span className="mr-2">{label}</span> 
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-auto p-1 flex rounded-full hover:bg-opacity-30" 
        >
          <X size={14} className="text-gray-600 hover:text-gray-900" />
        </button>
      )}
    </div>
  );
};

export default Chip;
