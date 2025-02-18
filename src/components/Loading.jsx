import React from "react";

const Loading = ({ message = "Loading...", size = "w-12 h-12", color = "border-blue-500" }) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className={`border-t-4 border-solid ${color} rounded-full animate-spin ${size}`} />
      <span className="text-gray-700">{message}</span>
    </div>
  );
};

export default Loading;
